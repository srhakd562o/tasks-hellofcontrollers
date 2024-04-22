const path = require('path');
const express = require('express');
//const rootDir = require('express')
const productsController = require('../controller/successs');
const router = express.Router();
router.get('/success',productsController.getSucess);


module.exports = router;

