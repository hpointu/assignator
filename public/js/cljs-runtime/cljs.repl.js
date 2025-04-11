goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19115){
var map__19116 = p__19115;
var map__19116__$1 = cljs.core.__destructure_map(map__19116);
var m = map__19116__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19116__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19116__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19120_19438 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19121_19439 = null;
var count__19122_19440 = (0);
var i__19123_19441 = (0);
while(true){
if((i__19123_19441 < count__19122_19440)){
var f_19446 = chunk__19121_19439.cljs$core$IIndexed$_nth$arity$2(null,i__19123_19441);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19446], 0));


var G__19450 = seq__19120_19438;
var G__19451 = chunk__19121_19439;
var G__19452 = count__19122_19440;
var G__19453 = (i__19123_19441 + (1));
seq__19120_19438 = G__19450;
chunk__19121_19439 = G__19451;
count__19122_19440 = G__19452;
i__19123_19441 = G__19453;
continue;
} else {
var temp__5804__auto___19454 = cljs.core.seq(seq__19120_19438);
if(temp__5804__auto___19454){
var seq__19120_19455__$1 = temp__5804__auto___19454;
if(cljs.core.chunked_seq_QMARK_(seq__19120_19455__$1)){
var c__5525__auto___19456 = cljs.core.chunk_first(seq__19120_19455__$1);
var G__19457 = cljs.core.chunk_rest(seq__19120_19455__$1);
var G__19458 = c__5525__auto___19456;
var G__19459 = cljs.core.count(c__5525__auto___19456);
var G__19460 = (0);
seq__19120_19438 = G__19457;
chunk__19121_19439 = G__19458;
count__19122_19440 = G__19459;
i__19123_19441 = G__19460;
continue;
} else {
var f_19461 = cljs.core.first(seq__19120_19455__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19461], 0));


var G__19466 = cljs.core.next(seq__19120_19455__$1);
var G__19467 = null;
var G__19468 = (0);
var G__19469 = (0);
seq__19120_19438 = G__19466;
chunk__19121_19439 = G__19467;
count__19122_19440 = G__19468;
i__19123_19441 = G__19469;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19470 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19470], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19470)))?cljs.core.second(arglists_19470):arglists_19470)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19171_19488 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19172_19489 = null;
var count__19173_19490 = (0);
var i__19174_19491 = (0);
while(true){
if((i__19174_19491 < count__19173_19490)){
var vec__19207_19497 = chunk__19172_19489.cljs$core$IIndexed$_nth$arity$2(null,i__19174_19491);
var name_19498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19207_19497,(0),null);
var map__19210_19499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19207_19497,(1),null);
var map__19210_19501__$1 = cljs.core.__destructure_map(map__19210_19499);
var doc_19505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210_19501__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210_19501__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19498], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19506], 0));

if(cljs.core.truth_(doc_19505)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19505], 0));
} else {
}


var G__19523 = seq__19171_19488;
var G__19524 = chunk__19172_19489;
var G__19525 = count__19173_19490;
var G__19526 = (i__19174_19491 + (1));
seq__19171_19488 = G__19523;
chunk__19172_19489 = G__19524;
count__19173_19490 = G__19525;
i__19174_19491 = G__19526;
continue;
} else {
var temp__5804__auto___19527 = cljs.core.seq(seq__19171_19488);
if(temp__5804__auto___19527){
var seq__19171_19528__$1 = temp__5804__auto___19527;
if(cljs.core.chunked_seq_QMARK_(seq__19171_19528__$1)){
var c__5525__auto___19529 = cljs.core.chunk_first(seq__19171_19528__$1);
var G__19530 = cljs.core.chunk_rest(seq__19171_19528__$1);
var G__19531 = c__5525__auto___19529;
var G__19532 = cljs.core.count(c__5525__auto___19529);
var G__19533 = (0);
seq__19171_19488 = G__19530;
chunk__19172_19489 = G__19531;
count__19173_19490 = G__19532;
i__19174_19491 = G__19533;
continue;
} else {
var vec__19215_19534 = cljs.core.first(seq__19171_19528__$1);
var name_19535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19215_19534,(0),null);
var map__19218_19536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19215_19534,(1),null);
var map__19218_19537__$1 = cljs.core.__destructure_map(map__19218_19536);
var doc_19538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19218_19537__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19218_19537__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19535], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19539], 0));

if(cljs.core.truth_(doc_19538)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19538], 0));
} else {
}


var G__19547 = cljs.core.next(seq__19171_19528__$1);
var G__19548 = null;
var G__19549 = (0);
var G__19550 = (0);
seq__19171_19488 = G__19547;
chunk__19172_19489 = G__19548;
count__19173_19490 = G__19549;
i__19174_19491 = G__19550;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19221 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19222 = null;
var count__19223 = (0);
var i__19224 = (0);
while(true){
if((i__19224 < count__19223)){
var role = chunk__19222.cljs$core$IIndexed$_nth$arity$2(null,i__19224);
var temp__5804__auto___19555__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19555__$1)){
var spec_19556 = temp__5804__auto___19555__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19556)], 0));
} else {
}


