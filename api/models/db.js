const mongoose = require('mongoose');
const dbUrl = process.env.dbUrl;
mongoose.set('debug', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = Promise;
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports.Product = require('./product');