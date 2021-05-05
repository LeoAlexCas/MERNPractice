const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const { mongoose } = require('./databse');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/tasks.routes'));

//Static Files
app.use(express.static(path.join(__dirname + '/public')))

//Start Server

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});