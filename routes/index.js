var express = require('express');
var router = express.Router();
var obj = {
  "mainImage":"http://www.abc.net.au/news/image/6473316-3x2-940x627.jpg",
  "images": [
  {"id": 1, "image": "https://managewp.com/wp-content/uploads/2012/07/spam.jpg"},
  {"id": 2, "image": "http://www.motherearthnews.com/~/media/Images/MEN/Editorial/Articles/Magazine%20Articles/2006/04-01/Backyard%20Fish%20Farming/Tilapia.jpgg"},
  {"id": 3, "image": "http://www.overbitespictures.com/wp-content/uploads/2012/09/CS_9.3.12_labor_day_OPP.jpg"},
  {"id": 4, "image": "https://i.ytimg.com/vi/IDEaqFo7-a8/hqdefault.jpg"}
  ],
  "score": 5
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('index', obj);
});

router.post('/home', function(req, res, next) {
  res.redirect('/home');
});

module.exports = router;