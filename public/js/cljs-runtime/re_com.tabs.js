goog.provide('re_com.tabs');
re_com.tabs.horizontal_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:ul]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tab",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tab-anchor",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:a]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.horizontal_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.horizontal_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"disables all tabs."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.tabs.horizontal_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16155 = arguments.length;
var i__5727__auto___16156 = (0);
while(true){
if((i__5727__auto___16156 < len__5726__auto___16155)){
args__5732__auto__.push((arguments[i__5727__auto___16156]));

var G__16157 = (i__5727__auto___16156 + (1));
i__5727__auto___16156 = G__16157;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__15983){
var map__15984 = p__15983;
var map__15984__$1 = cljs.core.__destructure_map(map__15984);
var args = map__15984__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15984__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15984__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15984__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15984__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15984__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15984__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15984__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15984__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15984__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15984__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5002__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.horizontal_tabs_args_desc),args));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15981_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__15981_SHARP_) : id_fn.call(null,p1__15981_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__15981#] (= current (id-fn p1__15981#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$5 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$5("nav","nav-tabs","noselect","rc-tabs",class$) : re_com.theme.merge_class.call(null,"nav","nav-tabs","noselect","rc-tabs",class$)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0)),(function (){var iter__5480__auto__ = (function re_com$tabs$iter__15989(s__15990){
return (new cljs.core.LazySeq(null,(function (){
var s__15990__$1 = s__15990;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15990__$1);
if(temp__5804__auto__){
var s__15990__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15990__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15990__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15992 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15991 = (0);
while(true){
if((i__15991 < size__5479__auto__)){
var t = cljs.core._nth(c__5478__auto__,i__15991);
cljs.core.chunk_append(b__15992,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var disabled_QMARK___$2 = (function (){var or__5002__auto____$1 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(t);
}
})();
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__15996 = (cljs.core.truth_(disabled_QMARK___$2)?"disabled":null);
var G__15997 = ((selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active","rc-tab"], null):null);
var G__15998 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3(G__15996,G__15997,G__15998) : re_com.theme.merge_class.call(null,G__15996,G__15997,G__15998));
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5000__auto__ = on_change;
if(cljs.core.truth_(and__5000__auto__)){
return (((!(selected_QMARK_))) && (cljs.core.not(disabled_QMARK___$2)));
} else {
return and__5000__auto__;
}
})())?((function (i__15991,id,label,disabled_QMARK___$2,selected_QMARK_,t,c__5478__auto__,size__5479__auto__,b__15992,s__15990__$2,temp__5804__auto__,current,tabs__$1,disabled_QMARK___$1,_,or__5002__auto__,map__15984,map__15984__$1,args,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__15991,id,label,disabled_QMARK___$2,selected_QMARK_,t,c__5478__auto__,size__5479__auto__,b__15992,s__15990__$2,temp__5804__auto__,current,tabs__$1,disabled_QMARK___$1,_,or__5002__auto__,map__15984,map__15984__$1,args,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null)], null);
})());

var G__16160 = (i__15991 + (1));
i__15991 = G__16160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15992),re_com$tabs$iter__15989(cljs.core.chunk_rest(s__15990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15992),null);
}
} else {
var t = cljs.core.first(s__15990__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var disabled_QMARK___$2 = (function (){var or__5002__auto____$1 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(t);
}
})();
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__16009 = (cljs.core.truth_(disabled_QMARK___$2)?"disabled":null);
var G__16010 = ((selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active","rc-tab"], null):null);
var G__16011 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3(G__16009,G__16010,G__16011) : re_com.theme.merge_class.call(null,G__16009,G__16010,G__16011));
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5000__auto__ = on_change;
if(cljs.core.truth_(and__5000__auto__)){
return (((!(selected_QMARK_))) && (cljs.core.not(disabled_QMARK___$2)));
} else {
return and__5000__auto__;
}
})())?((function (id,label,disabled_QMARK___$2,selected_QMARK_,t,s__15990__$2,temp__5804__auto__,current,tabs__$1,disabled_QMARK___$1,_,or__5002__auto__,map__15984,map__15984__$1,args,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,disabled_QMARK___$2,selected_QMARK_,t,s__15990__$2,temp__5804__auto__,current,tabs__$1,disabled_QMARK___$1,_,or__5002__auto__,map__15984,map__15984__$1,args,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null)], null);
})(),re_com$tabs$iter__15989(cljs.core.rest(s__15990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabs__$1);
})()], null);
}
}));

