goog.provide('re_com.error_modal.theme');
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","modal","re-com.error-modal/modal",-509132541),(function (props){
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(50)], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","inner-wrapper","re-com.error-modal/inner-wrapper",983710789),(function (p__15690){
var map__15691 = p__15690;
var map__15691__$1 = cljs.core.__destructure_map(map__15691);
var props = map__15691__$1;
var map__15692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15691__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__15692__$1 = cljs.core.__destructure_map(map__15692);
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15692__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1($),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2.82843px 2.82843px 4px rgba(1,1,1,0.2)",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("font-size","medium","font-size/medium",-296024665).cljs$core$IFn$_invoke$arity$1($),new cljs.core.Keyword(null,"min-width","min-width",1926193728),re_com.util.px((474)),new cljs.core.Keyword(null,"min-height","min-height",398480837),re_com.util.px((300)),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),re_com.util.px((525))], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","top-bar","re-com.error-modal/top-bar",-1123436494),(function (p__15697){
var map__15699 = p__15697;
var map__15699__$1 = cljs.core.__destructure_map(map__15699);
var props = map__15699__$1;
var map__15700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15699__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__15700__$1 = cljs.core.__destructure_map(map__15700);
var map__15701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15700__$1,new cljs.core.Keyword(null,"error-modal","error-modal",214887023));
var map__15701__$1 = cljs.core.__destructure_map(map__15701);
var severity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,new cljs.core.Keyword(null,"severity","severity",175684886));
var map__15702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15700__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var map__15702__$1 = cljs.core.__destructure_map(map__15702);
var $ = map__15702__$1;
var md_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15702__$1,new cljs.core.Keyword(null,"md-2","md-2",-1635087790));
var sm_6 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15702__$1,new cljs.core.Keyword(null,"sm-6","sm-6",113033042));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(function (){var G__15703 = severity;
var G__15703__$1 = (((G__15703 instanceof cljs.core.Keyword))?G__15703.fqn:null);
switch (G__15703__$1) {
case "error":
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1($);

break;
case "warning":
return new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1($);

break;
default:
return "#1e1e1e";

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),"#FFFFFF",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),md_2,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),sm_6], null),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px((50))], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","title-wrapper","re-com.error-modal/title-wrapper",65087224),(function (p__15706){
var map__15707 = p__15706;
var map__15707__$1 = cljs.core.__destructure_map(map__15707);
var props = map__15707__$1;
var map__15708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15707__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__15708__$1 = cljs.core.__destructure_map(map__15708);
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15708__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(25),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1($),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","triangle","re-com.error-modal/triangle",1747759430),(function (p__15711){
var map__15712 = p__15711;
var map__15712__$1 = cljs.core.__destructure_map(map__15712);
var props = map__15712__$1;
var map__15713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15712__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__15713__$1 = cljs.core.__destructure_map(map__15713);
var map__15714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15713__$1,new cljs.core.Keyword(null,"error-modal","error-modal",214887023));
var map__15714__$1 = cljs.core.__destructure_map(map__15714);
var severity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15714__$1,new cljs.core.Keyword(null,"severity","severity",175684886));
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15713__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(function (){var G__15717 = severity;
var G__15717__$1 = (((G__15717 instanceof cljs.core.Keyword))?G__15717.fqn:null);
switch (G__15717__$1) {
case "error":
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1($);

break;
case "warning":
return new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1($);

break;
default:
return "#1e1e1e";

}
})()], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","code","re-com.error-modal/code",-2085263435),(function (p__15722){
var map__15723 = p__15722;
var map__15723__$1 = cljs.core.__destructure_map(map__15723);
var props = map__15723__$1;
var map__15724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15723__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__15724__$1 = cljs.core.__destructure_map(map__15724);
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15724__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("font-size","xx-small","font-size/xx-small",-1582096184),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"neutral","neutral",-1941956087).cljs$core$IFn$_invoke$arity$1($)], null)], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.error-modal","body","re-com.error-modal/body",1623923708),(function (p__15729){
var map__15732 = p__15729;
var map__15732__$1 = cljs.core.__destructure_map(map__15732);
var props = map__15732__$1;
var map__15733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15732__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__15733__$1 = cljs.core.__destructure_map(map__15733);
var map__15734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15733__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var map__15734__$1 = cljs.core.__destructure_map(map__15734);
var md_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15734__$1,new cljs.core.Keyword(null,"md-2","md-2",-1635087790));
var sm_4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15734__$1,new cljs.core.Keyword(null,"sm-4","sm-4",-1482733062));
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sm_4)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_2)].join('')], null)], null)], 0));
}));

//# sourceMappingURL=re_com.error_modal.theme.js.map
