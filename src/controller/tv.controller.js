const express=require("express")

const router =express.Router()

const tv=require("../models/tv.model")


const allcontroller=require("./allcontroller")

router.get("",allcontroller(tv).get)

module.exports=router