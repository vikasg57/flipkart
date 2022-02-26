const express=require("express")

const router =express.Router()

const mobile=require("../models/product.model").mobile


const allcontroller=require("./allcontroller")

router.get("",allcontroller(mobile).get)

module.exports=router