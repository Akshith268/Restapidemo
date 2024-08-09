require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const connectDB = require('./db/connect');

const product_routes = require('./routes/products');

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.use('/api/products', product_routes);

app.listen(port, async() => {
    await connectDB(process.env.MONGO_URI);
    console.log(`Server is running on port ${port}`);
    });

    