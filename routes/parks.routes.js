const router = require('express').Router()
const { ParksController } = require('../controllers')

router.get('/', ParksController.index)

module.exports = router
