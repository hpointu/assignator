goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21508 = arguments.length;
var i__5727__auto___21509 = (0);
while(true){
if((i__5727__auto___21509 < len__5726__auto___21508)){
args__5732__auto__.push((arguments[i__5727__auto___21509]));

var G__21510 = (i__5727__auto___21509 + (1));
i__5727__auto___21509 = G__21510;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20866){
var G__20867 = cljs.core.first(seq20866);
var seq20866__$1 = cljs.core.next(seq20866);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20867,seq20866__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20881 = cljs.core.seq(sources);
var chunk__20882 = null;
var count__20883 = (0);
var i__20884 = (0);
while(true){
if((i__20884 < count__20883)){
var map__20909 = chunk__20882.cljs$core$IIndexed$_nth$arity$2(null,i__20884);
var map__20909__$1 = cljs.core.__destructure_map(map__20909);
var src = map__20909__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20909__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20909__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20909__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20909__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20915){var e_21517 = e20915;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21517);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21517.message)].join('')));
}

var G__21518 = seq__20881;
var G__21519 = chunk__20882;
var G__21520 = count__20883;
var G__21521 = (i__20884 + (1));
seq__20881 = G__21518;
chunk__20882 = G__21519;
count__20883 = G__21520;
i__20884 = G__21521;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20881);
if(temp__5804__auto__){
var seq__20881__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20881__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20881__$1);
var G__21522 = cljs.core.chunk_rest(seq__20881__$1);
var G__21523 = c__5525__auto__;
var G__21524 = cljs.core.count(c__5525__auto__);
var G__21525 = (0);
seq__20881 = G__21522;
chunk__20882 = G__21523;
count__20883 = G__21524;
i__20884 = G__21525;
continue;
} else {
var map__20922 = cljs.core.first(seq__20881__$1);
var map__20922__$1 = cljs.core.__destructure_map(map__20922);
var src = map__20922__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20923){var e_21526 = e20923;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21526);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21526.message)].join('')));
}

var G__21527 = cljs.core.next(seq__20881__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__20881 = G__21527;
chunk__20882 = G__21528;
count__20883 = G__21529;
i__20884 = G__21530;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20936 = cljs.core.seq(js_requires);
var chunk__20937 = null;
var count__20938 = (0);
var i__20939 = (0);
while(true){
if((i__20939 < count__20938)){
var js_ns = chunk__20937.cljs$core$IIndexed$_nth$arity$2(null,i__20939);
var require_str_21531 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21531);


var G__21532 = seq__20936;
var G__21533 = chunk__20937;
var G__21534 = count__20938;
var G__21535 = (i__20939 + (1));
seq__20936 = G__21532;
chunk__20937 = G__21533;
count__20938 = G__21534;
i__20939 = G__21535;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20936);
if(temp__5804__auto__){
var seq__20936__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20936__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20936__$1);
var G__21536 = cljs.core.chunk_rest(seq__20936__$1);
var G__21537 = c__5525__auto__;
var G__21538 = cljs.core.count(c__5525__auto__);
var G__21539 = (0);
seq__20936 = G__21536;
chunk__20937 = G__21537;
count__20938 = G__21538;
i__20939 = G__21539;
continue;
} else {
var js_ns = cljs.core.first(seq__20936__$1);
var require_str_21540 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21540);


