goog.provide('re_com.typeahead');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__15364){
var map__15365 = p__15364;
var map__15365__$1 = cljs.core.__destructure_map(map__15365);
var args = map__15365__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15365__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__15368 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__5002__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__15368,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__15368,external_model_value));
} else {
return G__15368;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__15376,event){
var map__15378 = p__15376;
var map__15378__$1 = cljs.core.__destructure_map(map__15378);
var state = map__15378__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15378__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15378__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15378__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__15380 = event;
var G__15380__$1 = (((G__15380 instanceof cljs.core.Keyword))?G__15380.fqn:null);
switch (G__15380__$1) {
case "input-text-blurred":
var and__5000__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__5000__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__5000__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__5000__auto__){
var or__5002__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__5000__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__15389,event){
var map__15390 = p__15389;
var map__15390__$1 = cljs.core.__destructure_map(map__15390);
var state = map__15390__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15390__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__15392 = event;
var G__15392__$1 = (((G__15392 instanceof cljs.core.Keyword))?G__15392.fqn:null);
switch (G__15392__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__15396,new_value){
var map__15397 = p__15396;
var map__15397__$1 = cljs.core.__destructure_map(map__15397);
var state = map__15397__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15397__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__15401,suggestion){
var map__15402 = p__15401;
var map__15402__$1 = cljs.core.__destructure_map(map__15402);
var state = map__15402__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15402__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__15403 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__15403,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__15403;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__15416,index){
var map__15417 = p__15416;
var map__15417__$1 = cljs.core.__destructure_map(map__15417);
var state = map__15417__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15417__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__15419 = state;
var G__15419__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15419,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__15419__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__15419__$1,suggestion):G__15419__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__15419__$2,suggestion);
} else {
return G__15419__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__15420,index){
var map__15421 = p__15420;
var map__15421__$1 = cljs.core.__destructure_map(map__15421);
var state = map__15421__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15421__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__15422){
var map__15423 = p__15422;
var map__15423__$1 = cljs.core.__destructure_map(map__15423);
var state = map__15423__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15423__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__15424 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__15424,suggestion_active_index);
} else {
return G__15424;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__15427){
var map__15432 = p__15427;
var map__15432__$1 = cljs.core.__destructure_map(map__15432);
var state = map__15432__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15432__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15432__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__15435 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__15435,re_com.typeahead.wrap(((function (){var or__5002__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__15435;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__15442){
var map__15443 = p__15442;
var map__15443__$1 = cljs.core.__destructure_map(map__15443);
var state = map__15443__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__15444 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__15444,re_com.typeahead.wrap(((function (){var or__5002__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__15444;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__15452 = state;
var G__15452__$1 = re_com.typeahead.clear_suggestions(G__15452)
;
var G__15452__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__15452__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__15452__$2,null);
} else {
return G__15452__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__15462){
var map__15463 = p__15462;
var map__15463__$1 = cljs.core.__destructure_map(map__15463);
var state = map__15463__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__5000__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__5000__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5802__auto__ = (function (){var G__15472 = text;
var G__15473 = (function (p1__15471_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__15471_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__15472,G__15473) : data_source.call(null,G__15472,G__15473));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var return_value = temp__5802__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__11659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_15502){
var state_val_15503 = (state_15502[(1)]);
if((state_val_15503 === (1))){
var state_15502__$1 = state_15502;
var statearr_15509_15803 = state_15502__$1;
(statearr_15509_15803[(2)] = null);

(statearr_15509_15803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (2))){
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15502__$1,(4),c_search);
} else {
if((state_val_15503 === (3))){
var inst_15500 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15502__$1,inst_15500);
} else {
if((state_val_15503 === (4))){
var inst_15478 = (state_15502[(7)]);
var inst_15478__$1 = (state_15502[(2)]);
var inst_15481 = cljs.core.deref(state_atom);
var inst_15482 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_15481);
var inst_15484 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_15478__$1);
var state_15502__$1 = (function (){var statearr_15512 = state_15502;
(statearr_15512[(7)] = inst_15478__$1);

(statearr_15512[(8)] = inst_15482);

return statearr_15512;
})();
if(inst_15484){
var statearr_15513_15804 = state_15502__$1;
(statearr_15513_15804[(1)] = (5));

} else {
var statearr_15514_15806 = state_15502__$1;
(statearr_15514_15806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (5))){
var inst_15482 = (state_15502[(8)]);
var inst_15489 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_15490 = re_com.typeahead.search_data_source_BANG_(inst_15482,state_atom,"");
var state_15502__$1 = (function (){var statearr_15517 = state_15502;
(statearr_15517[(9)] = inst_15489);

return statearr_15517;
})();
var statearr_15518_15809 = state_15502__$1;
(statearr_15518_15809[(2)] = inst_15490);

(statearr_15518_15809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (6))){
var inst_15478 = (state_15502[(7)]);
var inst_15482 = (state_15502[(8)]);
var inst_15493 = re_com.typeahead.search_data_source_BANG_(inst_15482,state_atom,inst_15478);
var state_15502__$1 = state_15502;
var statearr_15519_15816 = state_15502__$1;
(statearr_15519_15816[(2)] = inst_15493);

(statearr_15519_15816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (7))){
var inst_15495 = (state_15502[(2)]);
var state_15502__$1 = (function (){var statearr_15521 = state_15502;
(statearr_15521[(10)] = inst_15495);

return statearr_15521;
})();
var statearr_15522_15818 = state_15502__$1;
(statearr_15522_15818[(2)] = null);

(statearr_15522_15818[(1)] = (2));


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
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto____0 = (function (){
var statearr_15523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15523[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto__);

(statearr_15523[(1)] = (1));

return statearr_15523;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto____1 = (function (state_15502){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_15502);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e15524){var ex__11499__auto__ = e15524;
var statearr_15526_15822 = state_15502;
(statearr_15526_15822[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_15502[(4)]))){
var statearr_15527_15823 = state_15502;
(statearr_15527_15823[(1)] = cljs.core.first((state_15502[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15824 = state_15502;
state_15502 = G__15824;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto__ = function(state_15502){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto____1.call(this,state_15502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_15531 = f__11660__auto__();
(statearr_15531[(6)] = c__11659__auto__);

return statearr_15531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));

return c__11659__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__15538 = cljs.core.deref(state_atom);
var map__15538__$1 = cljs.core.__destructure_map(map__15538);
var state = map__15538__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15538__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15538__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__15532_SHARP_){
var G__15539 = p1__15532_SHARP_;
var G__15539__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__15539,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__15539__$1,new_text);
} else {
return G__15539__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__15550 = cljs.core._EQ_;
var expr__15551 = event.key;
if(cljs.core.truth_((pred__15550.cljs$core$IFn$_invoke$arity$2 ? pred__15550.cljs$core$IFn$_invoke$arity$2("ArrowUp",expr__15551) : pred__15550.call(null,"ArrowUp",expr__15551)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__15550.cljs$core$IFn$_invoke$arity$2 ? pred__15550.cljs$core$IFn$_invoke$arity$2("ArrowDown",expr__15551) : pred__15550.call(null,"ArrowDown",expr__15551)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__15550.cljs$core$IFn$_invoke$arity$2 ? pred__15550.cljs$core$IFn$_invoke$arity$2("Enter",expr__15551) : pred__15550.call(null,"Enter",expr__15551)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__15550.cljs$core$IFn$_invoke$arity$2 ? pred__15550.cljs$core$IFn$_invoke$arity$2("Escape",expr__15551) : pred__15550.call(null,"Escape",expr__15551)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__15550.cljs$core$IFn$_invoke$arity$2 ? pred__15550.cljs$core$IFn$_invoke$arity$2("Tab",expr__15551) : pred__15550.call(null,"Tab",expr__15551)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),null,new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),null,new cljs.core.Keyword(null,"throbber","throbber",-1896677161),null], null), null)),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15846 = arguments.length;
var i__5727__auto___15847 = (0);
while(true){
if((i__5727__auto___15847 < len__5726__auto___15846)){
args__5732__auto__.push((arguments[i__5727__auto___15847]));

var G__15848 = (i__5727__auto___15847 + (1));
i__5727__auto___15847 = G__15848;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__15569){
var map__15570 = p__15569;
var map__15570__$1 = cljs.core.__destructure_map(map__15570);
var args = map__15570__$1;
var or__5002__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var map__15571 = re_com.typeahead.make_typeahead_state(args);
var map__15571__$1 = cljs.core.__destructure_map(map__15571);
var state = map__15571__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15571__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15571__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__15572){
var map__15573 = p__15572;
var map__15573__$1 = cljs.core.__destructure_map(map__15573);
var args__$1 = map__15573__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5002__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var map__15582 = cljs.core.deref(state_atom);
var map__15582__$1 = cljs.core.__destructure_map(map__15582);
var state__$1 = map__15582__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15582__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15582__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15582__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15582__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__5002__auto____$2 = width;
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5002__auto____$2 = debug_as;
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),293], null)),new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__5002__auto____$2 = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),312], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),315], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestions-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),319], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),322], null)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__15592 = "rc-typeahead-throbber";
var G__15593 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"throbber","throbber",-1896677161),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2(G__15592,G__15593) : re_com.theme.merge_class.call(null,G__15592,G__15593));
})()], null)], null):null),(function (){var iter__5480__auto__ = (function re_com$typeahead$typeahead_render_$_iter__15596(s__15597){
return (new cljs.core.LazySeq(null,(function (){
var s__15597__$1 = s__15597;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15597__$1);
if(temp__5804__auto__){
var s__15597__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15597__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15597__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15599 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15598 = (0);
while(true){
if((i__15598 < size__5479__auto__)){
var vec__15601 = cljs.core._nth(c__5478__auto__,i__15598);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15601,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15601,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__15599,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),330], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__15608 = "rc-typeahead-suggestion";
var G__15609 = ((selected_QMARK_)?" active":null);
var G__15610 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3(G__15608,G__15609,G__15610) : re_com.theme.merge_class.call(null,G__15608,G__15609,G__15610));
})(),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__15598,selected_QMARK_,vec__15601,i,s,c__5478__auto__,size__5479__auto__,b__15599,s__15597__$2,temp__5804__auto__,map__15582,map__15582__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5002__auto____$1,map__15573,map__15573__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__15571,map__15571__$1,state,c_search,c_input,state_atom,input_text_model,or__5002__auto__,map__15570,map__15570__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__15598,selected_QMARK_,vec__15601,i,s,c__5478__auto__,size__5479__auto__,b__15599,s__15597__$2,temp__5804__auto__,map__15582,map__15582__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5002__auto____$1,map__15573,map__15573__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__15571,map__15571__$1,state,c_search,c_input,state_atom,input_text_model,or__5002__auto__,map__15570,map__15570__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__15598,selected_QMARK_,vec__15601,i,s,c__5478__auto__,size__5479__auto__,b__15599,s__15597__$2,temp__5804__auto__,map__15582,map__15582__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5002__auto____$1,map__15573,map__15573__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__15571,map__15571__$1,state,c_search,c_input,state_atom,input_text_model,or__5002__auto__,map__15570,map__15570__$1,args){
return (function (p1__15564_SHARP_){
p1__15564_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__15598,selected_QMARK_,vec__15601,i,s,c__5478__auto__,size__5479__auto__,b__15599,s__15597__$2,temp__5804__auto__,map__15582,map__15582__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5002__auto____$1,map__15573,map__15573__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__15571,map__15571__$1,state,c_search,c_input,state_atom,input_text_model,or__5002__auto__,map__15570,map__15570__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15879 = (i__15598 + (1));
i__15598 = G__15879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15599),re_com$typeahead$typeahead_render_$_iter__15596(cljs.core.chunk_rest(s__15597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15599),null);
}
} else {
var vec__15615 = cljs.core.first(s__15597__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15615,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),330], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__15621 = "rc-typeahead-suggestion";
var G__15622 = ((selected_QMARK_)?" active":null);
var G__15623 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3(G__15621,G__15622,G__15623) : re_com.theme.merge_class.call(null,G__15621,G__15622,G__15623));
})(),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__15615,i,s,s__15597__$2,temp__5804__auto__,map__15582,map__15582__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5002__auto____$1,map__15573,map__15573__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__15571,map__15571__$1,state,c_search,c_input,state_atom,input_text_model,or__5002__auto__,map__15570,map__15570__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__15615,i,s,s__15597__$2,temp__5804__auto__,map__15582,map__15582__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5002__auto____$1,map__15573,map__15573__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__15571,map__15571__$1,state,c_search,c_input,state_atom,input_text_model,or__5002__auto__,map__15570,map__15570__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__15615,i,s,s__15597__$2,temp__5804__auto__,map__15582,map__15582__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5002__auto____$1,map__15573,map__15573__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__15571,map__15571__$1,state,c_search,c_input,state_atom,input_text_model,or__5002__auto__,map__15570,map__15570__$1,args){
return (function (p1__15564_SHARP_){
p1__15564_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__15615,i,s,s__15597__$2,temp__5804__auto__,map__15582,map__15582__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5002__auto____$1,map__15573,map__15573__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__15571,map__15571__$1,state,c_search,c_input,state_atom,input_text_model,or__5002__auto__,map__15570,map__15570__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$typeahead_render_$_iter__15596(cljs.core.rest(s__15597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__15572 = null;
if (arguments.length > 0) {
var G__15883__i = 0, G__15883__a = new Array(arguments.length -  0);
while (G__15883__i < G__15883__a.length) {G__15883__a[G__15883__i] = arguments[G__15883__i + 0]; ++G__15883__i;}
  p__15572 = new cljs.core.IndexedSeq(G__15883__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__15572);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__15884){
var p__15572 = cljs.core.seq(arglist__15884);
return re_com$typeahead$typeahead_render__delegate(p__15572);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq15566){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15566));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__11659__auto___15885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_15679){
var state_val_15681 = (state_15679[(1)]);
if((state_val_15681 === (7))){
var inst_15630 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
var statearr_15682_15886 = state_15679__$1;
(statearr_15682_15886[(2)] = inst_15630);

(statearr_15682_15886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (1))){
var inst_15625 = null;
var state_15679__$1 = (function (){var statearr_15683 = state_15679;
(statearr_15683[(7)] = inst_15625);

return statearr_15683;
})();
var statearr_15684_15887 = state_15679__$1;
(statearr_15684_15887[(2)] = null);

(statearr_15684_15887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (4))){
var state_15679__$1 = state_15679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15679__$1,(7),in$);
} else {
if((state_val_15681 === (15))){
var inst_15663 = (state_15679[(2)]);
var state_15679__$1 = (function (){var statearr_15686 = state_15679;
(statearr_15686[(8)] = inst_15663);

return statearr_15686;
})();
var statearr_15687_15888 = state_15679__$1;
(statearr_15687_15888[(2)] = null);

(statearr_15687_15888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (13))){
var inst_15651 = (state_15679[(9)]);
var inst_15665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15651,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_15679__$1 = state_15679;
if(inst_15665){
var statearr_15688_15890 = state_15679__$1;
(statearr_15688_15890[(1)] = (16));

} else {
var statearr_15689_15892 = state_15679__$1;
(statearr_15689_15892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (6))){
var inst_15642 = (state_15679[(10)]);
var inst_15634 = (state_15679[(11)]);
var inst_15633 = (state_15679[(2)]);
var inst_15634__$1 = cljs.core.async.timeout(ms);
var inst_15642__$1 = in$;
var inst_15643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15644 = [inst_15642__$1,inst_15634__$1];
var inst_15645 = (new cljs.core.PersistentVector(null,2,(5),inst_15643,inst_15644,null));
var state_15679__$1 = (function (){var statearr_15693 = state_15679;
(statearr_15693[(12)] = inst_15633);

(statearr_15693[(10)] = inst_15642__$1);

(statearr_15693[(11)] = inst_15634__$1);

return statearr_15693;
})();
return cljs.core.async.ioc_alts_BANG_(state_15679__$1,(8),inst_15645);
} else {
if((state_val_15681 === (17))){
var state_15679__$1 = state_15679;
var statearr_15698_15896 = state_15679__$1;
(statearr_15698_15896[(2)] = null);

(statearr_15698_15896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (3))){
var inst_15676 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15679__$1,inst_15676);
} else {
if((state_val_15681 === (12))){
var inst_15633 = (state_15679[(12)]);
var state_15679__$1 = state_15679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15679__$1,(15),out,inst_15633);
} else {
if((state_val_15681 === (2))){
var inst_15625 = (state_15679[(7)]);
var inst_15627 = (inst_15625 == null);
var state_15679__$1 = state_15679;
if(cljs.core.truth_(inst_15627)){
var statearr_15704_15897 = state_15679__$1;
(statearr_15704_15897[(1)] = (4));

} else {
var statearr_15705_15898 = state_15679__$1;
(statearr_15705_15898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (11))){
var inst_15673 = (state_15679[(2)]);
var inst_15625 = inst_15673;
var state_15679__$1 = (function (){var statearr_15709 = state_15679;
(statearr_15709[(7)] = inst_15625);

return statearr_15709;
})();
var statearr_15710_15899 = state_15679__$1;
(statearr_15710_15899[(2)] = null);

(statearr_15710_15899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (9))){
var inst_15647 = (state_15679[(13)]);
var inst_15657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15647,(0),null);
var inst_15658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15647,(1),null);
var state_15679__$1 = (function (){var statearr_15715 = state_15679;
(statearr_15715[(14)] = inst_15658);

return statearr_15715;
})();
var statearr_15716_15900 = state_15679__$1;
(statearr_15716_15900[(2)] = inst_15657);

(statearr_15716_15900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (5))){
var inst_15625 = (state_15679[(7)]);
var state_15679__$1 = state_15679;
var statearr_15718_15901 = state_15679__$1;
(statearr_15718_15901[(2)] = inst_15625);

(statearr_15718_15901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (14))){
var inst_15671 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
var statearr_15721_15902 = state_15679__$1;
(statearr_15721_15902[(2)] = inst_15671);

(statearr_15721_15902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (16))){
var inst_15649 = (state_15679[(15)]);
var state_15679__$1 = state_15679;
var statearr_15725_15903 = state_15679__$1;
(statearr_15725_15903[(2)] = inst_15649);

(statearr_15725_15903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (10))){
var inst_15651 = (state_15679[(9)]);
var inst_15634 = (state_15679[(11)]);
var inst_15660 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15651,inst_15634);
var state_15679__$1 = state_15679;
if(inst_15660){
var statearr_15728_15904 = state_15679__$1;
(statearr_15728_15904[(1)] = (12));

} else {
var statearr_15730_15905 = state_15679__$1;
(statearr_15730_15905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (18))){
var inst_15669 = (state_15679[(2)]);
var state_15679__$1 = state_15679;
var statearr_15731_15906 = state_15679__$1;
(statearr_15731_15906[(2)] = inst_15669);

(statearr_15731_15906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15681 === (8))){
var inst_15647 = (state_15679[(13)]);
var inst_15651 = (state_15679[(9)]);
var inst_15642 = (state_15679[(10)]);
var inst_15647__$1 = (state_15679[(2)]);
var inst_15649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15647__$1,(0),null);
var inst_15651__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15647__$1,(1),null);
var inst_15652 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15651__$1,inst_15642);
var state_15679__$1 = (function (){var statearr_15735 = state_15679;
(statearr_15735[(13)] = inst_15647__$1);

(statearr_15735[(9)] = inst_15651__$1);

(statearr_15735[(15)] = inst_15649);

return statearr_15735;
})();
if(inst_15652){
var statearr_15736_15907 = state_15679__$1;
(statearr_15736_15907[(1)] = (9));

} else {
var statearr_15737_15908 = state_15679__$1;
(statearr_15737_15908[(1)] = (10));

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
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__11496__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__11496__auto____0 = (function (){
var statearr_15742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15742[(0)] = re_com$typeahead$debounce_$_state_machine__11496__auto__);

(statearr_15742[(1)] = (1));

return statearr_15742;
});
var re_com$typeahead$debounce_$_state_machine__11496__auto____1 = (function (state_15679){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_15679);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e15744){var ex__11499__auto__ = e15744;
var statearr_15745_15909 = state_15679;
(statearr_15745_15909[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_15679[(4)]))){
var statearr_15747_15910 = state_15679;
(statearr_15747_15910[(1)] = cljs.core.first((state_15679[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15920 = state_15679;
state_15679 = G__15920;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__11496__auto__ = function(state_15679){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__11496__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__11496__auto____1.call(this,state_15679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__11496__auto____0;
re_com$typeahead$debounce_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__11496__auto____1;
return re_com$typeahead$debounce_$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_15752 = f__11660__auto__();
(statearr_15752[(6)] = c__11659__auto___15885);

return statearr_15752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
