require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))

const db = new PouchDB(process.env.COUCHDB_URL)

db.bulkDocs([
  { _id: 'dog_skippy', color: 'brown', name: 'Skippy', breed: 'Collie', type: 'dog'},
  { _id: 'dog_brandy', color: 'brown', name: 'Brandy', breed: 'Cocker Spaniel', type: 'dog'},
  { _id: 'dog_nella', color: 'brown', name: 'Nella', breed: 'German Shepherd', type: 'dog'},
  { _id: 'dog_june', color: 'black', name: 'Juno', breed: 'Bulldog', type: 'dog'},
  { _id: 'breed-lab', name: 'Lab', dec: 'Labs are cool and messy.', type: 'breed'}
]).then (data => console.log('Data succesfully uploaded to the database!', data))
.catch(err=> console.log('Error uploading the data!',err))
