const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = express.Router();
const db = require('../models/db');
//Allow this server to all origins
apiRouter.use(cors()); //Warning: Later Cors MUST be enabled ONLY to whitelist array!!!;

//body parser for Content-Type: application/x-www-form-urlencoded; the default Post Content-Type;
apiRouter.use(bodyParser.json());

apiRouter
.route('/products')
.get(async (req, res, next) => {
  let r = await db.Product.find({});
  //console.log(r);
  res.json(r);
})
.post((req, res, next) => {
 //only test whether works. this code must be in controllers folder and .post must have middleware before this;
 db.Product.create({
   price: req.body.price,
   quantity: 1,
   id: '4',
   name: 'Lenovo IdeaPad Flex 15(2019)',
   itemShortDescription: 'Best budget portable laptopN.2',
   itemFullDescription: 'Best budget portable laptop.Best budget portable laptop.Best budget portable laptop.Best budget portable laptop.Best budget portable laptop.'
  });
  res.json({"price": req.body.price});
});

module.exports = apiRouter;