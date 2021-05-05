const mongoose = require('mongoose');

const URI = 'mongodb+srv://db_user_platzi_videos:nissa1304@cluster0.enqzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI).then(db => console.log('DB is connected')).catch(err => console.error(err));

module.exports = mongoose;