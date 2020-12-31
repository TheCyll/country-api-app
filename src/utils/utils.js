/* The extractKey() function extracts the key of an object 
    within an array (no deep), and returns an array with
    the values of the key
  */ 

import FetchAPI from '../api/FetchAPI.js';
import config from '../api/config.js';

export function extractKey( array, key ) {  
  return array.map( obj => obj[key] );    
}

export async function changeBorders(borders) { 
  let codes = borders.join(';'); 
  if( codes ){
    let FetchAPIcodes = new FetchAPI(config.URL + `alpha?codes=${codes}`);     
    let response = await FetchAPIcodes.fetchData();     
    
    return extractKey(response, 'name');     
  }
}

/* TODO: Auto Paginator*/ 
// export function pagination(arr, page_size) {  
//   let steps = Math.ceil(arr.length / page_size); 
//   let arrAnchors = []; 

//   for(let i = 0; i < steps; i++ ){
//     arrAnchors.push(`<a class=pag_step href=#>${i + 1}</a>`);
//   }  

//   return `<div class="pagination">
//     <a href="#">&laquo;</a>   
//     ${ 
//       arrAnchors.join("") 
//     }
//     <a href="#">&raquo;</a>
//   </div>`
// }

export function listenPagination (arr, page_size, page_number ,render) {

  const pag_steps = [ ...document.getElementsByClassName('pag_step') ]; 
     
  pag_steps.forEach( anchor => anchor.addEventListener('click', (e) => {
    render( paginate( arr, page_size, (parseInt(e.target.text)) ) );
    /* The next expression changes the active page in the pagination */
    pag_steps.forEach( (e) => {
      if (e.classList.contains('active')){
        e.classList.remove('active');
      }      
    })
    e.target.classList.add('active'); 
  })); 

  render( paginate(arr, page_size, page_number) );      
}

export function paginate(arr, page_size, page_number) {  
  return arr.slice((page_number - 1) * page_size, page_number * page_size);
}