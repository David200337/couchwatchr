$(document).ready(function () {
    $(document).scroll(function() {
        var navbar = $(".navbar");
        navbar.toggleClass("scrolled", $(this).scrollTop() > navbar.height());
    });
});


function searchMovies() {
    const searchTerm = $("#searchInput").val().toLowerCase();
    const movieCards = $("#movie-list").children();
    let isFound = false;
    let results = [];
    

    movieCards.each(function () {
        const title = $(this).find(".card-title");
        var value = $(title).text().toLowerCase();

        if (value.includes(searchTerm)) {
            isFound = true;
            results.push(this);
        }
    });


    if (isFound) {
        $("#movie-list").html("");

        Array.from(results).forEach(function (movie) {
            $("#movie-list").append(movie);
        })
    } else {
        $("#movie-list").html("<h1>Sorry, there were no results.</h1>")
    }
    
    $("#searchInput").val("");
}