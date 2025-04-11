(ns assignator.events
  (:require [re-frame.core :as rf]
            [clojure.string :as str]))

;; Initialize the application state.
(rf/reg-event-db
  :initialize
  (fn [_ _]
    {:people ""       ; multiline text representing people (one per line)
     :tasks ""        ; multiline text representing tasks (one per line)
     :assignments []}))

(rf/reg-event-db
  :update-people
  (fn [db [_ text]]
    (assoc db :people text)))

(rf/reg-event-db
  :update-tasks
  (fn [db [_ text]]
    (assoc db :tasks text)))

(defn assign-tasks [people tasks]
  (let [persons (vec people)
        tasks-v (vec tasks)]
    (loop [remaining-tasks tasks-v
           assignments []]
      (if (empty? remaining-tasks)
        assignments
        (let [round-capacity (count persons)
              available (if (< (count remaining-tasks) round-capacity)
                          (take (count remaining-tasks) (shuffle persons))
                          (shuffle persons))
              n (min (count available) (count remaining-tasks))
              round-assignments (mapv (fn [p t]
                                        {:person p :task t})
                                      (take n available)
                                      (take n remaining-tasks))]
          (recur (drop n remaining-tasks) (into assignments round-assignments)))))))

(rf/reg-event-db
  :assign-randomly
  (fn [db _]
    (let [people (->> db
                     :people
                     str/split-lines
                     (remove str/blank?))
          tasks  (->> db
                     :tasks
                     str/split-lines
                     (remove str/blank?))]
      (assoc db :assignments (assign-tasks people tasks)))))  

