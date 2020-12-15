TRUNCATE borrow;
TRUNCATE ebook;
TRUNCATE user;

INSERT INTO user (id, username, password)
VALUES 
    (1, 'david', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6'),
    (2, 'jose', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6'),
    (3, 'jomar', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6'),
    (4, 'yoela', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6')
;


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
        ,( 11, 'Dracula', 'Bram Stoker',  '345.jpg', '345.epub', 345 )
        ,( 12, 'Beowulf: An Anglo-Saxon Epic Poem', 'J. Lesslie Hall',  '16328.jpg', '16328.epub', 16328 )
        ,( 13, 'Great Expectations', 'Charles Dickens',  '1400.jpg', '1400.epub', 1400 )
        ,( 14, 'The Call of the Wild', 'Jack London',  '215.jpg', '215.epub', 215 )
        ,( 15, 'The Wonderful Wizard of Oz', 'L. Frank Baum',  '55.jpg', '55.epub', 55 )
        ,( 16, 'Little Women', 'May Alcott',  '514.jpg', '514.epub', 514 )
        ,( 17, 'Peter Pan', 'J. M. Barrie',  '16.jpg', '16.epub', 16 )
        ,( 18, 'Grimms\' Fairy Tales', 'Jacob Grimm and Wilhelm Grimm',  '2591.jpg', '2591.epub', 2591 )
        ,( 19, 'Adventures of Huckleberry Finn', 'Mark Twain',  '76.jpg', '76.epub', 76 )
        ,( 20, 'War and Peace', 'Leo Tolstoy',  '2600.jpg', '2600.epub', 2600 )
        ,( 21, 'The Count of Monte Cristo', 'Alexandre Dumas',  '1184.jpg', '1184.epub', 1184 )
        ,( 22, 'Wuthering Heights', 'Emily Bronte',  '768.jpg', '768.epub', 768 )
        ,( 23, 'Anne of Green Gables', 'L. M. Montgomery',  '45.jpg', '45.epub', 45 )
        ,( 24, 'The War of the Worlds', 'H. G. Wells',  '36.jpg', '36.epub', 36 )
        ,( 25, 'Don Quixote', 'Miguel de Cervantes Saavedra',  '996.jpg', '996.epub', 996 )
        ,( 26, 'Les Miserables', 'Victor Hugo',  '135.jpg', '135.epub', 135 )
        ,( 27, 'A Christmas Carol', 'Charles Dickens',  '24022.jpg', '24022.epub', 24022 )
        ,( 28, 'The Legend of Sleepy Hollow', 'Washington Irving',  '41.jpg', '41.epub', 41 )
        ,( 29, 'Oliver Twist', 'Charles Dickens',  '730.jpg', '730.epub', 730 )
        ,( 29, 'Beyond Good and Evil', 'Friedrich Wilhelm Nietzsche',  '4363.jpg', '4363.epub', 4363 )
        ,( 30, 'The Secret Garden', 'Frances Hodgson Burnett',  '113.jpg', '113.epub', 113 )
        ,( 31, 'The Jungle', 'Upton Sinclair',  '140.jpg', '140.epub', 140 )
        ,( 32, 'David Copperfield', 'Charles Dickens',  '766.jpg', '766.epub', 766 )
        ,( 33, 'Sense and Sensibility', 'Jane Austen',  '161.jpg', '161.epub', 161 )
        ,( 34, 'The Jungle Book', 'Rudyard Kipling',  '236.jpg', '236.epub', 236 )
        ,( 35, 'Anna Karenina', 'Leo Tolstoy',  '1399.jpg', '1399.epub', 1399 )
;

INSERT INTO borrow (id, user_id, ebook_id)
VALUES 
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4)
;
