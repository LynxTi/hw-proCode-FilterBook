const elFormAuthor = document.querySelector('.formAuthor');

elFormAuthor.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const name = formData.get('nameAuthor')
    const { data } = await axios.post('/acp/author', formData);
    console.log(data);
});

