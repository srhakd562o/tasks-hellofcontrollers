const path = require('path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    const { title, quantity } = req.body;
    console.log('New Product Added:');
    console.log('Title:', title);
    console.log('Quantity:', quantity);
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
};