(re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq15982){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15982));
}));

re_com.tabs.bar_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-tooltip",new cljs.core.Keyword(null,"impl","impl",1677848700),"[popover-tooltip]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-btn",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:button]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.bar_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.bar_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16014_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16014_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[horizontal-bar-tabs only] given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its tooltip"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[horizontal-bar-tabs only] relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"validate?","validate?",356227962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Validate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," against ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.tabs.bar_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null)], 0)):null);
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16170 = arguments.length;
var i__5727__auto___16171 = (0);
while(true){
if((i__5727__auto___16171 < len__5726__auto___16170)){
args__5732__auto__.push((arguments[i__5727__auto___16171]));

var G__16172 = (i__5727__auto___16171 + (1));
i__5727__auto___16171 = G__16172;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16028){
var map__16029 = p__16028;
var map__16029__$1 = cljs.core.__destructure_map(map__16029);
var args = map__16029__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16029__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var showing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__16175__delegate = function (p__16032){
var map__16033 = p__16032;
var map__16033__$1 = cljs.core.__destructure_map(map__16033);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16033__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16033__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16033__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var current = re_com.util.deref_or_value(model__$1);
var tabs__$2 = re_com.util.deref_or_value(tabs__$1);
var disabled_QMARK___$2 = re_com.util.deref_or_value(disabled_QMARK___$1);
var _ = (cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not(validate_QMARK_);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16017_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__16017_SHARP_) : id_fn.call(null,p1__16017_SHARP_)));
}),tabs__$2));
}
})())?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(or (not validate?) (not-empty (filter (fn* [p1__16017#] (= current (id-fn p1__16017#))) tabs)))"].join('')))})());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__16035 = "noselect";
var G__16036 = "btn-group";
var G__16037 = (cljs.core.truth_(vertical_QMARK_)?"-vertical":null);
var G__16038 = "rc-tabs ";
var G__16039 = class$;
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$5 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$5(G__16035,G__16036,G__16037,G__16038,G__16039) : re_com.theme.merge_class.call(null,G__16035,G__16036,G__16037,G__16038,G__16039));
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0))], null),(function (){var iter__5480__auto__ = (function re_com$tabs$iter__16042(s__16043){
return (new cljs.core.LazySeq(null,(function (){
var s__16043__$1 = s__16043;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16043__$1);
if(temp__5804__auto__){
var s__16043__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16043__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16043__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16045 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16044 = (0);
while(true){
if((i__16044 < size__5479__auto__)){
var t = cljs.core._nth(c__5478__auto__,i__16044);
cljs.core.chunk_append(b__16045,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var disabled_QMARK___$3 = (function (){var or__5002__auto__ = disabled_QMARK___$2;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(t);
}
})();
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",(cljs.core.truth_(disabled_QMARK___$3)?"disabled ":null),((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5000__auto__ = on_change;
if(cljs.core.truth_(and__5000__auto__)){
return (((!(selected_QMARK_))) && (cljs.core.not(disabled_QMARK___$3)));
} else {
return and__5000__auto__;
}
})())?((function (i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,((function (i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__16018_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__16018_SHARP_)){
return null;
} else {
return p1__16018_SHARP_;
}
});})(i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
);

return null;
});})(i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tabs.cljs",new cljs.core.Keyword(null,"line","line",212345235),157], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5002__auto__ = tooltip_position;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track(((function (i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,the_button,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(i__16044,id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,the_button,t,c__5478__auto__,size__5479__auto__,b__16045,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),the_button,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null);
} else {
return the_button;
}
})());

var G__16205 = (i__16044 + (1));
i__16044 = G__16205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16045),re_com$tabs$iter__16042(cljs.core.chunk_rest(s__16043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16045),null);
}
} else {
var t = cljs.core.first(s__16043__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var disabled_QMARK___$3 = (function (){var or__5002__auto__ = disabled_QMARK___$2;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(t);
}
})();
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",(cljs.core.truth_(disabled_QMARK___$3)?"disabled ":null),((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5000__auto__ = on_change;
if(cljs.core.truth_(and__5000__auto__)){
return (((!(selected_QMARK_))) && (cljs.core.not(disabled_QMARK___$3)));
} else {
return and__5000__auto__;
}
})())?((function (id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,(function (p1__16018_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__16018_SHARP_)){
return null;
} else {
return p1__16018_SHARP_;
}
}));