var G__21541 = cljs.core.next(seq__20936__$1);
var G__21542 = null;
var G__21543 = (0);
var G__21544 = (0);
seq__20936 = G__21541;
chunk__20937 = G__21542;
count__20938 = G__21543;
i__20939 = G__21544;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20954){
var map__20957 = p__20954;
var map__20957__$1 = cljs.core.__destructure_map(map__20957);
var msg = map__20957__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20966(s__20967){
return (new cljs.core.LazySeq(null,(function (){
var s__20967__$1 = s__20967;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20967__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20979 = cljs.core.first(xs__6360__auto__);
var map__20979__$1 = cljs.core.__destructure_map(map__20979);
var src = map__20979__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20979__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20979__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20967__$1,map__20979,map__20979__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20957,map__20957__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20966_$_iter__20968(s__20969){
return (new cljs.core.LazySeq(null,((function (s__20967__$1,map__20979,map__20979__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20957,map__20957__$1,msg,info,reload_info){
return (function (){
var s__20969__$1 = s__20969;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20969__$1);
if(temp__5804__auto____$1){
var s__20969__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20969__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20969__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20971 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20970 = (0);
while(true){
if((i__20970 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20970);
cljs.core.chunk_append(b__20971,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21545 = (i__20970 + (1));
i__20970 = G__21545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20971),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20966_$_iter__20968(cljs.core.chunk_rest(s__20969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20971),null);
}
} else {
var warning = cljs.core.first(s__20969__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20966_$_iter__20968(cljs.core.rest(s__20969__$2)));
}
} else {
return null;
}
break;
}
});})(s__20967__$1,map__20979,map__20979__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20957,map__20957__$1,msg,info,reload_info))
,null,null));
});})(s__20967__$1,map__20979,map__20979__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20957,map__20957__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20966(cljs.core.rest(s__20967__$1)));
} else {
var G__21546 = cljs.core.rest(s__20967__$1);
s__20967__$1 = G__21546;
continue;
}
} else {
var G__21547 = cljs.core.rest(s__20967__$1);
s__20967__$1 = G__21547;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20990_21548 = cljs.core.seq(warnings);
var chunk__20991_21549 = null;
var count__20992_21550 = (0);
var i__20993_21551 = (0);
while(true){
if((i__20993_21551 < count__20992_21550)){
var map__21008_21552 = chunk__20991_21549.cljs$core$IIndexed$_nth$arity$2(null,i__20993_21551);
var map__21008_21553__$1 = cljs.core.__destructure_map(map__21008_21552);
var w_21554 = map__21008_21553__$1;
var msg_21555__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008_21553__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008_21553__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008_21553__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008_21553__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21558)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21556),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21557),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21555__$1)].join(''));


var G__21559 = seq__20990_21548;
var G__21560 = chunk__20991_21549;
var G__21561 = count__20992_21550;
var G__21562 = (i__20993_21551 + (1));
seq__20990_21548 = G__21559;
chunk__20991_21549 = G__21560;
count__20992_21550 = G__21561;
i__20993_21551 = G__21562;
continue;
} else {
var temp__5804__auto___21563 = cljs.core.seq(seq__20990_21548);
if(temp__5804__auto___21563){
var seq__20990_21564__$1 = temp__5804__auto___21563;
if(cljs.core.chunked_seq_QMARK_(seq__20990_21564__$1)){
var c__5525__auto___21565 = cljs.core.chunk_first(seq__20990_21564__$1);
var G__21566 = cljs.core.chunk_rest(seq__20990_21564__$1);
var G__21567 = c__5525__auto___21565;
var G__21568 = cljs.core.count(c__5525__auto___21565);
var G__21569 = (0);
seq__20990_21548 = G__21566;
chunk__20991_21549 = G__21567;
count__20992_21550 = G__21568;
i__20993_21551 = G__21569;
continue;
} else {
var map__21015_21570 = cljs.core.first(seq__20990_21564__$1);
var map__21015_21571__$1 = cljs.core.__destructure_map(map__21015_21570);
var w_21572 = map__21015_21571__$1;
var msg_21573__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015_21571__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015_21571__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015_21571__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015_21571__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21576)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21574),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21575),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21573__$1)].join(''));


var G__21577 = cljs.core.next(seq__20990_21564__$1);
var G__21578 = null;
var G__21579 = (0);
var G__21580 = (0);
seq__20990_21548 = G__21577;
chunk__20991_21549 = G__21578;
count__20992_21550 = G__21579;
i__20993_21551 = G__21580;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20950_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20950_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21046 = node_uri;
G__21046.setQuery(null);

G__21046.setPath(new$);

