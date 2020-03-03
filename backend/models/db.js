const mongoose = require("mongoose");
require('./emp.model');
mongoose.connect('mongodb://localhost:27017/joshua',{useNewUrlParser: true}, (err)=>{
    if(!err){
        console.log("Connected to mongoose");
    }
    else{
        console.log("Error with connection"+err);
    }
});

