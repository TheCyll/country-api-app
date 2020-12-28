("use strict");

export default class InputManager {
  
  constructor(renderFunction){
    this.render = renderFunction;
    this.search = '';
    this.input = document.getElementById('search_input');
    this.input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.search = e.target.value;
        this.render();
      }
    });
  }

  getSearch() {
    return this.search;
  }

}
