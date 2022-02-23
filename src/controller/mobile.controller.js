const express=require("express")

const router =express.Router()

const mobile=require("../models/mobile.model")


const allcontroller=require("./allcontroller")

router.get("",allcontroller(mobile).get)

module.exports=router