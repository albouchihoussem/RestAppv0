const express = require('express')
const router = express.Router()

const product = require('../controller/products') //appel controller
router.get('/productsList',product.getAll)   //product. nom fonction dan controller(getAll)

module.exports = router