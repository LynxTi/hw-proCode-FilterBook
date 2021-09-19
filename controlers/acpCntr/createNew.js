const authorModel = require('../../models/author');
const genreMOdel = require('../../models/genre');
const bookModel = require('../../models/book');

const createNewAuthor = async (name) => {
    try {
        const doc = await authorModel.create({ name })
        const { id } = doc.id;

        return { status: 'ok', payload: { id }};
    } catch (err) {
        return { status: 'dublicate_name' }
        }
}

const createNewGenre = async (name) => {
    try {
        const doc = await genreMOdel.create({ name })
        const { id } = doc.id;

        return { status: 'ok', payload: { id }};
    } catch (err) {
        return { status: 'dublicate_name' }
        }
}

const createNewBook = async (nameBook, authtorBook, genreBook) => {
    try {
        console.log('nameBook: ', nameBook, "  ", 'authtorBook: ', authtorBook, "  ", 'genreBook: ', genreBook, "  ");
    const doc = await bookModel.create({nameBook, authtorBook, genreBook});

    return { status: 'ok'}
    } catch (err) {
        return{ status: 'eror'}
    }
}

module.exports = {
    createNewAuthor,
    createNewGenre, 
    createNewBook
}