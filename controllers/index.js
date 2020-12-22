const router = require('express').Router()

router.use('/api', require('./burgers_controller'))
router.use(require('./htmlController'))

module.exports = router