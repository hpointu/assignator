goog.provide('re_com.nested_v_grid.util');
re_com.nested_v_grid.util.keypath__GT_grid_line_name = (function re_com$nested_v_grid$util$keypath__GT_grid_line_name(keypath){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(keypath)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rc-b"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rc"], null)),keypath));
});
re_com.nested_v_grid.util.path__GT_grid_line_name = (function re_com$nested_v_grid$util$path__GT_grid_line_name(path){
return ["rc",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(path))].join('');
});
re_com.nested_v_grid.util.branch_QMARK_ = cljs.core.sequential_QMARK_;
re_com.nested_v_grid.util.children = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.rest);
re_com.nested_v_grid.util.get_header_spec = cljs.core.first;
re_com.nested_v_grid.util.header_size = (function re_com$nested_v_grid$util$header_size(var_args){
var G__16349 = arguments.length;
switch (G__16349) {
case 1:
return re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$1 = (function (header){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"size","size",1098693007));
}));

(re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$2 = (function (header,default_size){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(header,new cljs.core.Keyword(null,"size","size",1098693007),default_size);
}));

(re_com.nested_v_grid.util.header_size.cljs$lang$maxFixedArity = 2);

re_com.nested_v_grid.util.remove_size = (function re_com$nested_v_grid$util$remove_size(m){
var G__16356 = m;
if(cljs.core.map_QMARK_(m)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16356,new cljs.core.Keyword(null,"size","size",1098693007));
} else {
return G__16356;
}
});
re_com.nested_v_grid.util.ancestry = (function re_com$nested_v_grid$util$ancestry(path){
var acc = cljs.core.PersistentVector.EMPTY;
var ancestor = path;
while(true){
if(cljs.core.empty_QMARK_(ancestor)){
return acc;
} else {
var G__16560 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,ancestor);
var G__16561 = cljs.core.pop(ancestor);
acc = G__16560;
ancestor = G__16561;
continue;
}
break;
}
});
re_com.nested_v_grid.util.intersection_QMARK_ = (function re_com$nested_v_grid$util$intersection_QMARK_(x1,size,window_start,window_end){
return (((x1 <= window_end)) && (((x1 + size) >= window_start)));
});
re_com.nested_v_grid.util.evict_BANG_ = (function re_com$nested_v_grid$util$evict_BANG_(cache,tree,keypath){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cache,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__16363_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,p1__16363_SHARP_);
})),re_com.nested_v_grid.util.ancestry(keypath)));
});
re_com.nested_v_grid.util.window = (function re_com$nested_v_grid$util$window(p__16381){
var map__16383 = p__16381;
var map__16383__$1 = cljs.core.__destructure_map(map__16383);
var default_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16383__$1,new cljs.core.Keyword(null,"default-size","default-size",-56245282),(20));
var lookup_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16383__$1,new cljs.core.Keyword(null,"lookup-fn","lookup-fn",-862560609));
var show_branch_cells_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16383__$1,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992));
var window_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16383__$1,new cljs.core.Keyword(null,"window-start","window-start",-1535255967));
var hide_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16383__$1,new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034));
var skip_tail_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16383__$1,new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),true);
var size_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16383__$1,new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY));
var header_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16383__$1,new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968));
var window_end = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16383__$1,new cljs.core.Keyword(null,"window-end","window-end",-1966160494),Number.POSITIVE_INFINITY);
var cache_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16383__$1,new cljs.core.Keyword(null,"cache-fn","cache-fn",5561939));
var sum_size = cljs.core.volatile_BANG_((0));
var depth = cljs.core.volatile_BANG_((0));
var paths = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var keypaths = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var sizes = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var sums = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var nodes_traversed = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var spans = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var cache_BANG_ = (function (){var or__5002__auto__ = cache_fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (function (p1__16368_SHARP_,p2__16369_SHARP_){
return cljs.core._vreset_BANG_(size_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(size_cache),p1__16368_SHARP_,p2__16369_SHARP_));
});
}
})();
var lookup_BANG_ = (function (){var or__5002__auto__ = lookup_fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (function (p1__16371_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(size_cache),p1__16371_SHARP_);
});
}
})();
var cached_sum_size = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(header_tree) : lookup_BANG_.call(null,header_tree));
var cached_depth = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"depth","depth",1768663640)) : lookup_BANG_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640)));
var walk = (function() { 
var re_com$nested_v_grid$util$window_$_walk__delegate = function (path,node,p__16392){
var map__16393 = p__16392;
var map__16393__$1 = cljs.core.__destructure_map(map__16393);
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16393__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.PersistentVector.EMPTY);
var collect_anyway_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16393__$1,new cljs.core.Keyword(null,"collect-anyway?","collect-anyway?",-1840373270));
var is_leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16393__$1,new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),true);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16393__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var last_child_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16393__$1,new cljs.core.Keyword(null,"last-child?","last-child?",772928468));
var hide_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16393__$1,new cljs.core.Keyword(null,"hide?","hide?",-988635670));
if(cljs.core.truth_(goog.DEBUG)){
nodes_traversed.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes_traversed.cljs$core$IDeref$_deref$arity$1(null),node));
} else {
}

