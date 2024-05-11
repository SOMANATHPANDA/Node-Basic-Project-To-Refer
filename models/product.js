const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: [true, "Enter product name"],
    },
    quantity: {
        type: 'number',
        required: [true, "Enter product quantity"],
        default: 0,
    },

    image: {
        type: 'string',
        required: false,
    },
},
    { timestamps: true, }
)

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;