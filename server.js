// init project
var express = require('express');
var app = express();
var imagesearch = require('./imagesearch');


var express = app.use(express.static('public'));

app.get('/',function(req,resp){
  resp.sendFile(__dirname + '/views/index.html');
});

app.get('/*',imagesearch);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
