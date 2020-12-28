$(function () {
    let movie_api = '57b5e64d'
    let search_url = `https://www.omdbapi.com/?apikey=${movie_api}&s=`
    let info_url = `https://www.omdbapi.com/?apikey=${movie_api}&i=`
    let search_input = '';
    let search_results_data = '';
    let search_list = '';

    let movie_score = '';




    function searchMovie(movie_name) {
        axios.get(search_url + movie_name + "&type=movie")
            .then(function (response) {
                search_results_data = response.data.Search;
                console.log(search_results_data);

                search_list = '';

                if (search_results_data) {
                    for (var i = 0, len = search_results_data.length; i < len; i++) {

                        axios.get(info_url + search_results_data[i].imdbID)
                            .then(function (response) {
                                console.log(response.data);
                                movie_score = response.data.imdbRating;
                                console.log(i);

                                search_list +=
                                    `<div class="col-lg-6 col-md-12" >
                                    <div style="border:10px solid #0a1045;border-radius: 20px; background-color:black; padding:1rem;">
                                    <div class="row">
                                    <div class="col-4"><img class="img-fluid rounded" src="${response.data.Poster}" alt="Movie Poster of ${response.data.Title}"></div>
                                    <div class="col-8">
                                    <div style="height:5px;"></div>
                                    <h2>${response.data.Title}</h2>
                                    <h4>${response.data.Year} </h4>
                                    <div>
                                    <p><i class = "fas fa-star"></i>${movie_score}</p>
                                    <p>${response.data.Plot}</p>
                                    </div>
    
                                    <a class="btn btn-primary" href="https://www.imdb.com/title/${response.data.imdbID}/" role="button" target="_blank">View Movie</a>
                                    </div>
                                    </div>
                                    
                                                    
                        
                        </div></div>`;

                                $("#cardList").html(search_list);



                            })

                        //createMovieCard(search_results_data[i]);



                    };
                    $('#info-banner').html("");

                } else {
                    $('#message').html("Cannot find movie with this title.")
                };
            }).catch(function (err) {
                console.log(err);
            });
    };

    $("#submitMovieName").click(function (e) {
        e.preventDefault();
        if ($("#movieNameInput").val().length >= 3) {
            // Function to search movies
            $('#message').html("");
            search_input = $("#movieNameInput").val();
            searchMovie(search_input);

        } else if ($("#movieNameInput").val().length > 0 && $("#movieNameInput").val().length < 3) {
            $('#message').html("Please insert 3 characters or more.")
        }

        else {
            $('#message').html("Please enter a movie name.")
        }


    });

    //Gets the details of each movie from API





})


