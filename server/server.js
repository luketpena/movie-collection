//-----< Requires >-----\\
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

//-----< Middleware >-----\\
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

//-----< Express Routes >-----\\
const genreRouter = require('./routers/genre.router');
const movieRouter = require('./routers/movie.router');

app.use('/genre', genreRouter);
app.use('/movie', movieRouter);

//-----< Start Server >-----\\
app.listen(PORT, () => {
    console.log('Hey, listen!', PORT);
});