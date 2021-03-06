("use strict");

export default class Paginator {

  constructor(arr, page_size, renderFunction) {
    this.render = renderFunction; 
    this.arr = arr;
    this.page_size = page_size;
    this.createPaginator();
    this.left_arrow = document.getElementById('before_page');
    this.right_arrow = document.getElementById('next_page');
    this.pages_count = document.getElementById('pages_count');
    this.maxNumPages = Math.ceil(arr.length / page_size);
    this.counter = 1; 
  } 
  
  paginate() {
    return this.arr.slice((this.counter - 1) * this.page_size, this.counter * this.page_size);
  }

  createPaginator() {
    this.pagination = document.getElementById('pagination');
    this.pagination.innerHTML = '';    
    this.pagination.innerHTML = `
      <button id="before_page">&laquo;</button>
      <div id="pages_count">${this.counter}/${this.maxNumPages}</div> 
      <button id="next_page">&raquo;</button>
    ` ;
  }

  show() { 
    
    this.changeCounterOnValue();

    this.left_arrow.addEventListener('click', () => {
      if (this.counter === 1) {
        return;
      } else if (this.counter > 1) {
        this.changeCounterOnValue('decrement');
      }
    });

    this.right_arrow.addEventListener('click', () => {
      if (this.counter === this.maxNumPages) {
        return;
      } else if (this.counter < this.maxNumPages) {
        this.changeCounterOnValue('increment');
      }
    }); 
  } 
  
  changeCounterOnValue(value){
    if (value === 'increment'){
      this.counter++;
    } else if (value === 'decrement' ){
      this.counter--;
    } 
    this.pages_count.innerHTML = `${this.counter}/${this.maxNumPages}`;  
    this.render(this.paginate());
  }
} 