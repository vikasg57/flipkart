
const brand=(Model)=>async(req,res)=>{

    try{
        console.log(req.query.brand)

        const product=await Model.find({manufacturer:req.query.brand}).sort({price:-1}).limit(15).lean().exec()
        

        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
}

const get=(Model)=>async(req,res)=>{

    try{

        const product=await Model.find().limit(15).lean().exec()
        
        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
}

const sort=(Model)=>async(req,res)=>{

    try{

        if(req.query.value==-1){

                const product=await Model.find().sort({price:req.query.value}).limit(15).lean().exec()

                   res.send(product)

        }

        const product=await Model.find().sort({price:req.query.value}).skip(15).limit(15).lean().exec()
        

        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
}

module.exports=(Model)=>{
    return{
        brand:brand(Model),
        get:get(Model),
        sort:sort(Model)
    }
}



