goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14615){
var map__14616 = p__14615;
var map__14616__$1 = cljs.core.__destructure_map(map__14616);
var runtime = map__14616__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14616__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14859 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14859)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14620 = runtime;
var G__14621 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14859);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14620,G__14621) : shadow.remote.runtime.shared.process.call(null,G__14620,G__14621));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14625,res){
var map__14627 = p__14625;
var map__14627__$1 = cljs.core.__destructure_map(map__14627);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14627__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14627__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14632 = res;
var G__14632__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14632,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14632);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14632__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14632__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14635 = arguments.length;
switch (G__14635) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14636,msg,handlers,timeout_after_ms){
var map__14639 = p__14636;
var map__14639__$1 = cljs.core.__destructure_map(map__14639);
var runtime = map__14639__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14639__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14871 = arguments.length;
var i__5727__auto___14872 = (0);
while(true){
if((i__5727__auto___14872 < len__5726__auto___14871)){
args__5732__auto__.push((arguments[i__5727__auto___14872]));

var G__14873 = (i__5727__auto___14872 + (1));
i__5727__auto___14872 = G__14873;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14655,ev,args){
var map__14658 = p__14655;
var map__14658__$1 = cljs.core.__destructure_map(map__14658);
var runtime = map__14658__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14660 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14663 = null;
var count__14664 = (0);
var i__14665 = (0);
while(true){
if((i__14665 < count__14664)){
var ext = chunk__14663.cljs$core$IIndexed$_nth$arity$2(null,i__14665);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14878 = seq__14660;
var G__14879 = chunk__14663;
var G__14880 = count__14664;
var G__14881 = (i__14665 + (1));
seq__14660 = G__14878;
chunk__14663 = G__14879;
count__14664 = G__14880;
i__14665 = G__14881;
continue;
} else {
var G__14882 = seq__14660;
var G__14883 = chunk__14663;
var G__14884 = count__14664;
var G__14885 = (i__14665 + (1));
seq__14660 = G__14882;
chunk__14663 = G__14883;
count__14664 = G__14884;
i__14665 = G__14885;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14660);
if(temp__5804__auto__){
var seq__14660__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14660__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14660__$1);
var G__14886 = cljs.core.chunk_rest(seq__14660__$1);
var G__14887 = c__5525__auto__;
var G__14888 = cljs.core.count(c__5525__auto__);
var G__14889 = (0);
seq__14660 = G__14886;
chunk__14663 = G__14887;
count__14664 = G__14888;
i__14665 = G__14889;
continue;
} else {
var ext = cljs.core.first(seq__14660__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14890 = cljs.core.next(seq__14660__$1);
var G__14891 = null;
var G__14892 = (0);
var G__14893 = (0);
seq__14660 = G__14890;
chunk__14663 = G__14891;
count__14664 = G__14892;
i__14665 = G__14893;
continue;
} else {
var G__14894 = cljs.core.next(seq__14660__$1);
var G__14895 = null;
var G__14896 = (0);
var G__14897 = (0);
seq__14660 = G__14894;
chunk__14663 = G__14895;
count__14664 = G__14896;
i__14665 = G__14897;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14647){
var G__14648 = cljs.core.first(seq14647);
var seq14647__$1 = cljs.core.next(seq14647);
var G__14649 = cljs.core.first(seq14647__$1);
var seq14647__$2 = cljs.core.next(seq14647__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14648,G__14649,seq14647__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14694,p__14695){
var map__14696 = p__14694;
var map__14696__$1 = cljs.core.__destructure_map(map__14696);
var runtime = map__14696__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14696__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14697 = p__14695;
var map__14697__$1 = cljs.core.__destructure_map(map__14697);
var msg = map__14697__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14697__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14701 = cljs.core.deref(state_ref);
var map__14701__$1 = cljs.core.__destructure_map(map__14701);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14701__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14701__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14710,msg){
var map__14711 = p__14710;
var map__14711__$1 = cljs.core.__destructure_map(map__14711);
var runtime = map__14711__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14711__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14721,key,p__14722){
var map__14724 = p__14721;
var map__14724__$1 = cljs.core.__destructure_map(map__14724);
var state = map__14724__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14724__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14725 = p__14722;
var map__14725__$1 = cljs.core.__destructure_map(map__14725);
var spec = map__14725__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14725__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14725__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14741,key,spec){
var map__14742 = p__14741;
var map__14742__$1 = cljs.core.__destructure_map(map__14742);
var runtime = map__14742__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14742__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14913 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14913 == null)){
} else {
var on_welcome_14918 = temp__5808__auto___14913;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14918.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14918.cljs$core$IFn$_invoke$arity$0() : on_welcome_14918.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14749_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14749_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14751_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14751_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14752_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14752_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14753_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14753_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14754_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14754_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14765,key){
var map__14768 = p__14765;
var map__14768__$1 = cljs.core.__destructure_map(map__14768);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14768__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14773,msg){
var map__14776 = p__14773;
var map__14776__$1 = cljs.core.__destructure_map(map__14776);
var runtime = map__14776__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14776__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14809,p__14810){
var map__14811 = p__14809;
var map__14811__$1 = cljs.core.__destructure_map(map__14811);
var runtime = map__14811__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14811__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14812 = p__14810;
var map__14812__$1 = cljs.core.__destructure_map(map__14812);
var msg = map__14812__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14812__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14812__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14820 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14822 = null;
var count__14823 = (0);
var i__14824 = (0);
while(true){
if((i__14824 < count__14823)){
var map__14837 = chunk__14822.cljs$core$IIndexed$_nth$arity$2(null,i__14824);
var map__14837__$1 = cljs.core.__destructure_map(map__14837);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14837__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14956 = seq__14820;
var G__14957 = chunk__14822;
var G__14958 = count__14823;
var G__14959 = (i__14824 + (1));
seq__14820 = G__14956;
chunk__14822 = G__14957;
count__14823 = G__14958;
i__14824 = G__14959;
continue;
} else {
var G__14960 = seq__14820;
var G__14961 = chunk__14822;
var G__14962 = count__14823;
var G__14963 = (i__14824 + (1));
seq__14820 = G__14960;
chunk__14822 = G__14961;
count__14823 = G__14962;
i__14824 = G__14963;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14820);
if(temp__5804__auto__){
var seq__14820__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14820__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14820__$1);
var G__14964 = cljs.core.chunk_rest(seq__14820__$1);
var G__14965 = c__5525__auto__;
var G__14966 = cljs.core.count(c__5525__auto__);
var G__14967 = (0);
seq__14820 = G__14964;
chunk__14822 = G__14965;
count__14823 = G__14966;
i__14824 = G__14967;
continue;
} else {
var map__14842 = cljs.core.first(seq__14820__$1);
var map__14842__$1 = cljs.core.__destructure_map(map__14842);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14842__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14969 = cljs.core.next(seq__14820__$1);
var G__14970 = null;
var G__14971 = (0);
var G__14972 = (0);
seq__14820 = G__14969;
chunk__14822 = G__14970;
count__14823 = G__14971;
i__14824 = G__14972;
continue;
} else {
var G__14973 = cljs.core.next(seq__14820__$1);
var G__14974 = null;
var G__14975 = (0);
var G__14976 = (0);
seq__14820 = G__14973;
chunk__14822 = G__14974;
count__14823 = G__14975;
i__14824 = G__14976;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
