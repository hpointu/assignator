goog.provide('re_com.nested_v_grid.parts');
re_com.nested_v_grid.parts.box_style = (function re_com$nested_v_grid$parts$box_style(position){
var G__16566 = position;
var G__16566__$1 = (((G__16566 instanceof cljs.core.Keyword))?G__16566.fqn:null);
switch (G__16566__$1) {
case "top":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(-2),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(-3),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(-2),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"right","right",-452581833),(-3),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16566__$1)].join('')));

}
});
re_com.nested_v_grid.parts.header_label = (function re_com$nested_v_grid$parts$header_label(p__16571){
var map__16573 = p__16571;
var map__16573__$1 = cljs.core.__destructure_map(map__16573);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16573__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var spec = cljs.core.peek(path);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var G__16575 = spec;
var G__16575__$1 = (((G__16575 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__16575));
if((G__16575__$1 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16575__$1);
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var G__16580 = spec;
if((G__16580 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16580);
}
}
}
})()], null);
});
re_com.nested_v_grid.parts.row_header_label = re_com.nested_v_grid.parts.header_label;
re_com.nested_v_grid.parts.column_header_label = re_com.nested_v_grid.parts.header_label;
re_com.nested_v_grid.parts.grid_line_button = (function re_com$nested_v_grid$parts$grid_line_button(_){
var hover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__16585){
var map__16589 = p__16585;
var map__16589__$1 = cljs.core.__destructure_map(map__16589);
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16589__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16589__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16589__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var G__16591 = position;
var G__16591__$1 = (((G__16591 instanceof cljs.core.Keyword))?G__16591.fqn:null);
switch (G__16591__$1) {
case "left":
case "right":
return new cljs.core.Keyword(null,"col-resize","col-resize",1102558581);

break;
case "top":
case "bottom":
return new cljs.core.Keyword(null,"row-resize","row-resize",-1277591696);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16591__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 4px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref(hover_QMARK_))?(1):(0))], null),re_com.nested_v_grid.parts.box_style(position),style], 0)),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.reset_BANG_(hover_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.reset_BANG_(hover_QMARK_,false);
})], null)], null);
});
});
re_com.nested_v_grid.parts.drag_overlay = (function re_com$nested_v_grid$parts$drag_overlay(p__16597){
var map__16598 = p__16597;
var map__16598__$1 = cljs.core.__destructure_map(map__16598);
var x_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16598__$1,new cljs.core.Keyword(null,"x-start","x-start",1183238797));
var y_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16598__$1,new cljs.core.Keyword(null,"y-start","y-start",1249752071));
var on_mouse_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16598__$1,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874));
var on_mouse_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16598__$1,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320));
var size_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16598__$1,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225));
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),on_mouse_up,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (p1__16596_SHARP_){
var x = p1__16596_SHARP_.clientX;
var y = p1__16596_SHARP_.clientY;
p1__16596_SHARP_.preventDefault();

var G__16601 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"x-start","x-start",1183238797),x_start,new cljs.core.Keyword(null,"y-start","y-start",1249752071),y_start,new cljs.core.Keyword(null,"dx","dx",-381796732),(x - x_start),new cljs.core.Keyword(null,"dy","dy",1719547243),(y - y_start)], null);
return (on_mouse_move.cljs$core$IFn$_invoke$arity$1 ? on_mouse_move.cljs$core$IFn$_invoke$arity$1(G__16601) : on_mouse_move.call(null,G__16601));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2147483647),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var G__16602 = size_dimension;
var G__16602__$1 = (((G__16602 instanceof cljs.core.Keyword))?G__16602.fqn:null);
switch (G__16602__$1) {
case "width":
return new cljs.core.Keyword(null,"col-resize","col-resize",1102558581);

break;
case "height":
return new cljs.core.Keyword(null,"row-resize","row-resize",-1277591696);

break;
default:
return new cljs.core.Keyword(null,"grab","grab",-31757349);

}
})()], null)], null)], null);
});
});
re_com.nested_v_grid.parts.resizer = (function re_com$nested_v_grid$parts$resizer(p__16609){
var map__16610 = p__16609;
var map__16610__$1 = cljs.core.__destructure_map(map__16610);
var on_resize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var size_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225));
var header_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var overlay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"overlay","overlay",-139131598));
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16610__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-nested-v-grid-resizer",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null),(function (){var G__16613 = size_dimension;
var G__16613__$1 = (((G__16613 instanceof cljs.core.Keyword))?G__16613.fqn:null);
switch (G__16613__$1) {
case "width":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(1),new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1),new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(size + offset)], null);

break;
case "height":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(1),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(-1),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(size + offset)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16613__$1)].join('')));

}
})(),(function (){var G__16614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_dimension,size_dimension], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__16614)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.keypath__GT_grid_line_name(keypath)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__16614)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(index + (1))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__16614)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.keypath__GT_grid_line_name(keypath)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__16614)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(index + (1))], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16614)].join('')));

}
}
}
}
})(),style], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.grid_line_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var G__16615 = size_dimension;
var G__16615__$1 = (((G__16615 instanceof cljs.core.Keyword))?G__16615.fqn:null);
switch (G__16615__$1) {
case "width":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case "height":
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16615__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return cljs.core.reset_BANG_(overlay,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.drag_overlay,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x-start","x-start",1183238797),e.clientX,new cljs.core.Keyword(null,"y-start","y-start",1249752071),e.clientY,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),header_dimension,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
return cljs.core.reset_BANG_(overlay,null);
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (p__16618){
var map__16620 = p__16618;
var map__16620__$1 = cljs.core.__destructure_map(map__16620);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16620__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16620__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var G__16622 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),header_dimension,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),size_dimension,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"size","size",1098693007),(function (){var x__5087__auto__ = ((function (){var G__16624 = size_dimension;
var G__16624__$1 = (((G__16624 instanceof cljs.core.Keyword))?G__16624.fqn:null);
switch (G__16624__$1) {
case "width":
return dx;

break;
case "height":
return dy;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16624__$1)].join('')));

}
})() + size);
var y__5088__auto__ = (10);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})()], null);
return (on_resize.cljs$core$IFn$_invoke$arity$1 ? on_resize.cljs$core$IFn$_invoke$arity$1(G__16622) : on_resize.call(null,G__16622));
})], null)], null));
})], null)], null)], null);
});

//# sourceMappingURL=re_com.nested_v_grid.parts.js.map