var G__19557 = seq__19221;
var G__19558 = chunk__19222;
var G__19559 = count__19223;
var G__19560 = (i__19224 + (1));
seq__19221 = G__19557;
chunk__19222 = G__19558;
count__19223 = G__19559;
i__19224 = G__19560;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19221);
if(temp__5804__auto____$1){
var seq__19221__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19221__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19221__$1);
var G__19561 = cljs.core.chunk_rest(seq__19221__$1);
var G__19562 = c__5525__auto__;
var G__19563 = cljs.core.count(c__5525__auto__);
var G__19564 = (0);
seq__19221 = G__19561;
chunk__19222 = G__19562;
count__19223 = G__19563;
i__19224 = G__19564;
continue;
} else {
var role = cljs.core.first(seq__19221__$1);
var temp__5804__auto___19565__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19565__$2)){
var spec_19566 = temp__5804__auto___19565__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19566)], 0));
} else {
}


var G__19567 = cljs.core.next(seq__19221__$1);
var G__19568 = null;
var G__19569 = (0);
var G__19570 = (0);
seq__19221 = G__19567;
chunk__19222 = G__19568;
count__19223 = G__19569;
i__19224 = G__19570;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19259 = datafied_throwable;
var map__19259__$1 = cljs.core.__destructure_map(map__19259);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19259__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19260 = cljs.core.last(via);
var map__19260__$1 = cljs.core.__destructure_map(map__19260);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19260__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19260__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19260__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19261 = data;
var map__19261__$1 = cljs.core.__destructure_map(map__19261);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19261__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19262 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19262__$1 = cljs.core.__destructure_map(map__19262);
var top_data = map__19262__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19264 = phase;
var G__19264__$1 = (((G__19264 instanceof cljs.core.Keyword))?G__19264.fqn:null);
switch (G__19264__$1) {
case "read-source":
var map__19267 = data;
var map__19267__$1 = cljs.core.__destructure_map(map__19267);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19267__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19267__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19268 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19268__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19268,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19268);
var G__19268__$2 = (cljs.core.truth_((function (){var fexpr__19282 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19282.cljs$core$IFn$_invoke$arity$1 ? fexpr__19282.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19282.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19268__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19268__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19268__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19286 = top_data;
var G__19286__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19286,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19286);
var G__19286__$2 = (cljs.core.truth_((function (){var fexpr__19292 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19292.cljs$core$IFn$_invoke$arity$1 ? fexpr__19292.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19292.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19286__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19286__$1);
var G__19286__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19286__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19286__$2);
var G__19286__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19286__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19286__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19286__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19286__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19302 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(3),null);
var G__19306 = top_data;
var G__19306__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19306);
var G__19306__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19306__$1);
var G__19306__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19306__$2);
var G__19306__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19306__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19306__$4;
}

break;
case "execution":
var vec__19323 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19323,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19255_SHARP_){
var or__5002__auto__ = (p1__19255_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19326 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19326.cljs$core$IFn$_invoke$arity$1 ? fexpr__19326.cljs$core$IFn$_invoke$arity$1(p1__19255_SHARP_) : fexpr__19326.call(null,p1__19255_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19328 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19328__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19328,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19328);
var G__19328__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19328__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19328__$1);
var G__19328__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19328__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19328__$2);
var G__19328__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19328__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19328__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19328__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19328__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19264__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19342){
var map__19349 = p__19342;
var map__19349__$1 = cljs.core.__destructure_map(map__19349);
var triage_data = map__19349__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19355 = phase;
var G__19355__$1 = (((G__19355 instanceof cljs.core.Keyword))?G__19355.fqn:null);
switch (G__19355__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19358 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19359 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19360 = loc;
var G__19361 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19375_19670 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19376_19671 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19377_19672 = true;
var _STAR_print_fn_STAR__temp_val__19378_19673 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19377_19672);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19378_19673);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19337_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19337_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19376_19671);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19375_19670);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19358,G__19359,G__19360,G__19361) : format.call(null,G__19358,G__19359,G__19360,G__19361));

break;
case "macroexpansion":
var G__19385 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19386 = cause_type;
var G__19387 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19388 = loc;
var G__19389 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19385,G__19386,G__19387,G__19388,G__19389) : format.call(null,G__19385,G__19386,G__19387,G__19388,G__19389));

break;
case "compile-syntax-check":
var G__19393 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19394 = cause_type;
var G__19395 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19396 = loc;
var G__19397 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19393,G__19394,G__19395,G__19396,G__19397) : format.call(null,G__19393,G__19394,G__19395,G__19396,G__19397));

break;
case "compilation":
var G__19398 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19399 = cause_type;
var G__19400 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19401 = loc;
var G__19402 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19398,G__19399,G__19400,G__19401,G__19402) : format.call(null,G__19398,G__19399,G__19400,G__19401,G__19402));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19403 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19404 = symbol;
var G__19405 = loc;
var G__19406 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19407_19676 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19408_19677 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19409_19678 = true;
var _STAR_print_fn_STAR__temp_val__19410_19679 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19409_19678);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19410_19679);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19338_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19338_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19408_19677);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19407_19676);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19403,G__19404,G__19405,G__19406) : format.call(null,G__19403,G__19404,G__19405,G__19406));
} else {
var G__19411 = "Execution error%s at %s(%s).\n%s\n";
var G__19412 = cause_type;
var G__19413 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19414 = loc;
var G__19415 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19411,G__19412,G__19413,G__19414,G__19415) : format.call(null,G__19411,G__19412,G__19413,G__19414,G__19415));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19355__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
