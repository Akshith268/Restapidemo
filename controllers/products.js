const req = require("express/lib/request");
const { get } = require("express/lib/response");

const Product = require("../models/products");



const getallproducts=async(req,res)=>{
    const{company,name,select}= req.query;
const queryobject={};

if(company){
    queryobject.company=company;
}

if(name){
    queryobject.name={$regex:name,$options:'i'};
}


sort=req.query.sort;
// select=req.query.select;

    let apidata=Product.find(queryobject);

if(sort)
    {
        let sortfix=sort.replace(","," ");
        apidata=apidata.sort(sortfix);
    
    }

if(select)
    {
        let selectFix=select.replace(","," ");
        apidata=apidata.select(selectFix);
        
    }


    let page=parseInt(req.query.page)||1;
    let limit=parseInt(req.query.limit)||3;
    
    const skip=(page-1)*limit;

    apidata=apidata.skip(skip).limit(limit);



    const data= await apidata;
    return res.status(200).json({data,nbhits:data.length});
}


const getAllProductsTesting=async(req,res)=>{
    const data=await Product.find({company:'apple'});
    return res.status(200).json({data});
}

module.exports={ getallproducts,getAllProductsTesting};

// mongodb+srv://akshith:1WRzwPw3fzuqPucv@cluster0.lb5yk0y.mongodb.net/taskmanager?retryWrites=true&w=majority