module.exports = {
    // password: 'secret'
    "up": `
        INSERT INTO user (id, username, password)
        VALUES 
            (1, 'david', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6')
            ,(2, 'jose', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6')
            ,(3, 'jomar', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6')
            ,(4, 'yoela', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6')
            ,(5, 'admin', '$2a$10$06ofFgXJ9wysAOzQh0D0..RcDp1w/urY3qhO6VuUJL2c6tzAJPfj6')
        ;
    `,
    "down": "DELETE FROM user WHERE id BETWEEN 1 AND 4;"
}