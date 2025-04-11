(ns assignator.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [assignator.events]   ;; ensure events are registered
            [assignator.subs]     ;; ensure subscriptions are registered
            [assignator.views :as views]))

(defn mount-root []
  (rdom/render [views/main-panel]
               (.getElementById js/document "app")))

(defn init []
  (rf/dispatch-sync [:initialize])
  (mount-root))
