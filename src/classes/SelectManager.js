("use strict");

export default class SelectManager{

  constructor( renderFunction ) {
    this.render = renderFunction;
    this.selector = document.getElementById("search_select");
    this.region = this.selector.value;
    this.selector.addEventListener("change" , (e) => {    
      this.region = e.target.value;      
      this.render();         
    });      
  }   
  
  getRegion() {    
    return this.region;
  }

}

