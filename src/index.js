const express = require('express');
const app = express();
const mustache = require('mustache-express');
const dotenv = require('dotenv');
const path = require("path");
const mainRoute = require('./routes/route');

dotenv.config();

app.set('view engine', 'mustache');
app.set('views', __dirname+'views');
app.engine('mustache', mustache());

app.use(express.static(__dirname+'../public'));

app.get('/', mainRoute);

//Erro 404
app.use((req, res) =>{
    res.status(404).send('404 Not Found');
})
app.listen(process.env.PORT);