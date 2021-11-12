const product = require("../models/product.model");


// C
module.exports.createProduct = (req, res) =>{
    product.create(req.body)
        .then(newProduct => {
            res.json({results: newProduct})
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during create", err : err})
        })
}

// R
module.exports.readOneProduct = (req, res) =>{
    product.find({_id : req.params._id})
        .then(oneProduct => {
            res.json({results: oneProduct})
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during readOne", err : err})
        })
}

// R All
module.exports.readAllProducts = (req, res) =>{
    product.find()
        .then(allProducts => {
            res.json({results: allProducts})
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during readAll", err : err})
        })
}

// R random
module.exports.readRandomProduct = (req, res) =>{
    product.find()
        .then(allProducts => {
            let randomID = (Math.floor(Math.random()*allProducts.length))
            res.json({results: allProducts[randomID]})
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during readRandom", err : err})
        })
}


// U
module.exports.updateProduct = (req, res) =>{
    product.findOneAndUpdate({_id : req.params._id}, req.body)
        .then(updatedProduct => {
            res.json({results: updatedProduct})
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during updateOne", err : err})
        })
}


// D
module.exports.deleteProduct = (req, res) =>{
    product.deleteOne({_id : req.params._id})
        .then(deletedProduct => {
            res.json({results: deletedProduct})
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during deleteOne", err : err})
        })
}

