let photosRouter = require('express').Router()
let photosController = require('../controllers/photos.controller')

photosRouter.route('/:num')
    .get(photosController.GET_PHOTOS)

module.exports = photosRouter