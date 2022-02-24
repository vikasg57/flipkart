const express=require("express")

const router=express.Router()

const Cart=require("../models/cart.model")

router.post("",async(req,res)=>{

    try{
        
    const cart= await Cart.create(req.body)

    res.send(cart)

    }
    catch(er){
        res.send(er.message)
    }


})

router.get("",async(req,res)=>{

    const cart =await Cart.find().lean().exec()

    return res.send(cart)
})

router.delete("",async(req,res)=>{

    const cart=await Cart.findByIdAndDelete()

    return res.send(cart)
})
module.exports=router

