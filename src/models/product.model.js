const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({

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

module.exports={
    camera: mongoose.model("camera",productSchema),
    freeze:mongoose.model("freeze",productSchema),
    laptop:mongoose.model("laptop",productSchema),
    tv:mongoose.model("tv",productSchema),
    watch:mongoose.model("watch",productSchema),
    mobile:mongoose.model("mobile",productSchema),
    cart:mongoose.model("cart",productSchema)
}