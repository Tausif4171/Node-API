const express = require('express')
const app = express()

const mongoose = require('mongoose')

app.use(express.json())

const productModel = require('./models/ProductModel')

// routes
app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hii')
})

app.post('/products', async (req, res) => {
    try {
        const product = await productModel.create(req.body)
        console.log(product, req.body)
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

mongoose.connect('mongodb+srv://Tausif4171:tausif123@crudinmern.odmk4g1.mongodb.net/CRUDINMERN?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to mongoDB')
        app.listen(7000, () => {
            console.log('Node API app is running on port 7000')
        })
    })
    .catch((error) => {
        console.log(error)
    })