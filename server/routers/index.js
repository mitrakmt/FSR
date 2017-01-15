let rootRouter = require('express').Router()
let photosRouter = require('./photos.router')

rootRouter.use('/photos', photosRouter)

module.exports = rootRouter