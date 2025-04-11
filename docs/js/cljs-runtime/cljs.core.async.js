goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14584 = (function (f,blockable,meta14585){
this.f = f;
this.blockable = blockable;
this.meta14585 = meta14585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14586,meta14585__$1){
var self__ = this;
var _14586__$1 = this;
return (new cljs.core.async.t_cljs$core$async14584(self__.f,self__.blockable,meta14585__$1));
}));

(cljs.core.async.t_cljs$core$async14584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14586){
var self__ = this;
var _14586__$1 = this;
return self__.meta14585;
}));

(cljs.core.async.t_cljs$core$async14584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14585","meta14585",1145503950,null)], null);
}));

(cljs.core.async.t_cljs$core$async14584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14584");

(cljs.core.async.t_cljs$core$async14584.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14584.
 */
cljs.core.async.__GT_t_cljs$core$async14584 = (function cljs$core$async$__GT_t_cljs$core$async14584(f,blockable,meta14585){
return (new cljs.core.async.t_cljs$core$async14584(f,blockable,meta14585));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14582 = arguments.length;
switch (G__14582) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14584(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14600 = arguments.length;
switch (G__14600) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14602 = arguments.length;
switch (G__14602) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14606 = arguments.length;
switch (G__14606) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17793 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17793) : fn1.call(null,val_17793));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17793) : fn1.call(null,val_17793));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14619 = arguments.length;
switch (G__14619) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17799 = n;
var x_17800 = (0);
while(true){
if((x_17800 < n__5593__auto___17799)){
(a[x_17800] = x_17800);

var G__17802 = (x_17800 + (1));
x_17800 = G__17802;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14640 = (function (flag,meta14641){
this.flag = flag;
this.meta14641 = meta14641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14642,meta14641__$1){
var self__ = this;
var _14642__$1 = this;
return (new cljs.core.async.t_cljs$core$async14640(self__.flag,meta14641__$1));
}));

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14642){
var self__ = this;
var _14642__$1 = this;
return self__.meta14641;
}));

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14641","meta14641",1285970857,null)], null);
}));

(cljs.core.async.t_cljs$core$async14640.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14640");

(cljs.core.async.t_cljs$core$async14640.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14640");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14640.
 */
cljs.core.async.__GT_t_cljs$core$async14640 = (function cljs$core$async$__GT_t_cljs$core$async14640(flag,meta14641){
return (new cljs.core.async.t_cljs$core$async14640(flag,meta14641));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14640(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14673 = (function (flag,cb,meta14674){
this.flag = flag;
this.cb = cb;
this.meta14674 = meta14674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14675,meta14674__$1){
var self__ = this;
var _14675__$1 = this;
return (new cljs.core.async.t_cljs$core$async14673(self__.flag,self__.cb,meta14674__$1));
}));

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14675){
var self__ = this;
var _14675__$1 = this;
return self__.meta14674;
}));

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14674","meta14674",308514992,null)], null);
}));

