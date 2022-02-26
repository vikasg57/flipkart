const express=require("express")

const router =express.Router()

const tv=require("../models/product.model").tv


const allcontroller=require("./allcontroller")

router.get("",allcontroller(tv).get)

module.exports=router