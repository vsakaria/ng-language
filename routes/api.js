/*
 * Serve JSON to our AngularJS client
 */

var fs  = require('fs');

exports.name = function (req, res) {
  res.json({
  	name: 'Busuu'
  });
};

exports.highscores = function(req , res) {
  fs.readFile('data/highscores.json', function (err, data) {
    if (err) throw err;
    var highscores = JSON.parse(data);
    res.json(highscores);
  });
};

exports.submitHighScore = function(req, res) {
  fs.readFile('data/highscores.json', function (err, data) {
    if (err) throw err;
    var highscores = JSON.parse(data);
    highscores.push(req.body);
    highscores.sort(function(a,b) {
      if (a.score==b.score) return 0;
      if (a.score <  b.score)  return 1;
      if (a.score > b.score) return -1;
    });
    fs.writeFile(
      'data/highscores.json',
      JSON.stringify(highscores),
      function(err) {
        if (err) throw err;
        res.json(highscores);
      }
    );
  });
};