const mongoose = require('mongoose');

const { Schema } = mongoose;

const genreSchema = new Schema ({
    name: {
        type: Schema.Types.String,
        unique: true,
        default: ''
    }
});

const model = mongoose.model('genre', genreSchema)
module.exports = model;
