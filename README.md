# Country API (challenge)

You can see the live site in the next link:

https://thecyll-country-api-app.vercel.app/

## Challenge description

Your challenge is to integrate with the REST Countries API to pull country data and display it like in the designs.

You can use any JavaScript framework/library on the front-end such as React or Vue. You also have complete control over which packages you use to do things like make HTTP requests or style your project.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode (optional)

This is a challenge from Front End Mentor. 
You can view the original challenge in the [Front End Mentor page](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

## Technologies 

- Bootstrap
- HTML & CSS
- Vanilla JS for all other funcionality
- [Rest Countries API](https://restcountries.eu/)

## How I did it?

- I approached the challenge making use of Javascript classes for the main content.
- I did use the idea and functionality of the dark mode using Localstorage, explained in this [video](https://www.youtube.com/watch?v=wodWDIdV9BY)
- Because the principal page was loading for a long time (like 9s) I implemented a solution (call it a feature) using pagination.