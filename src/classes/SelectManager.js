("use strict");

export default class SelectManager{

  constructor( renderFunction ) {
    this.render = renderFunction;
    this.region = '';
    this.selector = document.getElementById("search_select");
    this.selector.addEventListener("change" , (e) => {
      this.region = e.target.value;
      this.render();         
    });      
  }   
  
  getRegion() {  
    return this.region;
  }

}

