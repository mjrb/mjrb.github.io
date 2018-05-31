// Compiled by ClojureScript 1.10.238 {}
goog.provide('calc_goggles.stitch');
goog.require('cljs.core');
goog.require('cljs.core.async');
calc_goggles.stitch.prom__GT_chan = (function calc_goggles$stitch$prom__GT_chan(var_args){
var G__26365 = arguments.length;
switch (G__26365) {
case 2:
return calc_goggles.stitch.prom__GT_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return calc_goggles.stitch.prom__GT_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

calc_goggles.stitch.prom__GT_chan.cljs$core$IFn$_invoke$arity$2 = (function (prom,err_chan){
var val_chan = cljs.core.async.chan.call(null);
prom.then(((function (val_chan){
return (function (val){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,val_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto__,val_chan){
return (function (state_26369){
var state_val_26370 = (state_26369[(1)]);
if((state_val_26370 === (1))){
var state_26369__$1 = state_26369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26369__$1,(2),val_chan,val);
} else {
if((state_val_26370 === (2))){
var inst_26367 = (state_26369[(2)]);
var state_26369__$1 = state_26369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26369__$1,inst_26367);
} else {
return null;
}
}
});})(c__24441__auto__,val_chan))
;
return ((function (switch__23684__auto__,c__24441__auto__,val_chan){
return (function() {
var calc_goggles$stitch$state_machine__23685__auto__ = null;
var calc_goggles$stitch$state_machine__23685__auto____0 = (function (){
var statearr_26371 = [null,null,null,null,null,null,null];
(statearr_26371[(0)] = calc_goggles$stitch$state_machine__23685__auto__);

(statearr_26371[(1)] = (1));

return statearr_26371;
});
var calc_goggles$stitch$state_machine__23685__auto____1 = (function (state_26369){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26372){if((e26372 instanceof Object)){
var ex__23688__auto__ = e26372;
var statearr_26373_26403 = state_26369;
(statearr_26373_26403[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26404 = state_26369;
state_26369 = G__26404;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$stitch$state_machine__23685__auto__ = function(state_26369){
switch(arguments.length){
case 0:
return calc_goggles$stitch$state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$stitch$state_machine__23685__auto____1.call(this,state_26369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$stitch$state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$stitch$state_machine__23685__auto____0;
calc_goggles$stitch$state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$stitch$state_machine__23685__auto____1;
return calc_goggles$stitch$state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto__,val_chan))
})();
var state__24443__auto__ = (function (){var statearr_26374 = f__24442__auto__.call(null);
(statearr_26374[(6)] = c__24441__auto__);

return statearr_26374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,val_chan))
);

return c__24441__auto__;
});})(val_chan))
);

prom.catch(((function (val_chan){
return (function (err){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,val_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto__,val_chan){
return (function (state_26378){
var state_val_26379 = (state_26378[(1)]);
if((state_val_26379 === (1))){
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26378__$1,(2),err_chan,err);
} else {
if((state_val_26379 === (2))){
var inst_26376 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26378__$1,inst_26376);
} else {
return null;
}
}
});})(c__24441__auto__,val_chan))
;
return ((function (switch__23684__auto__,c__24441__auto__,val_chan){
return (function() {
var calc_goggles$stitch$state_machine__23685__auto__ = null;
var calc_goggles$stitch$state_machine__23685__auto____0 = (function (){
var statearr_26380 = [null,null,null,null,null,null,null];
(statearr_26380[(0)] = calc_goggles$stitch$state_machine__23685__auto__);

(statearr_26380[(1)] = (1));

return statearr_26380;
});
var calc_goggles$stitch$state_machine__23685__auto____1 = (function (state_26378){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26381){if((e26381 instanceof Object)){
var ex__23688__auto__ = e26381;
var statearr_26382_26405 = state_26378;
(statearr_26382_26405[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26406 = state_26378;
state_26378 = G__26406;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$stitch$state_machine__23685__auto__ = function(state_26378){
switch(arguments.length){
case 0:
return calc_goggles$stitch$state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$stitch$state_machine__23685__auto____1.call(this,state_26378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$stitch$state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$stitch$state_machine__23685__auto____0;
calc_goggles$stitch$state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$stitch$state_machine__23685__auto____1;
return calc_goggles$stitch$state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto__,val_chan))
})();
var state__24443__auto__ = (function (){var statearr_26383 = f__24442__auto__.call(null);
(statearr_26383[(6)] = c__24441__auto__);

return statearr_26383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,val_chan))
);

return c__24441__auto__;
});})(val_chan))
);

return val_chan;
});

calc_goggles.stitch.prom__GT_chan.cljs$core$IFn$_invoke$arity$1 = (function (prom){
var val_chan = cljs.core.async.chan.call(null);
var err_chan = cljs.core.async.chan.call(null);
prom.then(((function (val_chan,err_chan){
return (function (val){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,val_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto__,val_chan,err_chan){
return (function (state_26387){
var state_val_26388 = (state_26387[(1)]);
if((state_val_26388 === (1))){
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26387__$1,(2),val_chan,val);
} else {
if((state_val_26388 === (2))){
var inst_26385 = (state_26387[(2)]);
var state_26387__$1 = state_26387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26387__$1,inst_26385);
} else {
return null;
}
}
});})(c__24441__auto__,val_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto__,val_chan,err_chan){
return (function() {
var calc_goggles$stitch$state_machine__23685__auto__ = null;
var calc_goggles$stitch$state_machine__23685__auto____0 = (function (){
var statearr_26389 = [null,null,null,null,null,null,null];
(statearr_26389[(0)] = calc_goggles$stitch$state_machine__23685__auto__);

(statearr_26389[(1)] = (1));

return statearr_26389;
});
var calc_goggles$stitch$state_machine__23685__auto____1 = (function (state_26387){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26390){if((e26390 instanceof Object)){
var ex__23688__auto__ = e26390;
var statearr_26391_26407 = state_26387;
(statearr_26391_26407[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26408 = state_26387;
state_26387 = G__26408;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$stitch$state_machine__23685__auto__ = function(state_26387){
switch(arguments.length){
case 0:
return calc_goggles$stitch$state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$stitch$state_machine__23685__auto____1.call(this,state_26387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$stitch$state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$stitch$state_machine__23685__auto____0;
calc_goggles$stitch$state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$stitch$state_machine__23685__auto____1;
return calc_goggles$stitch$state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto__,val_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26392 = f__24442__auto__.call(null);
(statearr_26392[(6)] = c__24441__auto__);

return statearr_26392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,val_chan,err_chan))
);

return c__24441__auto__;
});})(val_chan,err_chan))
);

prom.catch(((function (val_chan,err_chan){
return (function (err){
var c__24441__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto__,val_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto__,val_chan,err_chan){
return (function (state_26396){
var state_val_26397 = (state_26396[(1)]);
if((state_val_26397 === (1))){
var state_26396__$1 = state_26396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26396__$1,(2),err_chan,err);
} else {
if((state_val_26397 === (2))){
var inst_26394 = (state_26396[(2)]);
var state_26396__$1 = state_26396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26396__$1,inst_26394);
} else {
return null;
}
}
});})(c__24441__auto__,val_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto__,val_chan,err_chan){
return (function() {
var calc_goggles$stitch$state_machine__23685__auto__ = null;
var calc_goggles$stitch$state_machine__23685__auto____0 = (function (){
var statearr_26398 = [null,null,null,null,null,null,null];
(statearr_26398[(0)] = calc_goggles$stitch$state_machine__23685__auto__);

(statearr_26398[(1)] = (1));

return statearr_26398;
});
var calc_goggles$stitch$state_machine__23685__auto____1 = (function (state_26396){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26399){if((e26399 instanceof Object)){
var ex__23688__auto__ = e26399;
var statearr_26400_26409 = state_26396;
(statearr_26400_26409[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26410 = state_26396;
state_26396 = G__26410;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$stitch$state_machine__23685__auto__ = function(state_26396){
switch(arguments.length){
case 0:
return calc_goggles$stitch$state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$stitch$state_machine__23685__auto____1.call(this,state_26396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$stitch$state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$stitch$state_machine__23685__auto____0;
calc_goggles$stitch$state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$stitch$state_machine__23685__auto____1;
return calc_goggles$stitch$state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto__,val_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26401 = f__24442__auto__.call(null);
(statearr_26401[(6)] = c__24441__auto__);

return statearr_26401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto__,val_chan,err_chan))
);

return c__24441__auto__;
});})(val_chan,err_chan))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_chan,err_chan], null);
});

calc_goggles.stitch.prom__GT_chan.cljs$lang$maxFixedArity = 2;

calc_goggles.stitch.get_clientp = (function calc_goggles$stitch$get_clientp(api_key){
return window.stitch.StitchClientFactory.create(api_key);
});
calc_goggles.stitch.get_client = (function calc_goggles$stitch$get_client(api_key){
return calc_goggles.stitch.prom__GT_chan.call(null,calc_goggles.stitch.get_clientp.call(null,api_key));
});
calc_goggles.stitch.login = (function calc_goggles$stitch$login(var_args){
var G__26412 = arguments.length;
switch (G__26412) {
case 4:
return calc_goggles.stitch.login.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return calc_goggles.stitch.login.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

calc_goggles.stitch.login.cljs$core$IFn$_invoke$arity$4 = (function (client,user,pass,err_chan){
return calc_goggles.stitch.prom__GT_chan.call(null,client.login(user,pass),err_chan);
});

calc_goggles.stitch.login.cljs$core$IFn$_invoke$arity$3 = (function (client,user,pass){
return calc_goggles.stitch.prom__GT_chan.call(null,client.login(user,pass));
});

calc_goggles.stitch.login.cljs$lang$maxFixedArity = 4;

calc_goggles.stitch.get_client_login = (function calc_goggles$stitch$get_client_login(api_key,username,password){
var vec__26414 = calc_goggles.stitch.get_client.call(null,api_key);
var client_chan = cljs.core.nth.call(null,vec__26414,(0),null);
var err_chan = cljs.core.nth.call(null,vec__26414,(1),null);
var c__24441__auto___26433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26433,vec__26414,client_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto___26433,vec__26414,client_chan,err_chan){
return (function (state_26425){
var state_val_26426 = (state_26425[(1)]);
if((state_val_26426 === (1))){
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(2),client_chan);
} else {
if((state_val_26426 === (2))){
var inst_26418 = (state_26425[(7)]);
var inst_26418__$1 = (state_26425[(2)]);
var inst_26419 = calc_goggles.stitch.login.call(null,inst_26418__$1,username,password,err_chan);
var state_26425__$1 = (function (){var statearr_26427 = state_26425;
(statearr_26427[(7)] = inst_26418__$1);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(3),inst_26419);
} else {
if((state_val_26426 === (3))){
var inst_26418 = (state_26425[(7)]);
var inst_26421 = (state_26425[(2)]);
var state_26425__$1 = (function (){var statearr_26428 = state_26425;
(statearr_26428[(8)] = inst_26421);

return statearr_26428;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26425__$1,(4),client_chan,inst_26418);
} else {
if((state_val_26426 === (4))){
var inst_26423 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26425__$1,inst_26423);
} else {
return null;
}
}
}
}
});})(c__24441__auto___26433,vec__26414,client_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto___26433,vec__26414,client_chan,err_chan){
return (function() {
var calc_goggles$stitch$get_client_login_$_state_machine__23685__auto__ = null;
var calc_goggles$stitch$get_client_login_$_state_machine__23685__auto____0 = (function (){
var statearr_26429 = [null,null,null,null,null,null,null,null,null];
(statearr_26429[(0)] = calc_goggles$stitch$get_client_login_$_state_machine__23685__auto__);

(statearr_26429[(1)] = (1));

return statearr_26429;
});
var calc_goggles$stitch$get_client_login_$_state_machine__23685__auto____1 = (function (state_26425){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26430){if((e26430 instanceof Object)){
var ex__23688__auto__ = e26430;
var statearr_26431_26434 = state_26425;
(statearr_26431_26434[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26435 = state_26425;
state_26425 = G__26435;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$stitch$get_client_login_$_state_machine__23685__auto__ = function(state_26425){
switch(arguments.length){
case 0:
return calc_goggles$stitch$get_client_login_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$stitch$get_client_login_$_state_machine__23685__auto____1.call(this,state_26425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$stitch$get_client_login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$stitch$get_client_login_$_state_machine__23685__auto____0;
calc_goggles$stitch$get_client_login_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$stitch$get_client_login_$_state_machine__23685__auto____1;
return calc_goggles$stitch$get_client_login_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto___26433,vec__26414,client_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26432 = f__24442__auto__.call(null);
(statearr_26432[(6)] = c__24441__auto___26433);

return statearr_26432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26433,vec__26414,client_chan,err_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_chan,err_chan], null);
});
calc_goggles.stitch.auth_provider = (function calc_goggles$stitch$auth_provider(client,type){
return client.auth.provider(type);
});
calc_goggles.stitch.email_reset_password = (function calc_goggles$stitch$email_reset_password(email,api_key){

var vec__26436 = calc_goggles.stitch.get_client.call(null,api_key);
var client_chan = cljs.core.nth.call(null,vec__26436,(0),null);
var err_chan = cljs.core.nth.call(null,vec__26436,(1),null);
var result_chan = cljs.core.async.chan.call(null);
var c__24441__auto___26452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26452,vec__26436,client_chan,err_chan,result_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto___26452,vec__26436,client_chan,err_chan,result_chan){
return (function (state_26446){
var state_val_26447 = (state_26446[(1)]);
if((state_val_26447 === (1))){
var state_26446__$1 = state_26446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26446__$1,(2),client_chan);
} else {
if((state_val_26447 === (2))){
var inst_26440 = (state_26446[(2)]);
var inst_26441 = calc_goggles.stitch.auth_provider.call(null,inst_26440,"userpass");
var inst_26442 = inst_26441.sendPasswordReset(email);
var inst_26443 = calc_goggles.stitch.prom__GT_chan.call(null,inst_26442,err_chan);
var inst_26444 = cljs.core.async.pipe.call(null,inst_26443,result_chan);
var state_26446__$1 = state_26446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26446__$1,inst_26444);
} else {
return null;
}
}
});})(c__24441__auto___26452,vec__26436,client_chan,err_chan,result_chan))
;
return ((function (switch__23684__auto__,c__24441__auto___26452,vec__26436,client_chan,err_chan,result_chan){
return (function() {
var calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto__ = null;
var calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto____0 = (function (){
var statearr_26448 = [null,null,null,null,null,null,null];
(statearr_26448[(0)] = calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto__);

(statearr_26448[(1)] = (1));

return statearr_26448;
});
var calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto____1 = (function (state_26446){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26449){if((e26449 instanceof Object)){
var ex__23688__auto__ = e26449;
var statearr_26450_26453 = state_26446;
(statearr_26450_26453[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26454 = state_26446;
state_26446 = G__26454;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto__ = function(state_26446){
switch(arguments.length){
case 0:
return calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto____1.call(this,state_26446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto____0;
calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto____1;
return calc_goggles$stitch$email_reset_password_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto___26452,vec__26436,client_chan,err_chan,result_chan))
})();
var state__24443__auto__ = (function (){var statearr_26451 = f__24442__auto__.call(null);
(statearr_26451[(6)] = c__24441__auto___26452);

return statearr_26451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26452,vec__26436,client_chan,err_chan,result_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result_chan,err_chan], null);
});
calc_goggles.stitch.register_email = (function calc_goggles$stitch$register_email(username,password,api_key){
var vec__26455 = calc_goggles.stitch.get_client.call(null,api_key);
var client_chan = cljs.core.nth.call(null,vec__26455,(0),null);
var err_chan = cljs.core.nth.call(null,vec__26455,(1),null);
var c__24441__auto___26475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24441__auto___26475,vec__26455,client_chan,err_chan){
return (function (){
var f__24442__auto__ = (function (){var switch__23684__auto__ = ((function (c__24441__auto___26475,vec__26455,client_chan,err_chan){
return (function (state_26467){
var state_val_26468 = (state_26467[(1)]);
if((state_val_26468 === (1))){
var state_26467__$1 = state_26467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26467__$1,(2),client_chan);
} else {
if((state_val_26468 === (2))){
var inst_26459 = (state_26467[(7)]);
var inst_26459__$1 = (state_26467[(2)]);
var inst_26460 = inst_26459__$1.register(username,password);
var inst_26461 = calc_goggles.stitch.prom__GT_chan.call(null,inst_26460,err_chan);
var state_26467__$1 = (function (){var statearr_26469 = state_26467;
(statearr_26469[(7)] = inst_26459__$1);

return statearr_26469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26467__$1,(3),inst_26461);
} else {
if((state_val_26468 === (3))){
var inst_26459 = (state_26467[(7)]);
var inst_26463 = (state_26467[(2)]);
var state_26467__$1 = (function (){var statearr_26470 = state_26467;
(statearr_26470[(8)] = inst_26463);

return statearr_26470;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26467__$1,(4),client_chan,inst_26459);
} else {
if((state_val_26468 === (4))){
var inst_26465 = (state_26467[(2)]);
var state_26467__$1 = state_26467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26467__$1,inst_26465);
} else {
return null;
}
}
}
}
});})(c__24441__auto___26475,vec__26455,client_chan,err_chan))
;
return ((function (switch__23684__auto__,c__24441__auto___26475,vec__26455,client_chan,err_chan){
return (function() {
var calc_goggles$stitch$register_email_$_state_machine__23685__auto__ = null;
var calc_goggles$stitch$register_email_$_state_machine__23685__auto____0 = (function (){
var statearr_26471 = [null,null,null,null,null,null,null,null,null];
(statearr_26471[(0)] = calc_goggles$stitch$register_email_$_state_machine__23685__auto__);

(statearr_26471[(1)] = (1));

return statearr_26471;
});
var calc_goggles$stitch$register_email_$_state_machine__23685__auto____1 = (function (state_26467){
while(true){
var ret_value__23686__auto__ = (function (){try{while(true){
var result__23687__auto__ = switch__23684__auto__.call(null,state_26467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23687__auto__;
}
break;
}
}catch (e26472){if((e26472 instanceof Object)){
var ex__23688__auto__ = e26472;
var statearr_26473_26476 = state_26467;
(statearr_26473_26476[(5)] = ex__23688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26477 = state_26467;
state_26467 = G__26477;
continue;
} else {
return ret_value__23686__auto__;
}
break;
}
});
calc_goggles$stitch$register_email_$_state_machine__23685__auto__ = function(state_26467){
switch(arguments.length){
case 0:
return calc_goggles$stitch$register_email_$_state_machine__23685__auto____0.call(this);
case 1:
return calc_goggles$stitch$register_email_$_state_machine__23685__auto____1.call(this,state_26467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
calc_goggles$stitch$register_email_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$0 = calc_goggles$stitch$register_email_$_state_machine__23685__auto____0;
calc_goggles$stitch$register_email_$_state_machine__23685__auto__.cljs$core$IFn$_invoke$arity$1 = calc_goggles$stitch$register_email_$_state_machine__23685__auto____1;
return calc_goggles$stitch$register_email_$_state_machine__23685__auto__;
})()
;})(switch__23684__auto__,c__24441__auto___26475,vec__26455,client_chan,err_chan))
})();
var state__24443__auto__ = (function (){var statearr_26474 = f__24442__auto__.call(null);
(statearr_26474[(6)] = c__24441__auto___26475);

return statearr_26474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24443__auto__);
});})(c__24441__auto___26475,vec__26455,client_chan,err_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_chan,err_chan], null);
});
calc_goggles.stitch.atlas_db = (function calc_goggles$stitch$atlas_db(client,db_name){
return client.service("mongodb","mongodb-atlas").db(db_name);
});
calc_goggles.stitch.atlas_db_coll = (function calc_goggles$stitch$atlas_db_coll(client,db_name,collection_name){
return client.service("mongodb","mongodb-atlas").db(db_name).collection(collection_name);
});

//# sourceMappingURL=stitch.js.map?rel=1527787695209
