const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS accounts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      discord_id TEXT,
      level TEXT,
      access TEXT,
      status TEXT,
      highlights TEXT,
      weapons TEXT,
      balance TEXT,
      rank TEXT,
      nameChange TEXT,
      screenshot TEXT,
      price TEXT
    )`);
  }
});

module.exports = db;
