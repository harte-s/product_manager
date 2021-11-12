const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;


require("./server/config/mongoose.config")

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( cors() );

const AllRoutes = require ("./server/routes/product.routes")
AllRoutes(app);


const server = app.listen(port, () =>
    console.log(`listening on port ${server.address().port}!`)
);
