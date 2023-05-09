const express = require('express')
const app = express()

// routes

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hii')
})

app.listen(7000, () => {
    console.log('Node API app is running on port 7000')
})