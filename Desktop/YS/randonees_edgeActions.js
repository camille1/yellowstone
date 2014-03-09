
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){EC.Parallax.setup(sym);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_randonnee_titre2}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pause2}","click",function(sym,e){sym.$("audio")[0].pause();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play2}","click",function(sym,e){sym.$("audio")[0].play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//=========================================================

//Edge symbol: 'flower'
(function(symbolName){})("flower");
//Edge symbol end:'flower'

//=========================================================

//Edge symbol: 'cascadingFlowers'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var flowerNames=["falling0","falling1","falling2","falling3","falling4","falling5","falling6"];for(var i=0;i<7;i++){var hue='rgb('+(Math.floor((256)*Math.random())+50)+','+(Math.floor((256)*Math.random())+50)+','+(Math.floor((256)*Math.random())+50)+')';sym.getSymbol(flowerNames[i]).getSymbol("flower").getSymbol("simpleFlower").$("background").css("background-color",hue);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.getSymbol("falling1").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.getSymbol("falling6").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.getSymbol("falling4").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.getSymbol("falling2").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.getSymbol("falling0").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.getSymbol("falling5").play("center");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3750,function(sym,e){sym.getSymbol("falling3").play("center");});
//Edge binding end
})("cascadingFlowers");
//Edge symbol end:'cascadingFlowers'

//=========================================================

//Edge symbol: 'simpleFlower'
(function(symbolName){})("simpleFlower");
//Edge symbol end:'simpleFlower'

//=========================================================

//Edge symbol: 'fallingFlower'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2043,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",943,function(sym,e){sym.play();});
//Edge binding end
})("swingingFlower");
//Edge symbol end:'swingingFlower'

//=========================================================

//=========================================================

//Edge symbol: 'birdfly_sym'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6342,function(sym,e){sym.play(0);});
//Edge binding end
})("birdfly_sym");
//Edge symbol end:'birdfly_sym'

//=========================================================

//Edge symbol: 'birdsprite_sym'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",236,function(sym,e){sym.play(0);});
//Edge binding end
})("birdsprite_sym");
//Edge symbol end:'birdsprite_sym'

//=========================================================

//=========================================================

//Edge symbol: 'birdsprite_sym'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",236,function(sym,e){sym.play(0);});
//Edge binding end
})("birdsprite_sym_1");
//Edge symbol end:'birdsprite_sym_1'

//=========================================================

//=========================================================

//Edge symbol: 'clouds_background_sym_1'
(function(symbolName){})("clouds_foreground_sym");
//Edge symbol end:'clouds_foreground_sym'

//=========================================================

//=========================================================

//Edge symbol: 'clouds_background_sym'
(function(symbolName){})("clouds_background_sym");
//Edge symbol end:'clouds_background_sym'

//=========================================================

//Edge symbol: 'direction'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){sym.play(0);});
//Edge binding end
})("direction");
//Edge symbol end:'direction'

//=========================================================

//Edge symbol: 'fleche_bas'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("fleche_bas");
//Edge symbol end:'fleche_bas'

//=========================================================

//Edge symbol: 'jour'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3753,function(sym,e){sym.play(0);});
//Edge binding end
})("jour");
//Edge symbol end:'jour'
})(jQuery,AdobeEdge,"EDGE-119921572");