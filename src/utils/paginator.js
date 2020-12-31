function paginate(arr, page_size, page_number) {
  return arr.slice((page_number - 1) * page_size, page_number * page_size);
}

export function minimalPagination(arr, page_size, renderFunction) {
  
  const left_arrow = document.getElementById('before_page');
  const right_arrow = document.getElementById('next_page');
  const pages_count = document.getElementById('pages_count');
  
  let maxNumPages = Math.ceil(arr.length / page_size);
  let counter = 1;  
  
  pages_count.innerHTML = `${counter}/${maxNumPages}`;  
  
  renderFunction(paginate(arr, page_size, counter));

  left_arrow.addEventListener('click', () => {
    if (counter === 1) {
      return;
    } else if (counter > 1) {
      counter--;
      pages_count.innerHTML = `${counter}/${maxNumPages}`;
      renderFunction(paginate(arr, page_size, counter));
    }
  });

  right_arrow.addEventListener('click', () => {
    if (counter === maxNumPages) {
      return;
    } else if (counter < maxNumPages) {
      counter++;
      pages_count.innerHTML = `${counter}/${maxNumPages}`;
      renderFunction(paginate(arr, page_size, counter));
    }
  });  
}







// export function listenPagination (arr, page_size, page_number ,render) {

//   const pag_steps = [ ...document.getElementsByClassName('pag_step') ]; 

//   pag_steps.forEach( anchor => anchor.addEventListener('click', (e) => {
//     render( paginate( arr, page_size, (parseInt(e.target.text)) ) );
//     /* The next expression changes the active page in the pagination */
//     pag_steps.forEach( (e) => {
//       if (e.classList.contains('active')){
//         e.classList.remove('active');
//       }      
//     })
//     e.target.classList.add('active'); 
//   })); 

//   render( paginate(arr, page_size, page_number) );      
// }

// export function paginate(arr, page_size, page_number) {  
//   return arr.slice((page_number - 1) * page_size, page_number * page_size);
// }