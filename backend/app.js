const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(morgan('dev'));
app.use('/rsc', express.static('rsc'));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// connect to mongodb database
try {
mongoose.connect('mongodb+srv://moln:' + process.env.MONGO_ATLAS_PW + 
    '@ese2019-fmpbx.mongodb.net/test?retryWrites=true&w=majority', { 
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useCreateIndex:true
    });
} catch (err) {
    console.log(err.message);
}

// prevent CORS errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

// routes
const userRoutes = require('./api/routes/user');
const devRoutes = require('./api/.dev/routes/dev');
const categoryRoutes = require('./api/routes/category');
const productRoutes = require('./api/routes/product');
const reviewRoutes = require('./api/routes/review');
const notificationRoutes = require('./api/routes/notifications');
const orderRoutes = require('./api/routes/order');

app.use('/user', userRoutes);
app.use('/dev', devRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/review', reviewRoutes);
app.use('/order', orderRoutes);
app.use('/notification', notificationRoutes);

// invalid request
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// return errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;