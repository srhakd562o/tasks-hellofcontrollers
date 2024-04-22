const path = require('path');
const express = require('express');
//const rootDir = require('express')
const router = express.Router();
exports.getContacts = ('/contactus', (req, res, next)=>{
    
    res.sendFile(path.join(__dirname,'..','views','contactus.html'));

});

exports.postContacts = ('/contactus', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success'); // this function is used to redirect to route
})



