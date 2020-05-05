const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var routes = require('./router');
routes(app);

//menu routes index.js
app.use(require('./middleware'));

app.listen(3000, () => {
    console.log(`Server dimulai`);
    console.log(`Server sedang berjalan`);
});