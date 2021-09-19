const authorModel = require('../../models/author');
const genreMOdel = require('../../models/genre')

const findAllAuthors = async () => {
    const athors = await authorModel.find({});
    
    return athors;
}

const findAllGenres = async () => {
    const genres = await genreMOdel.find({});
    
    return genres;
}

module.exports = {
    findAllAuthors,
    findAllGenres
}