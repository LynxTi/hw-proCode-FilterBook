var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer();

const findItemsAcpCntrl = require('../controlers/acpCntr/findItems')
const findBooksDB = require('../controlers/findItem');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/authors&genres', upload.none(), async (req, res, next) => {
  const allAuthors = await findItemsAcpCntrl.findAllAuthors();
  const allgenres =  await findItemsAcpCntrl.findAllGenres();

    res.json({allAuthors, allgenres});
});

router.post('/book', upload.none(), async (req, res, next) => {
  const { nameBook, authorBook, genreBook } = req.body;

  const rezalt = await findBooksDB(nameBook, authorBook, genreBook);

  res.json(rezalt);
});

module.exports = router;
