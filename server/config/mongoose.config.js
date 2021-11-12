const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost/2021_11_12_product_manager", {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(()=>{
        console.log("Found db")
    })
    .catch((err)=>{
        console.log("Lost: ", err)
    })