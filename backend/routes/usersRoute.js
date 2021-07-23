const express = require('express')
const router = express.Router()

const user = require('../controller/users') //appel controller
router.get('/usersList',user.getAll)   //user. nom fonction dan controller(getAll)

module.exports = router