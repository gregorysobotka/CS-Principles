function imageSlider(data){
  this.data = data;
}

imageSlider.prototype.addTile = (tile)=>{
  // ...
};

imageSlider.prototype.render = ()=>{
  // ...
};


function offerCard(data){
  this.data = data;
}

offerCard.prototype.addCard = (card)=>{
    // ...
};

offerCard.prototype.render = ()=>{
    // ...
};

var createEl = function(data, name){

  switch(name){
    case 'slider':
      return new imageSlider(data);
    case 'card':
      return new offerCard(data);
    default:
      return `<div>${data}</div>`;
  }

};
