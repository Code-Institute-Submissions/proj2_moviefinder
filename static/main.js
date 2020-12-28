$(function () {
    let movie_api = '57b5e64d'
    let search_url = `https://www.omdbapi.com/?apikey=${movie_api}&s=`
    let info_url = `https://www.omdbapi.com/?apikey=${movie_api}&i=`
    let search_input = '';
    let search_results_data = '';
    let search_list = '';

    function createMovieCard(data) {
        console.log('Create Movie');
        search_list += `<div class="card">
    <div class="card-header text-center font-weight-bold">${data.Title}</div>
    <img class="card-img" src="${data.Poster}" alt="Movie Poster of ${data.Title}">
    <div class="card-footer text-center">
    <a class="btn btn-primary" href="https://www.imdb.com/title/${data.imdbID}/" role="button" target="_blank">View Movie</a>
    </div>
    </div>`;

        $("#cardList").html(search_list);
    };

    function searchMovie(movie_name) {
        axios.get(search_url + movie_name)
            .then(function (response) {
                search_results_data = response.data.Search;
                console.log(search_results_data);

                search_list = '';


            }).catch(function (err) {
                console.log(err);
            });
    };

    $("#submitMovieName").click(function () {
        if ($("#movieNameInput").val().length >= 3) {
            // Function to search movies
            $('#message').html("");
            search_input = $("#movieNameInput").val();
            searchMovie(search_input);
            if (search_results_data) {
                for (var i = 0, len = search_results_data.length; i < len; i++) {
                    console.log(i);
                    createMovieCard(search_results_data[i]);
                };
                $('#info-banner').html("");

            } else {
                $('#message').html("Cannot find movie with this title.")
            }


        } else if ($("#movieNameInput").val().length > 0 && $("#movieNameInput").val().length < 3) {
            $('#message').html("Please insert 3 characters or more.")
        }

        else {
            $('#message').html("Please enter a movie name.")
        }

        event.preventDefault();
    });
})


