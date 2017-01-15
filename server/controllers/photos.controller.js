let photosController = {}
let request = require('request-promise')

photosController.GET_PHOTOS = (req, res) => {
    let num = req.params.num
    let url = 'https://jsonplaceholder.typicode.com/photos'

    if (num != 0) {
        url += '/' + num
    }

    request.get(url)
        .then(photos => {
            res.status(200).send(photos)
        })
}

module.exports = photosController