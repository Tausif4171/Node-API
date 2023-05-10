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

// get all products from database

app.get('/products', async (req, res) => {
    try {
        const products = await productModel.find({}) // all products from database that's why we have given an empty object
        res.status(200).json(products)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// get a single product from database

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findById(id)
        res.status(200).json(product)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// create or save product in database
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

// update a product
app.put('/products/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const product = await productModel.findByIdAndUpdate(id,req.body)
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        else{
            const updatedProduct = await productModel.findById(id)
            res.status(200).json(updatedProduct)
        }
    } catch (error) {
        res.status(500).json({message:error.message})
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