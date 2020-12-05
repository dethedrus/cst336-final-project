module.exports = {
    "up": `
        CREATE TABLE user(
            id INT NOT NULL AUTO_INCREMENT,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE(username)
        )
    `,
    "down": "DROP TABLE user"
}