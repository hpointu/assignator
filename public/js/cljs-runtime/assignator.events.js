goog.provide('assignator.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"people","people",1443537404),"",new cljs.core.Keyword(null,"tasks","tasks",-1754368880),"",new cljs.core.Keyword(null,"assignments","assignments",-1114514911),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-people","update-people",-1154376867),(function (db,p__18789){
var vec__18790 = p__18789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"people","people",1443537404),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),(function (db,p__18793){
var vec__18794 = p__18793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18794,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18794,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),text);
}));
assignator.events.assign_tasks = (function assignator$events$assign_tasks(people,tasks){
var persons = cljs.core.vec(people);
var tasks_v = cljs.core.vec(tasks);
var remaining_tasks = tasks_v;
var assignments = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(remaining_tasks)){
return assignments;
} else {
var round_capacity = cljs.core.count(persons);
var available = (((cljs.core.count(remaining_tasks) < round_capacity))?cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(remaining_tasks),cljs.core.shuffle(persons)):cljs.core.shuffle(persons));
var n = (function (){var x__5090__auto__ = cljs.core.count(available);
var y__5091__auto__ = cljs.core.count(remaining_tasks);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var round_assignments = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (remaining_tasks,assignments,round_capacity,available,n,persons,tasks_v){
return (function (p,t){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"person","person",-1059806875),p,new cljs.core.Keyword(null,"task","task",-1476607993),t], null);
});})(remaining_tasks,assignments,round_capacity,available,n,persons,tasks_v))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,available),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,remaining_tasks));
var G__18797 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,remaining_tasks);
var G__18798 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(assignments,round_assignments);
remaining_tasks = G__18797;
assignments = G__18798;
continue;
}
break;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assign-randomly","assign-randomly",1698928266),(function (db,_){
var people = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split_lines(new cljs.core.Keyword(null,"people","people",1443537404).cljs$core$IFn$_invoke$arity$1(db)));
var tasks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split_lines(new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"assignments","assignments",-1114514911),assignator.events.assign_tasks(people,tasks));
}));

//# sourceMappingURL=assignator.events.js.map
