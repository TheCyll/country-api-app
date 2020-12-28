import FetchAPI from '../../api/FetchAPI.js';
import config from '../../api/config.js';
import Country from '../Country.js';
import { changeBorders } from '../../utils/utils.js';

window.onload = () => {
  const countryName = window.location.search.substr(6);  
  const FetchData = new FetchAPI(config.URL + `name/${ countryName }`);
  const page_container = document.getElementById('page-container');

  page_container.innerHTML = "<h1>Loading....</h1>";

  FetchData.fetchData().then((response) => {
    const data = response[0];
    const borders = data.borders;

    changeBorders( borders ).then( (response) => {
      (borders.length !== 0) && (data.borders = response );
            
      const countryPage = new Country(data);
      page_container.innerHTML = countryPage.createPage();
    });  

  });
};