return null;
});})(id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,t,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tabs.cljs",new cljs.core.Keyword(null,"line","line",212345235),157], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5002__auto__ = tooltip_position;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track(((function (id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,the_button,t,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(id,label,tooltip,selected_QMARK_,disabled_QMARK___$3,the_button,t,s__16043__$2,temp__5804__auto__,current,tabs__$2,disabled_QMARK___$2,_,map__16033,map__16033__$1,model__$1,tabs__$1,disabled_QMARK___$1,showing,map__16029,map__16029__$1,args,validate_QMARK_,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),the_button,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null);
} else {
return the_button;
}
})(),re_com$tabs$iter__16042(cljs.core.rest(s__16043__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabs__$2);
})());
};
var G__16175 = function (var_args){
var p__16032 = null;
if (arguments.length > 0) {
var G__16221__i = 0, G__16221__a = new Array(arguments.length -  0);
while (G__16221__i < G__16221__a.length) {G__16221__a[G__16221__i] = arguments[G__16221__i + 0]; ++G__16221__i;}
  p__16032 = new cljs.core.IndexedSeq(G__16221__a,0,null);
} 
return G__16175__delegate.call(this,p__16032);};
G__16175.cljs$lang$maxFixedArity = 0;
G__16175.cljs$lang$applyTo = (function (arglist__16222){
var p__16032 = cljs.core.seq(arglist__16222);
return G__16175__delegate(p__16032);
});
G__16175.cljs$core$IFn$_invoke$arity$variadic = G__16175__delegate;
return G__16175;
})()
;
}));

(re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq16021){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16021));
}));

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16223 = arguments.length;
var i__5727__auto___16224 = (0);
while(true){
if((i__5727__auto___16224 < len__5726__auto___16223)){
args__5732__auto__.push((arguments[i__5727__auto___16224]));

var G__16225 = (i__5727__auto___16224 + (1));
i__5727__auto___16224 = G__16225;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16071){
var map__16072 = p__16071;
var map__16072__$1 = cljs.core.__destructure_map(map__16072);
var args = map__16072__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16072__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16072__$1,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16072__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16072__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var or__5002__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),tooltip_fn,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),tooltip_position,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as,new cljs.core.Keyword(null,"validate?","validate?",356227962),validate_QMARK_], 0));
}
}));

(re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq16066){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16066));
}));

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16230 = arguments.length;
var i__5727__auto___16231 = (0);
while(true){
if((i__5727__auto___16231 < len__5726__auto___16230)){
args__5732__auto__.push((arguments[i__5727__auto___16231]));

var G__16232 = (i__5727__auto___16231 + (1));
i__5727__auto___16231 = G__16232;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16089){
var map__16090 = p__16089;
var map__16090__$1 = cljs.core.__destructure_map(map__16090);
var args = map__16090__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16090__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16090__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16090__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5002__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as,new cljs.core.Keyword(null,"validate?","validate?",356227962),validate_QMARK_], 0));
}
}));

(re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq16084){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16084));
}));

