const router = require('express').Router()
const { RidesController } = require('../controllers')

router.get('/', RidesController.index)
router.get('/:id', RidesController.show)
router.post('/', RidesController.create)
router.put('/:id', RidesController.update)
router.delete('/:id', RidesController.destroy)

module.exports = router
