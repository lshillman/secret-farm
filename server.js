const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const calculator = require('./utils/calculator');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: 'super secret secret',
    cookie: {
        maxAge: 1800000,
        sameSite : 'strict'},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess));
const helpHandlebars = exphbs.create({calculator}); 

app.engine('handlebars',helpHandlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () =>
    console.log(`\nServer running on ${PORT}`));
});