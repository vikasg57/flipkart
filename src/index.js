const express = require("express")

const cors=require("cors");

const app=express()

const productcontroller=require("./controller/camera.controller")

const connect=require("./configs/db")


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use("/camera",productcontroller)

app.listen(8500,async()=>{

    await connect()
    console.log("listing on 8500")

})