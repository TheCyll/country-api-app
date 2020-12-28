// ("use strict");

// import FetchAPI from "./api/FetchAPI.js";
// import config from "./api/config.js";
// import SelectManager from './classes/SelectManager.js';
// import InputManager from './classes/InputManager.js';
// import Country from './classes/Country.js';

// import { extractKey } from '../src/utils/utils.js';

("use strict");

import CountryContainer from "./classes/CountryContainer.js";

window.onload = () => {
  const App = new CountryContainer();
  App.render();  
};





// COUNTRY FUNCTION LABELS

// let countries = ['mexico', 'angola', 'shaschasdjasda','russia', 'brasil', 'cacacacaca'];
// var element = document.getElementById('test');
// element.innerHTML = `
//   <h1>Countries</h1>
//   ${
//   countries.map( country => {
//     return`
//       <a class="text-decoration-none" href="${window.location.href}country.html?name=${country}">
//         <div class="col-md-4 col-lg-3">
//           <p class="border border-secondary rounded p-1 text-center">${country}</p>
//         </div>
//       </a>`;
//   }) }  
// `;




//COUNTRY CLASS 

// let borders = [
//   "IRN",
//   "PAK",
//   "TKM",
//   "UZB",
//   "TJK",
//   "CHN"
// ];
// let data = {
//   flag : "flag",
//   name : "name",
//   nativeName : "nativeName",
//   population : "population",
//   region : "region",
//   subregion : "subregion",
//   capital : "capital",   
//   borders : borders /* array */
// }

// let country = new Country(data);
// console.log(country);

// RENDER

// let SelectManager1 = new SelectManager(render);
// let InputManager1 = new InputManager(render);
// let FetchAPI1 = new FetchAPI( config.URL );

// function render() {
  
//   let search = InputManager1.getSearch(); 
//   let region = SelectManager1.getRegion();
  
//   postCountries( region );

//   function postCountries(region) {
//     if( region ){
//       this.country_container.innerHTML = "<h1>Loading...</h1>";      
//       FetchAPI1.changeURL( config.URL + `region/${region}` );

//       FetchAPI1.fetchData().then( (response) => { 
//         return response.filter( country => 
//           ( country.name.toLowerCase().includes(search.toLowerCase()) )
//         );
//       }).then( (response) => {
//         // this.country_container.innerHTML = "";
//         response.forEach( country => 
//           (this.country_container.innerHTML += this.createCountry(country).createCard() )
//         );
//       });

//     }else {
//       this.country_container.innerHTML = "<h1>Loading...</h1>";

//       search ? FetchAPI1.changeURL( config.URL + `name/${ search }`) : FetchAPI1.changeURL( config.URL );
      
//       FetchAPI1.fetchData().then((response) => {
//         this.country_container.innerHTML = ""; 
//         response.forEach(
//           (country) =>
//             (this.country_container.innerHTML += this.createCountry(country).createCard())
//         );
//       });
//     }


//   }
  
  
// }












