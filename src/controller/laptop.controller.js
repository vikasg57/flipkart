const express=require("express")

const router =express.Router()

const Laptop=require("../models/laptop.model")

const allcontroller=require("./allcontroller")

router.get("/brand",allcontroller(Laptop).brand)


router.get("",async(req,res)=>{

    try{

        const product=await Laptop.find().limit(15).lean().exec()
        

        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
})

router.get("/sort",async(req,res)=>{

    try{

        if(req.query.value==-1){

                const product=await Laptop.find().sort({price:req.query.value}).limit(15).lean().exec()

                   res.send(product)

        }

        const product=await Laptop.find().sort({price:req.query.value}).skip(15).limit(15).lean().exec()
        

        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
})




module.exports=router