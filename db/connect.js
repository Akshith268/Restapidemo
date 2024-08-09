// db/connect.js
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        // console.log(`Connecting to MongoDB with URI: ${uri}`);
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
