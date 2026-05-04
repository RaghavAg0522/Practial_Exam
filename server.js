const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config();
require('./config/db');



const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/products", require("./routes/product"));
app.use("/api/orders", require("./routes/order"));


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('server connected successfully');
})



