goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13214 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13215 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13215);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13306 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13306)){
var new_db_13307 = temp__5804__auto___13306;
var fexpr__13218_13308 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13218_13308.cljs$core$IFn$_invoke$arity$1 ? fexpr__13218_13308.cljs$core$IFn$_invoke$arity$1(new_db_13307) : fexpr__13218_13308.call(null,new_db_13307));
} else {
}

var seq__13220 = cljs.core.seq(effects_without_db);
var chunk__13221 = null;
var count__13222 = (0);
var i__13223 = (0);
while(true){
if((i__13223 < count__13222)){
var vec__13231 = chunk__13221.cljs$core$IIndexed$_nth$arity$2(null,i__13223);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13231,(1),null);
var temp__5802__auto___13309 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13309)){
var effect_fn_13310 = temp__5802__auto___13309;
(effect_fn_13310.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13310.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13310.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13311 = seq__13220;
var G__13312 = chunk__13221;
var G__13313 = count__13222;
var G__13314 = (i__13223 + (1));
seq__13220 = G__13311;
chunk__13221 = G__13312;
count__13222 = G__13313;
i__13223 = G__13314;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13220);
if(temp__5804__auto__){
var seq__13220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13220__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13220__$1);
var G__13315 = cljs.core.chunk_rest(seq__13220__$1);
var G__13316 = c__5525__auto__;
var G__13317 = cljs.core.count(c__5525__auto__);
var G__13318 = (0);
seq__13220 = G__13315;
chunk__13221 = G__13316;
count__13222 = G__13317;
i__13223 = G__13318;
continue;
} else {
var vec__13235 = cljs.core.first(seq__13220__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13235,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13235,(1),null);
var temp__5802__auto___13319 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13319)){
var effect_fn_13320 = temp__5802__auto___13319;
(effect_fn_13320.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13320.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13320.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13321 = cljs.core.next(seq__13220__$1);
var G__13322 = null;
var G__13323 = (0);
var G__13324 = (0);
seq__13220 = G__13321;
chunk__13221 = G__13322;
count__13222 = G__13323;
i__13223 = G__13324;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12854__auto___13325 = re_frame.interop.now();
var duration__12855__auto___13326 = (end__12854__auto___13325 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12855__auto___13326,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12854__auto___13325);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13214);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13327 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13327)){
var new_db_13328 = temp__5804__auto___13327;
var fexpr__13240_13329 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13240_13329.cljs$core$IFn$_invoke$arity$1 ? fexpr__13240_13329.cljs$core$IFn$_invoke$arity$1(new_db_13328) : fexpr__13240_13329.call(null,new_db_13328));
} else {
}