(cljs.core.async.t_cljs$core$async14673.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14673");

(cljs.core.async.t_cljs$core$async14673.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14673");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14673.
 */
cljs.core.async.__GT_t_cljs$core$async14673 = (function cljs$core$async$__GT_t_cljs$core$async14673(flag,cb,meta14674){
return (new cljs.core.async.t_cljs$core$async14673(flag,cb,meta14674));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14673(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14688_SHARP_){
var G__14705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14688_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14705) : fret.call(null,G__14705));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14689_SHARP_){
var G__14706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14689_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14706) : fret.call(null,G__14706));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17834 = (i + (1));
i = G__17834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17836 = arguments.length;
var i__5727__auto___17837 = (0);
while(true){
if((i__5727__auto___17837 < len__5726__auto___17836)){
args__5732__auto__.push((arguments[i__5727__auto___17837]));

var G__17840 = (i__5727__auto___17837 + (1));
i__5727__auto___17837 = G__17840;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14728){
var map__14729 = p__14728;
var map__14729__$1 = cljs.core.__destructure_map(map__14729);
var opts = map__14729__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14716){
var G__14717 = cljs.core.first(seq14716);
var seq14716__$1 = cljs.core.next(seq14716);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14717,seq14716__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14750 = arguments.length;
switch (G__14750) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14499__auto___17847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_14807){
var state_val_14808 = (state_14807[(1)]);
if((state_val_14808 === (7))){
var inst_14803 = (state_14807[(2)]);
var state_14807__$1 = state_14807;
var statearr_14818_17848 = state_14807__$1;
(statearr_14818_17848[(2)] = inst_14803);

(statearr_14818_17848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (1))){
var state_14807__$1 = state_14807;
var statearr_14826_17849 = state_14807__$1;
(statearr_14826_17849[(2)] = null);

(statearr_14826_17849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (4))){
var inst_14777 = (state_14807[(7)]);
var inst_14777__$1 = (state_14807[(2)]);
var inst_14780 = (inst_14777__$1 == null);
var state_14807__$1 = (function (){var statearr_14828 = state_14807;
(statearr_14828[(7)] = inst_14777__$1);

return statearr_14828;
})();
if(cljs.core.truth_(inst_14780)){
var statearr_14830_17850 = state_14807__$1;
(statearr_14830_17850[(1)] = (5));

} else {
var statearr_14833_17851 = state_14807__$1;
(statearr_14833_17851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (13))){
var state_14807__$1 = state_14807;
var statearr_14836_17854 = state_14807__$1;
(statearr_14836_17854[(2)] = null);

(statearr_14836_17854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (6))){
var inst_14777 = (state_14807[(7)]);
var state_14807__$1 = state_14807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14807__$1,(11),to,inst_14777);
} else {
if((state_val_14808 === (3))){
var inst_14805 = (state_14807[(2)]);
var state_14807__$1 = state_14807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14807__$1,inst_14805);
} else {
if((state_val_14808 === (12))){
var state_14807__$1 = state_14807;
var statearr_14843_17864 = state_14807__$1;
(statearr_14843_17864[(2)] = null);

(statearr_14843_17864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (2))){
var state_14807__$1 = state_14807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14807__$1,(4),from);
} else {
if((state_val_14808 === (11))){
var inst_14790 = (state_14807[(2)]);
var state_14807__$1 = state_14807;
if(cljs.core.truth_(inst_14790)){
var statearr_14852_17867 = state_14807__$1;
(statearr_14852_17867[(1)] = (12));

} else {
var statearr_14853_17868 = state_14807__$1;
(statearr_14853_17868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (9))){
var state_14807__$1 = state_14807;
var statearr_14854_17869 = state_14807__$1;
(statearr_14854_17869[(2)] = null);

(statearr_14854_17869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (5))){
var state_14807__$1 = state_14807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14855_17870 = state_14807__$1;
(statearr_14855_17870[(1)] = (8));

} else {
var statearr_14856_17871 = state_14807__$1;
(statearr_14856_17871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (14))){
var inst_14801 = (state_14807[(2)]);
var state_14807__$1 = state_14807;
var statearr_14857_17872 = state_14807__$1;
(statearr_14857_17872[(2)] = inst_14801);

(statearr_14857_17872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (10))){
var inst_14787 = (state_14807[(2)]);
var state_14807__$1 = state_14807;
var statearr_14862_17873 = state_14807__$1;
(statearr_14862_17873[(2)] = inst_14787);

(statearr_14862_17873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14808 === (8))){
var inst_14784 = cljs.core.async.close_BANG_(to);
var state_14807__$1 = state_14807;
var statearr_14864_17874 = state_14807__$1;
(statearr_14864_17874[(2)] = inst_14784);

(statearr_14864_17874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_14866 = [null,null,null,null,null,null,null,null];
(statearr_14866[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_14866[(1)] = (1));

return statearr_14866;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_14807){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_14807);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e14867){var ex__14289__auto__ = e14867;
var statearr_14868_17875 = state_14807;
(statearr_14868_17875[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_14807[(4)]))){
var statearr_14869_17876 = state_14807;
(statearr_14869_17876[(1)] = cljs.core.first((state_14807[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17877 = state_14807;
state_14807 = G__17877;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_14807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_14807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_14870 = f__14500__auto__();
(statearr_14870[(6)] = c__14499__auto___17847);

return statearr_14870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14900){
var vec__14901 = p__14900;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(1),null);
var job = vec__14901;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14499__auto___17882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_14908){
var state_val_14909 = (state_14908[(1)]);
if((state_val_14909 === (1))){
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14908__$1,(2),res,v);
} else {
if((state_val_14909 === (2))){
var inst_14905 = (state_14908[(2)]);
var inst_14906 = cljs.core.async.close_BANG_(res);
var state_14908__$1 = (function (){var statearr_14910 = state_14908;
(statearr_14910[(7)] = inst_14905);

return statearr_14910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14908__$1,inst_14906);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0 = (function (){
var statearr_14912 = [null,null,null,null,null,null,null,null];
(statearr_14912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__);

(statearr_14912[(1)] = (1));

return statearr_14912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1 = (function (state_14908){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_14908);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e14916){var ex__14289__auto__ = e14916;
var statearr_14919_17894 = state_14908;
(statearr_14919_17894[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_14908[(4)]))){
var statearr_14922_17898 = state_14908;
(statearr_14922_17898[(1)] = cljs.core.first((state_14908[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17899 = state_14908;
state_14908 = G__17899;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = function(state_14908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1.call(this,state_14908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_14923 = f__14500__auto__();
(statearr_14923[(6)] = c__14499__auto___17882);

return statearr_14923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14924){
var vec__14925 = p__14924;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14925,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14925,(1),null);
var job = vec__14925;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17902 = n;
var __17904 = (0);
while(true){
if((__17904 < n__5593__auto___17902)){
var G__14930_17905 = type;
var G__14930_17906__$1 = (((G__14930_17905 instanceof cljs.core.Keyword))?G__14930_17905.fqn:null);
switch (G__14930_17906__$1) {
case "compute":
var c__14499__auto___17908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17904,c__14499__auto___17908,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async){
return (function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = ((function (__17904,c__14499__auto___17908,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async){
return (function (state_14946){
var state_val_14947 = (state_14946[(1)]);
if((state_val_14947 === (1))){
var state_14946__$1 = state_14946;
var statearr_14968_17916 = state_14946__$1;
(statearr_14968_17916[(2)] = null);

(statearr_14968_17916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14947 === (2))){
var state_14946__$1 = state_14946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14946__$1,(4),jobs);
} else {
if((state_val_14947 === (3))){
var inst_14943 = (state_14946[(2)]);
var state_14946__$1 = state_14946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14946__$1,inst_14943);
} else {
if((state_val_14947 === (4))){
var inst_14934 = (state_14946[(2)]);
var inst_14936 = process__$1(inst_14934);
var state_14946__$1 = state_14946;
if(cljs.core.truth_(inst_14936)){
var statearr_14984_17922 = state_14946__$1;
(statearr_14984_17922[(1)] = (5));

} else {
var statearr_14986_17923 = state_14946__$1;
(statearr_14986_17923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14947 === (5))){
var state_14946__$1 = state_14946;
var statearr_14989_17924 = state_14946__$1;
(statearr_14989_17924[(2)] = null);

(statearr_14989_17924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14947 === (6))){
var state_14946__$1 = state_14946;
var statearr_14990_17926 = state_14946__$1;
(statearr_14990_17926[(2)] = null);

(statearr_14990_17926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14947 === (7))){
var inst_14941 = (state_14946[(2)]);
var state_14946__$1 = state_14946;
var statearr_14993_17927 = state_14946__$1;
(statearr_14993_17927[(2)] = inst_14941);

(statearr_14993_17927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17904,c__14499__auto___17908,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async))
;
return ((function (__17904,switch__14285__auto__,c__14499__auto___17908,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0 = (function (){
var statearr_14999 = [null,null,null,null,null,null,null];
(statearr_14999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__);

(statearr_14999[(1)] = (1));

return statearr_14999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1 = (function (state_14946){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_14946);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e15002){var ex__14289__auto__ = e15002;
var statearr_15003_17937 = state_14946;
(statearr_15003_17937[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_14946[(4)]))){
var statearr_15006_17938 = state_14946;
(statearr_15006_17938[(1)] = cljs.core.first((state_14946[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17942 = state_14946;
state_14946 = G__17942;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = function(state_14946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1.call(this,state_14946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__;
})()
;})(__17904,switch__14285__auto__,c__14499__auto___17908,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async))
})();
var state__14501__auto__ = (function (){var statearr_15013 = f__14500__auto__();
(statearr_15013[(6)] = c__14499__auto___17908);

return statearr_15013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
});})(__17904,c__14499__auto___17908,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async))
);


break;
case "async":
var c__14499__auto___17947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17904,c__14499__auto___17947,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async){
return (function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = ((function (__17904,c__14499__auto___17947,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async){
return (function (state_15030){
var state_val_15031 = (state_15030[(1)]);
if((state_val_15031 === (1))){
var state_15030__$1 = state_15030;
var statearr_15038_17955 = state_15030__$1;
(statearr_15038_17955[(2)] = null);

(statearr_15038_17955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15031 === (2))){
var state_15030__$1 = state_15030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15030__$1,(4),jobs);
} else {
if((state_val_15031 === (3))){
var inst_15028 = (state_15030[(2)]);
var state_15030__$1 = state_15030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15030__$1,inst_15028);
} else {
if((state_val_15031 === (4))){
var inst_15020 = (state_15030[(2)]);
var inst_15021 = async(inst_15020);
var state_15030__$1 = state_15030;
if(cljs.core.truth_(inst_15021)){
var statearr_15044_17959 = state_15030__$1;
(statearr_15044_17959[(1)] = (5));

} else {
var statearr_15045_17960 = state_15030__$1;
(statearr_15045_17960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15031 === (5))){
var state_15030__$1 = state_15030;
var statearr_15046_17961 = state_15030__$1;
(statearr_15046_17961[(2)] = null);

(statearr_15046_17961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15031 === (6))){
var state_15030__$1 = state_15030;
var statearr_15047_17964 = state_15030__$1;
(statearr_15047_17964[(2)] = null);

(statearr_15047_17964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15031 === (7))){
var inst_15026 = (state_15030[(2)]);
var state_15030__$1 = state_15030;
var statearr_15048_17966 = state_15030__$1;
(statearr_15048_17966[(2)] = inst_15026);

(statearr_15048_17966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17904,c__14499__auto___17947,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async))
;
return ((function (__17904,switch__14285__auto__,c__14499__auto___17947,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0 = (function (){
var statearr_15051 = [null,null,null,null,null,null,null];
(statearr_15051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__);

(statearr_15051[(1)] = (1));

return statearr_15051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1 = (function (state_15030){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_15030);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e15054){var ex__14289__auto__ = e15054;
var statearr_15055_17967 = state_15030;
(statearr_15055_17967[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_15030[(4)]))){
var statearr_15059_17968 = state_15030;
(statearr_15059_17968[(1)] = cljs.core.first((state_15030[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17969 = state_15030;
state_15030 = G__17969;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = function(state_15030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1.call(this,state_15030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__;
})()
;})(__17904,switch__14285__auto__,c__14499__auto___17947,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async))
})();
var state__14501__auto__ = (function (){var statearr_15068 = f__14500__auto__();
(statearr_15068[(6)] = c__14499__auto___17947);

return statearr_15068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
});})(__17904,c__14499__auto___17947,G__14930_17905,G__14930_17906__$1,n__5593__auto___17902,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14930_17906__$1)].join('')));

}

var G__17970 = (__17904 + (1));
__17904 = G__17970;
continue;
} else {
}
break;
}

var c__14499__auto___17971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_15100){
var state_val_15102 = (state_15100[(1)]);
if((state_val_15102 === (7))){
var inst_15092 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
var statearr_15110_17975 = state_15100__$1;
(statearr_15110_17975[(2)] = inst_15092);

(statearr_15110_17975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (1))){
var state_15100__$1 = state_15100;
var statearr_15111_17976 = state_15100__$1;
(statearr_15111_17976[(2)] = null);

(statearr_15111_17976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (4))){
var inst_15072 = (state_15100[(7)]);
var inst_15072__$1 = (state_15100[(2)]);
var inst_15073 = (inst_15072__$1 == null);
var state_15100__$1 = (function (){var statearr_15112 = state_15100;
(statearr_15112[(7)] = inst_15072__$1);

return statearr_15112;
})();
if(cljs.core.truth_(inst_15073)){
var statearr_15113_17980 = state_15100__$1;
(statearr_15113_17980[(1)] = (5));

} else {
var statearr_15115_17981 = state_15100__$1;
(statearr_15115_17981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (6))){
var inst_15072 = (state_15100[(7)]);
var inst_15077 = (state_15100[(8)]);
var inst_15077__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15082 = [inst_15072,inst_15077__$1];
var inst_15083 = (new cljs.core.PersistentVector(null,2,(5),inst_15078,inst_15082,null));
var state_15100__$1 = (function (){var statearr_15117 = state_15100;
(statearr_15117[(8)] = inst_15077__$1);

return statearr_15117;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15100__$1,(8),jobs,inst_15083);
} else {
if((state_val_15102 === (3))){
var inst_15094 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15100__$1,inst_15094);
} else {
if((state_val_15102 === (2))){
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15100__$1,(4),from);
} else {
if((state_val_15102 === (9))){
var inst_15089 = (state_15100[(2)]);
var state_15100__$1 = (function (){var statearr_15126 = state_15100;
(statearr_15126[(9)] = inst_15089);

return statearr_15126;
})();
var statearr_15127_17982 = state_15100__$1;
(statearr_15127_17982[(2)] = null);

(statearr_15127_17982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (5))){
var inst_15075 = cljs.core.async.close_BANG_(jobs);
var state_15100__$1 = state_15100;
var statearr_15128_17987 = state_15100__$1;
(statearr_15128_17987[(2)] = inst_15075);

(statearr_15128_17987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15102 === (8))){
var inst_15077 = (state_15100[(8)]);
var inst_15085 = (state_15100[(2)]);
var state_15100__$1 = (function (){var statearr_15133 = state_15100;
(statearr_15133[(10)] = inst_15085);

return statearr_15133;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15100__$1,(9),results,inst_15077);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0 = (function (){
var statearr_15136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__);

(statearr_15136[(1)] = (1));

return statearr_15136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1 = (function (state_15100){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_15100);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e15139){var ex__14289__auto__ = e15139;
var statearr_15140_17989 = state_15100;
(statearr_15140_17989[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_15100[(4)]))){
var statearr_15143_17990 = state_15100;
(statearr_15143_17990[(1)] = cljs.core.first((state_15100[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17991 = state_15100;
state_15100 = G__17991;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = function(state_15100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1.call(this,state_15100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_15148 = f__14500__auto__();
(statearr_15148[(6)] = c__14499__auto___17971);

return statearr_15148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


var c__14499__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_15203){
var state_val_15207 = (state_15203[(1)]);
if((state_val_15207 === (7))){
var inst_15199 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
var statearr_15215_17993 = state_15203__$1;
(statearr_15215_17993[(2)] = inst_15199);

(statearr_15215_17993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (20))){
var state_15203__$1 = state_15203;
var statearr_15217_17994 = state_15203__$1;
(statearr_15217_17994[(2)] = null);

(statearr_15217_17994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (1))){
var state_15203__$1 = state_15203;
var statearr_15218_17995 = state_15203__$1;
(statearr_15218_17995[(2)] = null);

(statearr_15218_17995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (4))){
var inst_15164 = (state_15203[(7)]);
var inst_15164__$1 = (state_15203[(2)]);
var inst_15165 = (inst_15164__$1 == null);
var state_15203__$1 = (function (){var statearr_15222 = state_15203;
(statearr_15222[(7)] = inst_15164__$1);

return statearr_15222;
})();
if(cljs.core.truth_(inst_15165)){
var statearr_15227_17996 = state_15203__$1;
(statearr_15227_17996[(1)] = (5));

} else {
var statearr_15228_17997 = state_15203__$1;
(statearr_15228_17997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (15))){
var inst_15177 = (state_15203[(8)]);
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15203__$1,(18),to,inst_15177);
} else {
if((state_val_15207 === (21))){
var inst_15193 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
var statearr_15232_17998 = state_15203__$1;
(statearr_15232_17998[(2)] = inst_15193);

(statearr_15232_17998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (13))){
var inst_15196 = (state_15203[(2)]);
var state_15203__$1 = (function (){var statearr_15235 = state_15203;
(statearr_15235[(9)] = inst_15196);

return statearr_15235;
})();
var statearr_15238_17999 = state_15203__$1;
(statearr_15238_17999[(2)] = null);

(statearr_15238_17999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (6))){
var inst_15164 = (state_15203[(7)]);
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15203__$1,(11),inst_15164);
} else {
if((state_val_15207 === (17))){
var inst_15187 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
if(cljs.core.truth_(inst_15187)){
var statearr_15240_18004 = state_15203__$1;
(statearr_15240_18004[(1)] = (19));

} else {
var statearr_15242_18005 = state_15203__$1;
(statearr_15242_18005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (3))){
var inst_15201 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15203__$1,inst_15201);
} else {
if((state_val_15207 === (12))){
var inst_15174 = (state_15203[(10)]);
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15203__$1,(14),inst_15174);
} else {
if((state_val_15207 === (2))){
var state_15203__$1 = state_15203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15203__$1,(4),results);
} else {
if((state_val_15207 === (19))){
var state_15203__$1 = state_15203;
var statearr_15248_18008 = state_15203__$1;
(statearr_15248_18008[(2)] = null);

(statearr_15248_18008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (11))){
var inst_15174 = (state_15203[(2)]);
var state_15203__$1 = (function (){var statearr_15252 = state_15203;
(statearr_15252[(10)] = inst_15174);

return statearr_15252;
})();
var statearr_15255_18009 = state_15203__$1;
(statearr_15255_18009[(2)] = null);

(statearr_15255_18009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (9))){
var state_15203__$1 = state_15203;
var statearr_15257_18015 = state_15203__$1;
(statearr_15257_18015[(2)] = null);

(statearr_15257_18015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (5))){
var state_15203__$1 = state_15203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15261_18029 = state_15203__$1;
(statearr_15261_18029[(1)] = (8));

} else {
var statearr_15262_18030 = state_15203__$1;
(statearr_15262_18030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (14))){
var inst_15181 = (state_15203[(11)]);
var inst_15177 = (state_15203[(8)]);
var inst_15177__$1 = (state_15203[(2)]);
var inst_15180 = (inst_15177__$1 == null);
var inst_15181__$1 = cljs.core.not(inst_15180);
var state_15203__$1 = (function (){var statearr_15266 = state_15203;
(statearr_15266[(11)] = inst_15181__$1);

(statearr_15266[(8)] = inst_15177__$1);

return statearr_15266;
})();
if(inst_15181__$1){
var statearr_15272_18041 = state_15203__$1;
(statearr_15272_18041[(1)] = (15));

} else {
var statearr_15274_18042 = state_15203__$1;
(statearr_15274_18042[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (16))){
var inst_15181 = (state_15203[(11)]);
var state_15203__$1 = state_15203;
var statearr_15276_18043 = state_15203__$1;
(statearr_15276_18043[(2)] = inst_15181);

(statearr_15276_18043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (10))){
var inst_15171 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
var statearr_15278_18044 = state_15203__$1;
(statearr_15278_18044[(2)] = inst_15171);

(statearr_15278_18044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (18))){
var inst_15184 = (state_15203[(2)]);
var state_15203__$1 = state_15203;
var statearr_15288_18045 = state_15203__$1;
(statearr_15288_18045[(2)] = inst_15184);

(statearr_15288_18045[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15207 === (8))){
var inst_15168 = cljs.core.async.close_BANG_(to);
var state_15203__$1 = state_15203;
var statearr_15297_18046 = state_15203__$1;
(statearr_15297_18046[(2)] = inst_15168);

(statearr_15297_18046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0 = (function (){
var statearr_15310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__);

(statearr_15310[(1)] = (1));

return statearr_15310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1 = (function (state_15203){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_15203);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e15325){var ex__14289__auto__ = e15325;
var statearr_15326_18048 = state_15203;
(statearr_15326_18048[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_15203[(4)]))){
var statearr_15331_18049 = state_15203;
(statearr_15331_18049[(1)] = cljs.core.first((state_15203[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18050 = state_15203;
state_15203 = G__18050;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__ = function(state_15203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1.call(this,state_15203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_15343 = f__14500__auto__();
(statearr_15343[(6)] = c__14499__auto__);

return statearr_15343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));

return c__14499__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15352 = arguments.length;
switch (G__15352) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15359 = arguments.length;
switch (G__15359) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15387 = arguments.length;
switch (G__15387) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14499__auto___18060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_15447){
var state_val_15449 = (state_15447[(1)]);
if((state_val_15449 === (7))){
var inst_15439 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15461_18061 = state_15447__$1;
(statearr_15461_18061[(2)] = inst_15439);

(statearr_15461_18061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (1))){
var state_15447__$1 = state_15447;
var statearr_15476_18062 = state_15447__$1;
(statearr_15476_18062[(2)] = null);

(statearr_15476_18062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (4))){
var inst_15413 = (state_15447[(7)]);
var inst_15413__$1 = (state_15447[(2)]);
var inst_15415 = (inst_15413__$1 == null);
var state_15447__$1 = (function (){var statearr_15479 = state_15447;
(statearr_15479[(7)] = inst_15413__$1);

return statearr_15479;
})();
if(cljs.core.truth_(inst_15415)){
var statearr_15483_18068 = state_15447__$1;
(statearr_15483_18068[(1)] = (5));

} else {
var statearr_15484_18069 = state_15447__$1;
(statearr_15484_18069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (13))){
var state_15447__$1 = state_15447;
var statearr_15487_18070 = state_15447__$1;
(statearr_15487_18070[(2)] = null);

(statearr_15487_18070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (6))){
var inst_15413 = (state_15447[(7)]);
var inst_15426 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15413) : p.call(null,inst_15413));
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15426)){
var statearr_15489_18071 = state_15447__$1;
(statearr_15489_18071[(1)] = (9));

} else {
var statearr_15493_18072 = state_15447__$1;
(statearr_15493_18072[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (3))){
var inst_15441 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15447__$1,inst_15441);
} else {
if((state_val_15449 === (12))){
var state_15447__$1 = state_15447;
var statearr_15499_18073 = state_15447__$1;
(statearr_15499_18073[(2)] = null);

(statearr_15499_18073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (2))){
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15447__$1,(4),ch);
} else {
if((state_val_15449 === (11))){
var inst_15413 = (state_15447[(7)]);
var inst_15430 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15447__$1,(8),inst_15430,inst_15413);
} else {
if((state_val_15449 === (9))){
var state_15447__$1 = state_15447;
var statearr_15503_18074 = state_15447__$1;
(statearr_15503_18074[(2)] = tc);

(statearr_15503_18074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (5))){
var inst_15417 = cljs.core.async.close_BANG_(tc);
var inst_15422 = cljs.core.async.close_BANG_(fc);
var state_15447__$1 = (function (){var statearr_15508 = state_15447;
(statearr_15508[(8)] = inst_15417);

return statearr_15508;
})();
var statearr_15510_18075 = state_15447__$1;
(statearr_15510_18075[(2)] = inst_15422);

(statearr_15510_18075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (14))){
var inst_15437 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15511_18078 = state_15447__$1;
(statearr_15511_18078[(2)] = inst_15437);

(statearr_15511_18078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (10))){
var state_15447__$1 = state_15447;
var statearr_15512_18082 = state_15447__$1;
(statearr_15512_18082[(2)] = fc);

(statearr_15512_18082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (8))){
var inst_15432 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15432)){
var statearr_15519_18087 = state_15447__$1;
(statearr_15519_18087[(1)] = (12));

} else {
var statearr_15520_18088 = state_15447__$1;
(statearr_15520_18088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_15527 = [null,null,null,null,null,null,null,null,null];
(statearr_15527[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_15527[(1)] = (1));

return statearr_15527;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_15447){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_15447);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e15539){var ex__14289__auto__ = e15539;
var statearr_15540_18095 = state_15447;
(statearr_15540_18095[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_15447[(4)]))){
var statearr_15541_18096 = state_15447;
(statearr_15541_18096[(1)] = cljs.core.first((state_15447[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18097 = state_15447;
state_15447 = G__18097;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_15447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_15447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_15550 = f__14500__auto__();
(statearr_15550[(6)] = c__14499__auto___18060);

return statearr_15550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14499__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_15592){
var state_val_15593 = (state_15592[(1)]);
if((state_val_15593 === (7))){
var inst_15586 = (state_15592[(2)]);
var state_15592__$1 = state_15592;
var statearr_15594_18104 = state_15592__$1;
(statearr_15594_18104[(2)] = inst_15586);

(statearr_15594_18104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15593 === (1))){
var inst_15558 = init;
var inst_15561 = inst_15558;
var state_15592__$1 = (function (){var statearr_15599 = state_15592;
(statearr_15599[(7)] = inst_15561);

return statearr_15599;
})();
var statearr_15600_18106 = state_15592__$1;
(statearr_15600_18106[(2)] = null);

(statearr_15600_18106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15593 === (4))){
var inst_15564 = (state_15592[(8)]);
var inst_15564__$1 = (state_15592[(2)]);
var inst_15566 = (inst_15564__$1 == null);
var state_15592__$1 = (function (){var statearr_15602 = state_15592;
(statearr_15602[(8)] = inst_15564__$1);

return statearr_15602;
})();
if(cljs.core.truth_(inst_15566)){
var statearr_15607_18107 = state_15592__$1;
(statearr_15607_18107[(1)] = (5));

} else {
var statearr_15608_18108 = state_15592__$1;
(statearr_15608_18108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15593 === (6))){
var inst_15561 = (state_15592[(7)]);
var inst_15564 = (state_15592[(8)]);
var inst_15570 = (state_15592[(9)]);
var inst_15570__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15561,inst_15564) : f.call(null,inst_15561,inst_15564));
var inst_15572 = cljs.core.reduced_QMARK_(inst_15570__$1);
var state_15592__$1 = (function (){var statearr_15612 = state_15592;
(statearr_15612[(9)] = inst_15570__$1);

return statearr_15612;
})();
if(inst_15572){
var statearr_15613_18111 = state_15592__$1;
(statearr_15613_18111[(1)] = (8));

} else {
var statearr_15615_18112 = state_15592__$1;
(statearr_15615_18112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15593 === (3))){
var inst_15588 = (state_15592[(2)]);
var state_15592__$1 = state_15592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15592__$1,inst_15588);
} else {
if((state_val_15593 === (2))){
var state_15592__$1 = state_15592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15592__$1,(4),ch);
} else {
if((state_val_15593 === (9))){
var inst_15570 = (state_15592[(9)]);
var inst_15561 = inst_15570;
var state_15592__$1 = (function (){var statearr_15616 = state_15592;
(statearr_15616[(7)] = inst_15561);

return statearr_15616;
})();
var statearr_15617_18115 = state_15592__$1;
(statearr_15617_18115[(2)] = null);

(statearr_15617_18115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15593 === (5))){
var inst_15561 = (state_15592[(7)]);
var state_15592__$1 = state_15592;
var statearr_15619_18116 = state_15592__$1;
(statearr_15619_18116[(2)] = inst_15561);

(statearr_15619_18116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15593 === (10))){
var inst_15584 = (state_15592[(2)]);
var state_15592__$1 = state_15592;
var statearr_15622_18117 = state_15592__$1;
(statearr_15622_18117[(2)] = inst_15584);

(statearr_15622_18117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15593 === (8))){
var inst_15570 = (state_15592[(9)]);
var inst_15580 = cljs.core.deref(inst_15570);
var state_15592__$1 = state_15592;
var statearr_15623_18119 = state_15592__$1;
(statearr_15623_18119[(2)] = inst_15580);

(statearr_15623_18119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14286__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14286__auto____0 = (function (){
var statearr_15626 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15626[(0)] = cljs$core$async$reduce_$_state_machine__14286__auto__);

(statearr_15626[(1)] = (1));

return statearr_15626;
});
var cljs$core$async$reduce_$_state_machine__14286__auto____1 = (function (state_15592){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_15592);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e15627){var ex__14289__auto__ = e15627;
var statearr_15628_18131 = state_15592;
(statearr_15628_18131[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_15592[(4)]))){
var statearr_15630_18132 = state_15592;
(statearr_15630_18132[(1)] = cljs.core.first((state_15592[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18134 = state_15592;
state_15592 = G__18134;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14286__auto__ = function(state_15592){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14286__auto____1.call(this,state_15592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14286__auto____0;
cljs$core$async$reduce_$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14286__auto____1;
return cljs$core$async$reduce_$_state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_15632 = f__14500__auto__();
(statearr_15632[(6)] = c__14499__auto__);

return statearr_15632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));

return c__14499__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14499__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_15642){
var state_val_15643 = (state_15642[(1)]);
if((state_val_15643 === (1))){
var inst_15636 = cljs.core.async.reduce(f__$1,init,ch);
var state_15642__$1 = state_15642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15642__$1,(2),inst_15636);
} else {
if((state_val_15643 === (2))){
var inst_15638 = (state_15642[(2)]);
var inst_15640 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15638) : f__$1.call(null,inst_15638));
var state_15642__$1 = state_15642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15642__$1,inst_15640);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14286__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14286__auto____0 = (function (){
var statearr_15647 = [null,null,null,null,null,null,null];
(statearr_15647[(0)] = cljs$core$async$transduce_$_state_machine__14286__auto__);

(statearr_15647[(1)] = (1));

return statearr_15647;
});
var cljs$core$async$transduce_$_state_machine__14286__auto____1 = (function (state_15642){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_15642);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e15648){var ex__14289__auto__ = e15648;
var statearr_15649_18136 = state_15642;
(statearr_15649_18136[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_15642[(4)]))){
var statearr_15650_18141 = state_15642;
(statearr_15650_18141[(1)] = cljs.core.first((state_15642[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18142 = state_15642;
state_15642 = G__18142;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14286__auto__ = function(state_15642){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14286__auto____1.call(this,state_15642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14286__auto____0;
cljs$core$async$transduce_$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14286__auto____1;
return cljs$core$async$transduce_$_state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_15651 = f__14500__auto__();
(statearr_15651[(6)] = c__14499__auto__);

return statearr_15651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));

return c__14499__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15658 = arguments.length;
switch (G__15658) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14499__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_15689){
var state_val_15690 = (state_15689[(1)]);
if((state_val_15690 === (7))){
var inst_15668 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
var statearr_15693_18154 = state_15689__$1;
(statearr_15693_18154[(2)] = inst_15668);

(statearr_15693_18154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (1))){
var inst_15662 = cljs.core.seq(coll);
var inst_15663 = inst_15662;
var state_15689__$1 = (function (){var statearr_15694 = state_15689;
(statearr_15694[(7)] = inst_15663);

return statearr_15694;
})();
var statearr_15695_18155 = state_15689__$1;
(statearr_15695_18155[(2)] = null);

(statearr_15695_18155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (4))){
var inst_15663 = (state_15689[(7)]);
var inst_15666 = cljs.core.first(inst_15663);
var state_15689__$1 = state_15689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15689__$1,(7),ch,inst_15666);
} else {
if((state_val_15690 === (13))){
var inst_15681 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
var statearr_15698_18156 = state_15689__$1;
(statearr_15698_18156[(2)] = inst_15681);

(statearr_15698_18156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (6))){
var inst_15671 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
if(cljs.core.truth_(inst_15671)){
var statearr_15700_18157 = state_15689__$1;
(statearr_15700_18157[(1)] = (8));

} else {
var statearr_15701_18158 = state_15689__$1;
(statearr_15701_18158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (3))){
var inst_15685 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15689__$1,inst_15685);
} else {
if((state_val_15690 === (12))){
var state_15689__$1 = state_15689;
var statearr_15705_18163 = state_15689__$1;
(statearr_15705_18163[(2)] = null);

(statearr_15705_18163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (2))){
var inst_15663 = (state_15689[(7)]);
var state_15689__$1 = state_15689;
if(cljs.core.truth_(inst_15663)){
var statearr_15707_18167 = state_15689__$1;
(statearr_15707_18167[(1)] = (4));

} else {
var statearr_15708_18168 = state_15689__$1;
(statearr_15708_18168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (11))){
var inst_15678 = cljs.core.async.close_BANG_(ch);
var state_15689__$1 = state_15689;
var statearr_15714_18169 = state_15689__$1;
(statearr_15714_18169[(2)] = inst_15678);

(statearr_15714_18169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (9))){
var state_15689__$1 = state_15689;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15717_18171 = state_15689__$1;
(statearr_15717_18171[(1)] = (11));

} else {
var statearr_15718_18172 = state_15689__$1;
(statearr_15718_18172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (5))){
var inst_15663 = (state_15689[(7)]);
var state_15689__$1 = state_15689;
var statearr_15719_18173 = state_15689__$1;
(statearr_15719_18173[(2)] = inst_15663);

(statearr_15719_18173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (10))){
var inst_15683 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
var statearr_15720_18174 = state_15689__$1;
(statearr_15720_18174[(2)] = inst_15683);

(statearr_15720_18174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (8))){
var inst_15663 = (state_15689[(7)]);
var inst_15674 = cljs.core.next(inst_15663);
var inst_15663__$1 = inst_15674;
var state_15689__$1 = (function (){var statearr_15721 = state_15689;
(statearr_15721[(7)] = inst_15663__$1);

return statearr_15721;
})();
var statearr_15725_18188 = state_15689__$1;
(statearr_15725_18188[(2)] = null);

(statearr_15725_18188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_15728 = [null,null,null,null,null,null,null,null];
(statearr_15728[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_15728[(1)] = (1));

return statearr_15728;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_15689){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_15689);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e15729){var ex__14289__auto__ = e15729;
var statearr_15730_18196 = state_15689;
(statearr_15730_18196[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_15689[(4)]))){
var statearr_15731_18197 = state_15689;
(statearr_15731_18197[(1)] = cljs.core.first((state_15689[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18198 = state_15689;
state_15689 = G__18198;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_15689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_15689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_15732 = f__14500__auto__();
(statearr_15732[(6)] = c__14499__auto__);

return statearr_15732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));

return c__14499__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15743 = arguments.length;
switch (G__15743) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18205 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18205(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18209 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18209(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18216 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18216(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18220 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18220(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15764 = (function (ch,cs,meta15765){
this.ch = ch;
this.cs = cs;
this.meta15765 = meta15765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15766,meta15765__$1){
var self__ = this;
var _15766__$1 = this;
return (new cljs.core.async.t_cljs$core$async15764(self__.ch,self__.cs,meta15765__$1));
}));

(cljs.core.async.t_cljs$core$async15764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15766){
var self__ = this;
var _15766__$1 = this;
return self__.meta15765;
}));

(cljs.core.async.t_cljs$core$async15764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15764.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15764.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15764.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15764.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15765","meta15765",-1392703147,null)], null);
}));

(cljs.core.async.t_cljs$core$async15764.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15764");

(cljs.core.async.t_cljs$core$async15764.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15764");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15764.
 */
cljs.core.async.__GT_t_cljs$core$async15764 = (function cljs$core$async$__GT_t_cljs$core$async15764(ch,cs,meta15765){
return (new cljs.core.async.t_cljs$core$async15764(ch,cs,meta15765));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15764(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14499__auto___18244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_15913){
var state_val_15914 = (state_15913[(1)]);
if((state_val_15914 === (7))){
var inst_15909 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_15921_18254 = state_15913__$1;
(statearr_15921_18254[(2)] = inst_15909);

(statearr_15921_18254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (20))){
var inst_15810 = (state_15913[(7)]);
var inst_15824 = cljs.core.first(inst_15810);
var inst_15825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15824,(0),null);
var inst_15826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15824,(1),null);
var state_15913__$1 = (function (){var statearr_15923 = state_15913;
(statearr_15923[(8)] = inst_15825);

return statearr_15923;
})();
if(cljs.core.truth_(inst_15826)){
var statearr_15924_18259 = state_15913__$1;
(statearr_15924_18259[(1)] = (22));

} else {
var statearr_15925_18260 = state_15913__$1;
(statearr_15925_18260[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (27))){
var inst_15861 = (state_15913[(9)]);
var inst_15776 = (state_15913[(10)]);
var inst_15854 = (state_15913[(11)]);
var inst_15856 = (state_15913[(12)]);
var inst_15861__$1 = cljs.core._nth(inst_15854,inst_15856);
var inst_15863 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15861__$1,inst_15776,done);
var state_15913__$1 = (function (){var statearr_15930 = state_15913;
(statearr_15930[(9)] = inst_15861__$1);

return statearr_15930;
})();
if(cljs.core.truth_(inst_15863)){
var statearr_15931_18269 = state_15913__$1;
(statearr_15931_18269[(1)] = (30));

} else {
var statearr_15932_18270 = state_15913__$1;
(statearr_15932_18270[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (1))){
var state_15913__$1 = state_15913;
var statearr_15934_18271 = state_15913__$1;
(statearr_15934_18271[(2)] = null);

(statearr_15934_18271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (24))){
var inst_15810 = (state_15913[(7)]);
var inst_15831 = (state_15913[(2)]);
var inst_15832 = cljs.core.next(inst_15810);
var inst_15785 = inst_15832;
var inst_15786 = null;
var inst_15787 = (0);
var inst_15788 = (0);
var state_15913__$1 = (function (){var statearr_15937 = state_15913;
(statearr_15937[(13)] = inst_15831);

(statearr_15937[(14)] = inst_15787);

(statearr_15937[(15)] = inst_15786);

(statearr_15937[(16)] = inst_15788);

(statearr_15937[(17)] = inst_15785);

return statearr_15937;
})();
var statearr_15942_18279 = state_15913__$1;
(statearr_15942_18279[(2)] = null);

(statearr_15942_18279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (39))){
var state_15913__$1 = state_15913;
var statearr_15948_18280 = state_15913__$1;
(statearr_15948_18280[(2)] = null);

(statearr_15948_18280[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (4))){
var inst_15776 = (state_15913[(10)]);
var inst_15776__$1 = (state_15913[(2)]);
var inst_15777 = (inst_15776__$1 == null);
var state_15913__$1 = (function (){var statearr_15952 = state_15913;
(statearr_15952[(10)] = inst_15776__$1);

return statearr_15952;
})();
if(cljs.core.truth_(inst_15777)){
var statearr_15953_18288 = state_15913__$1;
(statearr_15953_18288[(1)] = (5));

} else {
var statearr_15954_18289 = state_15913__$1;
(statearr_15954_18289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (15))){
var inst_15787 = (state_15913[(14)]);
var inst_15786 = (state_15913[(15)]);
var inst_15788 = (state_15913[(16)]);
var inst_15785 = (state_15913[(17)]);
var inst_15806 = (state_15913[(2)]);
var inst_15807 = (inst_15788 + (1));
var tmp15943 = inst_15787;
var tmp15944 = inst_15786;
var tmp15945 = inst_15785;
var inst_15785__$1 = tmp15945;
var inst_15786__$1 = tmp15944;
var inst_15787__$1 = tmp15943;
var inst_15788__$1 = inst_15807;
var state_15913__$1 = (function (){var statearr_15955 = state_15913;
(statearr_15955[(18)] = inst_15806);

(statearr_15955[(14)] = inst_15787__$1);

(statearr_15955[(15)] = inst_15786__$1);

(statearr_15955[(16)] = inst_15788__$1);

(statearr_15955[(17)] = inst_15785__$1);

return statearr_15955;
})();
var statearr_15956_18292 = state_15913__$1;
(statearr_15956_18292[(2)] = null);

(statearr_15956_18292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (21))){
var inst_15835 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_15961_18293 = state_15913__$1;
(statearr_15961_18293[(2)] = inst_15835);

(statearr_15961_18293[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (31))){
var inst_15861 = (state_15913[(9)]);
var inst_15866 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15861);
var state_15913__$1 = state_15913;
var statearr_15962_18294 = state_15913__$1;
(statearr_15962_18294[(2)] = inst_15866);

(statearr_15962_18294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (32))){
var inst_15853 = (state_15913[(19)]);
var inst_15855 = (state_15913[(20)]);
var inst_15854 = (state_15913[(11)]);
var inst_15856 = (state_15913[(12)]);
var inst_15868 = (state_15913[(2)]);
var inst_15869 = (inst_15856 + (1));
var tmp15957 = inst_15853;
var tmp15958 = inst_15855;
var tmp15959 = inst_15854;
var inst_15853__$1 = tmp15957;
var inst_15854__$1 = tmp15959;
var inst_15855__$1 = tmp15958;
var inst_15856__$1 = inst_15869;
var state_15913__$1 = (function (){var statearr_15963 = state_15913;
(statearr_15963[(19)] = inst_15853__$1);

(statearr_15963[(20)] = inst_15855__$1);

(statearr_15963[(11)] = inst_15854__$1);

(statearr_15963[(21)] = inst_15868);

(statearr_15963[(12)] = inst_15856__$1);

return statearr_15963;
})();
var statearr_15964_18295 = state_15913__$1;
(statearr_15964_18295[(2)] = null);

(statearr_15964_18295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (40))){
var inst_15882 = (state_15913[(22)]);
var inst_15886 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15882);
var state_15913__$1 = state_15913;
var statearr_15965_18301 = state_15913__$1;
(statearr_15965_18301[(2)] = inst_15886);

(statearr_15965_18301[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (33))){
var inst_15872 = (state_15913[(23)]);
var inst_15875 = cljs.core.chunked_seq_QMARK_(inst_15872);
var state_15913__$1 = state_15913;
if(inst_15875){
var statearr_15967_18305 = state_15913__$1;
(statearr_15967_18305[(1)] = (36));

} else {
var statearr_15968_18306 = state_15913__$1;
(statearr_15968_18306[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (13))){
var inst_15798 = (state_15913[(24)]);
var inst_15803 = cljs.core.async.close_BANG_(inst_15798);
var state_15913__$1 = state_15913;
var statearr_15969_18314 = state_15913__$1;
(statearr_15969_18314[(2)] = inst_15803);

(statearr_15969_18314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (22))){
var inst_15825 = (state_15913[(8)]);
var inst_15828 = cljs.core.async.close_BANG_(inst_15825);
var state_15913__$1 = state_15913;
var statearr_15975_18318 = state_15913__$1;
(statearr_15975_18318[(2)] = inst_15828);

(statearr_15975_18318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (36))){
var inst_15872 = (state_15913[(23)]);
var inst_15877 = cljs.core.chunk_first(inst_15872);
var inst_15878 = cljs.core.chunk_rest(inst_15872);
var inst_15879 = cljs.core.count(inst_15877);
var inst_15853 = inst_15878;
var inst_15854 = inst_15877;
var inst_15855 = inst_15879;
var inst_15856 = (0);
var state_15913__$1 = (function (){var statearr_15977 = state_15913;
(statearr_15977[(19)] = inst_15853);

(statearr_15977[(20)] = inst_15855);

(statearr_15977[(11)] = inst_15854);

(statearr_15977[(12)] = inst_15856);

return statearr_15977;
})();
var statearr_15978_18321 = state_15913__$1;
(statearr_15978_18321[(2)] = null);

(statearr_15978_18321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (41))){
var inst_15872 = (state_15913[(23)]);
var inst_15888 = (state_15913[(2)]);
var inst_15889 = cljs.core.next(inst_15872);
var inst_15853 = inst_15889;
var inst_15854 = null;
var inst_15855 = (0);
var inst_15856 = (0);
var state_15913__$1 = (function (){var statearr_15985 = state_15913;
(statearr_15985[(19)] = inst_15853);

(statearr_15985[(25)] = inst_15888);

(statearr_15985[(20)] = inst_15855);

(statearr_15985[(11)] = inst_15854);

(statearr_15985[(12)] = inst_15856);

return statearr_15985;
})();
var statearr_15987_18328 = state_15913__$1;
(statearr_15987_18328[(2)] = null);

(statearr_15987_18328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (43))){
var state_15913__$1 = state_15913;
var statearr_15988_18338 = state_15913__$1;
(statearr_15988_18338[(2)] = null);

(statearr_15988_18338[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (29))){
var inst_15897 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_15990_18343 = state_15913__$1;
(statearr_15990_18343[(2)] = inst_15897);

(statearr_15990_18343[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (44))){
var inst_15906 = (state_15913[(2)]);
var state_15913__$1 = (function (){var statearr_15991 = state_15913;
(statearr_15991[(26)] = inst_15906);

return statearr_15991;
})();
var statearr_15992_18349 = state_15913__$1;
(statearr_15992_18349[(2)] = null);

(statearr_15992_18349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (6))){
var inst_15845 = (state_15913[(27)]);
var inst_15844 = cljs.core.deref(cs);
var inst_15845__$1 = cljs.core.keys(inst_15844);
var inst_15846 = cljs.core.count(inst_15845__$1);
var inst_15847 = cljs.core.reset_BANG_(dctr,inst_15846);
var inst_15852 = cljs.core.seq(inst_15845__$1);
var inst_15853 = inst_15852;
var inst_15854 = null;
var inst_15855 = (0);
var inst_15856 = (0);
var state_15913__$1 = (function (){var statearr_15994 = state_15913;
(statearr_15994[(19)] = inst_15853);

(statearr_15994[(28)] = inst_15847);

(statearr_15994[(27)] = inst_15845__$1);

(statearr_15994[(20)] = inst_15855);

(statearr_15994[(11)] = inst_15854);

(statearr_15994[(12)] = inst_15856);

return statearr_15994;
})();
var statearr_15995_18350 = state_15913__$1;
(statearr_15995_18350[(2)] = null);

(statearr_15995_18350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (28))){
var inst_15853 = (state_15913[(19)]);
var inst_15872 = (state_15913[(23)]);
var inst_15872__$1 = cljs.core.seq(inst_15853);
var state_15913__$1 = (function (){var statearr_15996 = state_15913;
(statearr_15996[(23)] = inst_15872__$1);

return statearr_15996;
})();
if(inst_15872__$1){
var statearr_16000_18353 = state_15913__$1;
(statearr_16000_18353[(1)] = (33));

} else {
var statearr_16001_18354 = state_15913__$1;
(statearr_16001_18354[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (25))){
var inst_15855 = (state_15913[(20)]);
var inst_15856 = (state_15913[(12)]);
var inst_15858 = (inst_15856 < inst_15855);
var inst_15859 = inst_15858;
var state_15913__$1 = state_15913;
if(cljs.core.truth_(inst_15859)){
var statearr_16003_18355 = state_15913__$1;
(statearr_16003_18355[(1)] = (27));

} else {
var statearr_16004_18356 = state_15913__$1;
(statearr_16004_18356[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (34))){
var state_15913__$1 = state_15913;
var statearr_16005_18357 = state_15913__$1;
(statearr_16005_18357[(2)] = null);

(statearr_16005_18357[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (17))){
var state_15913__$1 = state_15913;
var statearr_16009_18358 = state_15913__$1;
(statearr_16009_18358[(2)] = null);

(statearr_16009_18358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (3))){
var inst_15911 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15913__$1,inst_15911);
} else {
if((state_val_15914 === (12))){
var inst_15840 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_16014_18363 = state_15913__$1;
(statearr_16014_18363[(2)] = inst_15840);

(statearr_16014_18363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (2))){
var state_15913__$1 = state_15913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15913__$1,(4),ch);
} else {
if((state_val_15914 === (23))){
var state_15913__$1 = state_15913;
var statearr_16017_18364 = state_15913__$1;
(statearr_16017_18364[(2)] = null);

(statearr_16017_18364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (35))){
var inst_15895 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_16018_18366 = state_15913__$1;
(statearr_16018_18366[(2)] = inst_15895);

(statearr_16018_18366[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (19))){
var inst_15810 = (state_15913[(7)]);
var inst_15816 = cljs.core.chunk_first(inst_15810);
var inst_15817 = cljs.core.chunk_rest(inst_15810);
var inst_15818 = cljs.core.count(inst_15816);
var inst_15785 = inst_15817;
var inst_15786 = inst_15816;
var inst_15787 = inst_15818;
var inst_15788 = (0);
var state_15913__$1 = (function (){var statearr_16021 = state_15913;
(statearr_16021[(14)] = inst_15787);

(statearr_16021[(15)] = inst_15786);

(statearr_16021[(16)] = inst_15788);

(statearr_16021[(17)] = inst_15785);

return statearr_16021;
})();
var statearr_16023_18374 = state_15913__$1;
(statearr_16023_18374[(2)] = null);

(statearr_16023_18374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (11))){
var inst_15810 = (state_15913[(7)]);
var inst_15785 = (state_15913[(17)]);
var inst_15810__$1 = cljs.core.seq(inst_15785);
var state_15913__$1 = (function (){var statearr_16024 = state_15913;
(statearr_16024[(7)] = inst_15810__$1);

return statearr_16024;
})();
if(inst_15810__$1){
var statearr_16026_18382 = state_15913__$1;
(statearr_16026_18382[(1)] = (16));

} else {
var statearr_16030_18385 = state_15913__$1;
(statearr_16030_18385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (9))){
var inst_15842 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_16031_18386 = state_15913__$1;
(statearr_16031_18386[(2)] = inst_15842);

(statearr_16031_18386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (5))){
var inst_15783 = cljs.core.deref(cs);
var inst_15784 = cljs.core.seq(inst_15783);
var inst_15785 = inst_15784;
var inst_15786 = null;
var inst_15787 = (0);
var inst_15788 = (0);
var state_15913__$1 = (function (){var statearr_16033 = state_15913;
(statearr_16033[(14)] = inst_15787);

(statearr_16033[(15)] = inst_15786);

(statearr_16033[(16)] = inst_15788);

(statearr_16033[(17)] = inst_15785);

return statearr_16033;
})();
var statearr_16034_18388 = state_15913__$1;
(statearr_16034_18388[(2)] = null);

(statearr_16034_18388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (14))){
var state_15913__$1 = state_15913;
var statearr_16035_18389 = state_15913__$1;
(statearr_16035_18389[(2)] = null);

(statearr_16035_18389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (45))){
var inst_15903 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_16036_18399 = state_15913__$1;
(statearr_16036_18399[(2)] = inst_15903);

(statearr_16036_18399[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (26))){
var inst_15845 = (state_15913[(27)]);
var inst_15899 = (state_15913[(2)]);
var inst_15900 = cljs.core.seq(inst_15845);
var state_15913__$1 = (function (){var statearr_16037 = state_15913;
(statearr_16037[(29)] = inst_15899);

return statearr_16037;
})();
if(inst_15900){
var statearr_16038_18400 = state_15913__$1;
(statearr_16038_18400[(1)] = (42));

} else {
var statearr_16039_18401 = state_15913__$1;
(statearr_16039_18401[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (16))){
var inst_15810 = (state_15913[(7)]);
var inst_15814 = cljs.core.chunked_seq_QMARK_(inst_15810);
var state_15913__$1 = state_15913;
if(inst_15814){
var statearr_16040_18402 = state_15913__$1;
(statearr_16040_18402[(1)] = (19));

} else {
var statearr_16041_18407 = state_15913__$1;
(statearr_16041_18407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (38))){
var inst_15892 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_16043_18408 = state_15913__$1;
(statearr_16043_18408[(2)] = inst_15892);

(statearr_16043_18408[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (30))){
var state_15913__$1 = state_15913;
var statearr_16044_18413 = state_15913__$1;
(statearr_16044_18413[(2)] = null);

(statearr_16044_18413[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (10))){
var inst_15786 = (state_15913[(15)]);
var inst_15788 = (state_15913[(16)]);
var inst_15797 = cljs.core._nth(inst_15786,inst_15788);
var inst_15798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15797,(0),null);
var inst_15799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15797,(1),null);
var state_15913__$1 = (function (){var statearr_16046 = state_15913;
(statearr_16046[(24)] = inst_15798);

return statearr_16046;
})();
if(cljs.core.truth_(inst_15799)){
var statearr_16047_18419 = state_15913__$1;
(statearr_16047_18419[(1)] = (13));

} else {
var statearr_16048_18420 = state_15913__$1;
(statearr_16048_18420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (18))){
var inst_15838 = (state_15913[(2)]);
var state_15913__$1 = state_15913;
var statearr_16049_18425 = state_15913__$1;
(statearr_16049_18425[(2)] = inst_15838);

(statearr_16049_18425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (42))){
var state_15913__$1 = state_15913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15913__$1,(45),dchan);
} else {
if((state_val_15914 === (37))){
var inst_15872 = (state_15913[(23)]);
var inst_15882 = (state_15913[(22)]);
var inst_15776 = (state_15913[(10)]);
var inst_15882__$1 = cljs.core.first(inst_15872);
var inst_15883 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15882__$1,inst_15776,done);
var state_15913__$1 = (function (){var statearr_16051 = state_15913;
(statearr_16051[(22)] = inst_15882__$1);

return statearr_16051;
})();
if(cljs.core.truth_(inst_15883)){
var statearr_16052_18426 = state_15913__$1;
(statearr_16052_18426[(1)] = (39));

} else {
var statearr_16053_18428 = state_15913__$1;
(statearr_16053_18428[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15914 === (8))){
var inst_15787 = (state_15913[(14)]);
var inst_15788 = (state_15913[(16)]);
var inst_15791 = (inst_15788 < inst_15787);
var inst_15792 = inst_15791;
var state_15913__$1 = state_15913;
if(cljs.core.truth_(inst_15792)){
var statearr_16054_18429 = state_15913__$1;
(statearr_16054_18429[(1)] = (10));

} else {
var statearr_16055_18430 = state_15913__$1;
(statearr_16055_18430[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14286__auto__ = null;
var cljs$core$async$mult_$_state_machine__14286__auto____0 = (function (){
var statearr_16059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16059[(0)] = cljs$core$async$mult_$_state_machine__14286__auto__);

(statearr_16059[(1)] = (1));

return statearr_16059;
});
var cljs$core$async$mult_$_state_machine__14286__auto____1 = (function (state_15913){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_15913);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e16061){var ex__14289__auto__ = e16061;
var statearr_16062_18437 = state_15913;
(statearr_16062_18437[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_15913[(4)]))){
var statearr_16066_18438 = state_15913;
(statearr_16066_18438[(1)] = cljs.core.first((state_15913[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18439 = state_15913;
state_15913 = G__18439;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14286__auto__ = function(state_15913){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14286__auto____1.call(this,state_15913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14286__auto____0;
cljs$core$async$mult_$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14286__auto____1;
return cljs$core$async$mult_$_state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_16067 = f__14500__auto__();
(statearr_16067[(6)] = c__14499__auto___18244);

return statearr_16067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16072 = arguments.length;
switch (G__16072) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18449 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18449(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18459 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18459(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18465 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18465(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18471 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18471(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18485 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18485(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18498 = arguments.length;
var i__5727__auto___18499 = (0);
while(true){
if((i__5727__auto___18499 < len__5726__auto___18498)){
args__5732__auto__.push((arguments[i__5727__auto___18499]));

var G__18500 = (i__5727__auto___18499 + (1));
i__5727__auto___18499 = G__18500;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16102){
var map__16103 = p__16102;
var map__16103__$1 = cljs.core.__destructure_map(map__16103);
var opts = map__16103__$1;
var statearr_16104_18505 = state;
(statearr_16104_18505[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16106_18506 = state;
(statearr_16106_18506[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16107_18507 = state;
(statearr_16107_18507[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16096){
var G__16097 = cljs.core.first(seq16096);
var seq16096__$1 = cljs.core.next(seq16096);
var G__16098 = cljs.core.first(seq16096__$1);
var seq16096__$2 = cljs.core.next(seq16096__$1);
var G__16099 = cljs.core.first(seq16096__$2);
var seq16096__$3 = cljs.core.next(seq16096__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16097,G__16098,G__16099,seq16096__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16117 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16118){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16118 = meta16118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16119,meta16118__$1){
var self__ = this;
var _16119__$1 = this;
return (new cljs.core.async.t_cljs$core$async16117(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16118__$1));
}));

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16119){
var self__ = this;
var _16119__$1 = this;
return self__.meta16118;
}));

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16117.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16118","meta16118",1536659052,null)], null);
}));

(cljs.core.async.t_cljs$core$async16117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16117");

(cljs.core.async.t_cljs$core$async16117.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16117.
 */
cljs.core.async.__GT_t_cljs$core$async16117 = (function cljs$core$async$__GT_t_cljs$core$async16117(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16118){
return (new cljs.core.async.t_cljs$core$async16117(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16118));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16117(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14499__auto___18554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_16204){
var state_val_16205 = (state_16204[(1)]);
if((state_val_16205 === (7))){
var inst_16162 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16162)){
var statearr_16206_18559 = state_16204__$1;
(statearr_16206_18559[(1)] = (8));

} else {
var statearr_16207_18560 = state_16204__$1;
(statearr_16207_18560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (20))){
var inst_16155 = (state_16204[(7)]);
var state_16204__$1 = state_16204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16204__$1,(23),out,inst_16155);
} else {
if((state_val_16205 === (1))){
var inst_16134 = calc_state();
var inst_16135 = cljs.core.__destructure_map(inst_16134);
var inst_16136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16135,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16135,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16135,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16139 = inst_16134;
var state_16204__$1 = (function (){var statearr_16208 = state_16204;
(statearr_16208[(8)] = inst_16138);

(statearr_16208[(9)] = inst_16139);

(statearr_16208[(10)] = inst_16137);

(statearr_16208[(11)] = inst_16136);

return statearr_16208;
})();
var statearr_16209_18563 = state_16204__$1;
(statearr_16209_18563[(2)] = null);

(statearr_16209_18563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (24))){
var inst_16143 = (state_16204[(12)]);
var inst_16139 = inst_16143;
var state_16204__$1 = (function (){var statearr_16211 = state_16204;
(statearr_16211[(9)] = inst_16139);

return statearr_16211;
})();
var statearr_16214_18565 = state_16204__$1;
(statearr_16214_18565[(2)] = null);

(statearr_16214_18565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (4))){
var inst_16155 = (state_16204[(7)]);
var inst_16157 = (state_16204[(13)]);
var inst_16154 = (state_16204[(2)]);
var inst_16155__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16154,(0),null);
var inst_16156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16154,(1),null);
var inst_16157__$1 = (inst_16155__$1 == null);
var state_16204__$1 = (function (){var statearr_16218 = state_16204;
(statearr_16218[(7)] = inst_16155__$1);

(statearr_16218[(14)] = inst_16156);

(statearr_16218[(13)] = inst_16157__$1);

return statearr_16218;
})();
if(cljs.core.truth_(inst_16157__$1)){
var statearr_16219_18568 = state_16204__$1;
(statearr_16219_18568[(1)] = (5));

} else {
var statearr_16223_18569 = state_16204__$1;
(statearr_16223_18569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (15))){
var inst_16177 = (state_16204[(15)]);
var inst_16144 = (state_16204[(16)]);
var inst_16177__$1 = cljs.core.empty_QMARK_(inst_16144);
var state_16204__$1 = (function (){var statearr_16224 = state_16204;
(statearr_16224[(15)] = inst_16177__$1);

return statearr_16224;
})();
if(inst_16177__$1){
var statearr_16225_18575 = state_16204__$1;
(statearr_16225_18575[(1)] = (17));

} else {
var statearr_16226_18576 = state_16204__$1;
(statearr_16226_18576[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (21))){
var inst_16143 = (state_16204[(12)]);
var inst_16139 = inst_16143;
var state_16204__$1 = (function (){var statearr_16228 = state_16204;
(statearr_16228[(9)] = inst_16139);

return statearr_16228;
})();
var statearr_16230_18577 = state_16204__$1;
(statearr_16230_18577[(2)] = null);

(statearr_16230_18577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (13))){
var inst_16169 = (state_16204[(2)]);
var inst_16170 = calc_state();
var inst_16139 = inst_16170;
var state_16204__$1 = (function (){var statearr_16232 = state_16204;
(statearr_16232[(9)] = inst_16139);

(statearr_16232[(17)] = inst_16169);

return statearr_16232;
})();
var statearr_16238_18579 = state_16204__$1;
(statearr_16238_18579[(2)] = null);

(statearr_16238_18579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (22))){
var inst_16198 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16239_18580 = state_16204__$1;
(statearr_16239_18580[(2)] = inst_16198);

(statearr_16239_18580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (6))){
var inst_16156 = (state_16204[(14)]);
var inst_16160 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16156,change);
var state_16204__$1 = state_16204;
var statearr_16241_18588 = state_16204__$1;
(statearr_16241_18588[(2)] = inst_16160);

(statearr_16241_18588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (25))){
var state_16204__$1 = state_16204;
var statearr_16246_18589 = state_16204__$1;
(statearr_16246_18589[(2)] = null);

(statearr_16246_18589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (17))){
var inst_16156 = (state_16204[(14)]);
var inst_16148 = (state_16204[(18)]);
var inst_16180 = (inst_16148.cljs$core$IFn$_invoke$arity$1 ? inst_16148.cljs$core$IFn$_invoke$arity$1(inst_16156) : inst_16148.call(null,inst_16156));
var inst_16181 = cljs.core.not(inst_16180);
var state_16204__$1 = state_16204;
var statearr_16250_18590 = state_16204__$1;
(statearr_16250_18590[(2)] = inst_16181);

(statearr_16250_18590[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (3))){
var inst_16202 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16204__$1,inst_16202);
} else {
if((state_val_16205 === (12))){
var state_16204__$1 = state_16204;
var statearr_16257_18591 = state_16204__$1;
(statearr_16257_18591[(2)] = null);

(statearr_16257_18591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (2))){
var inst_16139 = (state_16204[(9)]);
var inst_16143 = (state_16204[(12)]);
var inst_16143__$1 = cljs.core.__destructure_map(inst_16139);
var inst_16144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16143__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16143__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16143__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16204__$1 = (function (){var statearr_16259 = state_16204;
(statearr_16259[(12)] = inst_16143__$1);

(statearr_16259[(18)] = inst_16148);

(statearr_16259[(16)] = inst_16144);

return statearr_16259;
})();
return cljs.core.async.ioc_alts_BANG_(state_16204__$1,(4),inst_16149);
} else {
if((state_val_16205 === (23))){
var inst_16189 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16189)){
var statearr_16266_18599 = state_16204__$1;
(statearr_16266_18599[(1)] = (24));

} else {
var statearr_16268_18600 = state_16204__$1;
(statearr_16268_18600[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (19))){
var inst_16184 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16269_18601 = state_16204__$1;
(statearr_16269_18601[(2)] = inst_16184);

(statearr_16269_18601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (11))){
var inst_16156 = (state_16204[(14)]);
var inst_16166 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16156);
var state_16204__$1 = state_16204;
var statearr_16273_18602 = state_16204__$1;
(statearr_16273_18602[(2)] = inst_16166);

(statearr_16273_18602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (9))){
var inst_16156 = (state_16204[(14)]);
var inst_16144 = (state_16204[(16)]);
var inst_16174 = (state_16204[(19)]);
var inst_16174__$1 = (inst_16144.cljs$core$IFn$_invoke$arity$1 ? inst_16144.cljs$core$IFn$_invoke$arity$1(inst_16156) : inst_16144.call(null,inst_16156));
var state_16204__$1 = (function (){var statearr_16275 = state_16204;
(statearr_16275[(19)] = inst_16174__$1);

return statearr_16275;
})();
if(cljs.core.truth_(inst_16174__$1)){
var statearr_16276_18603 = state_16204__$1;
(statearr_16276_18603[(1)] = (14));

} else {
var statearr_16277_18604 = state_16204__$1;
(statearr_16277_18604[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (5))){
var inst_16157 = (state_16204[(13)]);
var state_16204__$1 = state_16204;
var statearr_16285_18605 = state_16204__$1;
(statearr_16285_18605[(2)] = inst_16157);

(statearr_16285_18605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (14))){
var inst_16174 = (state_16204[(19)]);
var state_16204__$1 = state_16204;
var statearr_16288_18610 = state_16204__$1;
(statearr_16288_18610[(2)] = inst_16174);

(statearr_16288_18610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (26))){
var inst_16194 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16290_18617 = state_16204__$1;
(statearr_16290_18617[(2)] = inst_16194);

(statearr_16290_18617[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (16))){
var inst_16186 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16186)){
var statearr_16293_18621 = state_16204__$1;
(statearr_16293_18621[(1)] = (20));

} else {
var statearr_16294_18622 = state_16204__$1;
(statearr_16294_18622[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (10))){
var inst_16200 = (state_16204[(2)]);
var state_16204__$1 = state_16204;
var statearr_16297_18623 = state_16204__$1;
(statearr_16297_18623[(2)] = inst_16200);

(statearr_16297_18623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (18))){
var inst_16177 = (state_16204[(15)]);
var state_16204__$1 = state_16204;
var statearr_16301_18624 = state_16204__$1;
(statearr_16301_18624[(2)] = inst_16177);

(statearr_16301_18624[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16205 === (8))){
var inst_16155 = (state_16204[(7)]);
var inst_16164 = (inst_16155 == null);
var state_16204__$1 = state_16204;
if(cljs.core.truth_(inst_16164)){
var statearr_16307_18627 = state_16204__$1;
(statearr_16307_18627[(1)] = (11));

} else {
var statearr_16309_18630 = state_16204__$1;
(statearr_16309_18630[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14286__auto__ = null;
var cljs$core$async$mix_$_state_machine__14286__auto____0 = (function (){
var statearr_16313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16313[(0)] = cljs$core$async$mix_$_state_machine__14286__auto__);

(statearr_16313[(1)] = (1));

return statearr_16313;
});
var cljs$core$async$mix_$_state_machine__14286__auto____1 = (function (state_16204){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_16204);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e16314){var ex__14289__auto__ = e16314;
var statearr_16316_18632 = state_16204;
(statearr_16316_18632[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_16204[(4)]))){
var statearr_16317_18633 = state_16204;
(statearr_16317_18633[(1)] = cljs.core.first((state_16204[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18634 = state_16204;
state_16204 = G__18634;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14286__auto__ = function(state_16204){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14286__auto____1.call(this,state_16204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14286__auto____0;
cljs$core$async$mix_$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14286__auto____1;
return cljs$core$async$mix_$_state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_16321 = f__14500__auto__();
(statearr_16321[(6)] = c__14499__auto___18554);

return statearr_16321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18639 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18639(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18641 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18641(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18643 = (function() {
var G__18644 = null;
var G__18644__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18644__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18644 = function(p,v){
switch(arguments.length){
case 1:
return G__18644__1.call(this,p);
case 2:
return G__18644__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18644.cljs$core$IFn$_invoke$arity$1 = G__18644__1;
G__18644.cljs$core$IFn$_invoke$arity$2 = G__18644__2;
return G__18644;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16365 = arguments.length;
switch (G__16365) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18643(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18643(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16399 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16400){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16400 = meta16400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16401,meta16400__$1){
var self__ = this;
var _16401__$1 = this;
return (new cljs.core.async.t_cljs$core$async16399(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16400__$1));
}));

(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16401){
var self__ = this;
var _16401__$1 = this;
return self__.meta16400;
}));

(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16399.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16400","meta16400",2136206735,null)], null);
}));

(cljs.core.async.t_cljs$core$async16399.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16399");

(cljs.core.async.t_cljs$core$async16399.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16399");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16399.
 */
cljs.core.async.__GT_t_cljs$core$async16399 = (function cljs$core$async$__GT_t_cljs$core$async16399(ch,topic_fn,buf_fn,mults,ensure_mult,meta16400){
return (new cljs.core.async.t_cljs$core$async16399(ch,topic_fn,buf_fn,mults,ensure_mult,meta16400));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16386 = arguments.length;
switch (G__16386) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16375_SHARP_){
if(cljs.core.truth_((p1__16375_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16375_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16375_SHARP_.call(null,topic)))){
return p1__16375_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16375_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16399(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14499__auto___18659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_16518){
var state_val_16519 = (state_16518[(1)]);
if((state_val_16519 === (7))){
var inst_16513 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
var statearr_16531_18660 = state_16518__$1;
(statearr_16531_18660[(2)] = inst_16513);

(statearr_16531_18660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (20))){
var state_16518__$1 = state_16518;
var statearr_16533_18661 = state_16518__$1;
(statearr_16533_18661[(2)] = null);

(statearr_16533_18661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (1))){
var state_16518__$1 = state_16518;
var statearr_16536_18662 = state_16518__$1;
(statearr_16536_18662[(2)] = null);

(statearr_16536_18662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (24))){
var inst_16494 = (state_16518[(7)]);
var inst_16505 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16494);
var state_16518__$1 = state_16518;
var statearr_16540_18663 = state_16518__$1;
(statearr_16540_18663[(2)] = inst_16505);

(statearr_16540_18663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (4))){
var inst_16428 = (state_16518[(8)]);
var inst_16428__$1 = (state_16518[(2)]);
var inst_16430 = (inst_16428__$1 == null);
var state_16518__$1 = (function (){var statearr_16546 = state_16518;
(statearr_16546[(8)] = inst_16428__$1);

return statearr_16546;
})();
if(cljs.core.truth_(inst_16430)){
var statearr_16547_18665 = state_16518__$1;
(statearr_16547_18665[(1)] = (5));

} else {
var statearr_16548_18666 = state_16518__$1;
(statearr_16548_18666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (15))){
var inst_16488 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
var statearr_16552_18667 = state_16518__$1;
(statearr_16552_18667[(2)] = inst_16488);

(statearr_16552_18667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (21))){
var inst_16510 = (state_16518[(2)]);
var state_16518__$1 = (function (){var statearr_16554 = state_16518;
(statearr_16554[(9)] = inst_16510);

return statearr_16554;
})();
var statearr_16555_18668 = state_16518__$1;
(statearr_16555_18668[(2)] = null);

(statearr_16555_18668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (13))){
var inst_16457 = (state_16518[(10)]);
var inst_16463 = cljs.core.chunked_seq_QMARK_(inst_16457);
var state_16518__$1 = state_16518;
if(inst_16463){
var statearr_16559_18669 = state_16518__$1;
(statearr_16559_18669[(1)] = (16));

} else {
var statearr_16561_18670 = state_16518__$1;
(statearr_16561_18670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (22))){
var inst_16501 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
if(cljs.core.truth_(inst_16501)){
var statearr_16567_18672 = state_16518__$1;
(statearr_16567_18672[(1)] = (23));

} else {
var statearr_16568_18673 = state_16518__$1;
(statearr_16568_18673[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (6))){
var inst_16494 = (state_16518[(7)]);
var inst_16428 = (state_16518[(8)]);
var inst_16496 = (state_16518[(11)]);
var inst_16494__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16428) : topic_fn.call(null,inst_16428));
var inst_16495 = cljs.core.deref(mults);
var inst_16496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16495,inst_16494__$1);
var state_16518__$1 = (function (){var statearr_16573 = state_16518;
(statearr_16573[(7)] = inst_16494__$1);

(statearr_16573[(11)] = inst_16496__$1);

return statearr_16573;
})();
if(cljs.core.truth_(inst_16496__$1)){
var statearr_16575_18675 = state_16518__$1;
(statearr_16575_18675[(1)] = (19));

} else {
var statearr_16576_18680 = state_16518__$1;
(statearr_16576_18680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (25))){
var inst_16507 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
var statearr_16578_18681 = state_16518__$1;
(statearr_16578_18681[(2)] = inst_16507);

(statearr_16578_18681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (17))){
var inst_16457 = (state_16518[(10)]);
var inst_16474 = cljs.core.first(inst_16457);
var inst_16475 = cljs.core.async.muxch_STAR_(inst_16474);
var inst_16476 = cljs.core.async.close_BANG_(inst_16475);
var inst_16478 = cljs.core.next(inst_16457);
var inst_16439 = inst_16478;
var inst_16440 = null;
var inst_16441 = (0);
var inst_16442 = (0);
var state_16518__$1 = (function (){var statearr_16586 = state_16518;
(statearr_16586[(12)] = inst_16442);

(statearr_16586[(13)] = inst_16476);

(statearr_16586[(14)] = inst_16441);

(statearr_16586[(15)] = inst_16439);

(statearr_16586[(16)] = inst_16440);

return statearr_16586;
})();
var statearr_16589_18689 = state_16518__$1;
(statearr_16589_18689[(2)] = null);

(statearr_16589_18689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (3))){
var inst_16516 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16518__$1,inst_16516);
} else {
if((state_val_16519 === (12))){
var inst_16490 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
var statearr_16598_18693 = state_16518__$1;
(statearr_16598_18693[(2)] = inst_16490);

(statearr_16598_18693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (2))){
var state_16518__$1 = state_16518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16518__$1,(4),ch);
} else {
if((state_val_16519 === (23))){
var state_16518__$1 = state_16518;
var statearr_16603_18698 = state_16518__$1;
(statearr_16603_18698[(2)] = null);

(statearr_16603_18698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (19))){
var inst_16428 = (state_16518[(8)]);
var inst_16496 = (state_16518[(11)]);
var inst_16499 = cljs.core.async.muxch_STAR_(inst_16496);
var state_16518__$1 = state_16518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16518__$1,(22),inst_16499,inst_16428);
} else {
if((state_val_16519 === (11))){
var inst_16439 = (state_16518[(15)]);
var inst_16457 = (state_16518[(10)]);
var inst_16457__$1 = cljs.core.seq(inst_16439);
var state_16518__$1 = (function (){var statearr_16609 = state_16518;
(statearr_16609[(10)] = inst_16457__$1);

return statearr_16609;
})();
if(inst_16457__$1){
var statearr_16614_18703 = state_16518__$1;
(statearr_16614_18703[(1)] = (13));

} else {
var statearr_16616_18704 = state_16518__$1;
(statearr_16616_18704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (9))){
var inst_16492 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
var statearr_16617_18708 = state_16518__$1;
(statearr_16617_18708[(2)] = inst_16492);

(statearr_16617_18708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (5))){
var inst_16436 = cljs.core.deref(mults);
var inst_16437 = cljs.core.vals(inst_16436);
var inst_16438 = cljs.core.seq(inst_16437);
var inst_16439 = inst_16438;
var inst_16440 = null;
var inst_16441 = (0);
var inst_16442 = (0);
var state_16518__$1 = (function (){var statearr_16624 = state_16518;
(statearr_16624[(12)] = inst_16442);

(statearr_16624[(14)] = inst_16441);

(statearr_16624[(15)] = inst_16439);

(statearr_16624[(16)] = inst_16440);

return statearr_16624;
})();
var statearr_16630_18712 = state_16518__$1;
(statearr_16630_18712[(2)] = null);

(statearr_16630_18712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (14))){
var state_16518__$1 = state_16518;
var statearr_16638_18714 = state_16518__$1;
(statearr_16638_18714[(2)] = null);

(statearr_16638_18714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (16))){
var inst_16457 = (state_16518[(10)]);
var inst_16465 = cljs.core.chunk_first(inst_16457);
var inst_16466 = cljs.core.chunk_rest(inst_16457);
var inst_16467 = cljs.core.count(inst_16465);
var inst_16439 = inst_16466;
var inst_16440 = inst_16465;
var inst_16441 = inst_16467;
var inst_16442 = (0);
var state_16518__$1 = (function (){var statearr_16647 = state_16518;
(statearr_16647[(12)] = inst_16442);

(statearr_16647[(14)] = inst_16441);

(statearr_16647[(15)] = inst_16439);

(statearr_16647[(16)] = inst_16440);

return statearr_16647;
})();
var statearr_16653_18719 = state_16518__$1;
(statearr_16653_18719[(2)] = null);

(statearr_16653_18719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (10))){
var inst_16442 = (state_16518[(12)]);
var inst_16441 = (state_16518[(14)]);
var inst_16439 = (state_16518[(15)]);
var inst_16440 = (state_16518[(16)]);
var inst_16448 = cljs.core._nth(inst_16440,inst_16442);
var inst_16449 = cljs.core.async.muxch_STAR_(inst_16448);
var inst_16450 = cljs.core.async.close_BANG_(inst_16449);
var inst_16451 = (inst_16442 + (1));
var tmp16634 = inst_16441;
var tmp16635 = inst_16439;
var tmp16636 = inst_16440;
var inst_16439__$1 = tmp16635;
var inst_16440__$1 = tmp16636;
var inst_16441__$1 = tmp16634;
var inst_16442__$1 = inst_16451;
var state_16518__$1 = (function (){var statearr_16664 = state_16518;
(statearr_16664[(12)] = inst_16442__$1);

(statearr_16664[(17)] = inst_16450);

(statearr_16664[(14)] = inst_16441__$1);

(statearr_16664[(15)] = inst_16439__$1);

(statearr_16664[(16)] = inst_16440__$1);

return statearr_16664;
})();
var statearr_16666_18721 = state_16518__$1;
(statearr_16666_18721[(2)] = null);

(statearr_16666_18721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (18))){
var inst_16481 = (state_16518[(2)]);
var state_16518__$1 = state_16518;
var statearr_16669_18722 = state_16518__$1;
(statearr_16669_18722[(2)] = inst_16481);

(statearr_16669_18722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16519 === (8))){
var inst_16442 = (state_16518[(12)]);
var inst_16441 = (state_16518[(14)]);
var inst_16444 = (inst_16442 < inst_16441);
var inst_16445 = inst_16444;
var state_16518__$1 = state_16518;
if(cljs.core.truth_(inst_16445)){
var statearr_16670_18725 = state_16518__$1;
(statearr_16670_18725[(1)] = (10));

} else {
var statearr_16671_18726 = state_16518__$1;
(statearr_16671_18726[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_16680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16680[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_16680[(1)] = (1));

return statearr_16680;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_16518){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_16518);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e16683){var ex__14289__auto__ = e16683;
var statearr_16684_18730 = state_16518;
(statearr_16684_18730[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_16518[(4)]))){
var statearr_16685_18731 = state_16518;
(statearr_16685_18731[(1)] = cljs.core.first((state_16518[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18732 = state_16518;
state_16518 = G__18732;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_16518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_16518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_16691 = f__14500__auto__();
(statearr_16691[(6)] = c__14499__auto___18659);

return statearr_16691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16700 = arguments.length;
switch (G__16700) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16709 = arguments.length;
switch (G__16709) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16720 = arguments.length;
switch (G__16720) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14499__auto___18744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_16784){
var state_val_16785 = (state_16784[(1)]);
if((state_val_16785 === (7))){
var state_16784__$1 = state_16784;
var statearr_16793_18749 = state_16784__$1;
(statearr_16793_18749[(2)] = null);

(statearr_16793_18749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (1))){
var state_16784__$1 = state_16784;
var statearr_16795_18750 = state_16784__$1;
(statearr_16795_18750[(2)] = null);

(statearr_16795_18750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (4))){
var inst_16740 = (state_16784[(7)]);
var inst_16739 = (state_16784[(8)]);
var inst_16742 = (inst_16740 < inst_16739);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16742)){
var statearr_16799_18751 = state_16784__$1;
(statearr_16799_18751[(1)] = (6));

} else {
var statearr_16800_18752 = state_16784__$1;
(statearr_16800_18752[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (15))){
var inst_16770 = (state_16784[(9)]);
var inst_16775 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16770);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16784__$1,(17),out,inst_16775);
} else {
if((state_val_16785 === (13))){
var inst_16770 = (state_16784[(9)]);
var inst_16770__$1 = (state_16784[(2)]);
var inst_16771 = cljs.core.some(cljs.core.nil_QMARK_,inst_16770__$1);
var state_16784__$1 = (function (){var statearr_16805 = state_16784;
(statearr_16805[(9)] = inst_16770__$1);

return statearr_16805;
})();
if(cljs.core.truth_(inst_16771)){
var statearr_16806_18757 = state_16784__$1;
(statearr_16806_18757[(1)] = (14));

} else {
var statearr_16810_18758 = state_16784__$1;
(statearr_16810_18758[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (6))){
var state_16784__$1 = state_16784;
var statearr_16813_18765 = state_16784__$1;
(statearr_16813_18765[(2)] = null);

(statearr_16813_18765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (17))){
var inst_16777 = (state_16784[(2)]);
var state_16784__$1 = (function (){var statearr_16821 = state_16784;
(statearr_16821[(10)] = inst_16777);

return statearr_16821;
})();
var statearr_16823_18766 = state_16784__$1;
(statearr_16823_18766[(2)] = null);

(statearr_16823_18766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (3))){
var inst_16782 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16784__$1,inst_16782);
} else {
if((state_val_16785 === (12))){
var _ = (function (){var statearr_16824 = state_16784;
(statearr_16824[(4)] = cljs.core.rest((state_16784[(4)])));

return statearr_16824;
})();
var state_16784__$1 = state_16784;
var ex16820 = (state_16784__$1[(2)]);
var statearr_16825_18767 = state_16784__$1;
(statearr_16825_18767[(5)] = ex16820);


if((ex16820 instanceof Object)){
var statearr_16830_18770 = state_16784__$1;
(statearr_16830_18770[(1)] = (11));

(statearr_16830_18770[(5)] = null);

} else {
throw ex16820;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (2))){
var inst_16738 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16739 = cnt;
var inst_16740 = (0);
var state_16784__$1 = (function (){var statearr_16845 = state_16784;
(statearr_16845[(7)] = inst_16740);

(statearr_16845[(8)] = inst_16739);

(statearr_16845[(11)] = inst_16738);

return statearr_16845;
})();
var statearr_16846_18772 = state_16784__$1;
(statearr_16846_18772[(2)] = null);

(statearr_16846_18772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (11))){
var inst_16748 = (state_16784[(2)]);
var inst_16749 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16784__$1 = (function (){var statearr_16847 = state_16784;
(statearr_16847[(12)] = inst_16748);

return statearr_16847;
})();
var statearr_16851_18773 = state_16784__$1;
(statearr_16851_18773[(2)] = inst_16749);

(statearr_16851_18773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (9))){
var inst_16740 = (state_16784[(7)]);
var _ = (function (){var statearr_16853 = state_16784;
(statearr_16853[(4)] = cljs.core.cons((12),(state_16784[(4)])));

return statearr_16853;
})();
var inst_16755 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16740) : chs__$1.call(null,inst_16740));
var inst_16756 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16740) : done.call(null,inst_16740));
var inst_16757 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16755,inst_16756);
var ___$1 = (function (){var statearr_16857 = state_16784;
(statearr_16857[(4)] = cljs.core.rest((state_16784[(4)])));

return statearr_16857;
})();
var state_16784__$1 = state_16784;
var statearr_16859_18775 = state_16784__$1;
(statearr_16859_18775[(2)] = inst_16757);

(statearr_16859_18775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (5))){
var inst_16767 = (state_16784[(2)]);
var state_16784__$1 = (function (){var statearr_16860 = state_16784;
(statearr_16860[(13)] = inst_16767);

return statearr_16860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16784__$1,(13),dchan);
} else {
if((state_val_16785 === (14))){
var inst_16773 = cljs.core.async.close_BANG_(out);
var state_16784__$1 = state_16784;
var statearr_16861_18776 = state_16784__$1;
(statearr_16861_18776[(2)] = inst_16773);

(statearr_16861_18776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (16))){
var inst_16780 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16866_18781 = state_16784__$1;
(statearr_16866_18781[(2)] = inst_16780);

(statearr_16866_18781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (10))){
var inst_16740 = (state_16784[(7)]);
var inst_16760 = (state_16784[(2)]);
var inst_16761 = (inst_16740 + (1));
var inst_16740__$1 = inst_16761;
var state_16784__$1 = (function (){var statearr_16867 = state_16784;
(statearr_16867[(7)] = inst_16740__$1);

(statearr_16867[(14)] = inst_16760);

return statearr_16867;
})();
var statearr_16868_18784 = state_16784__$1;
(statearr_16868_18784[(2)] = null);

(statearr_16868_18784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (8))){
var inst_16765 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16869_18785 = state_16784__$1;
(statearr_16869_18785[(2)] = inst_16765);

(statearr_16869_18785[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_16870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16870[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_16870[(1)] = (1));

return statearr_16870;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_16784){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_16784);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e16877){var ex__14289__auto__ = e16877;
var statearr_16878_18792 = state_16784;
(statearr_16878_18792[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_16784[(4)]))){
var statearr_16879_18793 = state_16784;
(statearr_16879_18793[(1)] = cljs.core.first((state_16784[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18794 = state_16784;
state_16784 = G__18794;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_16784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_16784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_16884 = f__14500__auto__();
(statearr_16884[(6)] = c__14499__auto___18744);

return statearr_16884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16891 = arguments.length;
switch (G__16891) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14499__auto___18796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_16932){
var state_val_16933 = (state_16932[(1)]);
if((state_val_16933 === (7))){
var inst_16909 = (state_16932[(7)]);
var inst_16910 = (state_16932[(8)]);
var inst_16909__$1 = (state_16932[(2)]);
var inst_16910__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16909__$1,(0),null);
var inst_16911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16909__$1,(1),null);
var inst_16912 = (inst_16910__$1 == null);
var state_16932__$1 = (function (){var statearr_16934 = state_16932;
(statearr_16934[(9)] = inst_16911);

(statearr_16934[(7)] = inst_16909__$1);

(statearr_16934[(8)] = inst_16910__$1);

return statearr_16934;
})();
if(cljs.core.truth_(inst_16912)){
var statearr_16935_18798 = state_16932__$1;
(statearr_16935_18798[(1)] = (8));

} else {
var statearr_16936_18800 = state_16932__$1;
(statearr_16936_18800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16933 === (1))){
var inst_16895 = cljs.core.vec(chs);
var inst_16896 = inst_16895;
var state_16932__$1 = (function (){var statearr_16937 = state_16932;
(statearr_16937[(10)] = inst_16896);

return statearr_16937;
})();
var statearr_16938_18803 = state_16932__$1;
(statearr_16938_18803[(2)] = null);

(statearr_16938_18803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16933 === (4))){
var inst_16896 = (state_16932[(10)]);
var state_16932__$1 = state_16932;
return cljs.core.async.ioc_alts_BANG_(state_16932__$1,(7),inst_16896);
} else {
if((state_val_16933 === (6))){
var inst_16928 = (state_16932[(2)]);
var state_16932__$1 = state_16932;
var statearr_16939_18805 = state_16932__$1;
(statearr_16939_18805[(2)] = inst_16928);

(statearr_16939_18805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16933 === (3))){
var inst_16930 = (state_16932[(2)]);
var state_16932__$1 = state_16932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16932__$1,inst_16930);
} else {
if((state_val_16933 === (2))){
var inst_16896 = (state_16932[(10)]);
var inst_16900 = cljs.core.count(inst_16896);
var inst_16901 = (inst_16900 > (0));
var state_16932__$1 = state_16932;
if(cljs.core.truth_(inst_16901)){
var statearr_16941_18809 = state_16932__$1;
(statearr_16941_18809[(1)] = (4));

} else {
var statearr_16942_18813 = state_16932__$1;
(statearr_16942_18813[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16933 === (11))){
var inst_16896 = (state_16932[(10)]);
var inst_16920 = (state_16932[(2)]);
var tmp16940 = inst_16896;
var inst_16896__$1 = tmp16940;
var state_16932__$1 = (function (){var statearr_16944 = state_16932;
(statearr_16944[(11)] = inst_16920);

(statearr_16944[(10)] = inst_16896__$1);

return statearr_16944;
})();
var statearr_16945_18825 = state_16932__$1;
(statearr_16945_18825[(2)] = null);

(statearr_16945_18825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16933 === (9))){
var inst_16910 = (state_16932[(8)]);
var state_16932__$1 = state_16932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16932__$1,(11),out,inst_16910);
} else {
if((state_val_16933 === (5))){
var inst_16926 = cljs.core.async.close_BANG_(out);
var state_16932__$1 = state_16932;
var statearr_16946_18898 = state_16932__$1;
(statearr_16946_18898[(2)] = inst_16926);

(statearr_16946_18898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16933 === (10))){
var inst_16923 = (state_16932[(2)]);
var state_16932__$1 = state_16932;
var statearr_16947_18911 = state_16932__$1;
(statearr_16947_18911[(2)] = inst_16923);

(statearr_16947_18911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16933 === (8))){
var inst_16911 = (state_16932[(9)]);
var inst_16909 = (state_16932[(7)]);
var inst_16910 = (state_16932[(8)]);
var inst_16896 = (state_16932[(10)]);
var inst_16915 = (function (){var cs = inst_16896;
var vec__16905 = inst_16909;
var v = inst_16910;
var c = inst_16911;
return (function (p1__16888_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16888_SHARP_);
});
})();
var inst_16916 = cljs.core.filterv(inst_16915,inst_16896);
var inst_16896__$1 = inst_16916;
var state_16932__$1 = (function (){var statearr_16948 = state_16932;
(statearr_16948[(10)] = inst_16896__$1);

return statearr_16948;
})();
var statearr_16949_18915 = state_16932__$1;
(statearr_16949_18915[(2)] = null);

(statearr_16949_18915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_16950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16950[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_16950[(1)] = (1));

return statearr_16950;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_16932){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_16932);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e16951){var ex__14289__auto__ = e16951;
var statearr_16952_18922 = state_16932;
(statearr_16952_18922[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_16932[(4)]))){
var statearr_16953_18923 = state_16932;
(statearr_16953_18923[(1)] = cljs.core.first((state_16932[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18927 = state_16932;
state_16932 = G__18927;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_16932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_16932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_16954 = f__14500__auto__();
(statearr_16954[(6)] = c__14499__auto___18796);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16962 = arguments.length;
switch (G__16962) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14499__auto___18934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_16989){
var state_val_16991 = (state_16989[(1)]);
if((state_val_16991 === (7))){
var inst_16969 = (state_16989[(7)]);
var inst_16969__$1 = (state_16989[(2)]);
var inst_16971 = (inst_16969__$1 == null);
var inst_16972 = cljs.core.not(inst_16971);
var state_16989__$1 = (function (){var statearr_16992 = state_16989;
(statearr_16992[(7)] = inst_16969__$1);

return statearr_16992;
})();
if(inst_16972){
var statearr_16993_18935 = state_16989__$1;
(statearr_16993_18935[(1)] = (8));

} else {
var statearr_16994_18936 = state_16989__$1;
(statearr_16994_18936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (1))){
var inst_16963 = (0);
var state_16989__$1 = (function (){var statearr_16995 = state_16989;
(statearr_16995[(8)] = inst_16963);

return statearr_16995;
})();
var statearr_16997_18937 = state_16989__$1;
(statearr_16997_18937[(2)] = null);

(statearr_16997_18937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (4))){
var state_16989__$1 = state_16989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16989__$1,(7),ch);
} else {
if((state_val_16991 === (6))){
var inst_16984 = (state_16989[(2)]);
var state_16989__$1 = state_16989;
var statearr_17000_18938 = state_16989__$1;
(statearr_17000_18938[(2)] = inst_16984);

(statearr_17000_18938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (3))){
var inst_16986 = (state_16989[(2)]);
var inst_16987 = cljs.core.async.close_BANG_(out);
var state_16989__$1 = (function (){var statearr_17001 = state_16989;
(statearr_17001[(9)] = inst_16986);

return statearr_17001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16989__$1,inst_16987);
} else {
if((state_val_16991 === (2))){
var inst_16963 = (state_16989[(8)]);
var inst_16966 = (inst_16963 < n);
var state_16989__$1 = state_16989;
if(cljs.core.truth_(inst_16966)){
var statearr_17002_18939 = state_16989__$1;
(statearr_17002_18939[(1)] = (4));

} else {
var statearr_17003_18940 = state_16989__$1;
(statearr_17003_18940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (11))){
var inst_16963 = (state_16989[(8)]);
var inst_16975 = (state_16989[(2)]);
var inst_16977 = (inst_16963 + (1));
var inst_16963__$1 = inst_16977;
var state_16989__$1 = (function (){var statearr_17006 = state_16989;
(statearr_17006[(8)] = inst_16963__$1);

(statearr_17006[(10)] = inst_16975);

return statearr_17006;
})();
var statearr_17007_18941 = state_16989__$1;
(statearr_17007_18941[(2)] = null);

(statearr_17007_18941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (9))){
var state_16989__$1 = state_16989;
var statearr_17008_18942 = state_16989__$1;
(statearr_17008_18942[(2)] = null);

(statearr_17008_18942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (5))){
var state_16989__$1 = state_16989;
var statearr_17011_18946 = state_16989__$1;
(statearr_17011_18946[(2)] = null);

(statearr_17011_18946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (10))){
var inst_16981 = (state_16989[(2)]);
var state_16989__$1 = state_16989;
var statearr_17012_18947 = state_16989__$1;
(statearr_17012_18947[(2)] = inst_16981);

(statearr_17012_18947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (8))){
var inst_16969 = (state_16989[(7)]);
var state_16989__$1 = state_16989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16989__$1,(11),out,inst_16969);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_17015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17015[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_17015[(1)] = (1));

return statearr_17015;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_16989){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_16989);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e17016){var ex__14289__auto__ = e17016;
var statearr_17017_18952 = state_16989;
(statearr_17017_18952[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_16989[(4)]))){
var statearr_17018_18953 = state_16989;
(statearr_17018_18953[(1)] = cljs.core.first((state_16989[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18954 = state_16989;
state_16989 = G__18954;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_16989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_16989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_17019 = f__14500__auto__();
(statearr_17019[(6)] = c__14499__auto___18934);

return statearr_17019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17059 = (function (f,ch,meta17024,_,fn1,meta17060){
this.f = f;
this.ch = ch;
this.meta17024 = meta17024;
this._ = _;
this.fn1 = fn1;
this.meta17060 = meta17060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17061,meta17060__$1){
var self__ = this;
var _17061__$1 = this;
return (new cljs.core.async.t_cljs$core$async17059(self__.f,self__.ch,self__.meta17024,self__._,self__.fn1,meta17060__$1));
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17061){
var self__ = this;
var _17061__$1 = this;
return self__.meta17060;
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17020_SHARP_){
var G__17076 = (((p1__17020_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17020_SHARP_) : self__.f.call(null,p1__17020_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17076) : f1.call(null,G__17076));
});
}));

(cljs.core.async.t_cljs$core$async17059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17024","meta17024",2050316398,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17023","cljs.core.async/t_cljs$core$async17023",-671448312,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17060","meta17060",137534862,null)], null);
}));

(cljs.core.async.t_cljs$core$async17059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17059");

(cljs.core.async.t_cljs$core$async17059.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17059.
 */
cljs.core.async.__GT_t_cljs$core$async17059 = (function cljs$core$async$__GT_t_cljs$core$async17059(f,ch,meta17024,_,fn1,meta17060){
return (new cljs.core.async.t_cljs$core$async17059(f,ch,meta17024,_,fn1,meta17060));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17023 = (function (f,ch,meta17024){
this.f = f;
this.ch = ch;
this.meta17024 = meta17024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17025,meta17024__$1){
var self__ = this;
var _17025__$1 = this;
return (new cljs.core.async.t_cljs$core$async17023(self__.f,self__.ch,meta17024__$1));
}));

(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17025){
var self__ = this;
var _17025__$1 = this;
return self__.meta17024;
}));

(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17059(self__.f,self__.ch,self__.meta17024,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17084 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17084) : self__.f.call(null,G__17084));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17024","meta17024",2050316398,null)], null);
}));

(cljs.core.async.t_cljs$core$async17023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17023");

(cljs.core.async.t_cljs$core$async17023.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17023.
 */
cljs.core.async.__GT_t_cljs$core$async17023 = (function cljs$core$async$__GT_t_cljs$core$async17023(f,ch,meta17024){
return (new cljs.core.async.t_cljs$core$async17023(f,ch,meta17024));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17023(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17092 = (function (f,ch,meta17093){
this.f = f;
this.ch = ch;
this.meta17093 = meta17093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17094,meta17093__$1){
var self__ = this;
var _17094__$1 = this;
return (new cljs.core.async.t_cljs$core$async17092(self__.f,self__.ch,meta17093__$1));
}));

(cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17094){
var self__ = this;
var _17094__$1 = this;
return self__.meta17093;
}));

(cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17093","meta17093",206175528,null)], null);
}));

(cljs.core.async.t_cljs$core$async17092.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17092");

(cljs.core.async.t_cljs$core$async17092.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17092");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17092.
 */
cljs.core.async.__GT_t_cljs$core$async17092 = (function cljs$core$async$__GT_t_cljs$core$async17092(f,ch,meta17093){
return (new cljs.core.async.t_cljs$core$async17092(f,ch,meta17093));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17092(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17133 = (function (p,ch,meta17134){
this.p = p;
this.ch = ch;
this.meta17134 = meta17134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17135,meta17134__$1){
var self__ = this;
var _17135__$1 = this;
return (new cljs.core.async.t_cljs$core$async17133(self__.p,self__.ch,meta17134__$1));
}));

(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17135){
var self__ = this;
var _17135__$1 = this;
return self__.meta17134;
}));

(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17134","meta17134",-1362814173,null)], null);
}));

(cljs.core.async.t_cljs$core$async17133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17133");

(cljs.core.async.t_cljs$core$async17133.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17133.
 */
cljs.core.async.__GT_t_cljs$core$async17133 = (function cljs$core$async$__GT_t_cljs$core$async17133(p,ch,meta17134){
return (new cljs.core.async.t_cljs$core$async17133(p,ch,meta17134));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17133(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17154 = arguments.length;
switch (G__17154) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14499__auto___19005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_17189){
var state_val_17190 = (state_17189[(1)]);
if((state_val_17190 === (7))){
var inst_17185 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
var statearr_17194_19007 = state_17189__$1;
(statearr_17194_19007[(2)] = inst_17185);

(statearr_17194_19007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (1))){
var state_17189__$1 = state_17189;
var statearr_17196_19011 = state_17189__$1;
(statearr_17196_19011[(2)] = null);

(statearr_17196_19011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (4))){
var inst_17168 = (state_17189[(7)]);
var inst_17168__$1 = (state_17189[(2)]);
var inst_17171 = (inst_17168__$1 == null);
var state_17189__$1 = (function (){var statearr_17201 = state_17189;
(statearr_17201[(7)] = inst_17168__$1);

return statearr_17201;
})();
if(cljs.core.truth_(inst_17171)){
var statearr_17202_19013 = state_17189__$1;
(statearr_17202_19013[(1)] = (5));

} else {
var statearr_17203_19014 = state_17189__$1;
(statearr_17203_19014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (6))){
var inst_17168 = (state_17189[(7)]);
var inst_17175 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17168) : p.call(null,inst_17168));
var state_17189__$1 = state_17189;
if(cljs.core.truth_(inst_17175)){
var statearr_17204_19015 = state_17189__$1;
(statearr_17204_19015[(1)] = (8));

} else {
var statearr_17205_19016 = state_17189__$1;
(statearr_17205_19016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (3))){
var inst_17187 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17189__$1,inst_17187);
} else {
if((state_val_17190 === (2))){
var state_17189__$1 = state_17189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17189__$1,(4),ch);
} else {
if((state_val_17190 === (11))){
var inst_17178 = (state_17189[(2)]);
var state_17189__$1 = state_17189;
var statearr_17206_19018 = state_17189__$1;
(statearr_17206_19018[(2)] = inst_17178);

(statearr_17206_19018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (9))){
var state_17189__$1 = state_17189;
var statearr_17207_19019 = state_17189__$1;
(statearr_17207_19019[(2)] = null);

(statearr_17207_19019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (5))){
var inst_17173 = cljs.core.async.close_BANG_(out);
var state_17189__$1 = state_17189;
var statearr_17208_19021 = state_17189__$1;
(statearr_17208_19021[(2)] = inst_17173);

(statearr_17208_19021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (10))){
var inst_17182 = (state_17189[(2)]);
var state_17189__$1 = (function (){var statearr_17209 = state_17189;
(statearr_17209[(8)] = inst_17182);

return statearr_17209;
})();
var statearr_17210_19022 = state_17189__$1;
(statearr_17210_19022[(2)] = null);

(statearr_17210_19022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17190 === (8))){
var inst_17168 = (state_17189[(7)]);
var state_17189__$1 = state_17189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17189__$1,(11),out,inst_17168);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_17213 = [null,null,null,null,null,null,null,null,null];
(statearr_17213[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_17213[(1)] = (1));

return statearr_17213;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_17189){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_17189);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e17214){var ex__14289__auto__ = e17214;
var statearr_17215_19024 = state_17189;
(statearr_17215_19024[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_17189[(4)]))){
var statearr_17216_19025 = state_17189;
(statearr_17216_19025[(1)] = cljs.core.first((state_17189[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19026 = state_17189;
state_17189 = G__19026;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_17189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_17189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_17217 = f__14500__auto__();
(statearr_17217[(6)] = c__14499__auto___19005);

return statearr_17217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17226 = arguments.length;
switch (G__17226) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14499__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_17294){
var state_val_17295 = (state_17294[(1)]);
if((state_val_17295 === (7))){
var inst_17289 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
var statearr_17296_19033 = state_17294__$1;
(statearr_17296_19033[(2)] = inst_17289);

(statearr_17296_19033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (20))){
var inst_17259 = (state_17294[(7)]);
var inst_17270 = (state_17294[(2)]);
var inst_17271 = cljs.core.next(inst_17259);
var inst_17245 = inst_17271;
var inst_17246 = null;
var inst_17247 = (0);
var inst_17248 = (0);
var state_17294__$1 = (function (){var statearr_17297 = state_17294;
(statearr_17297[(8)] = inst_17270);

(statearr_17297[(9)] = inst_17245);

(statearr_17297[(10)] = inst_17248);

(statearr_17297[(11)] = inst_17246);

(statearr_17297[(12)] = inst_17247);

return statearr_17297;
})();
var statearr_17298_19035 = state_17294__$1;
(statearr_17298_19035[(2)] = null);

(statearr_17298_19035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (1))){
var state_17294__$1 = state_17294;
var statearr_17299_19036 = state_17294__$1;
(statearr_17299_19036[(2)] = null);

(statearr_17299_19036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (4))){
var inst_17234 = (state_17294[(13)]);
var inst_17234__$1 = (state_17294[(2)]);
var inst_17235 = (inst_17234__$1 == null);
var state_17294__$1 = (function (){var statearr_17305 = state_17294;
(statearr_17305[(13)] = inst_17234__$1);

return statearr_17305;
})();
if(cljs.core.truth_(inst_17235)){
var statearr_17306_19039 = state_17294__$1;
(statearr_17306_19039[(1)] = (5));

} else {
var statearr_17307_19040 = state_17294__$1;
(statearr_17307_19040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (15))){
var state_17294__$1 = state_17294;
var statearr_17312_19043 = state_17294__$1;
(statearr_17312_19043[(2)] = null);

(statearr_17312_19043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (21))){
var state_17294__$1 = state_17294;
var statearr_17313_19045 = state_17294__$1;
(statearr_17313_19045[(2)] = null);

(statearr_17313_19045[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (13))){
var inst_17245 = (state_17294[(9)]);
var inst_17248 = (state_17294[(10)]);
var inst_17246 = (state_17294[(11)]);
var inst_17247 = (state_17294[(12)]);
var inst_17255 = (state_17294[(2)]);
var inst_17256 = (inst_17248 + (1));
var tmp17309 = inst_17245;
var tmp17310 = inst_17246;
var tmp17311 = inst_17247;
var inst_17245__$1 = tmp17309;
var inst_17246__$1 = tmp17310;
var inst_17247__$1 = tmp17311;
var inst_17248__$1 = inst_17256;
var state_17294__$1 = (function (){var statearr_17318 = state_17294;
(statearr_17318[(9)] = inst_17245__$1);

(statearr_17318[(14)] = inst_17255);

(statearr_17318[(10)] = inst_17248__$1);

(statearr_17318[(11)] = inst_17246__$1);

(statearr_17318[(12)] = inst_17247__$1);

return statearr_17318;
})();
var statearr_17319_19051 = state_17294__$1;
(statearr_17319_19051[(2)] = null);

(statearr_17319_19051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (22))){
var state_17294__$1 = state_17294;
var statearr_17324_19052 = state_17294__$1;
(statearr_17324_19052[(2)] = null);

(statearr_17324_19052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (6))){
var inst_17234 = (state_17294[(13)]);
var inst_17243 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17234) : f.call(null,inst_17234));
var inst_17244 = cljs.core.seq(inst_17243);
var inst_17245 = inst_17244;
var inst_17246 = null;
var inst_17247 = (0);
var inst_17248 = (0);
var state_17294__$1 = (function (){var statearr_17326 = state_17294;
(statearr_17326[(9)] = inst_17245);

(statearr_17326[(10)] = inst_17248);

(statearr_17326[(11)] = inst_17246);

(statearr_17326[(12)] = inst_17247);

return statearr_17326;
})();
var statearr_17328_19063 = state_17294__$1;
(statearr_17328_19063[(2)] = null);

(statearr_17328_19063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (17))){
var inst_17259 = (state_17294[(7)]);
var inst_17263 = cljs.core.chunk_first(inst_17259);
var inst_17264 = cljs.core.chunk_rest(inst_17259);
var inst_17265 = cljs.core.count(inst_17263);
var inst_17245 = inst_17264;
var inst_17246 = inst_17263;
var inst_17247 = inst_17265;
var inst_17248 = (0);
var state_17294__$1 = (function (){var statearr_17334 = state_17294;
(statearr_17334[(9)] = inst_17245);

(statearr_17334[(10)] = inst_17248);

(statearr_17334[(11)] = inst_17246);

(statearr_17334[(12)] = inst_17247);

return statearr_17334;
})();
var statearr_17335_19067 = state_17294__$1;
(statearr_17335_19067[(2)] = null);

(statearr_17335_19067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (3))){
var inst_17291 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17294__$1,inst_17291);
} else {
if((state_val_17295 === (12))){
var inst_17279 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
var statearr_17336_19075 = state_17294__$1;
(statearr_17336_19075[(2)] = inst_17279);

(statearr_17336_19075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (2))){
var state_17294__$1 = state_17294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17294__$1,(4),in$);
} else {
if((state_val_17295 === (23))){
var inst_17287 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
var statearr_17337_19078 = state_17294__$1;
(statearr_17337_19078[(2)] = inst_17287);

(statearr_17337_19078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (19))){
var inst_17274 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
var statearr_17338_19079 = state_17294__$1;
(statearr_17338_19079[(2)] = inst_17274);

(statearr_17338_19079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (11))){
var inst_17259 = (state_17294[(7)]);
var inst_17245 = (state_17294[(9)]);
var inst_17259__$1 = cljs.core.seq(inst_17245);
var state_17294__$1 = (function (){var statearr_17343 = state_17294;
(statearr_17343[(7)] = inst_17259__$1);

return statearr_17343;
})();
if(inst_17259__$1){
var statearr_17344_19080 = state_17294__$1;
(statearr_17344_19080[(1)] = (14));

} else {
var statearr_17345_19085 = state_17294__$1;
(statearr_17345_19085[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (9))){
var inst_17281 = (state_17294[(2)]);
var inst_17282 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17294__$1 = (function (){var statearr_17347 = state_17294;
(statearr_17347[(15)] = inst_17281);

return statearr_17347;
})();
if(cljs.core.truth_(inst_17282)){
var statearr_17348_19089 = state_17294__$1;
(statearr_17348_19089[(1)] = (21));

} else {
var statearr_17349_19090 = state_17294__$1;
(statearr_17349_19090[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (5))){
var inst_17237 = cljs.core.async.close_BANG_(out);
var state_17294__$1 = state_17294;
var statearr_17350_19091 = state_17294__$1;
(statearr_17350_19091[(2)] = inst_17237);

(statearr_17350_19091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (14))){
var inst_17259 = (state_17294[(7)]);
var inst_17261 = cljs.core.chunked_seq_QMARK_(inst_17259);
var state_17294__$1 = state_17294;
if(inst_17261){
var statearr_17351_19092 = state_17294__$1;
(statearr_17351_19092[(1)] = (17));

} else {
var statearr_17352_19093 = state_17294__$1;
(statearr_17352_19093[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (16))){
var inst_17277 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
var statearr_17355_19094 = state_17294__$1;
(statearr_17355_19094[(2)] = inst_17277);

(statearr_17355_19094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (10))){
var inst_17248 = (state_17294[(10)]);
var inst_17246 = (state_17294[(11)]);
var inst_17253 = cljs.core._nth(inst_17246,inst_17248);
var state_17294__$1 = state_17294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17294__$1,(13),out,inst_17253);
} else {
if((state_val_17295 === (18))){
var inst_17259 = (state_17294[(7)]);
var inst_17268 = cljs.core.first(inst_17259);
var state_17294__$1 = state_17294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17294__$1,(20),out,inst_17268);
} else {
if((state_val_17295 === (8))){
var inst_17248 = (state_17294[(10)]);
var inst_17247 = (state_17294[(12)]);
var inst_17250 = (inst_17248 < inst_17247);
var inst_17251 = inst_17250;
var state_17294__$1 = state_17294;
if(cljs.core.truth_(inst_17251)){
var statearr_17360_19095 = state_17294__$1;
(statearr_17360_19095[(1)] = (10));

} else {
var statearr_17362_19096 = state_17294__$1;
(statearr_17362_19096[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14286__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14286__auto____0 = (function (){
var statearr_17366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17366[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14286__auto__);

(statearr_17366[(1)] = (1));

return statearr_17366;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14286__auto____1 = (function (state_17294){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_17294);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e17367){var ex__14289__auto__ = e17367;
var statearr_17368_19098 = state_17294;
(statearr_17368_19098[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_17294[(4)]))){
var statearr_17369_19099 = state_17294;
(statearr_17369_19099[(1)] = cljs.core.first((state_17294[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19100 = state_17294;
state_17294 = G__19100;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14286__auto__ = function(state_17294){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14286__auto____1.call(this,state_17294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14286__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14286__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_17374 = f__14500__auto__();
(statearr_17374[(6)] = c__14499__auto__);

return statearr_17374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));

return c__14499__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17376 = arguments.length;
switch (G__17376) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17378 = arguments.length;
switch (G__17378) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17383 = arguments.length;
switch (G__17383) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14499__auto___19117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_17421){
var state_val_17422 = (state_17421[(1)]);
if((state_val_17422 === (7))){
var inst_17416 = (state_17421[(2)]);
var state_17421__$1 = state_17421;
var statearr_17427_19125 = state_17421__$1;
(statearr_17427_19125[(2)] = inst_17416);

(statearr_17427_19125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17422 === (1))){
var inst_17387 = null;
var state_17421__$1 = (function (){var statearr_17430 = state_17421;
(statearr_17430[(7)] = inst_17387);

return statearr_17430;
})();
var statearr_17431_19130 = state_17421__$1;
(statearr_17431_19130[(2)] = null);

(statearr_17431_19130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17422 === (4))){
var inst_17397 = (state_17421[(8)]);
var inst_17397__$1 = (state_17421[(2)]);
var inst_17398 = (inst_17397__$1 == null);
var inst_17399 = cljs.core.not(inst_17398);
var state_17421__$1 = (function (){var statearr_17432 = state_17421;
(statearr_17432[(8)] = inst_17397__$1);

return statearr_17432;
})();
if(inst_17399){
var statearr_17433_19160 = state_17421__$1;
(statearr_17433_19160[(1)] = (5));

} else {
var statearr_17434_19162 = state_17421__$1;
(statearr_17434_19162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17422 === (6))){
var state_17421__$1 = state_17421;
var statearr_17435_19169 = state_17421__$1;
(statearr_17435_19169[(2)] = null);

(statearr_17435_19169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17422 === (3))){
var inst_17418 = (state_17421[(2)]);
var inst_17419 = cljs.core.async.close_BANG_(out);
var state_17421__$1 = (function (){var statearr_17437 = state_17421;
(statearr_17437[(9)] = inst_17418);

return statearr_17437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17421__$1,inst_17419);
} else {
if((state_val_17422 === (2))){
var state_17421__$1 = state_17421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17421__$1,(4),ch);
} else {
if((state_val_17422 === (11))){
var inst_17397 = (state_17421[(8)]);
var inst_17406 = (state_17421[(2)]);
var inst_17387 = inst_17397;
var state_17421__$1 = (function (){var statearr_17438 = state_17421;
(statearr_17438[(7)] = inst_17387);

(statearr_17438[(10)] = inst_17406);

return statearr_17438;
})();
var statearr_17439_19186 = state_17421__$1;
(statearr_17439_19186[(2)] = null);

(statearr_17439_19186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17422 === (9))){
var inst_17397 = (state_17421[(8)]);
var state_17421__$1 = state_17421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17421__$1,(11),out,inst_17397);
} else {
if((state_val_17422 === (5))){
var inst_17397 = (state_17421[(8)]);
var inst_17387 = (state_17421[(7)]);
var inst_17401 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17397,inst_17387);
var state_17421__$1 = state_17421;
if(inst_17401){
var statearr_17441_19189 = state_17421__$1;
(statearr_17441_19189[(1)] = (8));

} else {
var statearr_17442_19193 = state_17421__$1;
(statearr_17442_19193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17422 === (10))){
var inst_17413 = (state_17421[(2)]);
var state_17421__$1 = state_17421;
var statearr_17449_19194 = state_17421__$1;
(statearr_17449_19194[(2)] = inst_17413);

(statearr_17449_19194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17422 === (8))){
var inst_17387 = (state_17421[(7)]);
var tmp17440 = inst_17387;
var inst_17387__$1 = tmp17440;
var state_17421__$1 = (function (){var statearr_17454 = state_17421;
(statearr_17454[(7)] = inst_17387__$1);

return statearr_17454;
})();
var statearr_17458_19200 = state_17421__$1;
(statearr_17458_19200[(2)] = null);

(statearr_17458_19200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_17459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17459[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_17459[(1)] = (1));

return statearr_17459;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_17421){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_17421);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e17460){var ex__14289__auto__ = e17460;
var statearr_17461_19203 = state_17421;
(statearr_17461_19203[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_17421[(4)]))){
var statearr_17462_19206 = state_17421;
(statearr_17462_19206[(1)] = cljs.core.first((state_17421[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19211 = state_17421;
state_17421 = G__19211;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_17421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_17421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_17474 = f__14500__auto__();
(statearr_17474[(6)] = c__14499__auto___19117);

return statearr_17474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17479 = arguments.length;
switch (G__17479) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14499__auto___19214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_17528){
var state_val_17529 = (state_17528[(1)]);
if((state_val_17529 === (7))){
var inst_17524 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
var statearr_17534_19219 = state_17528__$1;
(statearr_17534_19219[(2)] = inst_17524);

(statearr_17534_19219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (1))){
var inst_17485 = (new Array(n));
var inst_17486 = inst_17485;
var inst_17487 = (0);
var state_17528__$1 = (function (){var statearr_17536 = state_17528;
(statearr_17536[(7)] = inst_17487);

(statearr_17536[(8)] = inst_17486);

return statearr_17536;
})();
var statearr_17540_19228 = state_17528__$1;
(statearr_17540_19228[(2)] = null);

(statearr_17540_19228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (4))){
var inst_17490 = (state_17528[(9)]);
var inst_17490__$1 = (state_17528[(2)]);
var inst_17491 = (inst_17490__$1 == null);
var inst_17492 = cljs.core.not(inst_17491);
var state_17528__$1 = (function (){var statearr_17541 = state_17528;
(statearr_17541[(9)] = inst_17490__$1);

return statearr_17541;
})();
if(inst_17492){
var statearr_17544_19229 = state_17528__$1;
(statearr_17544_19229[(1)] = (5));

} else {
var statearr_17546_19231 = state_17528__$1;
(statearr_17546_19231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (15))){
var inst_17518 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
var statearr_17548_19234 = state_17528__$1;
(statearr_17548_19234[(2)] = inst_17518);

(statearr_17548_19234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (13))){
var state_17528__$1 = state_17528;
var statearr_17551_19235 = state_17528__$1;
(statearr_17551_19235[(2)] = null);

(statearr_17551_19235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (6))){
var inst_17487 = (state_17528[(7)]);
var inst_17513 = (inst_17487 > (0));
var state_17528__$1 = state_17528;
if(cljs.core.truth_(inst_17513)){
var statearr_17555_19236 = state_17528__$1;
(statearr_17555_19236[(1)] = (12));

} else {
var statearr_17556_19237 = state_17528__$1;
(statearr_17556_19237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (3))){
var inst_17526 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17528__$1,inst_17526);
} else {
if((state_val_17529 === (12))){
var inst_17486 = (state_17528[(8)]);
var inst_17516 = cljs.core.vec(inst_17486);
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17528__$1,(15),out,inst_17516);
} else {
if((state_val_17529 === (2))){
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17528__$1,(4),ch);
} else {
if((state_val_17529 === (11))){
var inst_17502 = (state_17528[(2)]);
var inst_17505 = (new Array(n));
var inst_17486 = inst_17505;
var inst_17487 = (0);
var state_17528__$1 = (function (){var statearr_17559 = state_17528;
(statearr_17559[(7)] = inst_17487);

(statearr_17559[(8)] = inst_17486);

(statearr_17559[(10)] = inst_17502);

return statearr_17559;
})();
var statearr_17560_19238 = state_17528__$1;
(statearr_17560_19238[(2)] = null);

(statearr_17560_19238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (9))){
var inst_17486 = (state_17528[(8)]);
var inst_17500 = cljs.core.vec(inst_17486);
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17528__$1,(11),out,inst_17500);
} else {
if((state_val_17529 === (5))){
var inst_17490 = (state_17528[(9)]);
var inst_17487 = (state_17528[(7)]);
var inst_17495 = (state_17528[(11)]);
var inst_17486 = (state_17528[(8)]);
var inst_17494 = (inst_17486[inst_17487] = inst_17490);
var inst_17495__$1 = (inst_17487 + (1));
var inst_17496 = (inst_17495__$1 < n);
var state_17528__$1 = (function (){var statearr_17569 = state_17528;
(statearr_17569[(11)] = inst_17495__$1);

(statearr_17569[(12)] = inst_17494);

return statearr_17569;
})();
if(cljs.core.truth_(inst_17496)){
var statearr_17570_19242 = state_17528__$1;
(statearr_17570_19242[(1)] = (8));

} else {
var statearr_17571_19246 = state_17528__$1;
(statearr_17571_19246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (14))){
var inst_17521 = (state_17528[(2)]);
var inst_17522 = cljs.core.async.close_BANG_(out);
var state_17528__$1 = (function (){var statearr_17573 = state_17528;
(statearr_17573[(13)] = inst_17521);

return statearr_17573;
})();
var statearr_17574_19249 = state_17528__$1;
(statearr_17574_19249[(2)] = inst_17522);

(statearr_17574_19249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (10))){
var inst_17511 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
var statearr_17575_19250 = state_17528__$1;
(statearr_17575_19250[(2)] = inst_17511);

(statearr_17575_19250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (8))){
var inst_17495 = (state_17528[(11)]);
var inst_17486 = (state_17528[(8)]);
var tmp17572 = inst_17486;
var inst_17486__$1 = tmp17572;
var inst_17487 = inst_17495;
var state_17528__$1 = (function (){var statearr_17577 = state_17528;
(statearr_17577[(7)] = inst_17487);

(statearr_17577[(8)] = inst_17486__$1);

return statearr_17577;
})();
var statearr_17578_19252 = state_17528__$1;
(statearr_17578_19252[(2)] = null);

(statearr_17578_19252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_17580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17580[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_17580[(1)] = (1));

return statearr_17580;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_17528){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_17528);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e17581){var ex__14289__auto__ = e17581;
var statearr_17582_19257 = state_17528;
(statearr_17582_19257[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_17528[(4)]))){
var statearr_17583_19258 = state_17528;
(statearr_17583_19258[(1)] = cljs.core.first((state_17528[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19265 = state_17528;
state_17528 = G__19265;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_17528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_17528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_17584 = f__14500__auto__();
(statearr_17584[(6)] = c__14499__auto___19214);

return statearr_17584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17586 = arguments.length;
switch (G__17586) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14499__auto___19284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14500__auto__ = (function (){var switch__14285__auto__ = (function (state_17679){
var state_val_17680 = (state_17679[(1)]);
if((state_val_17680 === (7))){
var inst_17667 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17683_19289 = state_17679__$1;
(statearr_17683_19289[(2)] = inst_17667);

(statearr_17683_19289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (1))){
var inst_17613 = [];
var inst_17614 = inst_17613;
var inst_17615 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17679__$1 = (function (){var statearr_17684 = state_17679;
(statearr_17684[(7)] = inst_17615);

(statearr_17684[(8)] = inst_17614);

return statearr_17684;
})();
var statearr_17685_19298 = state_17679__$1;
(statearr_17685_19298[(2)] = null);

(statearr_17685_19298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (4))){
var inst_17618 = (state_17679[(9)]);
var inst_17618__$1 = (state_17679[(2)]);
var inst_17619 = (inst_17618__$1 == null);
var inst_17620 = cljs.core.not(inst_17619);
var state_17679__$1 = (function (){var statearr_17691 = state_17679;
(statearr_17691[(9)] = inst_17618__$1);

return statearr_17691;
})();
if(inst_17620){
var statearr_17696_19299 = state_17679__$1;
(statearr_17696_19299[(1)] = (5));

} else {
var statearr_17697_19300 = state_17679__$1;
(statearr_17697_19300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (15))){
var inst_17614 = (state_17679[(8)]);
var inst_17659 = cljs.core.vec(inst_17614);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17679__$1,(18),out,inst_17659);
} else {
if((state_val_17680 === (13))){
var inst_17654 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17702_19305 = state_17679__$1;
(statearr_17702_19305[(2)] = inst_17654);

(statearr_17702_19305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (6))){
var inst_17614 = (state_17679[(8)]);
var inst_17656 = inst_17614.length;
var inst_17657 = (inst_17656 > (0));
var state_17679__$1 = state_17679;
if(cljs.core.truth_(inst_17657)){
var statearr_17703_19307 = state_17679__$1;
(statearr_17703_19307[(1)] = (15));

} else {
var statearr_17704_19308 = state_17679__$1;
(statearr_17704_19308[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (17))){
var inst_17664 = (state_17679[(2)]);
var inst_17665 = cljs.core.async.close_BANG_(out);
var state_17679__$1 = (function (){var statearr_17708 = state_17679;
(statearr_17708[(10)] = inst_17664);

return statearr_17708;
})();
var statearr_17709_19313 = state_17679__$1;
(statearr_17709_19313[(2)] = inst_17665);

(statearr_17709_19313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (3))){
var inst_17672 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17679__$1,inst_17672);
} else {
if((state_val_17680 === (12))){
var inst_17614 = (state_17679[(8)]);
var inst_17647 = cljs.core.vec(inst_17614);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17679__$1,(14),out,inst_17647);
} else {
if((state_val_17680 === (2))){
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17679__$1,(4),ch);
} else {
if((state_val_17680 === (11))){
var inst_17618 = (state_17679[(9)]);
var inst_17622 = (state_17679[(11)]);
var inst_17614 = (state_17679[(8)]);
var inst_17644 = inst_17614.push(inst_17618);
var tmp17710 = inst_17614;
var inst_17614__$1 = tmp17710;
var inst_17615 = inst_17622;
var state_17679__$1 = (function (){var statearr_17712 = state_17679;
(statearr_17712[(12)] = inst_17644);

(statearr_17712[(7)] = inst_17615);

(statearr_17712[(8)] = inst_17614__$1);

return statearr_17712;
})();
var statearr_17713_19327 = state_17679__$1;
(statearr_17713_19327[(2)] = null);

(statearr_17713_19327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (9))){
var inst_17615 = (state_17679[(7)]);
var inst_17634 = cljs.core.keyword_identical_QMARK_(inst_17615,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17679__$1 = state_17679;
var statearr_17714_19336 = state_17679__$1;
(statearr_17714_19336[(2)] = inst_17634);

(statearr_17714_19336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (5))){
var inst_17631 = (state_17679[(13)]);
var inst_17618 = (state_17679[(9)]);
var inst_17622 = (state_17679[(11)]);
var inst_17615 = (state_17679[(7)]);
var inst_17622__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17618) : f.call(null,inst_17618));
var inst_17631__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17622__$1,inst_17615);
var state_17679__$1 = (function (){var statearr_17719 = state_17679;
(statearr_17719[(13)] = inst_17631__$1);

(statearr_17719[(11)] = inst_17622__$1);

return statearr_17719;
})();
if(inst_17631__$1){
var statearr_17720_19340 = state_17679__$1;
(statearr_17720_19340[(1)] = (8));

} else {
var statearr_17724_19341 = state_17679__$1;
(statearr_17724_19341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (14))){
var inst_17618 = (state_17679[(9)]);
var inst_17622 = (state_17679[(11)]);
var inst_17649 = (state_17679[(2)]);
var inst_17650 = [];
var inst_17651 = inst_17650.push(inst_17618);
var inst_17614 = inst_17650;
var inst_17615 = inst_17622;
var state_17679__$1 = (function (){var statearr_17728 = state_17679;
(statearr_17728[(14)] = inst_17651);

(statearr_17728[(7)] = inst_17615);

(statearr_17728[(8)] = inst_17614);

(statearr_17728[(15)] = inst_17649);

return statearr_17728;
})();
var statearr_17731_19351 = state_17679__$1;
(statearr_17731_19351[(2)] = null);

(statearr_17731_19351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (16))){
var state_17679__$1 = state_17679;
var statearr_17733_19352 = state_17679__$1;
(statearr_17733_19352[(2)] = null);

(statearr_17733_19352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (10))){
var inst_17636 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
if(cljs.core.truth_(inst_17636)){
var statearr_17734_19353 = state_17679__$1;
(statearr_17734_19353[(1)] = (11));

} else {
var statearr_17735_19354 = state_17679__$1;
(statearr_17735_19354[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (18))){
var inst_17661 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17736_19357 = state_17679__$1;
(statearr_17736_19357[(2)] = inst_17661);

(statearr_17736_19357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (8))){
var inst_17631 = (state_17679[(13)]);
var state_17679__$1 = state_17679;
var statearr_17737_19362 = state_17679__$1;
(statearr_17737_19362[(2)] = inst_17631);

(statearr_17737_19362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14286__auto__ = null;
var cljs$core$async$state_machine__14286__auto____0 = (function (){
var statearr_17739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17739[(0)] = cljs$core$async$state_machine__14286__auto__);

(statearr_17739[(1)] = (1));

return statearr_17739;
});
var cljs$core$async$state_machine__14286__auto____1 = (function (state_17679){
while(true){
var ret_value__14287__auto__ = (function (){try{while(true){
var result__14288__auto__ = switch__14285__auto__(state_17679);
if(cljs.core.keyword_identical_QMARK_(result__14288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14288__auto__;
}
break;
}
}catch (e17740){var ex__14289__auto__ = e17740;
var statearr_17741_19381 = state_17679;
(statearr_17741_19381[(2)] = ex__14289__auto__);


if(cljs.core.seq((state_17679[(4)]))){
var statearr_17742_19382 = state_17679;
(statearr_17742_19382[(1)] = cljs.core.first((state_17679[(4)])));

} else {
throw ex__14289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19383 = state_17679;
state_17679 = G__19383;
continue;
} else {
return ret_value__14287__auto__;
}
break;
}
});
cljs$core$async$state_machine__14286__auto__ = function(state_17679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14286__auto____1.call(this,state_17679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14286__auto____0;
cljs$core$async$state_machine__14286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14286__auto____1;
return cljs$core$async$state_machine__14286__auto__;
})()
})();
var state__14501__auto__ = (function (){var statearr_17743 = f__14500__auto__();
(statearr_17743[(6)] = c__14499__auto___19284);

return statearr_17743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14501__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
