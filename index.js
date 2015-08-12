var express = require('express'),
  app = express();

app.use(express.static('dist'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port %s', server.address().port);
});
