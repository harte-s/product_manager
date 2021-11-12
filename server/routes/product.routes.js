const ProductController = require("../controllers/product.controller");

module.exports = app =>{
    //get random
    app.get("/api/products/random", ProductController.readRandomProduct)
    // create
    app.post("/api/products", ProductController.createProduct)
    // get all
    app.get("/api/products", ProductController.readAllProducts)
    // get one
    app.get("/api/products/:_id", ProductController.readOneProduct)
    // update
    app.put("/api/products/update/:_id", ProductController.updateProduct)
    // delete
    app.delete("/api/products/delete/:_id", ProductController.deleteProduct)

}