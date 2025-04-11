goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
re_com.debug.log = (function (){var G__14355 = (function (){var G__14356 = re_com.config.log_format;
if((G__14356 == null)){
return null;
} else {
return cljs.core.name(G__14356);
}
})();
switch (G__14355) {
case "pr-str":
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,cljs.core.pr_str);

break;
case "js":
return console.log;

break;
case "pretty":
return cljs.pprint.pprint;

break;
default:
return console.log;

}
})();
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"edge","edge",919909153)], 0))));
} else {
return args;
}
});
re_com.debug.log_on_alt_click_STAR_ = (function re_com$debug$log_on_alt_click_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14492 = arguments.length;
var i__5727__auto___14493 = (0);
while(true){
if((i__5727__auto___14493 < len__5726__auto___14492)){
args__5732__auto__.push((arguments[i__5727__auto___14493]));

var G__14494 = (i__5727__auto___14493 + (1));
i__5727__auto___14493 = G__14494;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (event,p__14363){
var map__14364 = p__14363;
var map__14364__$1 = cljs.core.__destructure_map(map__14364);
var args = map__14364__$1;
if(cljs.core.truth_(event.altKey)){
return (re_com.debug.log.cljs$core$IFn$_invoke$arity$1 ? re_com.debug.log.cljs$core$IFn$_invoke$arity$1(args) : re_com.debug.log.call(null,args));
} else {
return null;
}
}));

(re_com.debug.log_on_alt_click_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.debug.log_on_alt_click_STAR_.cljs$lang$applyTo = (function (seq14361){
var G__14362 = cljs.core.first(seq14361);
var seq14361__$1 = cljs.core.next(seq14361);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14362,seq14361__$1);
}));

re_com.debug.log_on_alt_click = (function re_com$debug$log_on_alt_click(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14497 = arguments.length;
var i__5727__auto___14498 = (0);
while(true){
if((i__5727__auto___14498 < len__5726__auto___14497)){
args__5732__auto__.push((arguments[i__5727__auto___14498]));

var G__14499 = (i__5727__auto___14498 + (1));
i__5727__auto___14498 = G__14499;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return re_com.debug.log_on_alt_click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(re_com.debug.log_on_alt_click.cljs$core$IFn$_invoke$arity$variadic = (function (p__14400,p__14401){
var map__14406 = p__14400;
var map__14406__$1 = cljs.core.__destructure_map(map__14406);
var args = map__14406__$1;
var map__14407 = p__14401;
var map__14407__$1 = cljs.core.__destructure_map(map__14407);
var show_all_args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14407__$1,new cljs.core.Keyword(null,"show-all-args?","show-all-args?",1990461040),false);
if(cljs.core.truth_(re_com.config.debug_QMARK_)){
return (function (event){
re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14408 = args;
if(cljs.core.not(show_all_args_QMARK_)){
return re_com.debug.loggable_args(G__14408);
} else {
return G__14408;
}
})()], 0));

return null;
});
} else {
if(re_com.config.debug_parts_QMARK_){
return (function (event){
re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__14409 = args;
if(cljs.core.not(show_all_args_QMARK_)){
return re_com.debug.loggable_args(G__14409);
} else {
return G__14409;
}
})()], 0));

return null;
});
} else {
return null;
}
}
}));

(re_com.debug.log_on_alt_click.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.debug.log_on_alt_click.cljs$lang$applyTo = (function (seq14377){
var G__14379 = cljs.core.first(seq14377);
var seq14377__$1 = cljs.core.next(seq14377);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14379,seq14377__$1);
}));

re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__14410){
var map__14411 = p__14410;
var map__14411__$1 = cljs.core.__destructure_map(map__14411);
var args = map__14411__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14411__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14411__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__14412 = src;
var map__14412__$1 = cljs.core.__destructure_map(map__14412);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14412__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14412__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__14413 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14413,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__14413;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__14415 = arguments.length;
switch (G__14415) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__14419_14515 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14417_SHARP_,p2__14416_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__14416_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__14417_SHARP_ + (1)));
}),stack));
var chunk__14420_14516 = null;
var count__14421_14517 = (0);
var i__14422_14518 = (0);
while(true){
if((i__14422_14518 < count__14421_14517)){
var map__14434_14521 = chunk__14420_14516.cljs$core$IIndexed$_nth$arity$2(null,i__14422_14518);
var map__14434_14522__$1 = cljs.core.__destructure_map(map__14434_14521);
var i_14523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14434_14522__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_14524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14434_14522__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_14525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14434_14522__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_14526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14434_14522__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_14527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14434_14522__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_14525)){
if(cljs.core.truth_(src_14526)){
var vec__14435_14528 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_14526,/:/);
var file_14529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435_14528,(0),null);
var line_14530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14435_14528,(1),null);
if(cljs.core.truth_(args_14527)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14523),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14525)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14529),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14530),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14527,el_14524);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14523),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14525)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14529),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14530),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14524);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14523),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14525)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14527,el_14524);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14523),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14524);
}


