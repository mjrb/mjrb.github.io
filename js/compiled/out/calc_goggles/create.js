// Compiled by ClojureScript 1.10.238 {}
goog.provide('calc_goggles.create');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('calc_goggles.view');
goog.require('calc_goggles.utils');
if(typeof calc_goggles.create.valid !== 'undefined'){
} else {
calc_goggles.create.valid = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn","fn",-1175266204),"",new cljs.core.Keyword(null,"minx","minx",1094774569),"",new cljs.core.Keyword(null,"maxx","maxx",23572233),"",new cljs.core.Keyword(null,"number","number",1570378438),"",new cljs.core.Keyword(null,"vscale","vscale",1258843134),"",new cljs.core.Keyword(null,"name","name",1843675177),"is-invalid"], null));
}
if(typeof calc_goggles.create.errors !== 'undefined'){
} else {
calc_goggles.create.errors = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"name cant be null"], null));
}
if(typeof calc_goggles.create.checked !== 'undefined'){
} else {
calc_goggles.create.checked = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),true,new cljs.core.Keyword(null,"rtrig","rtrig",-776542780),false], null));
}
calc_goggles.create.reset_state = (function calc_goggles$create$reset_state(){
cljs.core.reset_BANG_.call(null,calc_goggles.create.valid,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn","fn",-1175266204),"",new cljs.core.Keyword(null,"minx","minx",1094774569),"",new cljs.core.Keyword(null,"maxx","maxx",23572233),"",new cljs.core.Keyword(null,"number","number",1570378438),"",new cljs.core.Keyword(null,"vscale","vscale",1258843134),"",new cljs.core.Keyword(null,"name","name",1843675177),"is-invalid"], null));

cljs.core.reset_BANG_.call(null,calc_goggles.create.errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"name cant be null"], null));

return cljs.core.reset_BANG_.call(null,calc_goggles.create.checked,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),true,new cljs.core.Keyword(null,"rtrig","rtrig",-776542780),false], null));
});
calc_goggles.create.validate_fn = (function calc_goggles$create$validate_fn(){
try{var func_26588 = calc_goggles.utils.feild_value.call(null,"eq");
if(clojure.string.blank_QMARK_.call(null,func_26588)){
throw "Must have a function";
} else {
}

limitedEval(func_26588,({"x": (1)}));

calc_goggles.utils.draw.call(null);

cljs.core.swap_BANG_.call(null,calc_goggles.create.valid,(function (p1__26583_SHARP_){
return cljs.core.assoc.call(null,p1__26583_SHARP_,new cljs.core.Keyword(null,"fn","fn",-1175266204),"");
}));

return cljs.core.swap_BANG_.call(null,calc_goggles.create.errors,(function (p1__26584_SHARP_){
return cljs.core.dissoc.call(null,p1__26584_SHARP_,new cljs.core.Keyword(null,"fn","fn",-1175266204));
}));
}catch (e26587){var e = e26587;
cljs.core.print.call(null,"bad fn",e);

cljs.core.swap_BANG_.call(null,calc_goggles.create.valid,((function (e){
return (function (p1__26585_SHARP_){
return cljs.core.assoc.call(null,p1__26585_SHARP_,new cljs.core.Keyword(null,"fn","fn",-1175266204),"is-invalid");
});})(e))
);

return cljs.core.swap_BANG_.call(null,calc_goggles.create.errors,((function (e){
return (function (p1__26586_SHARP_){
return cljs.core.assoc.call(null,p1__26586_SHARP_,new cljs.core.Keyword(null,"fn","fn",-1175266204),["function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
});})(e))
);
}});
calc_goggles.create.validate_number = (function calc_goggles$create$validate_number(id,key){
return (function (){
var value = calc_goggles.utils.feild_value.call(null,id);
if(cljs.core.truth_((function (){var and__3911__auto__ = !(clojure.string.blank_QMARK_.call(null,value));
if(and__3911__auto__){
return calc_goggles.utils.str_is_float_QMARK_.call(null,value);
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,calc_goggles.create.valid,((function (value){
return (function (p1__26589_SHARP_){
return cljs.core.assoc.call(null,p1__26589_SHARP_,key,"");
});})(value))
);

cljs.core.swap_BANG_.call(null,calc_goggles.create.errors,((function (value){
return (function (p1__26590_SHARP_){
return cljs.core.dissoc.call(null,p1__26590_SHARP_,key);
});})(value))
);

return calc_goggles.utils.draw.call(null);
} else {
cljs.core.swap_BANG_.call(null,calc_goggles.create.valid,((function (value){
return (function (p1__26591_SHARP_){
return cljs.core.assoc.call(null,p1__26591_SHARP_,key,"is-invalid");
});})(value))
);

return cljs.core.swap_BANG_.call(null,calc_goggles.create.errors,((function (value){
return (function (p1__26592_SHARP_){
return cljs.core.assoc.call(null,p1__26592_SHARP_,key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," must be number"].join(''));
});})(value))
);
}
});
});
calc_goggles.create.validate_name = (function calc_goggles$create$validate_name(){
var value = calc_goggles.utils.feild_value.call(null,"name");
if(!(clojure.string.blank_QMARK_.call(null,value))){
cljs.core.swap_BANG_.call(null,calc_goggles.create.valid,((function (value){
return (function (p1__26593_SHARP_){
return cljs.core.assoc.call(null,p1__26593_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),"");
});})(value))
);

return cljs.core.swap_BANG_.call(null,calc_goggles.create.errors,((function (value){
return (function (p1__26594_SHARP_){
return cljs.core.dissoc.call(null,p1__26594_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(value))
);
} else {
cljs.core.swap_BANG_.call(null,calc_goggles.create.valid,((function (value){
return (function (p1__26595_SHARP_){
return cljs.core.assoc.call(null,p1__26595_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),"is-invalid");
});})(value))
);

return cljs.core.swap_BANG_.call(null,calc_goggles.create.errors,((function (value){
return (function (p1__26596_SHARP_){
return cljs.core.assoc.call(null,p1__26596_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),"name can't be empty");
});})(value))
);
}
});
calc_goggles.create.validate_xsections = (function calc_goggles$create$validate_xsections(){
var value = calc_goggles.utils.feild_value.call(null,"number");
if(cljs.core.truth_((function (){var and__3911__auto__ = !(clojure.string.blank_QMARK_.call(null,value));
if(and__3911__auto__){
var and__3911__auto____$1 = calc_goggles.utils.str_is_int_QMARK_.call(null,value);
if(cljs.core.truth_(and__3911__auto____$1)){
return (parseInt(value) >= (5));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,calc_goggles.create.valid,((function (value){
return (function (p1__26597_SHARP_){
return cljs.core.assoc.call(null,p1__26597_SHARP_,new cljs.core.Keyword(null,"number","number",1570378438),"");
});})(value))
);

return cljs.core.swap_BANG_.call(null,calc_goggles.create.errors,((function (value){
return (function (p1__26598_SHARP_){
return cljs.core.dissoc.call(null,p1__26598_SHARP_,new cljs.core.Keyword(null,"number","number",1570378438));
});})(value))
);
} else {
cljs.core.swap_BANG_.call(null,calc_goggles.create.valid,((function (value){
return (function (p1__26599_SHARP_){
return cljs.core.assoc.call(null,p1__26599_SHARP_,new cljs.core.Keyword(null,"number","number",1570378438),"is-invalid");
});})(value))
);

return cljs.core.swap_BANG_.call(null,calc_goggles.create.errors,((function (value){
return (function (p1__26600_SHARP_){
return cljs.core.assoc.call(null,p1__26600_SHARP_,new cljs.core.Keyword(null,"number","number",1570378438),"cross Sections must be whole number greater than 5");
});})(value))
);
}
});
calc_goggles.create.validate_shape = (function calc_goggles$create$validate_shape(shape_handler){
return (function (){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,calc_goggles.create.errors))){
return shape_handler.call(null,calc_goggles.utils.make_shape.call(null));
} else {
return alert("please fix the red feilds first");
}
});
});
if(typeof calc_goggles.create.defaults !== 'undefined'){
} else {
calc_goggles.create.defaults = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eq","eq",-618539067),"4 * sin(x) + 5 * cos(x/2)",new cljs.core.Keyword(null,"minx","minx",1094774569),"-5",new cljs.core.Keyword(null,"maxx","maxx",23572233),"5",new cljs.core.Keyword(null,"vscale","vscale",1258843134),"1",new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"xsections","xsections",475527400),"6"], null));
}
calc_goggles.create.func_inputs = (function calc_goggles$create$func_inputs(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),calc_goggles.utils.label.call(null,"Enter a Function: ","eq",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"eq",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,calc_goggles.create.defaults).call(null,new cljs.core.Keyword(null,"eq","eq",-618539067)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.create.validate_fn,new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,calc_goggles.create.valid))], null)], null)),calc_goggles.utils.label.call(null,"Min x: ","minx",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"id","id",-1388402092),"minx",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,calc_goggles.create.defaults).call(null,new cljs.core.Keyword(null,"minx","minx",1094774569)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.create.validate_number.call(null,"minx",new cljs.core.Keyword(null,"minx","minx",1094774569)),new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"minx","minx",1094774569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,calc_goggles.create.valid))], null)], null)),calc_goggles.utils.label.call(null,"Max x: ","maxx",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"id","id",-1388402092),"maxx",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,calc_goggles.create.defaults).call(null,new cljs.core.Keyword(null,"maxx","maxx",23572233)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.create.validate_number.call(null,"maxx",new cljs.core.Keyword(null,"maxx","maxx",23572233)),new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"maxx","maxx",23572233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,calc_goggles.create.valid))], null)], null)),calc_goggles.utils.label.call(null,"Vertical Scale: ","vscale",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"id","id",-1388402092),"vscale",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,calc_goggles.create.defaults).call(null,new cljs.core.Keyword(null,"vscale","vscale",1258843134)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.create.validate_number.call(null,"vscale",new cljs.core.Keyword(null,"vscale","vscale",1258843134)),new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"vscale","vscale",1258843134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,calc_goggles.create.valid))], null)], null))], null);
});
calc_goggles.create.check = (function calc_goggles$create$check(key){
if(cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"square","square",812434677))){
return (function (){
return cljs.core.swap_BANG_.call(null,calc_goggles.create.checked,(function (p1__26601_SHARP_){
return cljs.core.assoc.call(null,p1__26601_SHARP_,new cljs.core.Keyword(null,"square","square",812434677),true,new cljs.core.Keyword(null,"rtrig","rtrig",-776542780),false);
}));
});
} else {
return (function (){
return cljs.core.swap_BANG_.call(null,calc_goggles.create.checked,(function (p1__26602_SHARP_){
return cljs.core.assoc.call(null,p1__26602_SHARP_,new cljs.core.Keyword(null,"square","square",812434677),false,new cljs.core.Keyword(null,"rtrig","rtrig",-776542780),true);
}));
});
}
});
calc_goggles.create.xsection_radio = (function calc_goggles$create$xsection_radio(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"rtrig"], null),"Right Acute Triangle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),"rtrig",new cljs.core.Keyword(null,"name","name",1843675177),"xsection",new cljs.core.Keyword(null,"value","value",305978217),"rtrig",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"rtrig","rtrig",-776542780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,calc_goggles.create.checked)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.create.check.call(null,new cljs.core.Keyword(null,"rtrig","rtrig",-776542780))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"square"], null),"Square"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),"square",new cljs.core.Keyword(null,"name","name",1843675177),"xsection",new cljs.core.Keyword(null,"value","value",305978217),"square",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"square","square",812434677).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,calc_goggles.create.checked)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.create.check.call(null,new cljs.core.Keyword(null,"square","square",812434677))], null)], null)], null);
});
calc_goggles.create.export_inputs = (function calc_goggles$create$export_inputs(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),calc_goggles.utils.label.call(null,"Shape Name: ","name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"name",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,calc_goggles.create.defaults).call(null,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.create.validate_name,new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,calc_goggles.create.valid))], null)], null)),calc_goggles.utils.label.call(null,"Number of Cross Sections","number",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"id","id",-1388402092),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,calc_goggles.create.defaults).call(null,new cljs.core.Keyword(null,"xsections","xsections",475527400)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),calc_goggles.create.validate_xsections,new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,calc_goggles.create.valid))], null)], null)),calc_goggles.utils.label.call(null,"Cross Section Type: "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.create.xsection_radio], null)], null);
});
calc_goggles.create.creator_form = (function calc_goggles$create$creator_form(shape_handler){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.col-md-6","form.col-md-6",-1816486500),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.create.func_inputs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.create.export_inputs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Make Shape!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),calc_goggles.create.validate_shape.call(null,shape_handler)], null)], null)], null);
});
calc_goggles.create.error_list = (function calc_goggles$create$error_list(){
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,calc_goggles.create.errors)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (err){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.alert-danger","li.alert-danger",962629186),err], null);
}),cljs.core.deref.call(null,calc_goggles.create.errors))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
}
});
calc_goggles.create.plot = (function calc_goggles$create$plot(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),calc_goggles.utils.draw,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"plot"], null)], null);
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"plot"], null));
});
calc_goggles.create.creator = (function calc_goggles$create$creator(shape_handler){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.create.creator_form,shape_handler], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.create.plot], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_goggles.create.error_list], null)], null);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),calc_goggles.create.reset_state], null));
});

//# sourceMappingURL=create.js.map?rel=1527787695356
