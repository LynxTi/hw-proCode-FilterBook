const elFormGenre = document.querySelector('.formGenre');

elFormGenre.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const name = formData.get('nameGenre')
    const { data } = await axios.post('/acp/genre', formData);
    console.log(data);
});