const express = require('express');
const handlebars = require('express-handlebars');
const path = require('node:path')

const frontend = __dirname + "../frontend";
const port = 5000
path.resolve(__dirname)

const app = express();
const router = require("./router.js")
app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'main',
    })
);
app.set('views', `views`);
app.set('view engine', '.hbs');

app.use(router)

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
