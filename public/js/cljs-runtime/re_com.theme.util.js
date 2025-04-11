goog.provide('re_com.theme.util');
re_com.theme.util.merge_class = (function re_com$theme$util$merge_class(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13585 = arguments.length;
var i__5727__auto___13586 = (0);
while(true){
if((i__5727__auto___13586 < len__5726__auto___13585)){
args__5732__auto__.push((arguments[i__5727__auto___13586]));

var G__13587 = (i__5727__auto___13586 + (1));
i__5727__auto___13586 = G__13587;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.theme.util.merge_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.theme.util.merge_class.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.flatten(classes)));
}));

(re_com.theme.util.merge_class.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.theme.util.merge_class.cljs$lang$applyTo = (function (seq13580){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13580));
}));

re_com.theme.util.merge_style = (function re_com$theme$util$merge_style(props,style){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,style);
});
re_com.theme.util.__GT_v = (function re_com$theme$util$__GT_v(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
if((x == null)){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
}
});
re_com.theme.util.merge_props_rf = (function re_com$theme$util$merge_props_rf(acc,p__13581){
var map__13582 = p__13581;
var map__13582__$1 = cljs.core.__destructure_map(map__13582);
var m = map__13582__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(function (){var G__13583 = (((!(typeof m === 'string')))?m:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null)], null));
var G__13583__$1 = ((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"class","class",-2030961996)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13583,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_com.theme.util.__GT_v(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(acc)),re_com.theme.util.__GT_v(class$))):G__13583);
var G__13583__$2 = ((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"attr","attr",-604132353)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13583__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(acc),attr], 0))):G__13583__$1);
if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"style","style",-496642736))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13583__$2,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(acc),style], 0)));
} else {
return G__13583__$2;
}
})()], 0));
});
re_com.theme.util.merge_props = (function re_com$theme$util$merge_props(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13588 = arguments.length;
var i__5727__auto___13589 = (0);
while(true){
if((i__5727__auto___13589 < len__5726__auto___13588)){
args__5732__auto__.push((arguments[i__5727__auto___13589]));

var G__13590 = (i__5727__auto___13589 + (1));
i__5727__auto___13589 = G__13590;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (ms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_com.theme.util.merge_props_rf,cljs.core.PersistentArrayMap.EMPTY,ms);
}));

(re_com.theme.util.merge_props.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.theme.util.merge_props.cljs$lang$applyTo = (function (seq13584){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13584));
}));


//# sourceMappingURL=re_com.theme.util.js.map
