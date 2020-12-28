("use strict");

import FetchAPI from "../api/FetchAPI.js";
import config from '../api/config.js';

import InputManager from "./InputManager.js";
import SelectManager from "./SelectManager.js";
import Country from "./Country.js";

export default class CountryContainer {
  constructor() {
    this.country_container = document.getElementById('country-container');
    this.InputManager = new InputManager( this.render.bind(this) );
    this.SelectManager = new SelectManager( this.render.bind(this) );
    this.FetchAPI = new FetchAPI( config.URL );
  }

  render() {  
    let search = this.InputManager.getSearch(); 
    let region = this.SelectManager.getRegion();
    
    this.postCountries( region, search ); 
  }

  createCountry(data) {
    return new Country(data);
  }

  postCountries(region , search ) {
    if( region ){
      this.country_container.innerHTML = "<h1>Loading...</h1>";      
      this.FetchAPI.changeURL( config.URL + `region/${region}` );

      this.FetchAPI.fetchData().then( (response) => { 
        return response.filter( country => 
          ( country.name.toLowerCase().includes(search.toLowerCase()) )
        );
      }).then( (response) => {
        response.length === 0 ?
          this.country_container.innerHTML = `<h1>There's no country with <strong>${search}</strong></h1>`
        : this.postCountry(response);  
      });

    }else {      
      this.country_container.innerHTML = "<h1>Loading...</h1>";

      search ? this.FetchAPI.changeURL( config.URL + `name/${ search }`) 
        : this.FetchAPI.changeURL( config.URL );
      
      this.FetchAPI.fetchData().then((response) => {                     
        this.postCountry(response);        
      }).catch( () => {            
        this.country_container.innerHTML = `<h1>There's no country with <strong>${search}</strong></h1>`;
      });
    }
  }

  postCountry( response ){
    this.country_container.innerHTML = "";      
      response.forEach( (country) => { 
        this.country_container.innerHTML += this.createCountry(country).createCard();
      });
  }

}

