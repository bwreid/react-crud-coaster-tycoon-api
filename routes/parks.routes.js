const router = require('express').Router()
const { ParksController } = require('../controllers')

router.get('/', ParksController.index)
router.get('/:id', ParksController.show)
router.post('/', ParksController.create)
router.put('/:id', ParksController.update)
router.delete('/:id', ParksController.destroy)

module.exports = router