var sum = cljs.core.deref(sum_size);
var passed_tail_QMARK_ = (function (){var and__5000__auto__ = skip_tail_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cached_sum_size;
if(cljs.core.truth_(and__5000__auto____$1)){
return (sum > window_end);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(passed_tail_QMARK_)){
return null;
} else {
if(cljs.core.truth_((re_com.nested_v_grid.util.branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_v_grid.util.branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_v_grid.util.branch_QMARK_.call(null,node)))){
var csize = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(node) : lookup_BANG_.call(null,node));
var skippable_QMARK_ = (function (){var and__5000__auto__ = csize;
if(cljs.core.truth_(and__5000__auto__)){
return (!(re_com.nested_v_grid.util.intersection_QMARK_(sum,csize,window_start,window_end)));
} else {
return and__5000__auto__;
}
})();
var children = re_com.nested_v_grid.util.children(node);
var children_QMARK_ = cljs.core.seq(children);
var cacheable_QMARK_ = ((cljs.core.not(csize)) && (children_QMARK_));
var show_after_QMARK_ = (function (){var or__5002__auto__ = show_branch_cells_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_v_grid.util.get_header_spec.call(null,node)),new cljs.core.Keyword(null,"show-after?","show-after?",1798005876));
}
})();
var add_after_QMARK_ = ((cljs.core.not(hide_QMARK_)) && (children_QMARK_));
var after_child = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(node)], null);
var children__$1 = cljs.core.vec(children);
var all_children = (function (){var G__16398 = children__$1;
if(cljs.core.truth_((function (){var and__5000__auto__ = show_after_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return add_after_QMARK_;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16398,after_child);
} else {
return G__16398;
}
})();
if(cljs.core.truth_(skippable_QMARK_)){
sum_size.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(sum_size.cljs$core$IDeref$_deref$arity$1(null) + csize));

return csize;
} else {
var is_leaf_QMARK___$1 = cljs.core.not(cljs.core.seq(all_children));
var own_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_v_grid.util.get_header_spec.call(null,node)));
var own_size = re_com$nested_v_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic(path,(re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_v_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_v_grid.util.get_header_spec.call(null,node)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"collect-anyway?","collect-anyway?",-1840373270),true,new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),is_leaf_QMARK___$1,new cljs.core.Keyword(null,"branch-path?","branch-path?",1002922587),(!(is_leaf_QMARK___$1)),new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keypath,(0)),new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"last-child?","last-child?",772928468),last_child_QMARK_], null)], 0));
var descend_tx = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,subtree){
return re_com$nested_v_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic(own_path,subtree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keypath","keypath",1965534711),(function (){var G__16399 = keypath;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(after_child,subtree)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16399,(i + (1)));
} else {
return G__16399;
}
})(),new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),true,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(after_child,subtree)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(cljs.core.count(children__$1) - ((add_after_QMARK_)?(1):null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-child?","last-child?",772928468),true], null):null)], 0))], 0));
}));
var child_sizes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(descend_tx,cljs.core.conj,all_children));
var total_size = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,own_size,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,child_sizes));
spans.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(spans.cljs$core$IDeref$_deref$arity$1(null),own_path,cljs.core._PLUS_,cljs.core.count(child_sizes)));

if(re_com.nested_v_grid.util.intersection_QMARK_(sum,total_size,window_start,window_end)){
} else {
paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(paths.cljs$core$IDeref$_deref$arity$1(null)));

sums.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(sums.cljs$core$IDeref$_deref$arity$1(null)));

sizes.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(sizes.cljs$core$IDeref$_deref$arity$1(null)));

keypaths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(keypaths.cljs$core$IDeref$_deref$arity$1(null)));
}

