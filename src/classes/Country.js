("use strict");

import { extractKey } from '../utils/utils.js';

export default class Country {

  constructor(data) {
    this.flag = data.flag || 
      "https://icon-library.com/images/no-data-icon/no-data-icon-15.jpg";
    this.name = data.name;
    this.nativeName = data.nativeName;
    this.population = data.population.toLocaleString();
    this.region = data.region;
    this.subregion = data.subregion;
    this.capital = data.capital;
    this.topLevelDomain = data.topLevelDomain.join(', ');
    this.currencies = extractKey(data.currencies, 'name').join(', ');
    this.languages = extractKey(data.languages, 'name').join(', '); /* all join(', ') are strings */
    this.borders = data.borders; /* array */
  }  

  createCard() {
    return `
    <a class="text-decoration-none" href="${window.location.origin}/country.html?name=${this.name}">
    <div class="country-card" class="col">
      <div class="border text-light mb-4 country-card-content">                            
        <img src=${this.flag} alt="flag of ${this.name}" class="flag"/>
        <div class="country-card-text">
          <div class="country"><strong>${this.name}</strong></div>
          <div class="country-info">
            <div class="population"><strong>Population: </strong>${this.population}</div>
            <div class="region"><strong>Region: </strong>${this.region}</div>
            <div class="capital"><strong>Capital: </strong>${this.capital}</div>
          </div>
        </div>
      </div>
    </div> 
    </a>`;
  }

  createPage() {
    return `
    <div class="container pt-5 px-4">
      <div class="back-button d-flex justify-content-center rounded">
        <a href="javascript:history.back()" class="text-decoration-none"><i class="fas fa-arrow-left"></i> Back</a>
      </div>
    </div>
    <div class="container pt-5 px-4">
      <div class="row row-cols-1 row-cols-md-2 gy-3 ">
        <div class="col-md-5">
          <img class="img-fluid" src=${this.flag}
            alt="flag of ${this.name}" class="flag" />
        </div>
        <div class="col-md-1"></div> 
        <div class="col-md-5 p-3">
          <h1 style="font-size: 25px;"><strong>${this.name}</strong></h1>
          <div class="row pt-3">
            <div class="col-md-12 col-lg-6 pb-4">
              <p class="mb-2" style="font-size: 15px;"><strong>Native name: </strong>${this.nativeName}</p>
              <p class="mb-2" style="font-size: 15px;"><strong>Population: </strong>${this.population}</p>
              <p class="mb-2" style="font-size: 15px;"><strong>Region: </strong>${this.region}</p>
              <p class="mb-2" style="font-size: 15px;"><strong>Sub region: </strong>${this.subregion}</p>
              <p class="mb-2" style="font-size: 15px;"><strong>Capital: </strong>${this.capital}</p>
            </div>
            <div class="col-md-12 col-lg-6 pb-4">
              <p class="mb-2" style="font-size: 15px;"><strong>Top Level Domain: </strong>${this.topLevelDomain}</p>
              <p class="mb-2" style="font-size: 15px;"><strong>Currencies: </strong>${this.currencies}</p>
              <p class="mb-2" style="font-size: 15px;"><strong>Languages: </strong>${this.languages}</p>
            </div>
          </div>
          <div class="row row-cols-3">
            <div class="col-12 col-sm-5">
              <p><strong>Border Countries: </strong></p>
            </div>
            
            ${              
              (this.borders.length !== 0) ?
                ( this.borders.map( country => {
                return`
                <div class="col-md-6 col-lg-3">
                  <a class="text-decoration-none" href="${window.location.origin}/country.html?name=${country}">
                      <p class="tag rounded p-1 text-center">${country}</p>
                  </a>
                </div>`
              }).join("") ) : `<div>Island, only water around...</div>`
            }

          </div>
        </div>
      </div>
    </div>`;
  }
}