$(document).ready(async function()
{
    let url = "/api/ebook";
    let response = await fetch(url);
    let data = await response.json();
    let books = data.data.ebooks;
    var tr;
    for (var i = 0; i < books.length; i++)
    {
        tr = $('<tr/>');
        tr.append('<td><a href="/api/ebook/' + books[i].id + '/checkout" class = "bc">' + books[i].title + '<span><img src="/img/covers/' + books[i].cover_filename + '" alt="image"/></span></a></td>');
        tr.append("<td>" + books[i].author + "</td>");
        $('table').append(tr);
    }
    $(function()
    {
        $(".bc").on("click",function(e)
        {
            e.preventDefault();
            let test = this.toString();
            let url = test.substr(test.indexOf("/api"));
            checkout(url);
        })
    })
    async function checkout(url)
    {
        let response = await fetch(url, {method: "post"});
        let data = await response.json();
        if (data.success.toString() == "false")
        {
            if (data.message.indexOf("authenticated") != -1)
            {
                alert("You must be logged in to check out books");
            }
            else
            {
                alert("You have already checked out this book!"); 
            }
        }
        else
        {
            alert("You have successfully checked out a book!");
        }
    }
})