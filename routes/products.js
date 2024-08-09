const express = require('express');
const router = express.Router();

const { getallproducts, getAllProductsTesting } = require('../controllers/products');

router.route('/').get(getallproducts);

router.route('/testing').get(getAllProductsTesting);


module.exports = router;  
