$(document).ready(function() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=39827649563146f3803db6d2a74913cc';
    var headlines = [];
    var articles = [];

    // get news
    $.get(url, function(response) {
        // clean the data
        headlines = Object.keys(response).map(function(key) {
            return response[key];
        })

        articles = headlines[2].map(function(article) {
            return article;
        });

        // add to html
        for (var i = 0; i < articles.length; i++) {
            $('#news').append('<li class="container__news--item"><a class="container__news--link" href="' + articles[i].url +'"><i class="fas fa-angle-double-right fa-1x"></i><div>' + articles[i].title + '</a></div></li></br>');
        }
    })
})