goog.provide('assignator.core');
assignator.core.mount_root = (function assignator$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [assignator.views.main_panel], null),document.getElementById("app"));
});
assignator.core.init = (function assignator$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return assignator.core.mount_root();
});

//# sourceMappingURL=assignator.core.js.map
