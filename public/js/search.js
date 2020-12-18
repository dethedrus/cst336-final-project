$(document).ready(function () {

    //Global variables
    var count = 0;

    $("#searchButton").on("click", search);

    // on enter key, search!
    $("#keyword").on("keyup", function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            search()
        }
    })

    async function search() {

        count = 0;
        $("#searchresults").html("");
        $("#titleresults").html("");
        $("#noresults").html("");

        // e.preventDefault();
        let value = $("#keyword").val();

        let url = `/api/ebook`;
        let response = await fetch(url);
        let data = await response.json();

        for (let x = 0; x < data.data.ebooks.length; x++) {

            let book = data.data.ebooks[x];
            let title = book.title;

            if (value.toLowerCase() == title.toLowerCase() || title.toLowerCase().includes(value.toLowerCase())) {
                let html = `<div class="search-result mx-4 d-inline-block">
                <img src="/img/covers/${book.gutenberg_id}.jpg">
                <h5>${title}</h5>
                </div>
                `
                // $("#searchresults").append(`<img src="/img/covers/${book.gutenberg_id}.jpg">`);
                // $("#titleresults").append(title);
                $("#titleresults").append(html);
                count = count + 1;
            }
        }

        if (count == 0) {
            $("#noresults").append("Sorry, we do not have that title in our library.");
        }
    }

})