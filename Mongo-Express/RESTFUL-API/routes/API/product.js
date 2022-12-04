const express = require('express');
let mongoose = require("mongoose")
let router =express.Router();
let model = require("../../models/productModel")
let validate = require("../../middleware/product")

//get request from mongo
router.get("/", async (req,res)=>
{
    let models = await model.find();
    return res.send(models);
})


//get single data
router.get("/:id",async(req,res)=>
{
    try{
        let model = await model.findById(req.params.id)
        return res.send(model);
    }
    catch(err){
        return res.status(400).send("invalid ID")
    }

})

//post a record
router.post("/", validate,async (req,res)=>
{
 
    let model = new model();
    model.name= req.body.name;
    model.price= req.body.price;
    await model.save();
    return res.send(model);
})

//updation
router.put("/:id",validate, async(req,res)=>
{
    let model = await model.findById(req.params.id);
    model.name=req.body.name;
    model.price=req.body.price;

    model.save();
    return res.send(model)
})

//deletion
router.delete("/:id", async(req,res)=>
{
    let model = await model.findByIdAndDelete(req.params.id)
    res.send(model);
})
module.exports=router;
