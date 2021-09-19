const mongoose = require('mongoose');

const bookModel = require('../models/book');
// const AuthorModel = require('../models/author');
// const genreModel = require('../models/book');

const findBookByName = async (bookName) => {
    const books = await bookModel.find({nameBook: bookName});

    return books
}

const findBookByGenre = async (genreBook) => {
    const books = await bookModel.find({genreBook: genreBook});

    return books
}

const findBookByAuthor = async (authorBook) => {
    const books = await bookModel.find({authtorBook: authorBook});

    return books
}

const findAllBook = async () => {
    const books = await bookModel.find({});

    return books
}

const findBook = async (nameBook, authorBook, genreBook) => {
    console.log(nameBook, authorBook, genreBook);
    switch (true) {
        case nameBook !== '':
            console.log(1);
            return findBookByName(nameBook);
        case authorBook !== '':
            console.log(2);
            return findBookByAuthor(authorBook);
        case genreBook !== '':
            console.log(3);
            return findBookByGenre(genreBook);
        default:
            console.log(4);
            return findAllBook();
}}

module.exports = findBook;
