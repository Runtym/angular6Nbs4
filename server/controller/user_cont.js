var express = require('express');
var router = express.Router();
var us = require('../service/user_serv');

router.get('/', selectUser);
module.exports = router;

function selectUser(req,res,next){
   us.getUser()
   .then((result)=>{
       console.log(result);
       res.json(result);
   }).catch(result=>{
       console.log(result);
       res.json(result);
   });
}