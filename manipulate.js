const PouchDB = require('pouchdb')

const db = new PouchDB('http://localhost:5984/test')
db.info().then(info => {
  console.log(info)
})

const originalDoc = {
  '_id': 'book',
  value: 20,
}

//May result conflit here, because document is already there after first execution
db.put(originalDoc).then(() =>{
  console.log('succeed')
  db.get('book').then(d => {
    console.log(d)
  })
}, (err) => {
  console.log(err)
})

db.get('book').then(d => {
  console.log(d)
})


console.log('info')
