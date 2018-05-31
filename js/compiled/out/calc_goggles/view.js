// Compiled by ClojureScript 1.10.238 {}
goog.provide('calc_goggles.view');
goog.require('cljs.core');
goog.require('reagent.core');
calc_goggles.view.model_viewer = (function calc_goggles$view$model_viewer(shape){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"model-viewer",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"three"], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
cljs.core.print.call(null,shape);

return viewModel(shape);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return killViewer();
})], null));
});

//# sourceMappingURL=view.js.map?rel=1527787694075
