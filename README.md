## Overview

![Mockup](https://i.imgur.com/FdsaXKf.png)

Filmeroo is a lightweight movie search engine that allows the user to find movies based on titles and get key information about the film like rating, awards, director at a glance. In addition, if they want to explore further, a link is provided to redirect them to the film's respective IMDB page. 

This website is designed with responsive use in mind and is optimised for both mobile and desktop usage. 

The live website can be viewed [here](https://edmundgjj.github.io/proj2_moviefinder/)

## UX and UI

### User Interface 

Before developing the page, I created a wireframe to help me visualise how the website should look and work. With a simple Single Page layout, the user's attention is drawn to the search input field and button in the middle of the page. 
You can find the wireframe here on Figma - [link](https://www.figma.com/file/5QkwPPvtJzgaoGy7RYexSo/Movie-Finder-Project-Two?node-id=0%3A1)

It is located in a position that makes it for the user to find and return to if they want to repeat a search. 

Using dark purple as a the primary color it provides a good backdrop that allows the movie poster to stand out. Using the bright orange for the search call-to-aciton brings attention to the user immediately. 
By using the brand color of yellow and grew for the view on IMDB button, it provides more context on the functionality of the button.  

To make the movie poster stand out even further, I chose to use black on the card that the movie poster is displayed on. 

By showing only two movie posters on desktop version, it helps user to scan the information more easily without being bombarded by too many information at once. 

On mobile, one movie is shown in each row and optimised for the mobile scrolling behavior and ensure readability as well. 


### User Stories & Scenarios

1. When looking for a movie, I can search a word that belongs to the movie title to find movies with title that contains the word. The user will see a list of movies with their posters and title based on the search results. 
2. When I want to find out more about the movie, I can click on the "Movie Button" and it will direct me to the movie's IMDB page on a new window. 
3. When I perform a search with no value inserted into the search form, I will see an error message that asks me to enter a value into the search form. 
4. When I perform a search with less than 3 characters, I am not able to do the search and will be asked to input a value with more than 3 characters or more. 
5. When I perform a search which returns no results, I am informed that no movies with the title can be found. 
6. On the search results, I can find the information of the name, director, IMDB rating, awards information, release year and plot summary of the movie.


## Testing 

Manual testing is conducted on three devices available to me - Macbook Pro 16 Inch, tested on chrome and safari, iOS on Iphone 11 Pro Mas on Safari and Android 11 on Galaxy S10e on Chrome. 
I checked for both the responsiveness of the website on these devices and also the functionality using the test cases I created to cover the end to end user experience of the website. 
The test cases can be found [here](https://docs.google.com/spreadsheets/d/1Qvv28y-rBKN6dQ5ZqUDT1VtdSd5hFcgNdNxFRSfqgXY/edit?usp=sharing).

## Future Improvements 
* Add a loading state when the search results is loading. 
* Allow users to sort and filter the search by year and ratings. 
* Allow users to view the Top 100 movies by year. 

## Technology 
* HTML5
* CSS3
* JavaScript
* JQuery
* [Axios](https://www.npmjs.com/package/axios) 
* [Gitpod](https://gitpod.io/workspaces/)
    * Used as the IDE to write the codes for this website   
* [Bootstrap 4 framework](https://getbootstrap.com/)
* [Git](https://git-scm.com/)
    * Used for version control to commit to Github
* [Github](https://github.com)
* [W3C Markup Validation service](## )
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

## Deployment 
*This website is deployed using Github pages. 

## Credit 
*Open Movies Database [API](http://www.omdbapi.com/)

This site is created solely for educational purposes.