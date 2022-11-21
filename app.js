const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const postRouter = require('./routes/postRoutes');
const viewRouter = require('./routes/viewRoutes');
const methodOverride = require('method-override');

const app = express();

//register view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.json());
app.use(morgan('dev'));

//to acces the css+img folder/files
app.use(express.static(`${__dirname}/public`));

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use((req, res, next) => {
    req.requestTime = new Date().toLocaleString();
    next();
});

//Route
app.use('/', viewRouter);
app.use('/api/v1/posts', postRouter);

//404
app.all('*', (req, res, next) => {
    next(res.status(404).render('404'));
});

module.exports = app;