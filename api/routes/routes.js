const express = require('express');
const apiRouter = express.Router();

apiRouter
.route('/products')
.get((req, res, next) => res.send('Lenovo Flex 15 costs only 500$'));

module.exports = apiRouter;