if(cacheable_QMARK_){
(cache_BANG_.cljs$core$IFn$_invoke$arity$2 ? cache_BANG_.cljs$core$IFn$_invoke$arity$2(node,total_size) : cache_BANG_.call(null,node,total_size));
} else {
}

return total_size;
}
} else {
var leaf_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node);
var show_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"show-above?","show-above?",1907272108));
var show_QMARK_ = (function (){var or__5002__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_above_QMARK_;
}
})();
var leaf_size = ((cljs.core.not((function (){var or__5002__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_above_QMARK_;
}
})()))?(0):re_com.nested_v_grid.util.header_size.cljs$core$IFn$_invoke$arity$2(node,default_size));
if(cljs.core.truth_((function (){var or__5002__auto__ = re_com.nested_v_grid.util.intersection_QMARK_(sum,leaf_size,window_start,window_end);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return collect_anyway_QMARK_;
}
})())){
var path_meta_16605 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(is_leaf_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leaf?","leaf?",445442965),true], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"branch?","branch?",-999323007),true], null)),(cljs.core.truth_(branch_end_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),true], null):null),(cljs.core.truth_(show_above_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-above?","show-above?",1907272108),true], null):null),(cljs.core.truth_(last_child_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-child?","last-child?",772928468),true], null):null)], 0));
var new_path_16606 = (function (){var G__16406 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(re_com.nested_v_grid.util.remove_size,leaf_path);
if(cljs.core.truth_((function (){var or__5002__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_above_QMARK_;
}
})())){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(G__16406,cljs.core.merge,path_meta_16605);
} else {
return G__16406;
}
})();
depth.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var x__5087__auto__ = (function (){var x__5087__auto__ = depth.cljs$core$IDeref$_deref$arity$1(null);
var y__5088__auto__ = cached_depth;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var y__5088__auto__ = cljs.core.count(new_path_16606);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());

paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths.cljs$core$IDeref$_deref$arity$1(null),new_path_16606));

sums.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sums.cljs$core$IDeref$_deref$arity$1(null),sum));

sizes.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sizes.cljs$core$IDeref$_deref$arity$1(null),leaf_size));

keypaths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keypaths.cljs$core$IDeref$_deref$arity$1(null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(keypath,cljs.core.merge,path_meta_16605)));
} else {
}

sum_size.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(sum_size.cljs$core$IDeref$_deref$arity$1(null) + leaf_size));

