const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const users = [];

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, resp) => {
  resp.render('home', {
    name: 'World'
  });
});

app.post('/users', function (req, resp) {
  const user = req.body;
  users.push({
    name: user.name,
    age: user.age
  });
  resp.send('successfully registered');
});

app.listen(3000);
