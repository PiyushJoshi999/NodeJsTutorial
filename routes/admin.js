const express = require('express');
//const path = require('path');
//const rootDir = require('../helpers/path');

const router = express.Router();

const productsController = require('../controllers/products');


// router.get("/add-product", (req, res, next) => {

//     //console.log('In /add-product middleware');
//     //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
//     res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

// });

//We can use the same url for different methods like get, post, 

// router.post("/add-product", (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);

module.exports = router;