$(document).ready(async function () {

    //Global variables
    var book;

    let url = `/api/ebook/random`;
    let response = await fetch(url);
    let data = await response.json();

    for (let x = 0; x < 5; x++) {
        book = data.data.ebooks[x];
        $("#toppicks").append(`<img src="/img/covers/${book.gutenberg_id}.jpg">`);
    }
})