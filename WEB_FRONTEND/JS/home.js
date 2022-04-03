var getPostsEndPoint = "http://127.0.0.1:8091/getPosts"



$(document).ready(function () {
    $.ajax({
        url: getPostsEndPoint,
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            response.forEach(element => {
                $("#postsContainer").append(
                    "<li>"
                    + "<a class='card'>"
                    + "<img src='" + element.ImageBlob + "' class='card__image' alt=''/>"
                    + "<h3 class='card__title'>" + element.PostName + "</h3>"
                    + "<span class='card__pubDate'>" + element.PubDate + "</span>"
                    + "<span class='card__summary'>" + element.Summary + "</span>"
                    + "<p class='card__content'>" + element.Content + "</p >"
                    + "</a>"
                    + "</li >"
                )
            });
        },
        error: function (error) {
            alert(error.responseText)
        }
    });
})