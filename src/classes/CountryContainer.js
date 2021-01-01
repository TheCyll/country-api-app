("use strict");

import FetchAPI from "../api/FetchAPI.js";
import config from '../api/config.js';

import InputManager from "./InputManager.js";
import SelectManager from "./SelectManager.js";
import Country from "./Country.js";
import { minimalPagination } from "../utils/paginator.js";

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

  postCountries(region, search) {
    this.country_container.innerHTML = "<h1>Loading...</h1>"; 
    this.FetchAPI.fetchData().then( (response) => {

      const allCountries = response;       

      if( region !== ''){
        const regionCountries = allCountries.filter( (country) => country.region.toLowerCase() === region.toLowerCase() );
        minimalPagination( regionCountries, 12, this.renderCard.bind(this) );       

        if (search !== ''){
          const searchCountries = regionCountries.filter( (country) => country.name.toLowerCase().includes( search.toLowerCase() ) );
          searchCountries.length !== 0 ? minimalPagination( searchCountries, 12, this.renderCard.bind(this) )
          : this.country_container.innerHTML = `<h1>There's no country in <strong>${region}</strong> with <strong>${search}</strong></h1>`
        }
      }

      if (region === '' && search !== ''){
        const searchCountries = allCountries.filter( (country) => country.name.toLowerCase().includes( search.toLowerCase() ) );
        searchCountries.length !== 0 ? minimalPagination( searchCountries, 12, this.renderCard.bind(this) )
          : this.country_container.innerHTML = `<h1>There's no country with <strong>${search}</strong></h1>`
      }

      if (region === '' && search === ''){ 
        minimalPagination( allCountries, 12, this.renderCard.bind(this) );
      }

    }).catch( err => this.country_container.innerHTML = `<h1>Uh, some error ocurred <strong>${err}</strong></h1>`);
  }

  renderCard(arrayCountries) { 
    this.country_container.innerHTML = ""; 
    arrayCountries.forEach( country => {        
      this.country_container.innerHTML += this.createCountry(country).createCard();
    });     
  } 
}