return G__21046;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21056){
var map__21057 = p__21056;
var map__21057__$1 = cljs.core.__destructure_map(map__21057);
var msg = map__21057__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21058 = cljs.core.seq(updates);
var chunk__21060 = null;
var count__21061 = (0);
var i__21062 = (0);
while(true){
if((i__21062 < count__21061)){
var path = chunk__21060.cljs$core$IIndexed$_nth$arity$2(null,i__21062);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21333_21583 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21337_21584 = null;
var count__21338_21585 = (0);
var i__21339_21586 = (0);
while(true){
if((i__21339_21586 < count__21338_21585)){
var node_21588 = chunk__21337_21584.cljs$core$IIndexed$_nth$arity$2(null,i__21339_21586);
if(cljs.core.not(node_21588.shadow$old)){
var path_match_21590 = shadow.cljs.devtools.client.browser.match_paths(node_21588.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21590)){
var new_link_21591 = (function (){var G__21371 = node_21588.cloneNode(true);
G__21371.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21590),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21371;
})();
(node_21588.shadow$old = true);

(new_link_21591.onload = ((function (seq__21333_21583,chunk__21337_21584,count__21338_21585,i__21339_21586,seq__21058,chunk__21060,count__21061,i__21062,new_link_21591,path_match_21590,node_21588,path,map__21057,map__21057__$1,msg,updates,reload_info){
return (function (e){
var seq__21372_21592 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21374_21593 = null;
var count__21375_21594 = (0);
var i__21376_21595 = (0);
while(true){
if((i__21376_21595 < count__21375_21594)){
var map__21383_21596 = chunk__21374_21593.cljs$core$IIndexed$_nth$arity$2(null,i__21376_21595);
var map__21383_21597__$1 = cljs.core.__destructure_map(map__21383_21596);
var task_21598 = map__21383_21597__$1;
var fn_str_21599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383_21597__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383_21597__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21601 = goog.getObjectByName(fn_str_21599,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21600)].join(''));

(fn_obj_21601.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21601.cljs$core$IFn$_invoke$arity$2(path,new_link_21591) : fn_obj_21601.call(null,path,new_link_21591));


var G__21602 = seq__21372_21592;
var G__21603 = chunk__21374_21593;
var G__21604 = count__21375_21594;
var G__21605 = (i__21376_21595 + (1));
seq__21372_21592 = G__21602;
chunk__21374_21593 = G__21603;
count__21375_21594 = G__21604;
i__21376_21595 = G__21605;
continue;
} else {
var temp__5804__auto___21606 = cljs.core.seq(seq__21372_21592);
if(temp__5804__auto___21606){
var seq__21372_21607__$1 = temp__5804__auto___21606;
if(cljs.core.chunked_seq_QMARK_(seq__21372_21607__$1)){
var c__5525__auto___21608 = cljs.core.chunk_first(seq__21372_21607__$1);
var G__21609 = cljs.core.chunk_rest(seq__21372_21607__$1);
var G__21610 = c__5525__auto___21608;
var G__21611 = cljs.core.count(c__5525__auto___21608);
var G__21612 = (0);
seq__21372_21592 = G__21609;
chunk__21374_21593 = G__21610;
count__21375_21594 = G__21611;
i__21376_21595 = G__21612;
continue;
} else {
var map__21384_21613 = cljs.core.first(seq__21372_21607__$1);
var map__21384_21614__$1 = cljs.core.__destructure_map(map__21384_21613);
var task_21615 = map__21384_21614__$1;
var fn_str_21616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384_21614__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384_21614__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21618 = goog.getObjectByName(fn_str_21616,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21617)].join(''));

(fn_obj_21618.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21618.cljs$core$IFn$_invoke$arity$2(path,new_link_21591) : fn_obj_21618.call(null,path,new_link_21591));


var G__21619 = cljs.core.next(seq__21372_21607__$1);
var G__21620 = null;
var G__21621 = (0);
var G__21622 = (0);
seq__21372_21592 = G__21619;
chunk__21374_21593 = G__21620;
count__21375_21594 = G__21621;
i__21376_21595 = G__21622;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21588);
});})(seq__21333_21583,chunk__21337_21584,count__21338_21585,i__21339_21586,seq__21058,chunk__21060,count__21061,i__21062,new_link_21591,path_match_21590,node_21588,path,map__21057,map__21057__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21590], 0));

goog.dom.insertSiblingAfter(new_link_21591,node_21588);


var G__21623 = seq__21333_21583;
var G__21624 = chunk__21337_21584;
var G__21625 = count__21338_21585;
var G__21626 = (i__21339_21586 + (1));
seq__21333_21583 = G__21623;
chunk__21337_21584 = G__21624;
count__21338_21585 = G__21625;
i__21339_21586 = G__21626;
continue;
} else {
var G__21627 = seq__21333_21583;
var G__21628 = chunk__21337_21584;
var G__21629 = count__21338_21585;
var G__21630 = (i__21339_21586 + (1));
seq__21333_21583 = G__21627;
chunk__21337_21584 = G__21628;
count__21338_21585 = G__21629;
i__21339_21586 = G__21630;
continue;
}
} else {
var G__21631 = seq__21333_21583;
var G__21632 = chunk__21337_21584;
var G__21633 = count__21338_21585;
var G__21634 = (i__21339_21586 + (1));
seq__21333_21583 = G__21631;
chunk__21337_21584 = G__21632;
count__21338_21585 = G__21633;
i__21339_21586 = G__21634;
continue;
}
} else {
var temp__5804__auto___21635 = cljs.core.seq(seq__21333_21583);
if(temp__5804__auto___21635){
var seq__21333_21636__$1 = temp__5804__auto___21635;
if(cljs.core.chunked_seq_QMARK_(seq__21333_21636__$1)){
var c__5525__auto___21637 = cljs.core.chunk_first(seq__21333_21636__$1);
var G__21638 = cljs.core.chunk_rest(seq__21333_21636__$1);
var G__21639 = c__5525__auto___21637;
var G__21640 = cljs.core.count(c__5525__auto___21637);
var G__21641 = (0);
seq__21333_21583 = G__21638;
chunk__21337_21584 = G__21639;
count__21338_21585 = G__21640;
i__21339_21586 = G__21641;
continue;
} else {
var node_21642 = cljs.core.first(seq__21333_21636__$1);
if(cljs.core.not(node_21642.shadow$old)){
var path_match_21643 = shadow.cljs.devtools.client.browser.match_paths(node_21642.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21643)){
var new_link_21644 = (function (){var G__21385 = node_21642.cloneNode(true);
G__21385.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21643),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21385;
})();
(node_21642.shadow$old = true);

(new_link_21644.onload = ((function (seq__21333_21583,chunk__21337_21584,count__21338_21585,i__21339_21586,seq__21058,chunk__21060,count__21061,i__21062,new_link_21644,path_match_21643,node_21642,seq__21333_21636__$1,temp__5804__auto___21635,path,map__21057,map__21057__$1,msg,updates,reload_info){
return (function (e){
var seq__21386_21645 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21388_21646 = null;
var count__21389_21647 = (0);
var i__21390_21648 = (0);
while(true){
if((i__21390_21648 < count__21389_21647)){
var map__21394_21651 = chunk__21388_21646.cljs$core$IIndexed$_nth$arity$2(null,i__21390_21648);
var map__21394_21652__$1 = cljs.core.__destructure_map(map__21394_21651);
var task_21653 = map__21394_21652__$1;
var fn_str_21654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394_21652__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394_21652__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21656 = goog.getObjectByName(fn_str_21654,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21655)].join(''));

(fn_obj_21656.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21656.cljs$core$IFn$_invoke$arity$2(path,new_link_21644) : fn_obj_21656.call(null,path,new_link_21644));


var G__21657 = seq__21386_21645;
var G__21658 = chunk__21388_21646;
var G__21659 = count__21389_21647;
var G__21660 = (i__21390_21648 + (1));
seq__21386_21645 = G__21657;
chunk__21388_21646 = G__21658;
count__21389_21647 = G__21659;
i__21390_21648 = G__21660;
continue;
} else {
var temp__5804__auto___21661__$1 = cljs.core.seq(seq__21386_21645);
if(temp__5804__auto___21661__$1){
var seq__21386_21662__$1 = temp__5804__auto___21661__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21386_21662__$1)){
var c__5525__auto___21663 = cljs.core.chunk_first(seq__21386_21662__$1);
var G__21664 = cljs.core.chunk_rest(seq__21386_21662__$1);
var G__21665 = c__5525__auto___21663;
var G__21666 = cljs.core.count(c__5525__auto___21663);
var G__21667 = (0);
seq__21386_21645 = G__21664;
chunk__21388_21646 = G__21665;
count__21389_21647 = G__21666;
i__21390_21648 = G__21667;
continue;
} else {
var map__21398_21668 = cljs.core.first(seq__21386_21662__$1);
var map__21398_21669__$1 = cljs.core.__destructure_map(map__21398_21668);
var task_21670 = map__21398_21669__$1;
var fn_str_21671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398_21669__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398_21669__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21673 = goog.getObjectByName(fn_str_21671,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21672)].join(''));

(fn_obj_21673.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21673.cljs$core$IFn$_invoke$arity$2(path,new_link_21644) : fn_obj_21673.call(null,path,new_link_21644));


var G__21674 = cljs.core.next(seq__21386_21662__$1);
var G__21675 = null;
var G__21676 = (0);
var G__21677 = (0);
seq__21386_21645 = G__21674;
chunk__21388_21646 = G__21675;
count__21389_21647 = G__21676;
i__21390_21648 = G__21677;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21642);
});})(seq__21333_21583,chunk__21337_21584,count__21338_21585,i__21339_21586,seq__21058,chunk__21060,count__21061,i__21062,new_link_21644,path_match_21643,node_21642,seq__21333_21636__$1,temp__5804__auto___21635,path,map__21057,map__21057__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21643], 0));

goog.dom.insertSiblingAfter(new_link_21644,node_21642);


var G__21678 = cljs.core.next(seq__21333_21636__$1);
var G__21679 = null;
var G__21680 = (0);
var G__21681 = (0);
seq__21333_21583 = G__21678;
chunk__21337_21584 = G__21679;
count__21338_21585 = G__21680;
i__21339_21586 = G__21681;
continue;
} else {
var G__21682 = cljs.core.next(seq__21333_21636__$1);
var G__21683 = null;
var G__21684 = (0);
var G__21685 = (0);
seq__21333_21583 = G__21682;
chunk__21337_21584 = G__21683;
count__21338_21585 = G__21684;
i__21339_21586 = G__21685;
continue;
}
} else {
var G__21686 = cljs.core.next(seq__21333_21636__$1);
var G__21687 = null;
var G__21688 = (0);
var G__21689 = (0);
seq__21333_21583 = G__21686;
chunk__21337_21584 = G__21687;
count__21338_21585 = G__21688;
i__21339_21586 = G__21689;
continue;
}
}
} else {
}
}
break;
}