var seq__13241 = cljs.core.seq(effects_without_db);
var chunk__13242 = null;
var count__13243 = (0);
var i__13244 = (0);
while(true){
if((i__13244 < count__13243)){
var vec__13252 = chunk__13242.cljs$core$IIndexed$_nth$arity$2(null,i__13244);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13252,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13252,(1),null);
var temp__5802__auto___13330 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13330)){
var effect_fn_13331 = temp__5802__auto___13330;
(effect_fn_13331.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13331.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13331.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13332 = seq__13241;
var G__13333 = chunk__13242;
var G__13334 = count__13243;
var G__13335 = (i__13244 + (1));
seq__13241 = G__13332;
chunk__13242 = G__13333;
count__13243 = G__13334;
i__13244 = G__13335;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13241);
if(temp__5804__auto__){
var seq__13241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13241__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13241__$1);
var G__13336 = cljs.core.chunk_rest(seq__13241__$1);
var G__13337 = c__5525__auto__;
var G__13338 = cljs.core.count(c__5525__auto__);
var G__13339 = (0);
seq__13241 = G__13336;
chunk__13242 = G__13337;
count__13243 = G__13338;
i__13244 = G__13339;
continue;
} else {
var vec__13263 = cljs.core.first(seq__13241__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13263,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13263,(1),null);
var temp__5802__auto___13340 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13340)){
var effect_fn_13341 = temp__5802__auto___13340;
(effect_fn_13341.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13341.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13341.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13342 = cljs.core.next(seq__13241__$1);
var G__13343 = null;
var G__13344 = (0);
var G__13345 = (0);
seq__13241 = G__13342;
chunk__13242 = G__13343;
count__13243 = G__13344;
i__13244 = G__13345;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13272){
var map__13273 = p__13272;
var map__13273__$1 = cljs.core.__destructure_map(map__13273);
var effect = map__13273__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13273__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13273__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__13276 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13277 = null;
var count__13278 = (0);
var i__13279 = (0);
while(true){
if((i__13279 < count__13278)){
var effect = chunk__13277.cljs$core$IIndexed$_nth$arity$2(null,i__13279);
re_frame.fx.dispatch_later(effect);


var G__13346 = seq__13276;
var G__13347 = chunk__13277;
var G__13348 = count__13278;
var G__13349 = (i__13279 + (1));
seq__13276 = G__13346;
chunk__13277 = G__13347;
count__13278 = G__13348;
i__13279 = G__13349;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13276);
if(temp__5804__auto__){
var seq__13276__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13276__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13276__$1);
var G__13350 = cljs.core.chunk_rest(seq__13276__$1);
var G__13351 = c__5525__auto__;
var G__13352 = cljs.core.count(c__5525__auto__);
var G__13353 = (0);
seq__13276 = G__13350;
chunk__13277 = G__13351;
count__13278 = G__13352;
i__13279 = G__13353;
continue;
} else {
var effect = cljs.core.first(seq__13276__$1);
re_frame.fx.dispatch_later(effect);


var G__13354 = cljs.core.next(seq__13276__$1);
var G__13355 = null;
var G__13356 = (0);
var G__13357 = (0);
seq__13276 = G__13354;
chunk__13277 = G__13355;
count__13278 = G__13356;
i__13279 = G__13357;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__13280 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13281 = null;
var count__13282 = (0);
var i__13283 = (0);
while(true){
if((i__13283 < count__13282)){
var vec__13290 = chunk__13281.cljs$core$IIndexed$_nth$arity$2(null,i__13283);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13290,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13290,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13358 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13358)){
var effect_fn_13359 = temp__5802__auto___13358;
(effect_fn_13359.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13359.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13359.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13360 = seq__13280;
var G__13361 = chunk__13281;
var G__13362 = count__13282;
var G__13363 = (i__13283 + (1));
seq__13280 = G__13360;
chunk__13281 = G__13361;
count__13282 = G__13362;
i__13283 = G__13363;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13280);
if(temp__5804__auto__){
var seq__13280__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13280__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13280__$1);
var G__13364 = cljs.core.chunk_rest(seq__13280__$1);
var G__13365 = c__5525__auto__;
var G__13366 = cljs.core.count(c__5525__auto__);
var G__13367 = (0);
seq__13280 = G__13364;
chunk__13281 = G__13365;
count__13282 = G__13366;
i__13283 = G__13367;
continue;
} else {
var vec__13293 = cljs.core.first(seq__13280__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13293,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13293,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13368 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13368)){
var effect_fn_13369 = temp__5802__auto___13368;
(effect_fn_13369.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13369.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13369.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13370 = cljs.core.next(seq__13280__$1);
var G__13371 = null;
var G__13372 = (0);
var G__13373 = (0);
seq__13280 = G__13370;
chunk__13281 = G__13371;
count__13282 = G__13372;
i__13283 = G__13373;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13296 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13297 = null;
var count__13298 = (0);
var i__13299 = (0);
while(true){
if((i__13299 < count__13298)){
var event = chunk__13297.cljs$core$IIndexed$_nth$arity$2(null,i__13299);
re_frame.router.dispatch(event);


var G__13374 = seq__13296;
var G__13375 = chunk__13297;
var G__13376 = count__13298;
var G__13377 = (i__13299 + (1));
seq__13296 = G__13374;
chunk__13297 = G__13375;
count__13298 = G__13376;
i__13299 = G__13377;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13296);
if(temp__5804__auto__){
var seq__13296__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13296__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13296__$1);
var G__13378 = cljs.core.chunk_rest(seq__13296__$1);
var G__13379 = c__5525__auto__;
var G__13380 = cljs.core.count(c__5525__auto__);
var G__13381 = (0);
seq__13296 = G__13378;
chunk__13297 = G__13379;
count__13298 = G__13380;
i__13299 = G__13381;
continue;
} else {
var event = cljs.core.first(seq__13296__$1);
re_frame.router.dispatch(event);


var G__13382 = cljs.core.next(seq__13296__$1);
var G__13383 = null;
var G__13384 = (0);
var G__13385 = (0);
seq__13296 = G__13382;
chunk__13297 = G__13383;
count__13298 = G__13384;
i__13299 = G__13385;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13300 = cljs.core.seq(value);
var chunk__13301 = null;
var count__13302 = (0);
var i__13303 = (0);
while(true){
if((i__13303 < count__13302)){
var event = chunk__13301.cljs$core$IIndexed$_nth$arity$2(null,i__13303);
clear_event(event);


var G__13386 = seq__13300;
var G__13387 = chunk__13301;
var G__13388 = count__13302;
var G__13389 = (i__13303 + (1));
seq__13300 = G__13386;
chunk__13301 = G__13387;
count__13302 = G__13388;
i__13303 = G__13389;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13300);
if(temp__5804__auto__){
var seq__13300__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13300__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13300__$1);
var G__13390 = cljs.core.chunk_rest(seq__13300__$1);
var G__13391 = c__5525__auto__;
var G__13392 = cljs.core.count(c__5525__auto__);
var G__13393 = (0);
seq__13300 = G__13390;
chunk__13301 = G__13391;
count__13302 = G__13392;
i__13303 = G__13393;
continue;
} else {
var event = cljs.core.first(seq__13300__$1);
clear_event(event);


var G__13394 = cljs.core.next(seq__13300__$1);
var G__13395 = null;
var G__13396 = (0);
var G__13397 = (0);
seq__13300 = G__13394;
chunk__13301 = G__13395;
count__13302 = G__13396;
i__13303 = G__13397;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13304 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13305 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13305);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12854__auto___13398 = re_frame.interop.now();
var duration__12855__auto___13399 = (end__12854__auto___13398 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12855__auto___13399,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12854__auto___13398);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13304);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
