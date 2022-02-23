const mongoose=require("mongoose")

const cameraschema=new mongoose.Schema({

        name:{type:String,required:true},
        type: {type:String,required:true},
        price: {type:Number,required:true},
        upc: {type:String,required:true},
        shipping: {type:String,required:true},
        description: {type:String,required:true},
        manufacturer: {type:String,required:true},
        model: {type:String,required:true},
        url:{type:String,required:true},
        image: {type:String,required:true},

},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("camera",cameraschema)