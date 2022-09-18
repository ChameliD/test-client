const mongoose=require("mongoose")

const slides=mongoose.model("slidesList",new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    subTitle:{
        type:String,
        required:true
    },
    
}))

module.exports = slides;