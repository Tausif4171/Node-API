const express = require('express')
const app = express()

const mongoose = require('mongoose')

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

mongoose.connect('mongodb+srv://Tausif4171:tausif123@crudinmern.odmk4g1.mongodb.net/CRUDINMERN?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to mongoDB')
})
.catch((error)=>{
    console.log(error)
})