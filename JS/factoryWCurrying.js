function imageSlider(data){
  this.data = data;
}

function offerCard(data){
  this.data = data;
}

var createElC = (name)=>{

  return (data)=>{

    switch(name){
      case 'slider':
        return new imageSlider(data);
      case 'card':
        return new offerCard(data);
      default:
        return `<div>${data}</div>`;
    }

  }

};
