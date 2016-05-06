const PouchDB = require('pouchdb')

const db = new PouchDB('http://localhost:5984/test')
db.info().then(info => {
  console.log(info);
})

console.log('info');
