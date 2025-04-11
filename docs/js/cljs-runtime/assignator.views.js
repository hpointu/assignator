goog.provide('assignator.views');
assignator.views.editable_textarea = (function assignator$views$editable_textarea(placeholder,value,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"cols","cols",-1914801295),(30),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17568_SHARP_){
var G__17569 = p1__17568_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17569) : on_change.call(null,G__17569));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null)], null);
});
assignator.views.main_panel = (function assignator$views$main_panel(){
var people = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"people","people",1443537404)], null));
var tasks = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null));
var assignments = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignments","assignments",-1114514911)], null));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133),new cljs.core.Keyword(null,"label","label",1718410804),"Task Assignment"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"40px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"People"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [assignator.views.editable_textarea,"Enter one person per line",cljs.core.deref(people),(function (p1__17570_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-people","update-people",-1154376867),p1__17570_SHARP_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Tasks"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [assignator.views.editable_textarea,"Enter one task per line",cljs.core.deref(tasks),(function (p1__17571_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),p1__17571_SHARP_], null));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Assign Randomly",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign-randomly","assign-randomly",1698928266)], null));
})], null),((cljs.core.seq(cljs.core.deref(assignments)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),"Assignments"], null),(function (){var iter__5480__auto__ = (function assignator$views$main_panel_$_iter__17572(s__17573){
return (new cljs.core.LazySeq(null,(function (){
var s__17573__$1 = s__17573;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17573__$1);
if(temp__5804__auto__){
var s__17573__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17573__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17573__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17575 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17574 = (0);
while(true){
if((i__17574 < size__5479__auto__)){
var map__17576 = cljs.core._nth(c__5478__auto__,i__17574);
var map__17576__$1 = cljs.core.__destructure_map(map__17576);
var person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,new cljs.core.Keyword(null,"person","person",-1059806875));
var task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,new cljs.core.Keyword(null,"task","task",-1476607993));
cljs.core.chunk_append(b__17575,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(person)," \u2192 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(person),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task)].join('')], null)));

var G__17578 = (i__17574 + (1));
i__17574 = G__17578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17575),assignator$views$main_panel_$_iter__17572(cljs.core.chunk_rest(s__17573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17575),null);
}
} else {
var map__17577 = cljs.core.first(s__17573__$2);
var map__17577__$1 = cljs.core.__destructure_map(map__17577);
var person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17577__$1,new cljs.core.Keyword(null,"person","person",-1059806875));
var task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17577__$1,new cljs.core.Keyword(null,"task","task",-1476607993));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(person)," \u2192 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(person),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task)].join('')], null)),assignator$views$main_panel_$_iter__17572(cljs.core.rest(s__17573__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(assignments));
})())], null):null)], null)], null);
});
});

//# sourceMappingURL=assignator.views.js.map
