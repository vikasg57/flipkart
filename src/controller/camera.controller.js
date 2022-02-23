const express=require("express")

const Product=require("../models/camera.model")

const router=express.Router()

const allcontroller=require("./allcontroller")

router.get("/brand",allcontroller(Product).brand)

router.get("",allcontroller(Product).get)

router.get("/sort",allcontroller(Product).sort)


module.exports=router