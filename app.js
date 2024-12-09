const express = require('express')
const app = express()
const port = 3000

const secrete = require('./secretKey.json')

app.get('/', (req, res) => {
    res.send(`The secret key is ${secrete.SECRET_KEY}`)
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})