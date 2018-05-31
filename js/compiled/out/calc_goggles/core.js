// Compiled by ClojureScript 1.10.238 {}
goog.provide('calc_goggles.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('calc_goggles.create');
goog.require('calc_goggles.view');
goog.require('calc_goggles.stitch');
goog.require('cljs.core.async');
goog.require('calc_goggles.utils');
goog.require('calc_goggles.browse');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof calc_goggles.core.app_state !== 'undefined'){
} else {
calc_goggles.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"api-key","api-key",1037904031),"calcgoggles-qwpga",new cljs.core.Keyword(null,"anon-api-key","anon-api-key",1029193309),"calcgoggles-anon-nreiw",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"loading..."], null),new cljs.core.Keyword(null,"client","client",-1323448117),({}),new cljs.core.Keyword(null,"logged-in","logged-in",627058423),false,new cljs.core.Keyword(null,"db-name","db-name",1157928745),"test"], null));
}
calc_goggles.core.anon_login = (function calc_goggles$core$anon_login(){
var vec__26605 = calc_goggles.stitch.get_client.call(null,cljs.core.deref.call(null,calc_goggles.core.app_state).call(null,new cljs.core.Keyword(null,"anon-api-key","anon-api-key",1029193309)));
var client_chan = cljs.core.nth.call(null,vec__26605,(0),null);
var err_chan = cljs.core.nth.call(null,vec__26605,(1),null);
var c__24441__auto___26641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26641,vec__26605,client_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto___26641,vec__26605,client_chan,err_chan){
return (function (state_26623){
var state_val_26624 = (state_26623[(1)]);
if((state_val_26624 === (1))){
var state_26623__$1 = state_26623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26623__$1,(2),client_chan);
} else {
if((state_val_26624 === (2))){
var inst_26609 = (state_26623[(2)]);
var inst_26610 = inst_26609.login();
var inst_26611 = cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"client","client",-1323448117),inst_26609);
var inst_26612 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26613 = [calc_goggles.browse.model_browser,calc_goggles.core.app_state];
var inst_26614 = (new cljs.core.PersistentVector(null,2,(5),inst_26612,inst_26613,null));
var inst_26615 = reagent.core.as_element.call(null,inst_26614);
var inst_26616 = cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),inst_26615);
var inst_26617 = cljs.core.deref.call(null,calc_goggles.core.app_state);
var inst_26618 = inst_26617.call(null,new cljs.core.Keyword(null,"client","client",-1323448117));
var inst_26619 = inst_26618.authedId();
var inst_26620 = ["got anon client",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26619)].join('');
var inst_26621 = cljs.core.print.call(null,inst_26620);
var state_26623__$1 = (function (){var statearr_26625 = state_26623;
(statearr_26625[(7)] = inst_26611);

(statearr_26625[(8)] = inst_26610);

(statearr_26625[(9)] = inst_26616);

return statearr_26625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26623__$1,inst_26621);
} else {
return null;
}
}
});})(c__24441__auto___26641,vec__26605,client_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto___26641,vec__26605,client_chan,err_chan){
return (function() {
var calc_goggles$core$anon_login_$_state_machine__23685__auto__ = null;
var calc_goggles$core$anon_login_$_state_machine__23685__auto____0 = (function (){
var statearr_26626 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26626[(0)] = calc_goggles$core$anon_login_$_state_machine__23685__auto__);

(statearr_26626[(1)] = (1));

return statearr_26626;
});
var calc_goggles$core$anon_login_$_state_machine__23685__auto____1 = (function (state_26623){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object)){
var ex__23688__auto__ = e26627;
var statearr_26628_26642 = state_26623;
(statearr_26628_26642[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26643 = state_26623;
state_26623 = G__26643;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$core$anon_login_$_state_machine__23685__auto__ = function(state_26623){
switch(arguments.length){
case 0:
return calc_goggles$core$anon_login_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$core$anon_login_$_state_machine__23685__auto____1.call(this,state_26623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$core$anon_login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$core$anon_login_$_state_machine__23685__auto____0;
calc_goggles$core$anon_login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$core$anon_login_$_state_machine__23685__auto____1;
return calc_goggles$core$anon_login_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto___26641,vec__26605,client_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26629 = f__24442__auto__.call(null);
(statearr_26629[(6)] = c__24441__auto___26641);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26641,vec__26605,client_chan,err_chan))
);


var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,vec__26605,client_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto__,vec__26605,client_chan,err_chan){
return (function (state_26635){
var state_val_26636 = (state_26635[(1)]);
if((state_val_26636 === (1))){
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(2),err_chan);
} else {
if((state_val_26636 === (2))){
var inst_26631 = (state_26635[(2)]);
var inst_26632 = ["failed to connect to calcGoggles. please try to refresh page to reconnect. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26631)].join('');
var inst_26633 = alert(inst_26632);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26635__$1,inst_26633);
} else {
return null;
}
}
});})(c__24441__auto__,vec__26605,client_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto__,vec__26605,client_chan,err_chan){
return (function() {
var calc_goggles$core$anon_login_$_state_machine__23685__auto__ = null;
var calc_goggles$core$anon_login_$_state_machine__23685__auto____0 = (function (){
var statearr_26637 = [null,null,null,null,null,null,null];
(statearr_26637[(0)] = calc_goggles$core$anon_login_$_state_machine__23685__auto__);

(statearr_26637[(1)] = (1));

return statearr_26637;
});
var calc_goggles$core$anon_login_$_state_machine__23685__auto____1 = (function (state_26635){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26638){if((e26638 instanceof Object)){
var ex__23688__auto__ = e26638;
var statearr_26639_26644 = state_26635;
(statearr_26639_26644[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26645 = state_26635;
state_26635 = G__26645;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$core$anon_login_$_state_machine__23685__auto__ = function(state_26635){
switch(arguments.length){
case 0:
return calc_goggles$core$anon_login_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$core$anon_login_$_state_machine__23685__auto____1.call(this,state_26635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$core$anon_login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$core$anon_login_$_state_machine__23685__auto____0;
calc_goggles$core$anon_login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$core$anon_login_$_state_machine__23685__auto____1;
return calc_goggles$core$anon_login_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto__,vec__26605,client_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26640 = f__24442__auto__.call(null);
(statearr_26640[(6)] = c__24441__auto__);

return statearr_26640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,vec__26605,client_chan,err_chan))
);

return c__24441__auto__;
});
calc_goggles.core.anon_login.call(null);
calc_goggles.core.send_shape = (function calc_goggles$core$send_shape(new_shape){
cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"shape","shape",1190694006),new_shape);

var owner_id = cljs.core.deref.call(null,calc_goggles.core.app_state).call(null,new cljs.core.Keyword(null,"client","client",-1323448117)).authedId();
var objects = calc_goggles.stitch.atlas_db_coll.call(null,cljs.core.deref.call(null,calc_goggles.core.app_state).call(null,new cljs.core.Keyword(null,"client","client",-1323448117)),cljs.core.deref.call(null,calc_goggles.core.app_state).call(null,new cljs.core.Keyword(null,"db-name","db-name",1157928745)),"objects");
new_shape.owner_id = owner_id;

return objects.updateOne(({"name": new_shape.name, "owner_id": owner_id}),new_shape,({"upsert": true})).then(((function (owner_id,objects){
return (function (amount){
return objects.findOne(new_shape,({"_id": true}));
});})(owner_id,objects))
).then(((function (owner_id,objects){
return (function (id_object){
return calc_goggles.browse.view_object.call(null,id_object._id,calc_goggles.core.app_state);
});})(owner_id,objects))
).catch(alert);
});
calc_goggles.core.on_js_reload = (function calc_goggles$core$on_js_reload(){
return null;
});
calc_goggles.core.no_auth_buttons = (function calc_goggles$core$no_auth_buttons(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-secondary","input.btn.btn-secondary",1637651306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"calcGoggles",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"browse",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.browse.model_browser,calc_goggles.core.app_state], null)));
})], null)], null)], null);
});
calc_goggles.core.auth_buttons = (function calc_goggles$core$auth_buttons(logged_in_QMARK_){
if(cljs.core.truth_(logged_in_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"create",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.create.creator,calc_goggles.core.send_shape], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"log out",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.browse.model_browser], null));

cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"logged-in","logged-in",627058423),false);

return cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,(function (state){
state.call(null,new cljs.core.Keyword(null,"client","client",-1323448117)).logout();

calc_goggles.core.anon_login.call(null);

return state;
}));
})], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"log in",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.utils.login_box,calc_goggles.core.app_state], null)));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"register",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,calc_goggles.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.utils.register_box,cljs.core.deref.call(null,calc_goggles.core.app_state).call(null,new cljs.core.Keyword(null,"api-key","api-key",1037904031))], null));
})], null)], null)], null);
}
});
calc_goggles.core.app = (function calc_goggles$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.core.no_auth_buttons], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.core.auth_buttons,cljs.core.deref.call(null,calc_goggles.core.app_state).call(null,new cljs.core.Keyword(null,"logged-in","logged-in",627058423))], null),cljs.core.deref.call(null,calc_goggles.core.app_state).call(null,new cljs.core.Keyword(null,"content","content",15833224))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1527787695397