var G__14531 = seq__14419_14515;
var G__14532 = chunk__14420_14516;
var G__14533 = count__14421_14517;
var G__14534 = (i__14422_14518 + (1));
seq__14419_14515 = G__14531;
chunk__14420_14516 = G__14532;
count__14421_14517 = G__14533;
i__14422_14518 = G__14534;
continue;
} else {
var temp__5804__auto___14536 = cljs.core.seq(seq__14419_14515);
if(temp__5804__auto___14536){
var seq__14419_14537__$1 = temp__5804__auto___14536;
if(cljs.core.chunked_seq_QMARK_(seq__14419_14537__$1)){
var c__5525__auto___14538 = cljs.core.chunk_first(seq__14419_14537__$1);
var G__14539 = cljs.core.chunk_rest(seq__14419_14537__$1);
var G__14540 = c__5525__auto___14538;
var G__14541 = cljs.core.count(c__5525__auto___14538);
var G__14542 = (0);
seq__14419_14515 = G__14539;
chunk__14420_14516 = G__14540;
count__14421_14517 = G__14541;
i__14422_14518 = G__14542;
continue;
} else {
var map__14438_14543 = cljs.core.first(seq__14419_14537__$1);
var map__14438_14544__$1 = cljs.core.__destructure_map(map__14438_14543);
var i_14545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14438_14544__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_14546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14438_14544__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_14547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14438_14544__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_14548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14438_14544__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_14549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14438_14544__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_14547)){
if(cljs.core.truth_(src_14548)){
var vec__14439_14550 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_14548,/:/);
var file_14551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439_14550,(0),null);
var line_14552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439_14550,(1),null);
if(cljs.core.truth_(args_14549)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14545),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14547)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14551),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14552),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14549,el_14546);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14545),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14547)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14551),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14552),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14546);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14545),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14547)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14549,el_14546);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14545),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14546);
}


