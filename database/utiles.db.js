var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testDB.db');
function createTable(cb) {
  db.run('CREATE TABLE  IF NOT EXISTS resources (id INTEGER PRIMARY KEY,tech TEXT,docs TEXT)', cb);
}
function add(data,cb) {
  const {TECH, DOCS} = JSON.parse(data);
  db.run('INSERT INTO resources(tech,docs) VALUES (?,?)',[TECH, DOCS],cb);
}
function select(cb) {
  db.all('SELECT * FROM resources', cb);
}
function deleteById(id, cb) {
  db.run('DELETE FROM resources WHERE id=?',[id],cb); 

}
module.exports = {
  createTable,
  add,
  select,
  deleteById
};
