const elForm = document.querySelector('.filterBookForm');
const booksBlock = document.querySelector('.booksBlock');


const run = async () => {
    const {data} = await axios.post('/authors&genres'); 
    const {allAuthors, allgenres} = data;

    const createSlectAuthors = () => {
        let htmlAuthor = allAuthors.reduce((html, author) => {
            const {_id} = author;
            html += `<option value="${_id}">${author.name}</option>`
        
            return html;
            }, ``);
            return htmlAuthor = `<select class="nameAthor"><option value=""></option>` + htmlAuthor + `</select>`;
        }

    const createSlectGenres = () => {
        let htmlGenre = allgenres.reduce((html, genre) => {
            const {_id} = genre;
            html += `<option value="${_id}">${genre.name}</option>`
        
            return html;
            }, ``);

            return htmlGenre = `<select class="nameGenre"><option value=""></option>` + htmlGenre + `</select>`;
        }


        elForm.innerHTML = `<input type="text" class="inputForm" name='nameBook' placeholder="Название книги">` + createSlectAuthors() + createSlectGenres() + `<button type="submit" class="btn">OK</button>`;
}

run();

const renderArticleBlock = (booksArr) => {
    console.log(booksArr);
    const articlesHtml = booksArr.reduce((htmlcode, book) => {
        htmlcode += `<div>${book.nameBook}</div>`
        return htmlcode;
    }, '');

    booksBlock.innerHTML = articlesHtml;

}

elForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const authorBook = document.querySelector('.nameAthor').value;
    const genreBook = document.querySelector('.nameGenre').value;
    const nameBook = new FormData(elForm).get('nameBook');

    const {data} = await axios.post('/book', { nameBook, authorBook, genreBook });

    renderArticleBlock(data);
});



