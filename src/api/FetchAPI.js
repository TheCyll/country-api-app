("use strict");

export default class FetchAPI {
  
  constructor(url){
    this.url = url;        
  }

  changeURL(newUrl) {
    this.url = newUrl;
    return this.url;
  }

  async fetchData() {
    let response = await fetch(this.url);
    if (response.status !== 200) {
      throw new Error(`HTTP error: Status ${response.status}`);
    } else {
      return await response.json();
    }
  }
}