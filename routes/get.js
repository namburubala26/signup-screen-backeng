const express = require('express')

const router = express.Router()

const getController = require('../controllers/get')

router.get('/getData',getController.getData)

module.exports = router