return leaf_size;

}
}
};
var re_com$nested_v_grid$util$window_$_walk = function (path,node,var_args){
var p__16392 = null;
if (arguments.length > 2) {
var G__16619__i = 0, G__16619__a = new Array(arguments.length -  2);
while (G__16619__i < G__16619__a.length) {G__16619__a[G__16619__i] = arguments[G__16619__i + 2]; ++G__16619__i;}
  p__16392 = new cljs.core.IndexedSeq(G__16619__a,0,null);
} 
return re_com$nested_v_grid$util$window_$_walk__delegate.call(this,path,node,p__16392);};
re_com$nested_v_grid$util$window_$_walk.cljs$lang$maxFixedArity = 2;
re_com$nested_v_grid$util$window_$_walk.cljs$lang$applyTo = (function (arglist__16621){
var path = cljs.core.first(arglist__16621);
arglist__16621 = cljs.core.next(arglist__16621);
var node = cljs.core.first(arglist__16621);
var p__16392 = cljs.core.rest(arglist__16621);
return re_com$nested_v_grid$util$window_$_walk__delegate(path,node,p__16392);
});
re_com$nested_v_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic = re_com$nested_v_grid$util$window_$_walk__delegate;
return re_com$nested_v_grid$util$window_$_walk;
})()
;
walk(cljs.core.PersistentVector.EMPTY,header_tree,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide?","hide?",-988635670),hide_root_QMARK_], null));

var G__16413_16626 = new cljs.core.Keyword(null,"depth","depth",1768663640);
var G__16414_16627 = cljs.core.deref(depth);
(cache_BANG_.cljs$core$IFn$_invoke$arity$2 ? cache_BANG_.cljs$core$IFn$_invoke$arity$2(G__16413_16626,G__16414_16627) : cache_BANG_.call(null,G__16413_16626,G__16414_16627));

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"window-start","window-start",-1535255967),new cljs.core.Keyword(null,"sizes","sizes",-273528126),new cljs.core.Keyword(null,"spans","spans",-1512938203),new cljs.core.Keyword(null,"keypaths","keypaths",1637512847),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),new cljs.core.Keyword(null,"sum-size","sum-size",1340005431),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"header-paths","header-paths",1334163001),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"nodes-traversed","nodes-traversed",683030719)],[window_start,cljs.core.deref(sizes),cljs.core.deref(spans),cljs.core.deref(keypaths),window_end,(function (){var or__5002__auto__ = cached_sum_size;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(sum_size);
}
})(),cljs.core.deref(depth),cljs.core.deref(paths),cljs.core.deref(sums),cljs.core.deref(nodes_traversed)]);
});
re_com.nested_v_grid.util.grid_tokens = (function re_com$nested_v_grid$util$grid_tokens(p__16418){
var map__16420 = p__16418;
var map__16420__$1 = cljs.core.__destructure_map(map__16420);
var header_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16420__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var keypaths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16420__$1,new cljs.core.Keyword(null,"keypaths","keypaths",1637512847));
var sizes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16420__$1,new cljs.core.Keyword(null,"sizes","sizes",-273528126));
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16420__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var sum_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16420__$1,new cljs.core.Keyword(null,"sum-size","sum-size",1340005431));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[start]"], null),(function (){var G__16437 = header_paths;
var vec__16441 = G__16437;
var seq__16442 = cljs.core.seq(vec__16441);
var first__16443 = cljs.core.first(seq__16442);
var seq__16442__$1 = cljs.core.next(seq__16442);
var path = first__16443;
var rest_paths = seq__16442__$1;
var G__16438 = keypaths;
var vec__16444 = G__16438;
var seq__16445 = cljs.core.seq(vec__16444);
var first__16446 = cljs.core.first(seq__16445);
var seq__16445__$1 = cljs.core.next(seq__16445);
var keypath = first__16446;
var rest_keypaths = seq__16445__$1;
var G__16439 = sizes;
var vec__16447 = G__16439;
var seq__16448 = cljs.core.seq(vec__16447);
var first__16449 = cljs.core.first(seq__16448);
var seq__16448__$1 = cljs.core.next(seq__16448);
var size = first__16449;
var rest_sizes = seq__16448__$1;
var G__16440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(positions,sum_size);
var vec__16450 = G__16440;
var seq__16451 = cljs.core.seq(vec__16450);
var first__16452 = cljs.core.first(seq__16451);
var seq__16451__$1 = cljs.core.next(seq__16451);
var position = first__16452;
var vec__16453 = seq__16451__$1;
var next_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16453,(0),null);
var rest_positions = vec__16453;
var result = cljs.core.PersistentVector.EMPTY;
var G__16437__$1 = G__16437;
var G__16438__$1 = G__16438;
var G__16439__$1 = G__16439;
var G__16440__$1 = G__16440;
var result__$1 = result;
while(true){
var vec__16481 = G__16437__$1;
var seq__16482 = cljs.core.seq(vec__16481);
var first__16483 = cljs.core.first(seq__16482);
var seq__16482__$1 = cljs.core.next(seq__16482);
var path__$1 = first__16483;
var rest_paths__$1 = seq__16482__$1;
var vec__16484 = G__16438__$1;
var seq__16485 = cljs.core.seq(vec__16484);
var first__16486 = cljs.core.first(seq__16485);
var seq__16485__$1 = cljs.core.next(seq__16485);
var keypath__$1 = first__16486;
var rest_keypaths__$1 = seq__16485__$1;
var vec__16487 = G__16439__$1;
var seq__16488 = cljs.core.seq(vec__16487);
var first__16489 = cljs.core.first(seq__16488);
var seq__16488__$1 = cljs.core.next(seq__16488);
var size__$1 = first__16489;
var rest_sizes__$1 = seq__16488__$1;
var vec__16490 = G__16440__$1;
var seq__16491 = cljs.core.seq(vec__16490);
var first__16492 = cljs.core.first(seq__16491);
var seq__16491__$1 = cljs.core.next(seq__16491);
var position__$1 = first__16492;
var vec__16493 = seq__16491__$1;
var next_position__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(0),null);
var rest_positions__$1 = vec__16493;
var result__$2 = result__$1;
var map__16503 = cljs.core.peek(path__$1);
var map__16503__$1 = cljs.core.__destructure_map(map__16503);
var show_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16503__$1,new cljs.core.Keyword(null,"show-above?","show-above?",1907272108),new cljs.core.Keyword(null,"leaf?","leaf?",445442965).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(path__$1)));
var spacer_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_position__$1,(position__$1 + size__$1));
var next_result = (function (){var G__16505 = result__$2;
var G__16505__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16505,keypath__$1)
;
var G__16505__$2 = (cljs.core.truth_(show_above_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16505__$1,(function (){var or__5002__auto__ = size__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})()):G__16505__$1);
if(spacer_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__16505__$2,"[spacer]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((next_position__$1 - size__$1) - position__$1)], 0));
} else {
return G__16505__$2;
}
})();
if(cljs.core.empty_QMARK_(rest_sizes__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_result,"[end]");
} else {
var G__16638 = rest_paths__$1;
var G__16639 = rest_keypaths__$1;
var G__16640 = rest_sizes__$1;
var G__16641 = rest_positions__$1;
var G__16642 = next_result;
G__16437__$1 = G__16638;
G__16438__$1 = G__16639;
G__16439__$1 = G__16640;
G__16440__$1 = G__16641;
result__$1 = G__16642;
continue;
}
break;
}
})());
});
re_com.nested_v_grid.util.grid_template = (function re_com$nested_v_grid$util$grid_template(header_traversal){
return clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16510_SHARP_){
if(typeof p1__16510_SHARP_ === 'string'){
return p1__16510_SHARP_;
} else {
if(cljs.core.vector_QMARK_(p1__16510_SHARP_)){
return ["[",re_com.nested_v_grid.util.keypath__GT_grid_line_name(p1__16510_SHARP_),"]"].join('');
} else {
if(typeof p1__16510_SHARP_ === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16510_SHARP_),"px"].join('');
} else {
return null;
}
}
}
}),re_com.nested_v_grid.util.grid_tokens(header_traversal))),"] ["," ");
});
re_com.nested_v_grid.util.grid_cross_template = (function re_com$nested_v_grid$util$grid_cross_template(var_args){
var G__16521 = arguments.length;
switch (G__16521) {
case 1:
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___16666 = arguments.length;
var i__5727__auto___16667 = (0);
while(true){
if((i__5727__auto___16667 < len__5726__auto___16666)){
args_arr__5751__auto__.push((arguments[i__5727__auto___16667]));

var G__16669 = (i__5727__auto___16667 + (1));
i__5727__auto___16667 = G__16669;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,more_tokens){
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,tokens,more_tokens));
}));

