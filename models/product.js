const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    stock:{
        type:Number,
        require:true,
    },
    category:{
        type:String,
    },
})
module.exports = ProductSchema(Product,ProductSchema);
