var path = require('path');
var express = require('express');
var router = express.Router();
var callAPI = require('../lib/call-api')

var dbPath = path.join(__dirname, '../golf.sqlite3')

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath
  },
  useNullAsDefault: true
})

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('answers').pluck('answer').then(function (answers) {
    var length = answers.length
    var randomId = Math.ceil(Math.random()*answers.length)

    knex('answers').where('id', randomId)
      .then(function (randomAnswerObj) {
        console.log('obj-------------:', randomAnswerObj[0].answer)
        // callback(null, randomAnswerObj[0].answer)
        callAPI(randomAnswerObj[0].answer, res, renderPage)
      })
      .catch(function (e) {
        return e
      })
  })
  // res.render('home', { title: 'Express' });
});

function renderPage (err, res) {
  if (err) {
    return
  }
  console.log(res.imagesArray)
  res.render('home', {title: 'Callback working!'})
}

module.exports = router;
