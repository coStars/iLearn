var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('testDB.db');
function createTable(cb) {
  db.run('CREATE TABLE  IF NOT EXISTS resources (id INTEGER PRIMARY KEY,tech TEXT,docs TEXT)', cb);
}
function add(data,cb) {
  const {tech, docs} = JSON.parse(data);
  db.run('INSERT INTO resources(tech,docs) VALUES (?,?)',[tech, docs],cb);
}
function select(cb) {
  db.all('SELECT * FROM resources', cb);
}
function deleteById(id, cb) {
  db.run('DELETE FROM resources WHERE id=?',[id],cb);
}
function updateById(data, cb) {
  const {id,tech, docs} = JSON.parse(data);
  db.run('UPDATE resources SET tech = ?, docs = ? WHERE id=?',[tech,docs,id],cb);
}
module.exports = {
  createTable,
  add,
  select,
  deleteById,
  updateById
};
