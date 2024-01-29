const express = require('express');
//const path = require('path');

const router = express.Router();

const productsController = require('../controllers/products');

// router.use("/", (req, res, next) => {
//     console.log('In / middleware');
//     res.send('<h1>Hello from Express!!</h1>');
// });

// router.use("/", (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
// });

router.use('/', productsController.getProducts);

module.exports = router;