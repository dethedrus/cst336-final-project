module.exports = {
    "up": `
        CREATE TABLE borrow(
            id INT NOT NULL AUTO_INCREMENT,
            user_id INT NOT NULL,
            ebook_id INT NOT NULL,
            due TIMESTAMP,
            created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE(user_id, ebook_id)
        )
        `.replace(/(?:\r\n|\r|\n)/g, ' '),
    "down": "DROP TABLE borrow"
}