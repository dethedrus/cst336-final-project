module.exports = {
    "up": `
        CREATE TABLE ebook(
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            cover_filename VARCHAR(255) NOT NULL,
            filename VARCHAR(255) NOT NULL,
            gutenberg_id INT,
            created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE (gutenberg_id)
        )
        `.replace(/(?:\r\n|\r|\n)/g, ' '),
    "down": "DROP TABLE ebook"
}