var express = require('express');

// Create our app 
var app = express();
// Environment variable for heroku
const PORT = process.env.PORT || 3000;

// For open Weather API because it doesn't use https:
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Tell which folder to serve 
app.use(express.static('public'));

// Start the server 
app.listen(PORT, function() {
  console.log('Express server is running on port ' + PORT);
});