const express=require("express")


const router =express.Router()

const Freeze=require("../models/product.model").freeze


const allcontroller=require("./allcontroller")

router.get("/brand",allcontroller(Freeze).brand)

router.get("",allcontroller(Freeze).get)

router.get("/sort",allcontroller(Freeze).sort)



module.exports=router