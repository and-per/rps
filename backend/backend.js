const express = require('express');
const handlebars = require('express-handlebars');
const frontend = __dirname + '/../frontend';

const app = express();

app.engine(
    'handlebars',
    handlebars.engine({
        defaultLayout: 'main',
        
    })
);
app.set('views', `${frontend}/views`);
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Greetings form Handlebars',
    });
});

app.use('/', express.static(`${__dirname}/../frontend)`);

app.listen(5000, function () {
    console.log('Server started!');
});