re_com.tabs.pill_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:ul]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-pill",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-anchor",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:a]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.pill_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.pill_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16097_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16097_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.tabs.pill_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null)):null);
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16241 = arguments.length;
var i__5727__auto___16242 = (0);
while(true){
if((i__5727__auto___16242 < len__5726__auto___16241)){
args__5732__auto__.push((arguments[i__5727__auto___16242]));

var G__16243 = (i__5727__auto___16242 + (1));
i__5727__auto___16242 = G__16243;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16109){
var map__16110 = p__16109;
var map__16110__$1 = cljs.core.__destructure_map(map__16110);
var args = map__16110__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16110__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16099_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__16099_SHARP_) : id_fn.call(null,p1__16099_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__16099#] (= current (id-fn p1__16099#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__16111 = "rc-tabs";
var G__16112 = "noselect";
var G__16113 = "nav";
var G__16114 = "nav-pills";
var G__16115 = (cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null);
var G__16116 = class$;
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$6 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$6(G__16111,G__16112,G__16113,G__16114,G__16115,G__16116) : re_com.theme.merge_class.call(null,G__16111,G__16112,G__16113,G__16114,G__16115,G__16116));
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),re_com.debug.__GT_attr(args),attr], 0)),(function (){var iter__5480__auto__ = (function re_com$tabs$iter__16118(s__16119){
return (new cljs.core.LazySeq(null,(function (){
var s__16119__$1 = s__16119;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16119__$1);
if(temp__5804__auto__){
var s__16119__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16119__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16119__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16121 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16120 = (0);
while(true){
if((i__16120 < size__5479__auto__)){
var t = cljs.core._nth(c__5478__auto__,i__16120);
cljs.core.chunk_append(b__16121,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var disabled_QMARK___$2 = (function (){var or__5002__auto__ = disabled_QMARK___$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(t);
}
})();
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__16126 = "rc-tabs-pill";
var G__16127 = (cljs.core.truth_(disabled_QMARK___$2)?"disabled":null);
var G__16128 = ((selected_QMARK_)?"active":null);
var G__16129 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$4 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$4(G__16126,G__16127,G__16128,G__16129) : re_com.theme.merge_class.call(null,G__16126,G__16127,G__16128,G__16129));
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5000__auto__ = on_change;
if(cljs.core.truth_(and__5000__auto__)){
return (((!(selected_QMARK_))) && (cljs.core.not(disabled_QMARK___$2)));
} else {
return and__5000__auto__;
}
})())?((function (i__16120,id,label,disabled_QMARK___$2,selected_QMARK_,t,c__5478__auto__,size__5479__auto__,b__16121,s__16119__$2,temp__5804__auto__,current,tabs__$1,disabled_QMARK___$1,_,map__16110,map__16110__$1,args,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__16120,id,label,disabled_QMARK___$2,selected_QMARK_,t,c__5478__auto__,size__5479__auto__,b__16121,s__16119__$2,temp__5804__auto__,current,tabs__$1,disabled_QMARK___$1,_,map__16110,map__16110__$1,args,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null)], null);
})());

var G__16258 = (i__16120 + (1));
i__16120 = G__16258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16121),re_com$tabs$iter__16118(cljs.core.chunk_rest(s__16119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16121),null);
}
} else {
var t = cljs.core.first(s__16119__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var disabled_QMARK___$2 = (function (){var or__5002__auto__ = disabled_QMARK___$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(t);
}
})();
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__16133 = "rc-tabs-pill";
var G__16134 = (cljs.core.truth_(disabled_QMARK___$2)?"disabled":null);
var G__16135 = ((selected_QMARK_)?"active":null);
var G__16136 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$4 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$4(G__16133,G__16134,G__16135,G__16136) : re_com.theme.merge_class.call(null,G__16133,G__16134,G__16135,G__16136));
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_((function (){var and__5000__auto__ = on_change;
if(cljs.core.truth_(and__5000__auto__)){
return (((!(selected_QMARK_))) && (cljs.core.not(disabled_QMARK___$2)));
} else {
return and__5000__auto__;
}
})())?((function (id,label,disabled_QMARK___$2,selected_QMARK_,t,s__16119__$2,temp__5804__auto__,current,tabs__$1,disabled_QMARK___$1,_,map__16110,map__16110__$1,args,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,disabled_QMARK___$2,selected_QMARK_,t,s__16119__$2,temp__5804__auto__,current,tabs__$1,disabled_QMARK___$1,_,map__16110,map__16110__$1,args,disabled_QMARK_,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null)], null);
})(),re_com$tabs$iter__16118(cljs.core.rest(s__16119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq16104){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16104));
}));

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16264 = arguments.length;
var i__5727__auto___16265 = (0);
while(true){
if((i__5727__auto___16265 < len__5726__auto___16264)){
args__5732__auto__.push((arguments[i__5727__auto___16265]));

var G__16266 = (i__5727__auto___16265 + (1));
i__5727__auto___16265 = G__16266;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16146){
var map__16147 = p__16146;
var map__16147__$1 = cljs.core.__destructure_map(map__16147);
var args = map__16147__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16147__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16147__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5002__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as], 0));
}
}));

(re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq16140){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16140));
}));

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16271 = arguments.length;
var i__5727__auto___16272 = (0);
while(true){
if((i__5727__auto___16272 < len__5726__auto___16271)){
args__5732__auto__.push((arguments[i__5727__auto___16272]));

var G__16273 = (i__5727__auto___16272 + (1));
i__5727__auto___16272 = G__16273;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__16149){
var map__16150 = p__16149;
var map__16150__$1 = cljs.core.__destructure_map(map__16150);
var args = map__16150__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16150__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16150__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16150__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5002__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as], 0));
}
}));

(re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq16148){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16148));
}));


//# sourceMappingURL=re_com.tabs.js.map
