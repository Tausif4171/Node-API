const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a product name']
    },
    quantity: {
        type: Number,
        required: true,
        default: 2
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
},
    {
        timestamps: true
    }
)

const productModel= mongoose.model('Product', productSchema) // created model with parameters(model name and schema)

module.exports = productModel