let movie_api = '57b5e64d'
let search_url = `https://www.omdbapi.com/?apikey=${movie_api}&s=`
let info_url = `https://www.omdbapi.com/?apikey=${movie_api}&i=`

$("#submitMovieName").click(function () {

    console.log("Clicked");
    input = $("#movieNameInput").val();
    console.log(input)
});



function searchMovie(movie_name) {
    axios.get(search_url + movie_name)
        .then(function(response){
            let search_results = response.data.Search;
            let search_list = '';

        })
}


