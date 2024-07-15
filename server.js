//server instatnation
const express =require('express');
const app=express();
//activtr srver on 3000

//used to parse  in express
const bodyparse=require('body-parser');
//specifically parse json data & add it to the request body
app.use(bodyparse.json());
app.listen(8000,()=>{
    console.log("sercer started 8000")
});
//routes
app.get('/',(req,res)=>{
    res.send("hello,jee kaise ho saare");
})

app.post('/api/cars',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car submit");
})

const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    
    
})
.then(()=>{console.log("connection success")})
.catch((error)=>{console.log("Recieved an error")});