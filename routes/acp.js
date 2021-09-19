var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer();

const acpCntrl = require('../controlers/acpCntr/createNew');
const Perenebovat = require('../controlers/findItem');
const findItemsCntrl = require('../controlers/acpCntr/findItems')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('acp');
});

router.get('/genre', (req, res, next)  => {
  res.render('acp-genre');
});

router.post('/genre', upload.none(), async (req, res, next)  => {
  const { nameGenre } = req.body;
  console.log('nameGenre: ', nameGenre);
  const rezalt = await acpCntrl.createNewGenre(nameGenre);

  if (rezalt.status === 'dublicate_name') {
    res.json({ status: 'dublicate_name'})

    return
  }

  res.json({status: 'ok', payload: {id: rezalt.id} })
});

router.get('/author', (req, res, next)  => {
  res.render('acp-ahtor');
});

router.post('/author', upload.none(), async (req, res, next) => {
  const { nameAuthor } = req.body;
  const rezalt = await acpCntrl.createNewAuthor(nameAuthor);

  if (rezalt.status === 'dublicate_name') {
    res.json({ status: 'dublicate_name'})

    return
  }

  res.json({status: 'ok', payload: {id: rezalt.id} })
  
});

router.get('/book', async (req, res, next)  => {
  
  res.render('acp-book');
});   

router.post('/book', upload.none(), async (req, res, next) => {
  const { nameBook, authorName, genreName } = req.body;
  console.log(req.body);
  const rezalt = acpCntrl.createNewBook(nameBook, authorName, genreName);

  res.json({rezalt});
})

router.post('/book/authors', upload.none(), async (req, res, next) => {
  const allAuthors = await findItemsCntrl.findAllAuthors();
  const allgenres =  await findItemsCntrl.findAllGenres();

    res.json({allAuthors, allgenres});
});

module.exports = router;