var G__21690 = seq__21058;
var G__21691 = chunk__21060;
var G__21692 = count__21061;
var G__21693 = (i__21062 + (1));
seq__21058 = G__21690;
chunk__21060 = G__21691;
count__21061 = G__21692;
i__21062 = G__21693;
continue;
} else {
var G__21694 = seq__21058;
var G__21695 = chunk__21060;
var G__21696 = count__21061;
var G__21697 = (i__21062 + (1));
seq__21058 = G__21694;
chunk__21060 = G__21695;
count__21061 = G__21696;
i__21062 = G__21697;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21058);
if(temp__5804__auto__){
var seq__21058__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21058__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21058__$1);
var G__21698 = cljs.core.chunk_rest(seq__21058__$1);
var G__21699 = c__5525__auto__;
var G__21700 = cljs.core.count(c__5525__auto__);
var G__21701 = (0);
seq__21058 = G__21698;
chunk__21060 = G__21699;
count__21061 = G__21700;
i__21062 = G__21701;
continue;
} else {
var path = cljs.core.first(seq__21058__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21401_21702 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21405_21703 = null;
var count__21406_21704 = (0);
var i__21407_21705 = (0);
while(true){
if((i__21407_21705 < count__21406_21704)){
var node_21706 = chunk__21405_21703.cljs$core$IIndexed$_nth$arity$2(null,i__21407_21705);
if(cljs.core.not(node_21706.shadow$old)){
var path_match_21707 = shadow.cljs.devtools.client.browser.match_paths(node_21706.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21707)){
var new_link_21708 = (function (){var G__21445 = node_21706.cloneNode(true);
G__21445.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21707),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21445;
})();
(node_21706.shadow$old = true);

(new_link_21708.onload = ((function (seq__21401_21702,chunk__21405_21703,count__21406_21704,i__21407_21705,seq__21058,chunk__21060,count__21061,i__21062,new_link_21708,path_match_21707,node_21706,path,seq__21058__$1,temp__5804__auto__,map__21057,map__21057__$1,msg,updates,reload_info){
return (function (e){
var seq__21446_21709 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21448_21710 = null;
var count__21449_21711 = (0);
var i__21450_21712 = (0);
while(true){
if((i__21450_21712 < count__21449_21711)){
var map__21455_21713 = chunk__21448_21710.cljs$core$IIndexed$_nth$arity$2(null,i__21450_21712);
var map__21455_21714__$1 = cljs.core.__destructure_map(map__21455_21713);
var task_21715 = map__21455_21714__$1;
var fn_str_21716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21455_21714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21455_21714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21718 = goog.getObjectByName(fn_str_21716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21717)].join(''));

(fn_obj_21718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21718.cljs$core$IFn$_invoke$arity$2(path,new_link_21708) : fn_obj_21718.call(null,path,new_link_21708));


var G__21719 = seq__21446_21709;
var G__21720 = chunk__21448_21710;
var G__21721 = count__21449_21711;
var G__21722 = (i__21450_21712 + (1));
seq__21446_21709 = G__21719;
chunk__21448_21710 = G__21720;
count__21449_21711 = G__21721;
i__21450_21712 = G__21722;
continue;
} else {
var temp__5804__auto___21723__$1 = cljs.core.seq(seq__21446_21709);
if(temp__5804__auto___21723__$1){
var seq__21446_21724__$1 = temp__5804__auto___21723__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21446_21724__$1)){
var c__5525__auto___21725 = cljs.core.chunk_first(seq__21446_21724__$1);
var G__21726 = cljs.core.chunk_rest(seq__21446_21724__$1);
var G__21727 = c__5525__auto___21725;
var G__21728 = cljs.core.count(c__5525__auto___21725);
var G__21729 = (0);
seq__21446_21709 = G__21726;
chunk__21448_21710 = G__21727;
count__21449_21711 = G__21728;
i__21450_21712 = G__21729;
continue;
} else {
var map__21456_21730 = cljs.core.first(seq__21446_21724__$1);
var map__21456_21731__$1 = cljs.core.__destructure_map(map__21456_21730);
var task_21732 = map__21456_21731__$1;
var fn_str_21733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21456_21731__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21456_21731__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21735 = goog.getObjectByName(fn_str_21733,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21734)].join(''));

(fn_obj_21735.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21735.cljs$core$IFn$_invoke$arity$2(path,new_link_21708) : fn_obj_21735.call(null,path,new_link_21708));


var G__21736 = cljs.core.next(seq__21446_21724__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21446_21709 = G__21736;
chunk__21448_21710 = G__21737;
count__21449_21711 = G__21738;
i__21450_21712 = G__21739;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21706);
});})(seq__21401_21702,chunk__21405_21703,count__21406_21704,i__21407_21705,seq__21058,chunk__21060,count__21061,i__21062,new_link_21708,path_match_21707,node_21706,path,seq__21058__$1,temp__5804__auto__,map__21057,map__21057__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21707], 0));

goog.dom.insertSiblingAfter(new_link_21708,node_21706);


var G__21740 = seq__21401_21702;
var G__21741 = chunk__21405_21703;
var G__21742 = count__21406_21704;
var G__21743 = (i__21407_21705 + (1));
seq__21401_21702 = G__21740;
chunk__21405_21703 = G__21741;
count__21406_21704 = G__21742;
i__21407_21705 = G__21743;
continue;
} else {
var G__21744 = seq__21401_21702;
var G__21745 = chunk__21405_21703;
var G__21746 = count__21406_21704;
var G__21747 = (i__21407_21705 + (1));
seq__21401_21702 = G__21744;
chunk__21405_21703 = G__21745;
count__21406_21704 = G__21746;
i__21407_21705 = G__21747;
continue;
}
} else {
var G__21748 = seq__21401_21702;
var G__21749 = chunk__21405_21703;
var G__21750 = count__21406_21704;
var G__21751 = (i__21407_21705 + (1));
seq__21401_21702 = G__21748;
chunk__21405_21703 = G__21749;
count__21406_21704 = G__21750;
i__21407_21705 = G__21751;
continue;
}
} else {
var temp__5804__auto___21752__$1 = cljs.core.seq(seq__21401_21702);
if(temp__5804__auto___21752__$1){
var seq__21401_21753__$1 = temp__5804__auto___21752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21401_21753__$1)){
var c__5525__auto___21754 = cljs.core.chunk_first(seq__21401_21753__$1);
var G__21755 = cljs.core.chunk_rest(seq__21401_21753__$1);
var G__21756 = c__5525__auto___21754;
var G__21757 = cljs.core.count(c__5525__auto___21754);
var G__21758 = (0);
seq__21401_21702 = G__21755;
chunk__21405_21703 = G__21756;
count__21406_21704 = G__21757;
i__21407_21705 = G__21758;
continue;
} else {
var node_21759 = cljs.core.first(seq__21401_21753__$1);
if(cljs.core.not(node_21759.shadow$old)){
var path_match_21760 = shadow.cljs.devtools.client.browser.match_paths(node_21759.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21760)){
var new_link_21761 = (function (){var G__21457 = node_21759.cloneNode(true);
G__21457.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21760),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21457;
})();
(node_21759.shadow$old = true);

(new_link_21761.onload = ((function (seq__21401_21702,chunk__21405_21703,count__21406_21704,i__21407_21705,seq__21058,chunk__21060,count__21061,i__21062,new_link_21761,path_match_21760,node_21759,seq__21401_21753__$1,temp__5804__auto___21752__$1,path,seq__21058__$1,temp__5804__auto__,map__21057,map__21057__$1,msg,updates,reload_info){
return (function (e){
var seq__21458_21762 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21460_21763 = null;
var count__21461_21764 = (0);
var i__21462_21765 = (0);
while(true){
if((i__21462_21765 < count__21461_21764)){
var map__21466_21766 = chunk__21460_21763.cljs$core$IIndexed$_nth$arity$2(null,i__21462_21765);
var map__21466_21767__$1 = cljs.core.__destructure_map(map__21466_21766);
var task_21768 = map__21466_21767__$1;
var fn_str_21769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466_21767__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466_21767__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21771 = goog.getObjectByName(fn_str_21769,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21770)].join(''));

(fn_obj_21771.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21771.cljs$core$IFn$_invoke$arity$2(path,new_link_21761) : fn_obj_21771.call(null,path,new_link_21761));


var G__21772 = seq__21458_21762;
var G__21773 = chunk__21460_21763;
var G__21774 = count__21461_21764;
var G__21775 = (i__21462_21765 + (1));
seq__21458_21762 = G__21772;
chunk__21460_21763 = G__21773;
count__21461_21764 = G__21774;
i__21462_21765 = G__21775;
continue;
} else {
var temp__5804__auto___21776__$2 = cljs.core.seq(seq__21458_21762);
if(temp__5804__auto___21776__$2){
var seq__21458_21777__$1 = temp__5804__auto___21776__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21458_21777__$1)){
var c__5525__auto___21778 = cljs.core.chunk_first(seq__21458_21777__$1);
var G__21779 = cljs.core.chunk_rest(seq__21458_21777__$1);
var G__21780 = c__5525__auto___21778;
var G__21781 = cljs.core.count(c__5525__auto___21778);
var G__21782 = (0);
seq__21458_21762 = G__21779;
chunk__21460_21763 = G__21780;
count__21461_21764 = G__21781;
i__21462_21765 = G__21782;
continue;
} else {
var map__21467_21783 = cljs.core.first(seq__21458_21777__$1);
var map__21467_21784__$1 = cljs.core.__destructure_map(map__21467_21783);
var task_21785 = map__21467_21784__$1;
var fn_str_21786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467_21784__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467_21784__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21788 = goog.getObjectByName(fn_str_21786,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21787)].join(''));

(fn_obj_21788.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21788.cljs$core$IFn$_invoke$arity$2(path,new_link_21761) : fn_obj_21788.call(null,path,new_link_21761));


var G__21789 = cljs.core.next(seq__21458_21777__$1);
var G__21790 = null;
var G__21791 = (0);
var G__21792 = (0);
seq__21458_21762 = G__21789;
chunk__21460_21763 = G__21790;
count__21461_21764 = G__21791;
i__21462_21765 = G__21792;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21759);
});})(seq__21401_21702,chunk__21405_21703,count__21406_21704,i__21407_21705,seq__21058,chunk__21060,count__21061,i__21062,new_link_21761,path_match_21760,node_21759,seq__21401_21753__$1,temp__5804__auto___21752__$1,path,seq__21058__$1,temp__5804__auto__,map__21057,map__21057__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21760], 0));

