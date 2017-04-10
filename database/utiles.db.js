var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testDB.db');

function createTable(cb) {
  db.run('CREATE TABLE  IF NOT EXISTS resources (id INT,tech TEXT,docs TEXT)', cb);
}

function add(data,cb) {
  const {ID, TECH, DOCS} = JSON.parse(data);
  db.run('INSERT INTO resources(id,tech,docs) VALUES (?,?,?)',[ID, TECH, DOCS],cb);
}

function select(cb) {
  db.all('SELECT * FROM resources', cb);
}

module.exports = {
  createTable,
  add,
  select
};
