(ns assignator.views
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [re-com.core :as rc]))

;; A helper component for an editable textarea.
(defn editable-textarea [placeholder value on-change]
  [:textarea 
   {:placeholder placeholder
    :rows 10
    :cols 30
    :value value
    :on-change #(on-change (.. % -target -value))
    :style {:width "100%"
            :font-size "14px"
            :padding "5px"}}])

;; Main panel component.
(defn main-panel []
  (let [people (rf/subscribe [:people])
        tasks (rf/subscribe [:tasks])
        assignments (rf/subscribe [:assignments])]
    (fn []
      [rc/v-box
       :gap "20px"
       :children [[rc/title :level :level1 :label "Task Assignment"]
                  [rc/h-box :gap "40px"
                   :children [[rc/v-box
                               :gap "10px"
                               :children [[rc/title :level :level2 :label "People"]
                                          [editable-textarea "Enter one person per line"
                                           @people
                                           #(rf/dispatch [:update-people %])]]]
                              [rc/v-box
                               :gap "10px"
                               :children [[rc/title :level :level2 :label "Tasks"]
                                          [editable-textarea "Enter one task per line"
                                           @tasks
                                           #(rf/dispatch [:update-tasks %])]]]]]
                  [rc/button :label "Assign Randomly"
                   :on-click #(rf/dispatch [:assign-randomly])]
                  (when (seq @assignments)
                    [rc/v-box
                     :gap "5px"
                     :children (cons [rc/title :level :level2 :label "Assignments"]
                                     (for [{:keys [person task]} @assignments]
                                       ^{:key (str person "-" task)}
                                       [rc/label :label (str person " → " task)]))])]])))

