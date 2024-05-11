require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const productRoutes = require('./routes/product.routes.js')

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to node!");
});

const baseURL = process.env.mongoServerURL;
mongoose.connect( baseURL)
    .then(() => {
        console.log("Connected to Mongoose server");
        app.listen(3000,()=> {
            console.log("Listening on 3000 port");
        });
    })
    .catch((e) => {
        console.log("Failed to connect to Mongoose server:",e);
    })