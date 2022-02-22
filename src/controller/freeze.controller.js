const express=require("express")


const router =express.Router()

const Freeze=require("../models/freeze.model")

router.get("/brand",async(req,res)=>{

    try{
        console.log(req.query.brand)

        const product=await Freeze.find({manufacturer:req.query.brand}).sort({price:-1}).limit(15).lean().exec()
        

        res.send(product)
        

    }   
    catch(er){
        console.log(er.message)
    }
})

router.get("",async(req,res)=>{

    try{

        const product=await Freeze.find().limit(15).lean().exec()
        

        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
})

router.get("/sort",async(req,res)=>{

    try{

        if(req.query.value==-1){

                const product=await Freeze.find().sort({price:req.query.value}).limit(15).lean().exec()

                   res.send(product)

        }

        const product=await Freeze.find().sort({price:req.query.value}).skip(15).limit(15).lean().exec()
        

        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
})


module.exports=router