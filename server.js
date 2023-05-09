const express = require('express')
const app = express()

const mongoose = require('mongoose')

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hii')
})

app.post('/product',(req, res)=>{
    console.log(req.body)
    res.send(req.body)
})

mongoose.connect('mongodb+srv://Tausif4171:tausif123@crudinmern.odmk4g1.mongodb.net/CRUDINMERN?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to mongoDB')
    app.listen(7000, () => {
        console.log('Node API app is running on port 7000')
    })
})
.catch((error)=>{
    console.log(error)
})