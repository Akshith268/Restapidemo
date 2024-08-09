require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const model = require('./models/products');
const connectDB = require('./db/connect');

const productjson=require('./product.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await model.create(productjson);
        console.log('Data imported successfully');
    } catch (error) {
        console.log(error);
    }
}

start();
