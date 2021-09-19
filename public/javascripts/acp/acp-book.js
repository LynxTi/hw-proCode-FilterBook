const elForm = document.querySelector('.formBook');

const run = async () => {
    const {data} = await axios.post('/acp/book/authors'); 
    const {allAuthors, allgenres} = data;

    const createSlectAuthors = () => {
        let htmlAuthor = allAuthors.reduce((html, author) => {
            const {_id} = author;
            html += `<option value="${_id}">${author.name}</option>`
        
            return html;
            }, ``);
            return htmlAuthor = `<select class="nameAthor">` + htmlAuthor + `</select>`;
        }

    const createSlectGenres = () => {
        let htmlGenre = allgenres.reduce((html, genre) => {
            const {_id} = genre;
            html += `<option value="${_id}">${genre.name}</option>`
        
            return html;
            }, ``);

            return htmlGenre = `<select class="nameGenre">` + htmlGenre + `</select>`;
        }


        elForm.innerHTML = `<input type="text" class="inputForm" name='nameBook' placeholder="Название книги">` + createSlectAuthors() + createSlectGenres() + `<button type="submit" class="btn">OK</button>`;
}

elForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const authorName = document.querySelector('.nameAthor').value;
    const genreName = document.querySelector('.nameGenre').value;
    const nameBook = new FormData(elForm).get('nameBook');

    const {data} = await axios.post('/acp/book', {nameBook, authorName, genreName})
    
    console.log(data);
})
run();