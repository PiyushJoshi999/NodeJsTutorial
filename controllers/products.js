const path = require('path');

const rootDir = require('../helpers/path');

exports.getAddProduct = (req, res, next) => {

    //console.log('In /add-product middleware');
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
};

exports.getProducts =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};

