const express = require('express');
const port = 8000;

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'))




app.get('/',(req,res)=>{
    return res.render('list');
})



app.listen(port,(err)=>{
    if(err){
        console.log("Yup1 Error Occured")
    }
    console.log("Server Running at Port: ",port);
})