goog.provide('re_com.nested_v_grid.theme');
re_com.nested_v_grid.theme.border_light = "thin solid #ccc";
re_com.nested_v_grid.theme.border_dark = "thin solid #aaa";
re_com.nested_v_grid.theme.style = (function re_com$nested_v_grid$theme$style(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16417 = arguments.length;
var i__5727__auto___16419 = (0);
while(true){
if((i__5727__auto___16419 < len__5726__auto___16417)){
args__5732__auto__.push((arguments[i__5727__auto___16419]));

var G__16421 = (i__5727__auto___16419 + (1));
i__5727__auto___16419 = G__16421;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return re_com.nested_v_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(re_com.nested_v_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic = (function (props,ms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,props,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,ms);
}));

(re_com.nested_v_grid.theme.style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.nested_v_grid.theme.style.cljs$lang$applyTo = (function (seq16400){
var G__16401 = cljs.core.first(seq16400);
var seq16400__$1 = cljs.core.next(seq16400);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16401,seq16400__$1);
}));

re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-v-grid","wrapper","re-com.nested-v-grid/wrapper",-616776584),(function (props){
return re_com.nested_v_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 auto",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600)], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-v-grid","cell-grid","re-com.nested-v-grid/cell-grid",1481952793),(function (props){
return re_com.nested_v_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(2),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(2)], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-v-grid","column-header-grid","re-com.nested-v-grid/column-header-grid",2008839869),(function (props){
return re_com.nested_v_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-v-grid","row-header-grid","re-com.nested-v-grid/row-header-grid",254331951),(function (props){
return re_com.nested_v_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-v-grid","corner-header-grid","re-com.nested-v-grid/corner-header-grid",35380063),(function (props){
return re_com.nested_v_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(1),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(1),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], 0));
}));
re_com.nested_v_grid.theme.header_main = (function (){var map__16407 = re_com.theme.default$.golden_section_50;
var map__16407__$1 = cljs.core.__destructure_map(map__16407);
var sm_3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16407__$1,new cljs.core.Keyword(null,"sm-3","sm-3",1305919781));
var sm_4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16407__$1,new cljs.core.Keyword(null,"sm-4","sm-4",-1482733062));
var map__16408 = re_com.theme.default$.colors;
var map__16408__$1 = cljs.core.__destructure_map(map__16408);
var light_background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16408__$1,new cljs.core.Keyword(null,"light-background","light-background",1498163900));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053)],[new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738),"#666",new cljs.core.Keyword(null,"nowrap","nowrap",457264988),(13),new cljs.core.Keyword(null,"hidden","hidden",-312506092),light_background,sm_4,sm_3,sm_4]);
})();
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),(function (p__16410){
var map__16412 = p__16410;
var map__16412__$1 = cljs.core.__destructure_map(map__16412);
var props = map__16412__$1;
var edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16412__$1,new cljs.core.Keyword(null,"edge","edge",919909153));
return re_com.nested_v_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961)) : edge.call(null,new cljs.core.Keyword(null,"top","top",-1856271961))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),re_com.nested_v_grid.theme.border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833)) : edge.call(null,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),re_com.nested_v_grid.theme.border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)) : edge.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),re_com.nested_v_grid.theme.border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937)) : edge.call(null,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),re_com.nested_v_grid.theme.border_light], null):null)], 0));
}));

//# sourceMappingURL=re_com.nested_v_grid.theme.js.map