var G__14553 = cljs.core.next(seq__14419_14537__$1);
var G__14554 = null;
var G__14555 = (0);
var G__14556 = (0);
seq__14419_14515 = G__14553;
chunk__14420_14516 = G__14554;
count__14421_14517 = G__14555;
i__14422_14518 = G__14556;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__14446 = cljs.core.seq(problems);
var chunk__14447 = null;
var count__14448 = (0);
var i__14449 = (0);
while(true){
if((i__14449 < count__14448)){
var map__14466 = chunk__14447.cljs$core$IIndexed$_nth$arity$2(null,i__14449);
var map__14466__$1 = cljs.core.__destructure_map(map__14466);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14466__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14466__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14466__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14466__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14466__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__14467_14557 = problem;
var G__14467_14558__$1 = (((G__14467_14557 instanceof cljs.core.Keyword))?G__14467_14557.fqn:null);
switch (G__14467_14558__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "ref":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected a reactive atom but got a %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
case "part-top-level-collision":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c has been passed both as a top-level argument and within %c:props%c","\n  - Re-com doesn't know which value to use for configuring the %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c part. \n  - Please delete one or the other."].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
case "part-top-level-unsupported":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c has been passed as a top-level argument.","\n  - This is unsupported. ","However, it is supported within %c:props%c \n  - Please declare %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c within the %c:props%c map."].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__14560 = seq__14446;
var G__14561 = chunk__14447;
var G__14562 = count__14448;
var G__14563 = (i__14449 + (1));
seq__14446 = G__14560;
chunk__14447 = G__14561;
count__14448 = G__14562;
i__14449 = G__14563;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14446);
if(temp__5804__auto__){
var seq__14446__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14446__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14446__$1);
var G__14564 = cljs.core.chunk_rest(seq__14446__$1);
var G__14565 = c__5525__auto__;
var G__14566 = cljs.core.count(c__5525__auto__);
var G__14567 = (0);
seq__14446 = G__14564;
chunk__14447 = G__14565;
count__14448 = G__14566;
i__14449 = G__14567;
continue;
} else {
var map__14471 = cljs.core.first(seq__14446__$1);
var map__14471__$1 = cljs.core.__destructure_map(map__14471);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14471__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14471__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14471__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14471__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14471__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__14474_14568 = problem;
var G__14474_14569__$1 = (((G__14474_14568 instanceof cljs.core.Keyword))?G__14474_14568.fqn:null);
switch (G__14474_14569__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "ref":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected a reactive atom but got a %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
case "part-top-level-collision":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c has been passed both as a top-level argument and within %c:props%c","\n  - Re-com doesn't know which value to use for configuring the %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c part. \n  - Please delete one or the other."].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
case "part-top-level-unsupported":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c has been passed as a top-level argument.","\n  - This is unsupported. ","However, it is supported within %c:props%c \n  - Please declare %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c within the %c:props%c map."].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__14571 = cljs.core.next(seq__14446__$1);
var G__14572 = null;
var G__14573 = (0);
var G__14574 = (0);
seq__14446 = G__14571;
chunk__14447 = G__14572;
count__14448 = G__14573;
i__14449 = G__14574;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__14475){
var map__14476 = p__14475;
var map__14476__$1 = cljs.core.__destructure_map(map__14476);
var src = map__14476__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14476__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log("\u2022 To enable clickable source urls, add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c. See https://re-com.day8.com.au/#/config",re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log("\u2022 Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug");
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14575 = arguments.length;
var i__5727__auto___14576 = (0);
while(true){
if((i__5727__auto___14576 < len__5726__auto___14575)){
args__5732__auto__.push((arguments[i__5727__auto___14576]));

var G__14577 = (i__5727__auto___14576 + (1));
i__5727__auto___14576 = G__14577;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__14478){
var map__14479 = p__14478;
var map__14479__$1 = cljs.core.__destructure_map(map__14479);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14479__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14479__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14479__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__14586__delegate = function (p__14480){
var map__14481 = p__14480;
var map__14481__$1 = cljs.core.__destructure_map(map__14481);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14481__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14481__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14481__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__14586 = function (var_args){
var p__14480 = null;
if (arguments.length > 0) {
var G__14587__i = 0, G__14587__a = new Array(arguments.length -  0);
while (G__14587__i < G__14587__a.length) {G__14587__a[G__14587__i] = arguments[G__14587__i + 0]; ++G__14587__i;}
  p__14480 = new cljs.core.IndexedSeq(G__14587__a,0,null);
} 
return G__14586__delegate.call(this,p__14480);};
G__14586.cljs$lang$maxFixedArity = 0;
G__14586.cljs$lang$applyTo = (function (arglist__14588){
var p__14480 = cljs.core.seq(arglist__14588);
return G__14586__delegate(p__14480);
});
G__14586.cljs$core$IFn$_invoke$arity$variadic = G__14586__delegate;
return G__14586;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq14477){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14477));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14589 = arguments.length;
var i__5727__auto___14590 = (0);
while(true){
if((i__5727__auto___14590 < len__5726__auto___14589)){
args__5732__auto__.push((arguments[i__5727__auto___14590]));

var G__14591 = (i__5727__auto___14590 + (1));
i__5727__auto___14590 = G__14591;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__14485){
var map__14486 = p__14485;
var map__14486__$1 = cljs.core.__destructure_map(map__14486);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14486__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14486__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__14592__delegate = function (p__14487){
var map__14488 = p__14487;
var map__14488__$1 = cljs.core.__destructure_map(map__14488);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14488__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14488__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__14592 = function (var_args){
var p__14487 = null;
if (arguments.length > 0) {
var G__14593__i = 0, G__14593__a = new Array(arguments.length -  0);
while (G__14593__i < G__14593__a.length) {G__14593__a[G__14593__i] = arguments[G__14593__i + 0]; ++G__14593__i;}
  p__14487 = new cljs.core.IndexedSeq(G__14593__a,0,null);
} 
return G__14592__delegate.call(this,p__14487);};
G__14592.cljs$lang$maxFixedArity = 0;
G__14592.cljs$lang$applyTo = (function (arglist__14594){
var p__14487 = cljs.core.seq(arglist__14594);
return G__14592__delegate(p__14487);
});
G__14592.cljs$core$IFn$_invoke$arity$variadic = G__14592__delegate;
return G__14592;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq14483){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14483));
}));


//# sourceMappingURL=re_com.debug.js.map
