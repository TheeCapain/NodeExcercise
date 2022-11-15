import db from "./connection_sqlite.js"

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users;
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(255),
    user_pw VARCHAR(255)
);
`);

// seed the database
if (isInDeleteMode) {
    db.run(`INSERT INTO users ( user_name, user_pw) VALUES ("tiger", "panthera tigris");`);
}