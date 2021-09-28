const express = require('express');
const mustache = require('mustache-express');
const dotenv = require('dotenv');
const path = require("path");
const mainRoute = require('./routes/route');

dotenv.config();
const app = express();

app.set('view engine', 'mustache');
app.set('views',path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));

app.use(mainRoute);

//Erro 404
app.use((req, res) =>{
    res.status(404).send('404 Not Found');
})
app.listen(process.env.PORT);