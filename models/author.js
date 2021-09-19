const mongoose = require('mongoose');

const { Schema } = mongoose;

const authorSchema = new Schema ({
    name: {
        type: Schema.Types.String,
        unique: true
    }
});

const model = mongoose.model('author', authorSchema)
module.exports = model;
