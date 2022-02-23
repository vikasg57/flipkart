const express = require("express")

const cors=require("cors");

const app=express()

const productcontroller=require("./controller/camera.controller")

const laptopcontroller=require("./controller/laptop.controller")

const freezecontroller=require("./controller/freeze.controller")

const mobilecontroller=require("./controller/mobile.controller")

const watchcontroller=require("./controller/watch.controller")

const tvcontroller=require("./controller/tv.controller")





const connect=require("./configs/db")


// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions))

app.use(express.json())

app.use("/camera",productcontroller)

app.use("/laptop",laptopcontroller)

app.use("/freeze",freezecontroller)

app.use("/mobile",mobilecontroller)

app.use("/tv",tvcontroller)

app.use("/watch",watchcontroller)


app.listen(8500,async()=>{

    await connect()
    console.log("listing on 8500")

})