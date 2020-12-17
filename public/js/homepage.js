
    $(document).ready(async function() {
                
                //Global variables
                var book;
                
                let url = `/api/ebook`;
                let response = await fetch(url);
                let data = await response.json();
                console.log(data);
                
                
                
                for (let x=0; x<5; x++) {
                    book = data.data.ebooks[x];
                    console.log(book);
                    $("#toppicks").append(`<img src="/img/covers/${book.gutenberg_id}.jpg">`);
                }
    })
