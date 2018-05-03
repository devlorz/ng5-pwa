const express = require('express');
const pokemon = require('./pokemon.json');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

app.get('/pokemon', function(req, res) {
  const data = JSON.parse(pokemon);
  res.status(200).send(data);
});
