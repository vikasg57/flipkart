const express=require("express")

const Product=require("../models/camera.model")

const router=express.Router()

const allcontroller=require("./allcontroller")

router.get("/brand",allcontroller(Product).brand)

router.get("",async(req,res)=>{

    try{

        const product=await Product.find().limit(15).lean().exec()
        

        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
})

router.get("/sort",async(req,res)=>{

    try{

        if(req.query.value==-1){

                const product=await Product.find().sort({price:req.query.value}).limit(15).lean().exec()

                   res.send(product)

        }

        const product=await Product.find().sort({price:req.query.value}).skip(15).limit(15).lean().exec()
        

        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
})




module.exports=router