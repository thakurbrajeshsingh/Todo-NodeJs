'use strict mode'
const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'))
var i='';
app.use(express.urlencoded());





app.get('/',(req,res)=>{
    return res.render('list',{newListItem:i});
})

app.post('/',(req,res)=>{
    i = req.body.n;
    // res.render("list",{newListItem:i});
    return res.redirect('back');
})






app.listen(port,(err)=>{
    if(err){
        console.log("Yup1 Error Occured")
    }
    console.log("Server Running at Port: ",port);
})