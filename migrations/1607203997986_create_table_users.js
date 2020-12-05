module.exports = {
    // password: 'secret'
    "up": `
        INSERT INTO user (username, password)
        VALUES ('jose', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6');
    `,
    "down": "DELETE FROM user WHERE username='jose';"
}