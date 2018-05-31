// Compiled by ClojureScript 1.10.238 {}
goog.provide('calc_goggles.browse');
goog.require('cljs.core');
goog.require('calc_goggles.stitch');
goog.require('calc_goggles.view');
goog.require('reagent.core');
goog.require('cljs.core.async');
calc_goggles.browse.feild_value = (function calc_goggles$browse$feild_value(id){
return document.getElementById(id).value;
});
if(typeof calc_goggles.browse.objects !== 'undefined'){
} else {
calc_goggles.browse.objects = reagent.core.atom.call(null,[]);
}
if(typeof calc_goggles.browse.all_objects !== 'undefined'){
} else {
calc_goggles.browse.all_objects = reagent.core.atom.call(null,[]);
}
cljs.core.print.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,calc_goggles.browse.objects)));
if(typeof calc_goggles.browse.re_poll !== 'undefined'){
} else {
calc_goggles.browse.re_poll = reagent.core.atom.call(null,true);
}
calc_goggles.browse.reset = (function calc_goggles$browse$reset(){
cljs.core.reset_BANG_.call(null,calc_goggles.browse.objects,[]);

return calc_goggles.browse.re_poll.call(null);
});
calc_goggles.browse.update_objects = (function calc_goggles$browse$update_objects(app_state){
var objects_coll = calc_goggles.stitch.atlas_db_coll.call(null,new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),new cljs.core.Keyword(null,"db-name","db-name",1157928745).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),"objects");
return objects_coll.find(({}),({"name": true, "_id": true})).execute().then(((function (objects_coll){
return (function (objs){
cljs.core.reset_BANG_.call(null,calc_goggles.browse.objects,objs);

cljs.core.reset_BANG_.call(null,calc_goggles.browse.all_objects,objs);

return cljs.core.print.call(null,cljs.core.deref.call(null,calc_goggles.browse.objects));
});})(objects_coll))
).catch(((function (objects_coll){
return (function (p1__26480_SHARP_){
return alert(["model-browser querry error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26480_SHARP_)].join(''));
});})(objects_coll))
);
});
calc_goggles.browse.possibly_update_objects = (function calc_goggles$browse$possibly_update_objects(app_state){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,calc_goggles.browse.objects))){
return calc_goggles.browse.update_objects.call(null,app_state);
} else {
return null;
}
});
calc_goggles.browse.view_object = (function calc_goggles$browse$view_object(id,app_state){
return calc_goggles.stitch.atlas_db_coll.call(null,cljs.core.deref.call(null,app_state).call(null,new cljs.core.Keyword(null,"client","client",-1323448117)),cljs.core.deref.call(null,app_state).call(null,new cljs.core.Keyword(null,"db-name","db-name",1157928745)),"objects").findOne(({"_id": id})).then((function (p1__26481_SHARP_){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.view.model_viewer,p1__26481_SHARP_], null)));
})).catch((function (p1__26482_SHARP_){
return alert(p1__26482_SHARP_);
}));
});
calc_goggles.browse.object_list_item = (function calc_goggles$browse$object_list_item(object,app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"view",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calc_goggles.browse.view_object.call(null,object._id,app_state);
})], null)], null),object.name], null);
});
calc_goggles.browse.object_list = (function calc_goggles$browse$object_list(app_state){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.call(null,(function (obj){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.browse.object_list_item,obj,app_state], null));
}),cljs.core.deref.call(null,calc_goggles.browse.objects)));
});
calc_goggles.browse.contains = (function calc_goggles$browse$contains(string,other){
return !((cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join('')),other) == null));
});
calc_goggles.browse.obj_search = (function calc_goggles$browse$obj_search(){
var query = calc_goggles.browse.feild_value.call(null,"query");
cljs.core.print.call(null,"ss");

return cljs.core.swap_BANG_.call(null,calc_goggles.browse.objects,((function (query){
return (function (){
return cljs.core.filter.call(null,((function (query){
return (function (obj){
return calc_goggles.browse.contains.call(null,query,obj.name);
});})(query))
,cljs.core.deref.call(null,calc_goggles.browse.all_objects));
});})(query))
);
});
calc_goggles.browse.model_browser = (function calc_goggles$browse$model_browser(app_state){
calc_goggles.browse.possibly_update_objects.call(null,app_state);

return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"model-browser",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-controls","input.form-controls",-1068502727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"query",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"object name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.browse.obj_search], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"search!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),calc_goggles.browse.obj_search], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,calc_goggles.browse.objects)))?reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.browse.object_list,app_state], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert-warning","div.alert-warning",-1315083741),"No objects found :( sorry"], null)], null))], null);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return cljs.core.reset_BANG_.call(null,calc_goggles.browse.objects,[]);
})], null));
});

//# sourceMappingURL=browse.js.map?rel=1527787695239
