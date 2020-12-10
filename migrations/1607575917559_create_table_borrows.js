module.exports = {
    "up": `
        INSERT INTO borrow (user_id, ebook_id)
        VALUES 
            (1, 1, 1),
            (2, 2, 2),
            (3, 3, 3),
            (4, 4, 4)
        ;
    `,
    "down": "DELETE FROM borrow WHERE id BETWEEN 1 AND 4;"
}