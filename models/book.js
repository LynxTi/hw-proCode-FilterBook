const mongoose = require('mongoose');

const { Schema } = mongoose;

require('./author');
require('./genre');


const bookSchema = new Schema ({
    nameBook: {
        type: Schema.Types.String
    },
    authtorBook: {
        type: Schema.Types.ObjectId, ref: 'author'
    },
    genreBook: [{
        type: Schema.Types.ObjectId, ref: 'genre'
    }]
});

const model = mongoose.model('book', bookSchema)
module.exports = model;

