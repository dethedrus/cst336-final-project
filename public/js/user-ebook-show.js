$(document).ready(function () {
    var book = ePub(ebook_url);
    var rendition = book.renderTo("view", {
        method: "default",
        width: "100%",
        height: "750",
        spread: "always",
        flow: "paginated"
    })
    var displayed = rendition.display();

    book.ready.then(function () {
        $("#next").on("click", function (event) {
            event.preventDefault();
            rendition.next();
        })
        $("#prev").on("click", function (event) {
            event.preventDefault();
            rendition.prev();
        })

        $(document).on("keyup", function (e) {
            // left arrow key
            if ((e.keyCode || e.which) == 37) {
                rendition.prev();
            }
            // right arrow key
            if ((e.keyCode || e.which) == 39) {
                rendition.next();
            }
        })
    })

    rendition.on("relocated", function (location) {
        $("#next").css("visibility", location.atEnd ? "hidden" : "visible");
        $("#prev").css("visibility", location.atStart ? "hidden" : "visible");
    })
})