const express = require('express')
const { getHomepage, getABC, getHml } = require('../controllers/homeControllers')
const router = express.Router()


//khai báo route
router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/hml', getHml)

module.exports = router