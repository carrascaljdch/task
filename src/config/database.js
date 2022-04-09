const mongoose = require('mongoose');

const URI = 'mongodb+srv://carrascalhoyosjdch:Cc1007801308@proyectog.oj9dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;