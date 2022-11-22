const express= require('express')

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("This is My Route to Home Page");
})

module.exports=router;