const { request, response } = require('express');
const express = require('express');
const jwt=require('jsonwebtoken');
const slideController=require('../controller/slideController')

const router=express.Router();
const SLIDE=`/carousel`

router.post(`${SLIDE}`,async function(req,res){
   
    slideController.create(req,res)
})

//API for get all
router.get(`${SLIDE}/all`,(req,res)=>{
    slideController.get(req,res)
})

//API for get one
router.get(`${SLIDE}/:id`,(req,res)=>{
    slideController.getById(req,res)
    
})

module.exports = router