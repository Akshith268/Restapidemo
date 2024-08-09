const mongoose = require('mongoose');   


const ProductSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Please provide name'],
        maxlength:[100,'Name cannot exceed 100 characters']
    },
    price:{
        type:Number,
        required:[true,'Please provide price'],
        maxlength:[5,'Price cannot exceed 5 characters']
    },
    description:{
        type:String,
        required:[true,'Please provide description'],
        maxlength:[1000,'Description cannot exceed 1000 characters']
    },
    features:{
        type:[String],
        required:[true,'Please provide features'],
    },
    rating:{
        type:Number,
        default:0
    },
    company:{
        type:String,
        enum:{
            values:['apple','meta','google','netflix'],
            message:'Please select correct company for product'
        }
    },
});
    

module.exports = mongoose.model('Product',ProductSchema);