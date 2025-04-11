goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12882 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12882(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12885 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12885(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11707 = coll;
var G__11708 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11707,G__11708) : shadow.dom.lazy_native_coll_seq.call(null,G__11707,G__11708));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11728 = arguments.length;
switch (G__11728) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11732 = arguments.length;
switch (G__11732) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11743 = arguments.length;
switch (G__11743) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11748 = arguments.length;
switch (G__11748) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11761 = arguments.length;
switch (G__11761) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11776 = arguments.length;
switch (G__11776) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11792){if((e11792 instanceof Object)){
var e = e11792;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11792;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11800 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11801 = null;
var count__11802 = (0);
var i__11803 = (0);
while(true){
if((i__11803 < count__11802)){
var el = chunk__11801.cljs$core$IIndexed$_nth$arity$2(null,i__11803);
var handler_12929__$1 = ((function (seq__11800,chunk__11801,count__11802,i__11803,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11800,chunk__11801,count__11802,i__11803,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12929__$1);


var G__12931 = seq__11800;
var G__12932 = chunk__11801;
var G__12933 = count__11802;
var G__12934 = (i__11803 + (1));
seq__11800 = G__12931;
chunk__11801 = G__12932;
count__11802 = G__12933;
i__11803 = G__12934;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11800);
if(temp__5804__auto__){
var seq__11800__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11800__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11800__$1);
var G__12939 = cljs.core.chunk_rest(seq__11800__$1);
var G__12940 = c__5525__auto__;
var G__12941 = cljs.core.count(c__5525__auto__);
var G__12942 = (0);
seq__11800 = G__12939;
chunk__11801 = G__12940;
count__11802 = G__12941;
i__11803 = G__12942;
continue;
} else {
var el = cljs.core.first(seq__11800__$1);
var handler_12945__$1 = ((function (seq__11800,chunk__11801,count__11802,i__11803,el,seq__11800__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11800,chunk__11801,count__11802,i__11803,el,seq__11800__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12945__$1);


var G__12946 = cljs.core.next(seq__11800__$1);
var G__12947 = null;
var G__12948 = (0);
var G__12949 = (0);
seq__11800 = G__12946;
chunk__11801 = G__12947;
count__11802 = G__12948;
i__11803 = G__12949;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11818 = arguments.length;
switch (G__11818) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11839 = cljs.core.seq(events);
var chunk__11840 = null;
var count__11841 = (0);
var i__11842 = (0);
while(true){
if((i__11842 < count__11841)){
var vec__11878 = chunk__11840.cljs$core$IIndexed$_nth$arity$2(null,i__11842);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12955 = seq__11839;
var G__12956 = chunk__11840;
var G__12957 = count__11841;
var G__12958 = (i__11842 + (1));
seq__11839 = G__12955;
chunk__11840 = G__12956;
count__11841 = G__12957;
i__11842 = G__12958;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11839);
if(temp__5804__auto__){
var seq__11839__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11839__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11839__$1);
var G__12960 = cljs.core.chunk_rest(seq__11839__$1);
var G__12961 = c__5525__auto__;
var G__12962 = cljs.core.count(c__5525__auto__);
var G__12963 = (0);
seq__11839 = G__12960;
chunk__11840 = G__12961;
count__11841 = G__12962;
i__11842 = G__12963;
continue;
} else {
var vec__11887 = cljs.core.first(seq__11839__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11887,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12964 = cljs.core.next(seq__11839__$1);
var G__12965 = null;
var G__12966 = (0);
var G__12967 = (0);
seq__11839 = G__12964;
chunk__11840 = G__12965;
count__11841 = G__12966;
i__11842 = G__12967;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11910 = cljs.core.seq(styles);
var chunk__11911 = null;
var count__11912 = (0);
var i__11913 = (0);
while(true){
if((i__11913 < count__11912)){
var vec__11925 = chunk__11911.cljs$core$IIndexed$_nth$arity$2(null,i__11913);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11925,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12970 = seq__11910;
var G__12971 = chunk__11911;
var G__12972 = count__11912;
var G__12973 = (i__11913 + (1));
seq__11910 = G__12970;
chunk__11911 = G__12971;
count__11912 = G__12972;
i__11913 = G__12973;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11910);
if(temp__5804__auto__){
var seq__11910__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11910__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11910__$1);
var G__12974 = cljs.core.chunk_rest(seq__11910__$1);
var G__12975 = c__5525__auto__;
var G__12976 = cljs.core.count(c__5525__auto__);
var G__12977 = (0);
seq__11910 = G__12974;
chunk__11911 = G__12975;
count__11912 = G__12976;
i__11913 = G__12977;
continue;
} else {
var vec__11928 = cljs.core.first(seq__11910__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11928,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12978 = cljs.core.next(seq__11910__$1);
var G__12979 = null;
var G__12980 = (0);
var G__12981 = (0);
seq__11910 = G__12978;
chunk__11911 = G__12979;
count__11912 = G__12980;
i__11913 = G__12981;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11934_12984 = key;
var G__11934_12985__$1 = (((G__11934_12984 instanceof cljs.core.Keyword))?G__11934_12984.fqn:null);
switch (G__11934_12985__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12989 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12989,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12989,"aria-");
}
})())){
el.setAttribute(ks_12989,value);
} else {
(el[ks_12989] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11935){
var map__11936 = p__11935;
var map__11936__$1 = cljs.core.__destructure_map(map__11936);
var props = map__11936__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11936__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11937 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11937,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11937,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11937,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11940 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11940,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11940;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11943 = arguments.length;
switch (G__11943) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11950){
var vec__11951 = p__11950;
var seq__11952 = cljs.core.seq(vec__11951);
var first__11953 = cljs.core.first(seq__11952);
var seq__11952__$1 = cljs.core.next(seq__11952);
var nn = first__11953;
var first__11953__$1 = cljs.core.first(seq__11952__$1);
var seq__11952__$2 = cljs.core.next(seq__11952__$1);
var np = first__11953__$1;
var nc = seq__11952__$2;
var node = vec__11951;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11954 = nn;
var G__11955 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11954,G__11955) : create_fn.call(null,G__11954,G__11955));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11957 = nn;
var G__11958 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11957,G__11958) : create_fn.call(null,G__11957,G__11958));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11962 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11962,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11962,(1),null);
var seq__11966_13028 = cljs.core.seq(node_children);
var chunk__11967_13029 = null;
var count__11968_13030 = (0);
var i__11969_13031 = (0);
while(true){
if((i__11969_13031 < count__11968_13030)){
var child_struct_13032 = chunk__11967_13029.cljs$core$IIndexed$_nth$arity$2(null,i__11969_13031);
var children_13033 = shadow.dom.dom_node(child_struct_13032);
if(cljs.core.seq_QMARK_(children_13033)){
var seq__12042_13034 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13033));
var chunk__12044_13035 = null;
var count__12045_13036 = (0);
var i__12046_13037 = (0);
while(true){
if((i__12046_13037 < count__12045_13036)){
var child_13039 = chunk__12044_13035.cljs$core$IIndexed$_nth$arity$2(null,i__12046_13037);
if(cljs.core.truth_(child_13039)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13039);


var G__13040 = seq__12042_13034;
var G__13041 = chunk__12044_13035;
var G__13042 = count__12045_13036;
var G__13043 = (i__12046_13037 + (1));
seq__12042_13034 = G__13040;
chunk__12044_13035 = G__13041;
count__12045_13036 = G__13042;
i__12046_13037 = G__13043;
continue;
} else {
var G__13045 = seq__12042_13034;
var G__13046 = chunk__12044_13035;
var G__13047 = count__12045_13036;
var G__13048 = (i__12046_13037 + (1));
seq__12042_13034 = G__13045;
chunk__12044_13035 = G__13046;
count__12045_13036 = G__13047;
i__12046_13037 = G__13048;
continue;
}
} else {
var temp__5804__auto___13049 = cljs.core.seq(seq__12042_13034);
if(temp__5804__auto___13049){
var seq__12042_13050__$1 = temp__5804__auto___13049;
if(cljs.core.chunked_seq_QMARK_(seq__12042_13050__$1)){
var c__5525__auto___13051 = cljs.core.chunk_first(seq__12042_13050__$1);
var G__13052 = cljs.core.chunk_rest(seq__12042_13050__$1);
var G__13053 = c__5525__auto___13051;
var G__13054 = cljs.core.count(c__5525__auto___13051);
var G__13055 = (0);
seq__12042_13034 = G__13052;
chunk__12044_13035 = G__13053;
count__12045_13036 = G__13054;
i__12046_13037 = G__13055;
continue;
} else {
var child_13057 = cljs.core.first(seq__12042_13050__$1);
if(cljs.core.truth_(child_13057)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13057);


var G__13058 = cljs.core.next(seq__12042_13050__$1);
var G__13059 = null;
var G__13060 = (0);
var G__13061 = (0);
seq__12042_13034 = G__13058;
chunk__12044_13035 = G__13059;
count__12045_13036 = G__13060;
i__12046_13037 = G__13061;
continue;
} else {
var G__13062 = cljs.core.next(seq__12042_13050__$1);
var G__13063 = null;
var G__13064 = (0);
var G__13065 = (0);
seq__12042_13034 = G__13062;
chunk__12044_13035 = G__13063;
count__12045_13036 = G__13064;
i__12046_13037 = G__13065;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13033);
}


var G__13066 = seq__11966_13028;
var G__13067 = chunk__11967_13029;
var G__13068 = count__11968_13030;
var G__13069 = (i__11969_13031 + (1));
seq__11966_13028 = G__13066;
chunk__11967_13029 = G__13067;
count__11968_13030 = G__13068;
i__11969_13031 = G__13069;
continue;
} else {
var temp__5804__auto___13070 = cljs.core.seq(seq__11966_13028);
if(temp__5804__auto___13070){
var seq__11966_13072__$1 = temp__5804__auto___13070;
if(cljs.core.chunked_seq_QMARK_(seq__11966_13072__$1)){
var c__5525__auto___13073 = cljs.core.chunk_first(seq__11966_13072__$1);
var G__13074 = cljs.core.chunk_rest(seq__11966_13072__$1);
var G__13075 = c__5525__auto___13073;
var G__13076 = cljs.core.count(c__5525__auto___13073);
var G__13077 = (0);
seq__11966_13028 = G__13074;
chunk__11967_13029 = G__13075;
count__11968_13030 = G__13076;
i__11969_13031 = G__13077;
continue;
} else {
var child_struct_13079 = cljs.core.first(seq__11966_13072__$1);
var children_13080 = shadow.dom.dom_node(child_struct_13079);
if(cljs.core.seq_QMARK_(children_13080)){
var seq__12067_13082 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13080));
var chunk__12069_13083 = null;
var count__12070_13084 = (0);
var i__12071_13085 = (0);
while(true){
if((i__12071_13085 < count__12070_13084)){
var child_13088 = chunk__12069_13083.cljs$core$IIndexed$_nth$arity$2(null,i__12071_13085);
if(cljs.core.truth_(child_13088)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13088);


var G__13090 = seq__12067_13082;
var G__13091 = chunk__12069_13083;
var G__13092 = count__12070_13084;
var G__13093 = (i__12071_13085 + (1));
seq__12067_13082 = G__13090;
chunk__12069_13083 = G__13091;
count__12070_13084 = G__13092;
i__12071_13085 = G__13093;
continue;
} else {
var G__13094 = seq__12067_13082;
var G__13095 = chunk__12069_13083;
var G__13096 = count__12070_13084;
var G__13097 = (i__12071_13085 + (1));
seq__12067_13082 = G__13094;
chunk__12069_13083 = G__13095;
count__12070_13084 = G__13096;
i__12071_13085 = G__13097;
continue;
}
} else {
var temp__5804__auto___13099__$1 = cljs.core.seq(seq__12067_13082);
if(temp__5804__auto___13099__$1){
var seq__12067_13100__$1 = temp__5804__auto___13099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12067_13100__$1)){
var c__5525__auto___13102 = cljs.core.chunk_first(seq__12067_13100__$1);
var G__13103 = cljs.core.chunk_rest(seq__12067_13100__$1);
var G__13104 = c__5525__auto___13102;
var G__13105 = cljs.core.count(c__5525__auto___13102);
var G__13106 = (0);
seq__12067_13082 = G__13103;
chunk__12069_13083 = G__13104;
count__12070_13084 = G__13105;
i__12071_13085 = G__13106;
continue;
} else {
var child_13107 = cljs.core.first(seq__12067_13100__$1);
if(cljs.core.truth_(child_13107)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13107);


var G__13109 = cljs.core.next(seq__12067_13100__$1);
var G__13110 = null;
var G__13111 = (0);
var G__13112 = (0);
seq__12067_13082 = G__13109;
chunk__12069_13083 = G__13110;
count__12070_13084 = G__13111;
i__12071_13085 = G__13112;
continue;
} else {
var G__13113 = cljs.core.next(seq__12067_13100__$1);
var G__13114 = null;
var G__13115 = (0);
var G__13116 = (0);
seq__12067_13082 = G__13113;
chunk__12069_13083 = G__13114;
count__12070_13084 = G__13115;
i__12071_13085 = G__13116;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13080);
}


var G__13120 = cljs.core.next(seq__11966_13072__$1);
var G__13121 = null;
var G__13122 = (0);
var G__13123 = (0);
seq__11966_13028 = G__13120;
chunk__11967_13029 = G__13121;
count__11968_13030 = G__13122;
i__11969_13031 = G__13123;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12167 = cljs.core.seq(node);
var chunk__12168 = null;
var count__12169 = (0);
var i__12170 = (0);
while(true){
if((i__12170 < count__12169)){
var n = chunk__12168.cljs$core$IIndexed$_nth$arity$2(null,i__12170);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13128 = seq__12167;
var G__13129 = chunk__12168;
var G__13130 = count__12169;
var G__13131 = (i__12170 + (1));
seq__12167 = G__13128;
chunk__12168 = G__13129;
count__12169 = G__13130;
i__12170 = G__13131;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12167);
if(temp__5804__auto__){
var seq__12167__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12167__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12167__$1);
var G__13132 = cljs.core.chunk_rest(seq__12167__$1);
var G__13133 = c__5525__auto__;
var G__13134 = cljs.core.count(c__5525__auto__);
var G__13135 = (0);
seq__12167 = G__13132;
chunk__12168 = G__13133;
count__12169 = G__13134;
i__12170 = G__13135;
continue;
} else {
var n = cljs.core.first(seq__12167__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13136 = cljs.core.next(seq__12167__$1);
var G__13137 = null;
var G__13138 = (0);
var G__13139 = (0);
seq__12167 = G__13136;
chunk__12168 = G__13137;
count__12169 = G__13138;
i__12170 = G__13139;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12212 = arguments.length;
switch (G__12212) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12230 = arguments.length;
switch (G__12230) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12261 = arguments.length;
switch (G__12261) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13163 = arguments.length;
var i__5727__auto___13167 = (0);
while(true){
if((i__5727__auto___13167 < len__5726__auto___13163)){
args__5732__auto__.push((arguments[i__5727__auto___13167]));

var G__13169 = (i__5727__auto___13167 + (1));
i__5727__auto___13167 = G__13169;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12313_13171 = cljs.core.seq(nodes);
var chunk__12314_13172 = null;
var count__12315_13173 = (0);
var i__12316_13174 = (0);
while(true){
if((i__12316_13174 < count__12315_13173)){
var node_13176 = chunk__12314_13172.cljs$core$IIndexed$_nth$arity$2(null,i__12316_13174);
fragment.appendChild(shadow.dom._to_dom(node_13176));


var G__13179 = seq__12313_13171;
var G__13180 = chunk__12314_13172;
var G__13181 = count__12315_13173;
var G__13182 = (i__12316_13174 + (1));
seq__12313_13171 = G__13179;
chunk__12314_13172 = G__13180;
count__12315_13173 = G__13181;
i__12316_13174 = G__13182;
continue;
} else {
var temp__5804__auto___13183 = cljs.core.seq(seq__12313_13171);
if(temp__5804__auto___13183){
var seq__12313_13184__$1 = temp__5804__auto___13183;
if(cljs.core.chunked_seq_QMARK_(seq__12313_13184__$1)){
var c__5525__auto___13185 = cljs.core.chunk_first(seq__12313_13184__$1);
var G__13186 = cljs.core.chunk_rest(seq__12313_13184__$1);
var G__13187 = c__5525__auto___13185;
var G__13188 = cljs.core.count(c__5525__auto___13185);
var G__13189 = (0);
seq__12313_13171 = G__13186;
chunk__12314_13172 = G__13187;
count__12315_13173 = G__13188;
i__12316_13174 = G__13189;
continue;
} else {
var node_13190 = cljs.core.first(seq__12313_13184__$1);
fragment.appendChild(shadow.dom._to_dom(node_13190));


var G__13191 = cljs.core.next(seq__12313_13184__$1);
var G__13192 = null;
var G__13193 = (0);
var G__13194 = (0);
seq__12313_13171 = G__13191;
chunk__12314_13172 = G__13192;
count__12315_13173 = G__13193;
i__12316_13174 = G__13194;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12305){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12305));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12352_13195 = cljs.core.seq(scripts);
var chunk__12354_13196 = null;
var count__12355_13197 = (0);
var i__12356_13198 = (0);
while(true){
if((i__12356_13198 < count__12355_13197)){
var vec__12377_13200 = chunk__12354_13196.cljs$core$IIndexed$_nth$arity$2(null,i__12356_13198);
var script_tag_13201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12377_13200,(0),null);
var script_body_13202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12377_13200,(1),null);
eval(script_body_13202);


var G__13203 = seq__12352_13195;
var G__13204 = chunk__12354_13196;
var G__13205 = count__12355_13197;
var G__13206 = (i__12356_13198 + (1));
seq__12352_13195 = G__13203;
chunk__12354_13196 = G__13204;
count__12355_13197 = G__13205;
i__12356_13198 = G__13206;
continue;
} else {
var temp__5804__auto___13208 = cljs.core.seq(seq__12352_13195);
if(temp__5804__auto___13208){
var seq__12352_13209__$1 = temp__5804__auto___13208;
if(cljs.core.chunked_seq_QMARK_(seq__12352_13209__$1)){
var c__5525__auto___13210 = cljs.core.chunk_first(seq__12352_13209__$1);
var G__13211 = cljs.core.chunk_rest(seq__12352_13209__$1);
var G__13212 = c__5525__auto___13210;
var G__13213 = cljs.core.count(c__5525__auto___13210);
var G__13214 = (0);
seq__12352_13195 = G__13211;
chunk__12354_13196 = G__13212;
count__12355_13197 = G__13213;
i__12356_13198 = G__13214;
continue;
} else {
var vec__12387_13215 = cljs.core.first(seq__12352_13209__$1);
var script_tag_13216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12387_13215,(0),null);
var script_body_13217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12387_13215,(1),null);
eval(script_body_13217);


var G__13223 = cljs.core.next(seq__12352_13209__$1);
var G__13224 = null;
var G__13225 = (0);
var G__13226 = (0);
seq__12352_13195 = G__13223;
chunk__12354_13196 = G__13224;
count__12355_13197 = G__13225;
i__12356_13198 = G__13226;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12390){
var vec__12392 = p__12390;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12406 = arguments.length;
switch (G__12406) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12431 = cljs.core.seq(style_keys);
var chunk__12432 = null;
var count__12433 = (0);
var i__12434 = (0);
while(true){
if((i__12434 < count__12433)){
var it = chunk__12432.cljs$core$IIndexed$_nth$arity$2(null,i__12434);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13247 = seq__12431;
var G__13248 = chunk__12432;
var G__13249 = count__12433;
var G__13250 = (i__12434 + (1));
seq__12431 = G__13247;
chunk__12432 = G__13248;
count__12433 = G__13249;
i__12434 = G__13250;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12431);
if(temp__5804__auto__){
var seq__12431__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12431__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12431__$1);
var G__13251 = cljs.core.chunk_rest(seq__12431__$1);
var G__13252 = c__5525__auto__;
var G__13253 = cljs.core.count(c__5525__auto__);
var G__13254 = (0);
seq__12431 = G__13251;
chunk__12432 = G__13252;
count__12433 = G__13253;
i__12434 = G__13254;
continue;
} else {
var it = cljs.core.first(seq__12431__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13256 = cljs.core.next(seq__12431__$1);
var G__13257 = null;
var G__13258 = (0);
var G__13259 = (0);
seq__12431 = G__13256;
chunk__12432 = G__13257;
count__12433 = G__13258;
i__12434 = G__13259;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12446,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12470 = k12446;
var G__12470__$1 = (((G__12470 instanceof cljs.core.Keyword))?G__12470.fqn:null);
switch (G__12470__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12446,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12479){
var vec__12481 = p__12479;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12481,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12481,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12445){
var self__ = this;
var G__12445__$1 = this;
return (new cljs.core.RecordIter((0),G__12445__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12447,other12448){
var self__ = this;
var this12447__$1 = this;
return (((!((other12448 == null)))) && ((((this12447__$1.constructor === other12448.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12447__$1.x,other12448.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12447__$1.y,other12448.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12447__$1.__extmap,other12448.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12446){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12514 = k12446;
var G__12514__$1 = (((G__12514 instanceof cljs.core.Keyword))?G__12514.fqn:null);
switch (G__12514__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12446);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12445){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12517 = cljs.core.keyword_identical_QMARK_;
var expr__12518 = k__5309__auto__;
if(cljs.core.truth_((pred__12517.cljs$core$IFn$_invoke$arity$2 ? pred__12517.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12518) : pred__12517.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12518)))){
return (new shadow.dom.Coordinate(G__12445,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12517.cljs$core$IFn$_invoke$arity$2 ? pred__12517.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12518) : pred__12517.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12518)))){
return (new shadow.dom.Coordinate(self__.x,G__12445,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12445),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12445){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12445,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12461){
var extmap__5342__auto__ = (function (){var G__12531 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12461,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12461)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12531);
} else {
return G__12531;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12461),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12461),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12550,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12559 = k12550;
var G__12559__$1 = (((G__12559 instanceof cljs.core.Keyword))?G__12559.fqn:null);
switch (G__12559__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12550,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12562){
var vec__12563 = p__12562;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12549){
var self__ = this;
var G__12549__$1 = this;
return (new cljs.core.RecordIter((0),G__12549__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12551,other12552){
var self__ = this;
var this12551__$1 = this;
return (((!((other12552 == null)))) && ((((this12551__$1.constructor === other12552.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12551__$1.w,other12552.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12551__$1.h,other12552.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12551__$1.__extmap,other12552.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12550){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12594 = k12550;
var G__12594__$1 = (((G__12594 instanceof cljs.core.Keyword))?G__12594.fqn:null);
switch (G__12594__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12550);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12549){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12598 = cljs.core.keyword_identical_QMARK_;
var expr__12599 = k__5309__auto__;
if(cljs.core.truth_((pred__12598.cljs$core$IFn$_invoke$arity$2 ? pred__12598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12599) : pred__12598.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12599)))){
return (new shadow.dom.Size(G__12549,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12598.cljs$core$IFn$_invoke$arity$2 ? pred__12598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12599) : pred__12598.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12599)))){
return (new shadow.dom.Size(self__.w,G__12549,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12549),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12549){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12549,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12555){
var extmap__5342__auto__ = (function (){var G__12606 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12555,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12555)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12606);
} else {
return G__12606;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12555),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12555),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13439 = (i + (1));
var G__13440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13439;
ret = G__13440;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12636){
var vec__12637 = p__12636;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12637,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12643 = arguments.length;
switch (G__12643) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13466 = ps;
var G__13467 = (i + (1));
el__$1 = G__13466;
i = G__13467;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12687 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12687,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12693_13482 = cljs.core.seq(props);
var chunk__12694_13483 = null;
var count__12695_13484 = (0);
var i__12696_13485 = (0);
while(true){
if((i__12696_13485 < count__12695_13484)){
var vec__12715_13489 = chunk__12694_13483.cljs$core$IIndexed$_nth$arity$2(null,i__12696_13485);
var k_13490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12715_13489,(0),null);
var v_13491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12715_13489,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13490);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13490),v_13491);


var G__13493 = seq__12693_13482;
var G__13494 = chunk__12694_13483;
var G__13495 = count__12695_13484;
var G__13496 = (i__12696_13485 + (1));
seq__12693_13482 = G__13493;
chunk__12694_13483 = G__13494;
count__12695_13484 = G__13495;
i__12696_13485 = G__13496;
continue;
} else {
var temp__5804__auto___13524 = cljs.core.seq(seq__12693_13482);
if(temp__5804__auto___13524){
var seq__12693_13525__$1 = temp__5804__auto___13524;
if(cljs.core.chunked_seq_QMARK_(seq__12693_13525__$1)){
var c__5525__auto___13526 = cljs.core.chunk_first(seq__12693_13525__$1);
var G__13527 = cljs.core.chunk_rest(seq__12693_13525__$1);
var G__13528 = c__5525__auto___13526;
var G__13529 = cljs.core.count(c__5525__auto___13526);
var G__13530 = (0);
seq__12693_13482 = G__13527;
chunk__12694_13483 = G__13528;
count__12695_13484 = G__13529;
i__12696_13485 = G__13530;
continue;
} else {
var vec__12726_13533 = cljs.core.first(seq__12693_13525__$1);
var k_13534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12726_13533,(0),null);
var v_13535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12726_13533,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13534);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13534),v_13535);


var G__13550 = cljs.core.next(seq__12693_13525__$1);
var G__13551 = null;
var G__13552 = (0);
var G__13553 = (0);
seq__12693_13482 = G__13550;
chunk__12694_13483 = G__13551;
count__12695_13484 = G__13552;
i__12696_13485 = G__13553;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12741 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12741,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12741,(1),null);
var seq__12747_13560 = cljs.core.seq(node_children);
var chunk__12749_13561 = null;
var count__12750_13562 = (0);
var i__12751_13563 = (0);
while(true){
if((i__12751_13563 < count__12750_13562)){
var child_struct_13568 = chunk__12749_13561.cljs$core$IIndexed$_nth$arity$2(null,i__12751_13563);
if((!((child_struct_13568 == null)))){
if(typeof child_struct_13568 === 'string'){
var text_13569 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13569),child_struct_13568].join(''));
} else {
var children_13582 = shadow.dom.svg_node(child_struct_13568);
if(cljs.core.seq_QMARK_(children_13582)){
var seq__12799_13583 = cljs.core.seq(children_13582);
var chunk__12801_13584 = null;
var count__12802_13585 = (0);
var i__12803_13586 = (0);
while(true){
if((i__12803_13586 < count__12802_13585)){
var child_13589 = chunk__12801_13584.cljs$core$IIndexed$_nth$arity$2(null,i__12803_13586);
if(cljs.core.truth_(child_13589)){
node.appendChild(child_13589);


var G__13590 = seq__12799_13583;
var G__13591 = chunk__12801_13584;
var G__13592 = count__12802_13585;
var G__13593 = (i__12803_13586 + (1));
seq__12799_13583 = G__13590;
chunk__12801_13584 = G__13591;
count__12802_13585 = G__13592;
i__12803_13586 = G__13593;
continue;
} else {
var G__13596 = seq__12799_13583;
var G__13597 = chunk__12801_13584;
var G__13598 = count__12802_13585;
var G__13599 = (i__12803_13586 + (1));
seq__12799_13583 = G__13596;
chunk__12801_13584 = G__13597;
count__12802_13585 = G__13598;
i__12803_13586 = G__13599;
continue;
}
} else {
var temp__5804__auto___13601 = cljs.core.seq(seq__12799_13583);
if(temp__5804__auto___13601){
var seq__12799_13602__$1 = temp__5804__auto___13601;
if(cljs.core.chunked_seq_QMARK_(seq__12799_13602__$1)){
var c__5525__auto___13603 = cljs.core.chunk_first(seq__12799_13602__$1);
var G__13604 = cljs.core.chunk_rest(seq__12799_13602__$1);
var G__13605 = c__5525__auto___13603;
var G__13606 = cljs.core.count(c__5525__auto___13603);
var G__13607 = (0);
seq__12799_13583 = G__13604;
chunk__12801_13584 = G__13605;
count__12802_13585 = G__13606;
i__12803_13586 = G__13607;
continue;
} else {
var child_13609 = cljs.core.first(seq__12799_13602__$1);
if(cljs.core.truth_(child_13609)){
node.appendChild(child_13609);


var G__13610 = cljs.core.next(seq__12799_13602__$1);
var G__13611 = null;
var G__13612 = (0);
var G__13613 = (0);
seq__12799_13583 = G__13610;
chunk__12801_13584 = G__13611;
count__12802_13585 = G__13612;
i__12803_13586 = G__13613;
continue;
} else {
var G__13614 = cljs.core.next(seq__12799_13602__$1);
var G__13615 = null;
var G__13616 = (0);
var G__13617 = (0);
seq__12799_13583 = G__13614;
chunk__12801_13584 = G__13615;
count__12802_13585 = G__13616;
i__12803_13586 = G__13617;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13582);
}
}


var G__13621 = seq__12747_13560;
var G__13622 = chunk__12749_13561;
var G__13623 = count__12750_13562;
var G__13624 = (i__12751_13563 + (1));
seq__12747_13560 = G__13621;
chunk__12749_13561 = G__13622;
count__12750_13562 = G__13623;
i__12751_13563 = G__13624;
continue;
} else {
var G__13626 = seq__12747_13560;
var G__13627 = chunk__12749_13561;
var G__13628 = count__12750_13562;
var G__13629 = (i__12751_13563 + (1));
seq__12747_13560 = G__13626;
chunk__12749_13561 = G__13627;
count__12750_13562 = G__13628;
i__12751_13563 = G__13629;
continue;
}
} else {
var temp__5804__auto___13630 = cljs.core.seq(seq__12747_13560);
if(temp__5804__auto___13630){
var seq__12747_13631__$1 = temp__5804__auto___13630;
if(cljs.core.chunked_seq_QMARK_(seq__12747_13631__$1)){
var c__5525__auto___13633 = cljs.core.chunk_first(seq__12747_13631__$1);
var G__13635 = cljs.core.chunk_rest(seq__12747_13631__$1);
var G__13636 = c__5525__auto___13633;
var G__13637 = cljs.core.count(c__5525__auto___13633);
var G__13638 = (0);
seq__12747_13560 = G__13635;
chunk__12749_13561 = G__13636;
count__12750_13562 = G__13637;
i__12751_13563 = G__13638;
continue;
} else {
var child_struct_13642 = cljs.core.first(seq__12747_13631__$1);
if((!((child_struct_13642 == null)))){
if(typeof child_struct_13642 === 'string'){
var text_13644 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13644),child_struct_13642].join(''));
} else {
var children_13647 = shadow.dom.svg_node(child_struct_13642);
if(cljs.core.seq_QMARK_(children_13647)){
var seq__12823_13649 = cljs.core.seq(children_13647);
var chunk__12825_13650 = null;
var count__12826_13651 = (0);
var i__12827_13652 = (0);
while(true){
if((i__12827_13652 < count__12826_13651)){
var child_13656 = chunk__12825_13650.cljs$core$IIndexed$_nth$arity$2(null,i__12827_13652);
if(cljs.core.truth_(child_13656)){
node.appendChild(child_13656);


var G__13661 = seq__12823_13649;
var G__13662 = chunk__12825_13650;
var G__13663 = count__12826_13651;
var G__13664 = (i__12827_13652 + (1));
seq__12823_13649 = G__13661;
chunk__12825_13650 = G__13662;
count__12826_13651 = G__13663;
i__12827_13652 = G__13664;
continue;
} else {
var G__13665 = seq__12823_13649;
var G__13666 = chunk__12825_13650;
var G__13667 = count__12826_13651;
var G__13668 = (i__12827_13652 + (1));
seq__12823_13649 = G__13665;
chunk__12825_13650 = G__13666;
count__12826_13651 = G__13667;
i__12827_13652 = G__13668;
continue;
}
} else {
var temp__5804__auto___13670__$1 = cljs.core.seq(seq__12823_13649);
if(temp__5804__auto___13670__$1){
var seq__12823_13672__$1 = temp__5804__auto___13670__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12823_13672__$1)){
var c__5525__auto___13673 = cljs.core.chunk_first(seq__12823_13672__$1);
var G__13674 = cljs.core.chunk_rest(seq__12823_13672__$1);
var G__13675 = c__5525__auto___13673;
var G__13676 = cljs.core.count(c__5525__auto___13673);
var G__13677 = (0);
seq__12823_13649 = G__13674;
chunk__12825_13650 = G__13675;
count__12826_13651 = G__13676;
i__12827_13652 = G__13677;
continue;
} else {
var child_13680 = cljs.core.first(seq__12823_13672__$1);
if(cljs.core.truth_(child_13680)){
node.appendChild(child_13680);


var G__13681 = cljs.core.next(seq__12823_13672__$1);
var G__13682 = null;
var G__13683 = (0);
var G__13684 = (0);
seq__12823_13649 = G__13681;
chunk__12825_13650 = G__13682;
count__12826_13651 = G__13683;
i__12827_13652 = G__13684;
continue;
} else {
var G__13687 = cljs.core.next(seq__12823_13672__$1);
var G__13688 = null;
var G__13689 = (0);
var G__13690 = (0);
seq__12823_13649 = G__13687;
chunk__12825_13650 = G__13688;
count__12826_13651 = G__13689;
i__12827_13652 = G__13690;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13647);
}
}


var G__13692 = cljs.core.next(seq__12747_13631__$1);
var G__13693 = null;
var G__13694 = (0);
var G__13695 = (0);
seq__12747_13560 = G__13692;
chunk__12749_13561 = G__13693;
count__12750_13562 = G__13694;
i__12751_13563 = G__13695;
continue;
} else {
var G__13696 = cljs.core.next(seq__12747_13631__$1);
var G__13697 = null;
var G__13698 = (0);
var G__13699 = (0);
seq__12747_13560 = G__13696;
chunk__12749_13561 = G__13697;
count__12750_13562 = G__13698;
i__12751_13563 = G__13699;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13720 = arguments.length;
var i__5727__auto___13721 = (0);
while(true){
if((i__5727__auto___13721 < len__5726__auto___13720)){
args__5732__auto__.push((arguments[i__5727__auto___13721]));

var G__13722 = (i__5727__auto___13721 + (1));
i__5727__auto___13721 = G__13722;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12853){
var G__12854 = cljs.core.first(seq12853);
var seq12853__$1 = cljs.core.next(seq12853);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12854,seq12853__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
