(ns assignator.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :people
  (fn [db _]
    (:people db)))

(rf/reg-sub
  :tasks
  (fn [db _]
    (:tasks db)))

(rf/reg-sub
  :assignments
  (fn [db _]
    (:assignments db)))
