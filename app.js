'use strict mode'
const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.urlencoded());





app.get('/',(req,res)=>{
    return res.render('list');
})

app.post('/',(req,res)=>{
    var i = req.body.n;
    console.log(i)
    return res.redirect('back');
})






app.listen(port,(err)=>{
    if(err){
        console.log("Yup1 Error Occured")
    }
    console.log("Server Running at Port: ",port);
})