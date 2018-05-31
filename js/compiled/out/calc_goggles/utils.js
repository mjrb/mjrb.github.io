// Compiled by ClojureScript 1.10.238 {}
goog.provide('calc_goggles.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('calc_goggles.stitch');
goog.require('calc_goggles.browse');
goog.require('reagent.core');
calc_goggles.utils.feild_value = (function calc_goggles$utils$feild_value(id){
return document.getElementById(id).value;
});
calc_goggles.utils.str_is_float_QMARK_ = (function calc_goggles$utils$str_is_float_QMARK_(string){
return cljs.core.not.call(null,isNaN(parseFloat(string)));
});
calc_goggles.utils.draw = (function calc_goggles$utils$draw(){
return modelMaker.draw();
});
calc_goggles.utils.make_shape = (function calc_goggles$utils$make_shape(){
return modelMaker.makeShape();
});
calc_goggles.utils.str_is_int_QMARK_ = (function calc_goggles$utils$str_is_int_QMARK_(string){
return !((cljs.core.re_matches.call(null,/^[0-9]+$/,string) == null));
});
calc_goggles.utils.label = (function calc_goggles$utils$label(var_args){
var G__26486 = arguments.length;
switch (G__26486) {
case 3:
return calc_goggles.utils.label.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return calc_goggles.utils.label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

calc_goggles.utils.label.cljs$core$IFn$_invoke$arity$3 = (function (label_text,id,elem_vec){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label_text], null),elem_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});

calc_goggles.utils.label.cljs$core$IFn$_invoke$arity$1 = (function (label_text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label_text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});

calc_goggles.utils.label.cljs$lang$maxFixedArity = 3;

calc_goggles.utils.login = (function calc_goggles$utils$login(username,password,app_state){
var vec__26488 = calc_goggles.stitch.get_client_login.call(null,cljs.core.deref.call(null,app_state).call(null,new cljs.core.Keyword(null,"api-key","api-key",1037904031)),username,password);
var client_chan = cljs.core.nth.call(null,vec__26488,(0),null);
var err_chan = cljs.core.nth.call(null,vec__26488,(1),null);
var c__24441__auto___26518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26518,vec__26488,client_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto___26518,vec__26488,client_chan,err_chan){
return (function (state_26501){
var state_val_26502 = (state_26501[(1)]);
if((state_val_26502 === (1))){
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26501__$1,(2),client_chan);
} else {
if((state_val_26502 === (2))){
var inst_26492 = (state_26501[(2)]);
var inst_26493 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"client","client",-1323448117),inst_26492);
var inst_26494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26495 = [calc_goggles.browse.model_browser,app_state];
var inst_26496 = (new cljs.core.PersistentVector(null,2,(5),inst_26494,inst_26495,null));
var inst_26497 = reagent.core.as_element.call(null,inst_26496);
var inst_26498 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),inst_26497);
var inst_26499 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"logged-in","logged-in",627058423),true);
var state_26501__$1 = (function (){var statearr_26503 = state_26501;
(statearr_26503[(7)] = inst_26493);

(statearr_26503[(8)] = inst_26498);

return statearr_26503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26501__$1,inst_26499);
} else {
return null;
}
}
});})(c__24441__auto___26518,vec__26488,client_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto___26518,vec__26488,client_chan,err_chan){
return (function() {
var calc_goggles$utils$login_$_state_machine__23685__auto__ = null;
var calc_goggles$utils$login_$_state_machine__23685__auto____0 = (function (){
var statearr_26504 = [null,null,null,null,null,null,null,null,null];
(statearr_26504[(0)] = calc_goggles$utils$login_$_state_machine__23685__auto__);

(statearr_26504[(1)] = (1));

return statearr_26504;
});
var calc_goggles$utils$login_$_state_machine__23685__auto____1 = (function (state_26501){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26505){if((e26505 instanceof Object)){
var ex__23688__auto__ = e26505;
var statearr_26506_26519 = state_26501;
(statearr_26506_26519[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26520 = state_26501;
state_26501 = G__26520;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$utils$login_$_state_machine__23685__auto__ = function(state_26501){
switch(arguments.length){
case 0:
return calc_goggles$utils$login_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$utils$login_$_state_machine__23685__auto____1.call(this,state_26501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$utils$login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$utils$login_$_state_machine__23685__auto____0;
calc_goggles$utils$login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$utils$login_$_state_machine__23685__auto____1;
return calc_goggles$utils$login_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto___26518,vec__26488,client_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26507 = f__24442__auto__.call(null);
(statearr_26507[(6)] = c__24441__auto___26518);

return statearr_26507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26518,vec__26488,client_chan,err_chan))
);


var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,vec__26488,client_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto__,vec__26488,client_chan,err_chan){
return (function (state_26512){
var state_val_26513 = (state_26512[(1)]);
if((state_val_26513 === (1))){
var state_26512__$1 = state_26512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26512__$1,(2),err_chan);
} else {
if((state_val_26513 === (2))){
var inst_26509 = (state_26512[(2)]);
var inst_26510 = alert(inst_26509);
var state_26512__$1 = state_26512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26512__$1,inst_26510);
} else {
return null;
}
}
});})(c__24441__auto__,vec__26488,client_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto__,vec__26488,client_chan,err_chan){
return (function() {
var calc_goggles$utils$login_$_state_machine__23685__auto__ = null;
var calc_goggles$utils$login_$_state_machine__23685__auto____0 = (function (){
var statearr_26514 = [null,null,null,null,null,null,null];
(statearr_26514[(0)] = calc_goggles$utils$login_$_state_machine__23685__auto__);

(statearr_26514[(1)] = (1));

return statearr_26514;
});
var calc_goggles$utils$login_$_state_machine__23685__auto____1 = (function (state_26512){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26515){if((e26515 instanceof Object)){
var ex__23688__auto__ = e26515;
var statearr_26516_26521 = state_26512;
(statearr_26516_26521[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26522 = state_26512;
state_26512 = G__26522;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$utils$login_$_state_machine__23685__auto__ = function(state_26512){
switch(arguments.length){
case 0:
return calc_goggles$utils$login_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$utils$login_$_state_machine__23685__auto____1.call(this,state_26512);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$utils$login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$utils$login_$_state_machine__23685__auto____0;
calc_goggles$utils$login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$utils$login_$_state_machine__23685__auto____1;
return calc_goggles$utils$login_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto__,vec__26488,client_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26517 = f__24442__auto__.call(null);
(statearr_26517[(6)] = c__24441__auto__);

return statearr_26517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,vec__26488,client_chan,err_chan))
);

return c__24441__auto__;
});
calc_goggles.utils.register = (function calc_goggles$utils$register(username,password,api_key){
var vec__26523 = calc_goggles.stitch.register_email.call(null,username,password,api_key);
var client_chan = cljs.core.nth.call(null,vec__26523,(0),null);
var err_chan = cljs.core.nth.call(null,vec__26523,(1),null);
var c__24441__auto___26547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26547,vec__26523,client_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto___26547,vec__26523,client_chan,err_chan){
return (function (state_26530){
var state_val_26531 = (state_26530[(1)]);
if((state_val_26531 === (1))){
var state_26530__$1 = state_26530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26530__$1,(2),client_chan);
} else {
if((state_val_26531 === (2))){
var inst_26527 = (state_26530[(2)]);
var inst_26528 = alert("confirmation email sent!");
var state_26530__$1 = (function (){var statearr_26532 = state_26530;
(statearr_26532[(7)] = inst_26527);

return statearr_26532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26530__$1,inst_26528);
} else {
return null;
}
}
});})(c__24441__auto___26547,vec__26523,client_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto___26547,vec__26523,client_chan,err_chan){
return (function() {
var calc_goggles$utils$register_$_state_machine__23685__auto__ = null;
var calc_goggles$utils$register_$_state_machine__23685__auto____0 = (function (){
var statearr_26533 = [null,null,null,null,null,null,null,null];
(statearr_26533[(0)] = calc_goggles$utils$register_$_state_machine__23685__auto__);

(statearr_26533[(1)] = (1));

return statearr_26533;
});
var calc_goggles$utils$register_$_state_machine__23685__auto____1 = (function (state_26530){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26534){if((e26534 instanceof Object)){
var ex__23688__auto__ = e26534;
var statearr_26535_26548 = state_26530;
(statearr_26535_26548[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26549 = state_26530;
state_26530 = G__26549;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$utils$register_$_state_machine__23685__auto__ = function(state_26530){
switch(arguments.length){
case 0:
return calc_goggles$utils$register_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$utils$register_$_state_machine__23685__auto____1.call(this,state_26530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$utils$register_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$utils$register_$_state_machine__23685__auto____0;
calc_goggles$utils$register_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$utils$register_$_state_machine__23685__auto____1;
return calc_goggles$utils$register_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto___26547,vec__26523,client_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26536 = f__24442__auto__.call(null);
(statearr_26536[(6)] = c__24441__auto___26547);

return statearr_26536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26547,vec__26523,client_chan,err_chan))
);


var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,vec__26523,client_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto__,vec__26523,client_chan,err_chan){
return (function (state_26541){
var state_val_26542 = (state_26541[(1)]);
if((state_val_26542 === (1))){
var state_26541__$1 = state_26541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26541__$1,(2),err_chan);
} else {
if((state_val_26542 === (2))){
var inst_26538 = (state_26541[(2)]);
var inst_26539 = alert(inst_26538);
var state_26541__$1 = state_26541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26541__$1,inst_26539);
} else {
return null;
}
}
});})(c__24441__auto__,vec__26523,client_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto__,vec__26523,client_chan,err_chan){
return (function() {
var calc_goggles$utils$register_$_state_machine__23685__auto__ = null;
var calc_goggles$utils$register_$_state_machine__23685__auto____0 = (function (){
var statearr_26543 = [null,null,null,null,null,null,null];
(statearr_26543[(0)] = calc_goggles$utils$register_$_state_machine__23685__auto__);

(statearr_26543[(1)] = (1));

return statearr_26543;
});
var calc_goggles$utils$register_$_state_machine__23685__auto____1 = (function (state_26541){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26544){if((e26544 instanceof Object)){
var ex__23688__auto__ = e26544;
var statearr_26545_26550 = state_26541;
(statearr_26545_26550[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26551 = state_26541;
state_26541 = G__26551;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$utils$register_$_state_machine__23685__auto__ = function(state_26541){
switch(arguments.length){
case 0:
return calc_goggles$utils$register_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$utils$register_$_state_machine__23685__auto____1.call(this,state_26541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$utils$register_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$utils$register_$_state_machine__23685__auto____0;
calc_goggles$utils$register_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$utils$register_$_state_machine__23685__auto____1;
return calc_goggles$utils$register_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto__,vec__26523,client_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26546 = f__24442__auto__.call(null);
(statearr_26546[(6)] = c__24441__auto__);

return statearr_26546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,vec__26523,client_chan,err_chan))
);

return c__24441__auto__;
});
calc_goggles.utils.password_reset = (function calc_goggles$utils$password_reset(email,api_key){
var vec__26552 = calc_goggles.stitch.email_reset_password.call(null,email,api_key);
var success_chan = cljs.core.nth.call(null,vec__26552,(0),null);
var err_chan = cljs.core.nth.call(null,vec__26552,(1),null);
var c__24441__auto___26576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26576,vec__26552,success_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto___26576,vec__26552,success_chan,err_chan){
return (function (state_26559){
var state_val_26560 = (state_26559[(1)]);
if((state_val_26560 === (1))){
var state_26559__$1 = state_26559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26559__$1,(2),success_chan);
} else {
if((state_val_26560 === (2))){
var inst_26556 = (state_26559[(2)]);
var inst_26557 = alert("reset link sent!");
var state_26559__$1 = (function (){var statearr_26561 = state_26559;
(statearr_26561[(7)] = inst_26556);

return statearr_26561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26559__$1,inst_26557);
} else {
return null;
}
}
});})(c__24441__auto___26576,vec__26552,success_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto___26576,vec__26552,success_chan,err_chan){
return (function() {
var calc_goggles$utils$password_reset_$_state_machine__23685__auto__ = null;
var calc_goggles$utils$password_reset_$_state_machine__23685__auto____0 = (function (){
var statearr_26562 = [null,null,null,null,null,null,null,null];
(statearr_26562[(0)] = calc_goggles$utils$password_reset_$_state_machine__23685__auto__);

(statearr_26562[(1)] = (1));

return statearr_26562;
});
var calc_goggles$utils$password_reset_$_state_machine__23685__auto____1 = (function (state_26559){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26563){if((e26563 instanceof Object)){
var ex__23688__auto__ = e26563;
var statearr_26564_26577 = state_26559;
(statearr_26564_26577[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26578 = state_26559;
state_26559 = G__26578;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$utils$password_reset_$_state_machine__23685__auto__ = function(state_26559){
switch(arguments.length){
case 0:
return calc_goggles$utils$password_reset_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$utils$password_reset_$_state_machine__23685__auto____1.call(this,state_26559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$utils$password_reset_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$utils$password_reset_$_state_machine__23685__auto____0;
calc_goggles$utils$password_reset_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$utils$password_reset_$_state_machine__23685__auto____1;
return calc_goggles$utils$password_reset_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto___26576,vec__26552,success_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26565 = f__24442__auto__.call(null);
(statearr_26565[(6)] = c__24441__auto___26576);

return statearr_26565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26576,vec__26552,success_chan,err_chan))
);


var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,vec__26552,success_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto__,vec__26552,success_chan,err_chan){
return (function (state_26570){
var state_val_26571 = (state_26570[(1)]);
if((state_val_26571 === (1))){
var state_26570__$1 = state_26570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26570__$1,(2),err_chan);
} else {
if((state_val_26571 === (2))){
var inst_26567 = (state_26570[(2)]);
var inst_26568 = alert(inst_26567);
var state_26570__$1 = state_26570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26570__$1,inst_26568);
} else {
return null;
}
}
});})(c__24441__auto__,vec__26552,success_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto__,vec__26552,success_chan,err_chan){
return (function() {
var calc_goggles$utils$password_reset_$_state_machine__23685__auto__ = null;
var calc_goggles$utils$password_reset_$_state_machine__23685__auto____0 = (function (){
var statearr_26572 = [null,null,null,null,null,null,null];
(statearr_26572[(0)] = calc_goggles$utils$password_reset_$_state_machine__23685__auto__);

(statearr_26572[(1)] = (1));

return statearr_26572;
});
var calc_goggles$utils$password_reset_$_state_machine__23685__auto____1 = (function (state_26570){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26573){if((e26573 instanceof Object)){
var ex__23688__auto__ = e26573;
var statearr_26574_26579 = state_26570;
(statearr_26574_26579[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26580 = state_26570;
state_26570 = G__26580;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$utils$password_reset_$_state_machine__23685__auto__ = function(state_26570){
switch(arguments.length){
case 0:
return calc_goggles$utils$password_reset_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$utils$password_reset_$_state_machine__23685__auto____1.call(this,state_26570);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$utils$password_reset_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$utils$password_reset_$_state_machine__23685__auto____0;
calc_goggles$utils$password_reset_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$utils$password_reset_$_state_machine__23685__auto____1;
return calc_goggles$utils$password_reset_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto__,vec__26552,success_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26575 = f__24442__auto__.call(null);
(statearr_26575[(6)] = c__24441__auto__);

return statearr_26575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,vec__26552,success_chan,err_chan))
);

return c__24441__auto__;
});
calc_goggles.utils.register_box = (function calc_goggles$utils$register_box(api_key){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),calc_goggles.utils.label.call(null,"email","uname",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"uname"], null)], null)),calc_goggles.utils.label.call(null,"password","pass",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"pass"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"register!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calc_goggles.utils.register.call(null,calc_goggles.utils.feild_value.call(null,"uname"),calc_goggles.utils.feild_value.call(null,"pass"),api_key);
})], null)], null)], null);
});
calc_goggles.utils.password_reset_box = (function calc_goggles$utils$password_reset_box(api_key){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),calc_goggles.utils.label.call(null,"email","uname",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"uname"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"send password reset",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calc_goggles.utils.password_reset.call(null,calc_goggles.utils.feild_value.call(null,"uname"),api_key);
})], null)], null)], null);
});
calc_goggles.utils.login_box = (function calc_goggles$utils$login_box(app_state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),calc_goggles.utils.label.call(null,"email","uname",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"uname"], null)], null)),calc_goggles.utils.label.call(null,"password","pass",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"pass"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"login",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return calc_goggles.utils.login.call(null,calc_goggles.utils.feild_value.call(null,"uname"),calc_goggles.utils.feild_value.call(null,"pass"),app_state);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"forgot password?",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.utils.password_reset_box,cljs.core.deref.call(null,app_state).call(null,new cljs.core.Keyword(null,"api-key","api-key",1037904031))], null));
})], null)], null)], null);
});

//# sourceMappingURL=utils.js.map?rel=1527787695305
