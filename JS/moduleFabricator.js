const ModuleFabricator = (name)=>{

  'use strict';

  var module = new function(){
    return {
      name: "",
      config: {}
    }
  };

  module.name = name;

  module.config = function(config){
    module.config = config;
    return this;
  }

  module.methods = function(newMethods){
    newMethods.map((method)=>{
      module[method.name] = method;
    });
    return this;
  }

  return module;

};

/*

var om = ModuleFabricator('OffersModule')
  .config({
    data: [1,2,3],
    offers: []
  })
  .methods([
    function getOffers(){
      return this.config.offers;
    },
    function addOffer(offer){
      this.config.offers.push(offer)
    }
  ]);

var sw = ModuleFabricator('SearchWizard')
  .config({
    data: [1,2,3],
    offers: []
  })
  .methods([
    function addField(){
      return this.config.offers;
    },
    function search(offer){
      this.config.offers.push(offer)
    }
  ]);


*/
