const mongoose = require ("mongoose");

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "title required"],
        minlength: [2, "must be at least 2 characters"]
    },
    price : {
        type : Number,
        required : [true, "price required"]
    },
    description : {
        type : String,
        required : [true, "description required"],
        minlength: [10, "must be at least 10 characters"]
    }
}, {timestamps : true} )


const product = mongoose.model("product", ProductSchema);


module.exports = product;