goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12877){
var map__12879 = p__12877;
var map__12879__$1 = cljs.core.__destructure_map(map__12879);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12879__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12879__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12879__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12879__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12880_12909 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12881_12910 = null;
var count__12882_12911 = (0);
var i__12883_12912 = (0);
while(true){
if((i__12883_12912 < count__12882_12911)){
var vec__12896_12913 = chunk__12881_12910.cljs$core$IIndexed$_nth$arity$2(null,i__12883_12912);
var k_12914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12896_12913,(0),null);
var cb_12915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12896_12913,(1),null);
try{var G__12900_12916 = cljs.core.deref(re_frame.trace.traces);
(cb_12915.cljs$core$IFn$_invoke$arity$1 ? cb_12915.cljs$core$IFn$_invoke$arity$1(G__12900_12916) : cb_12915.call(null,G__12900_12916));
}catch (e12899){var e_12917 = e12899;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12914,"while storing",cljs.core.deref(re_frame.trace.traces),e_12917], 0));
}

var G__12918 = seq__12880_12909;
var G__12919 = chunk__12881_12910;
var G__12920 = count__12882_12911;
var G__12921 = (i__12883_12912 + (1));
seq__12880_12909 = G__12918;
chunk__12881_12910 = G__12919;
count__12882_12911 = G__12920;
i__12883_12912 = G__12921;
continue;
} else {
var temp__5804__auto___12922 = cljs.core.seq(seq__12880_12909);
if(temp__5804__auto___12922){
var seq__12880_12923__$1 = temp__5804__auto___12922;
if(cljs.core.chunked_seq_QMARK_(seq__12880_12923__$1)){
var c__5525__auto___12924 = cljs.core.chunk_first(seq__12880_12923__$1);
var G__12925 = cljs.core.chunk_rest(seq__12880_12923__$1);
var G__12926 = c__5525__auto___12924;
var G__12927 = cljs.core.count(c__5525__auto___12924);
var G__12928 = (0);
seq__12880_12909 = G__12925;
chunk__12881_12910 = G__12926;
count__12882_12911 = G__12927;
i__12883_12912 = G__12928;
continue;
} else {
var vec__12901_12929 = cljs.core.first(seq__12880_12923__$1);
var k_12930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12901_12929,(0),null);
var cb_12931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12901_12929,(1),null);
try{var G__12905_12932 = cljs.core.deref(re_frame.trace.traces);
(cb_12931.cljs$core$IFn$_invoke$arity$1 ? cb_12931.cljs$core$IFn$_invoke$arity$1(G__12905_12932) : cb_12931.call(null,G__12905_12932));
}catch (e12904){var e_12933 = e12904;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12930,"while storing",cljs.core.deref(re_frame.trace.traces),e_12933], 0));
}

var G__12934 = cljs.core.next(seq__12880_12923__$1);
var G__12935 = null;
var G__12936 = (0);
var G__12937 = (0);
seq__12880_12909 = G__12934;
chunk__12881_12910 = G__12935;
count__12882_12911 = G__12936;
i__12883_12912 = G__12937;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
