const express=require("express")


const router =express.Router()

const Freeze=require("../models/freeze.model")

const allcontroller=require("./allcontroller")

router.get("/brand",allcontroller(Freeze).brand)

router.get("",allcontroller(Freeze).get)

router.get("/sort",allcontroller(Freeze).sort)



module.exports=router