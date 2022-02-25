const express=require("express")

const router =express.Router()

const Laptop=require("../models/product.model").laptop

const allcontroller=require("./allcontroller")

router.get("/brand",allcontroller(Laptop).brand)

router.get("",allcontroller(Laptop).get)

router.get("/sort",allcontroller(Laptop).sort)

module.exports=router