import db from "./connection_sqlite.js"

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users;
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_mail VARCHAR(255),
    user_pw VARCHAR(255)
);
`);

// seed the database
if (isInDeleteMode) {
    db.run(`INSERT INTO users
    ( user_mail, user_pw) 
    VALUES
    ("test@mail.com", "123");`);
}