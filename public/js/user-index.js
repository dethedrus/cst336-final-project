/* global $ */
$(document).ready(function () {
    var $UsernameForm = $("#username-form")
    var $UsernameInput = $("#username-input")
    var $SubmitBtn = $("#submit-btn")
    
    showBorrowedBooks();
    
    $UsernameForm
        .on("input change", function (event) {
            $SubmitBtn.attr("disabled", !($UsernameInput.val().length))
        })
        .submit(function (event) {
            event.preventDefault()

            var url = "/api/user/username"
            var postData = {
                username: $UsernameInput.val()
            }
            $.post(url, postData)
                .then(
                    function (data, textStatus, jqXHR) {
                        if (jqXHR.status == 200) {
                            location.reload()
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        var msg = "We ran into a problem, please try again."
                        if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
                            msg = jqXHR.responseJSON.message
                        }
                        alert(msg)
                    }
                )
        })
        
    async function showBorrowedBooks(){ 
    var url = "/api/user/ebook";
    var response = await fetch(url);
    var data = await response.json();
    let books = data.data.ebooks;
        
    $("#borrowedBooks").html("");
    var htmlString = "";
    if (books.length == 0){
        $("#borrowedBooks").append("<h3>You don't have any borrowed books!</h3>");
    }else {
        $("#borrowedBooks").append("<h3>Click on a book-cover to view the book!</h3>");
        for(let i = 0; i < books.length; i++){
            htmlString += "<div class='card' style='width: 12rem;'><a href='/user/ebook/" + books[i].borrow_id + "'><img src='/img/covers/" + books[i].cover_filename 
            + "' class='card-img-top' alt='Cover of " 
            + books[i].title + "'></a><div class='card-body'><h5 class='card-title'>" 
            + books[i].title + "</h5><button type='button' class='btn btn-primary' onClick='returnBook(" + books[i].borrow_id + ")'>Return book</button></div></div>'";
        }
    }
    
    $("#borrowedBooks").append(htmlString); // Adds borrowed books to user page
    } // End showBorrowedBooks()
});

    async function returnBook(borrow_id){
        var url = `/api/user/ebook/${borrow_id}/return`;
        
        return fetch(url, {
            method: 'POST'
        })
        .then(response => response.json(),
        location.reload(),
        alert("Book has been successfully returned!")
        );
    } // End returnBook()