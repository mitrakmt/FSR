let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let path = require('path')
let rootRouter = require('./routers')
let port = 8000

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client')))

app.use('/api', rootRouter)

app.listen(port, function () {
    console.log("Server started")
})