module.exports = {
    "up": `
        CREATE TABLE user(
            id INT NOT NULL AUTO_INCREMENT,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            state VARCHAR(2) NOT NULL DEFAULT 'NA',
            subscribed TINYINT(1),
            created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE(username)
        )
    `,
    "down": "DROP TABLE user"
}