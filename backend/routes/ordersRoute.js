const express = require('express')
const router = express.Router()

const order = require('../controller/orders') //appel controller
router.get('/ordersList',order.getAll)   //product. nom fonction dan controller(getAll)

module.exports = router