module.exports = {
    "up": `
        CREATE TABLE borrow(
            id INT NOT NULL AUTO_INCREMENT,
            user_id INT NOT NULL,
            ebook_id INT NOT NULL,
            created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE(user_id, ebook_id)
        )
        `,
    "down": "DROP TABLE borrow"
}