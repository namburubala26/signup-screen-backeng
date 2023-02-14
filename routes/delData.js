const express = require('express')

const router = express.Router()

const getController = require('../controllers/delData')

router.delete('/delData/:id',getController.delData)

module.exports = router