import FetchAPI from '../api/FetchAPI.js';
import config from '../api/config.js';

/* The extractKey() function extracts the key of an object 
    within an array (no deep), and returns an array with
    the values of the key
  */ 
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