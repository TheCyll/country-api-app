("use strict");

import FetchAPI from "../api/FetchAPI.js";
import config from '../api/config.js';

import InputManager from "./InputManager.js";
import SelectManager from "./SelectManager.js";
import Country from "./Country.js";
import Paginator from "../classes/Paginator/Paginator.js";

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

  createPaginator(arr, page_size, renderFunction) {
    return new Paginator(arr, page_size, renderFunction);
  }

  postCountries(region, search) {
    this.country_container.innerHTML = "<h1>Loading...</h1>"; 
    this.FetchAPI.fetchData().then( (response) => {

      const allCountries = response;       

      if( region !== ''){
        const regionCountries = allCountries.filter( (country) => country.region.toLowerCase() === region.toLowerCase() );
        this.createPaginator( regionCountries, 12, this.renderCard.bind(this) ).show();       

        if (search !== ''){
          const searchCountries = regionCountries.filter( (country) => country.name.toLowerCase().includes( search.toLowerCase() ) );
          if(searchCountries.length > 0) {
            this.createPaginator( searchCountries, 12, this.renderCard.bind(this) ).show();
          } else {
            this.insertNoFoundCountry(region, search);
          }
        }
      }

      if (region === '' && search !== ''){
        const searchCountries = allCountries.filter( (country) => country.name.toLowerCase().includes( search.toLowerCase() ) );
        if (searchCountries.length > 0) {
          this.createPaginator( searchCountries, 12, this.renderCard.bind(this) ).show();
        } else { 
          this.insertNoFoundCountry(null, search);         
        } 
      }

      if (region === '' && search === ''){ 
        this.createPaginator( allCountries, 12, this.renderCard.bind(this) ).show();
      }

    }).catch( err => {
      this.country_container.innerHTML = `<h1>Uh, some error ocurred <strong></strong></h1>`
      console.log(err);
    });
  }

  renderCard(arrayCountries) { 
    this.country_container.innerHTML = ""; 
    arrayCountries.forEach( country => {        
      this.country_container.innerHTML += this.createCountry(country).createCard();
    });     
  } 

  insertNoFoundCountry(region, search){
    this.pagination = document.getElementById('pagination');
    this.pagination.innerHTML = ''; 

    if (region) {
      this.country_container.innerHTML = `<h1>There's no country in <strong>${region}</strong> with <strong>${search}</strong></h1>`
    } else {
      this.country_container.innerHTML = `<h1>There's no country in the world with <strong>${search}</strong></h1>`
    }
  }
}

