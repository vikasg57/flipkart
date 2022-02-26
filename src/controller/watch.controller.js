const express=require("express")

const router =express.Router()

const watch=require("../models/product.model").watch


const allcontroller=require("./allcontroller")

router.get("",allcontroller(watch).get)

module.exports=router