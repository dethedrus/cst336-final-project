
    $(document).ready(function() {
                
        //Global variables
        var count = 0;
                
        $("#searchButton").on("click", search);
        
        async function search(){
            
        count = 0;
        $("#searchresults").html("");
        $("#titleresults").html("");
        $("#noresults").html("");
        
        // e.preventDefault();
        let value = $("#keyword").val();    
        
        let url = `/api/ebook`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
                
        for (let x=0; x<data.data.ebooks.length; x++) {
                    
            let book = data.data.ebooks[x];
            let title = book.title;
            console.log(value);
            
                    
            if (value == title) {
                $("#searchresults").append(`<img src="/img/covers/${book.gutenberg_id}.jpg">`);
                $("#titleresults").append(title);
                count = count + 1;
            }
        }
        
        if (count == 0) {
            $("#noresults").append("Sorry, we do not have that title in our library.");
        }
    }
            
})