/** @this {Function} */
(re_com.nested_v_grid.util.grid_cross_template.cljs$lang$applyTo = (function (seq16519){
var G__16520 = cljs.core.first(seq16519);
var seq16519__$1 = cljs.core.next(seq16519);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16520,seq16519__$1);
}));

(re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1 = (function (tokens){
var rf = (function (s,group){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," ",((typeof cljs.core.first(group) === 'number')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.util.px,group)):((typeof cljs.core.first(group) === 'string')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",group):null))].join('');
});
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,"",cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,cljs.core.string_QMARK_),tokens)));
}));

(re_com.nested_v_grid.util.grid_cross_template.cljs$lang$maxFixedArity = (1));

re_com.nested_v_grid.util.upgrade_header_tree_schema = (function re_com$nested_v_grid$util$upgrade_header_tree_schema(var_args){
var G__16547 = arguments.length;
switch (G__16547) {
case 1:
return re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),tree);
}));

(re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2 = (function (acc,tree){
while(true){
if((!(cljs.core.sequential_QMARK_(tree)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree], null);
} else {
var vec__16549 = tree;
var seq__16550 = cljs.core.seq(vec__16549);
var first__16551 = cljs.core.first(seq__16550);
var seq__16550__$1 = cljs.core.next(seq__16550);
var l = first__16551;
var vec__16552 = seq__16550__$1;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16552,(0),null);
var remainder = vec__16552;
if(cljs.core.not(l)){
return acc;
} else {
if(cljs.core.vector_QMARK_(l)){
var G__16683 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,l));
var G__16684 = cljs.core.vec(remainder);
acc = G__16683;
tree = G__16684;
continue;
} else {
if((!(cljs.core.vector_QMARK_(r)))){
var G__16686 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null));
var G__16687 = cljs.core.vec(remainder);
acc = G__16686;
tree = G__16687;
continue;
} else {
var children = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,remainder);
var new_remainder = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(children),remainder));
var G__16689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.nested_v_grid.util.upgrade_header_tree_schema,cljs.core.PersistentVector.EMPTY),children)));
var G__16690 = new_remainder;
acc = G__16689;
tree = G__16690;
continue;

}
}
}
}
break;
}
}));

(re_com.nested_v_grid.util.upgrade_header_tree_schema.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=re_com.nested_v_grid.util.js.map