goog.dom.insertSiblingAfter(new_link_21761,node_21759);


var G__21793 = cljs.core.next(seq__21401_21753__$1);
var G__21794 = null;
var G__21795 = (0);
var G__21796 = (0);
seq__21401_21702 = G__21793;
chunk__21405_21703 = G__21794;
count__21406_21704 = G__21795;
i__21407_21705 = G__21796;
continue;
} else {
var G__21797 = cljs.core.next(seq__21401_21753__$1);
var G__21798 = null;
var G__21799 = (0);
var G__21800 = (0);
seq__21401_21702 = G__21797;
chunk__21405_21703 = G__21798;
count__21406_21704 = G__21799;
i__21407_21705 = G__21800;
continue;
}
} else {
var G__21801 = cljs.core.next(seq__21401_21753__$1);
var G__21802 = null;
var G__21803 = (0);
var G__21804 = (0);
seq__21401_21702 = G__21801;
chunk__21405_21703 = G__21802;
count__21406_21704 = G__21803;
i__21407_21705 = G__21804;
continue;
}
}
} else {
}
}
break;
}


var G__21805 = cljs.core.next(seq__21058__$1);
var G__21806 = null;
var G__21807 = (0);
var G__21808 = (0);
seq__21058 = G__21805;
chunk__21060 = G__21806;
count__21061 = G__21807;
i__21062 = G__21808;
continue;
} else {
var G__21809 = cljs.core.next(seq__21058__$1);
var G__21810 = null;
var G__21811 = (0);
var G__21812 = (0);
seq__21058 = G__21809;
chunk__21060 = G__21810;
count__21061 = G__21811;
i__21062 = G__21812;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21479 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21479) : success.call(null,G__21479));
}catch (e21478){var e = e21478;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21480,success,fail){
var map__21481 = p__21480;
var map__21481__$1 = cljs.core.__destructure_map(map__21481);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21481__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21483 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21483) : success.call(null,G__21483));
}catch (e21482){var e = e21482;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21484,done,error){
var map__21485 = p__21484;
var map__21485__$1 = cljs.core.__destructure_map(map__21485);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21485__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21486,done,error){
var map__21487 = p__21486;
var map__21487__$1 = cljs.core.__destructure_map(map__21487);
var msg = map__21487__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21487__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21487__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21487__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21489){
var map__21490 = p__21489;
var map__21490__$1 = cljs.core.__destructure_map(map__21490);
var src = map__21490__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21490__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21491 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21491) : done.call(null,G__21491));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21492){
var map__21494 = p__21492;
var map__21494__$1 = cljs.core.__destructure_map(map__21494);
var msg__$1 = map__21494__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21496){var ex = e21496;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21497){
var map__21498 = p__21497;
var map__21498__$1 = cljs.core.__destructure_map(map__21498);
var env = map__21498__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21498__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21503){
var map__21504 = p__21503;
var map__21504__$1 = cljs.core.__destructure_map(map__21504);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21504__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21504__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21505){
var map__21506 = p__21505;
var map__21506__$1 = cljs.core.__destructure_map(map__21506);
var svc = map__21506__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21506__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
