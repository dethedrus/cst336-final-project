module.exports = {
    "up": `
        INSERT INTO ebook (id, title, author, cover_filename, filename, gutenberg_id)
        VALUES
            ( 1, 'A Christmas Carol in Prose', 'Charles Dickens',  '46.jpg', '46.epub', 46 )
            ,( 2, 'Pride and Prejudice', 'Jane Austen',  '1342.jpg', '1342.epub', 1342 )
            ,( 3, 'The Scarlet Letter', 'Nathaniel Hawthorne',  '25344.jpg', '25344.epub', 25344 )
            ,( 4, 'The Yellow Wallpaper', 'Charlotte Perkins Gilman',  '1952.jpg', '1952.epub', 1952 )
            ,( 5, "Alice's Adventures in Wonderland", 'Lewis Carroll',  '11.jpg', '11.epub', 11 )
            ,( 6, 'A Modest Proposal', 'Jonathan Swift',  '1080.jpg', '1080.epub', 1080 )
            ,( 7, 'A Tale of Two Cities', 'Charles Dickens',  '98.jpg', '98.epub', 98 )
            ,( 8, 'Moby Dick; Or, The Whale', 'Herman Melville',  '2701.jpg', '2701.epub', 2701 )
            ,( 9, 'The Adventures of Sherlock Holmes', 'Arthur Conan Doyle',  '1661.jpg', '1661.epub', 1661 )
            ,( 10, 'The Strange Case of Dr. Jekyll and Mr. Hyde', 'Robert Louis Stevenson',  '43.jpg', '43.epub', 43 )
    `,
    "down": "DELETE FROM ebook WHERE id BETWEEN 1 AND 10"
}