const mongoose = require('mongoose');
require('dotenv/config');

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASSWORD;

const URI = `mongodb+srv://${USER}:${PASS}@cluster0.enqzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(URI).then(db => console.log('DB is connected')).catch(err => console.error(err));

module.exports = mongoose;