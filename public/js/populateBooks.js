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
        tr.append('<td><a href="/api/ebook/' + books[i].id + '/checkout">' + books[i].title + '<span><img src="/img/covers/' + books[i].cover_filename + '" alt="image"/></span></a></td>');
        //tr.append('<td><a href="#" id = "bc">' + books[i].title + '<span><img src="/img/covers/' + books[i].cover_filename + '" alt="image"/></span></a></td>');
        tr.append("<td>" + books[i].author + "</td>");
        $('table').append(tr);
    }
})

// $(function()
// {
//     $("#bc").on("click",function(e)
//     {
//         e.preventDefault();
//         $.post(this.href,function(data)
//         {
//             alert(this);
//             console.log(this);
// //            $("#someContainer").html(data);
//         });
//     });
// });