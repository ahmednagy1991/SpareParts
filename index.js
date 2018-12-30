const express=require('express');
const app=express();


const prt=process.env.PORT||3000;

app.get('/test',(req,res)=>{
    res.send("woring on port : "+prt);
});

app.get('/api/getPart/:model/:year/:partType',(req,res)=>{
    res.send(req.params);
    //res.send(req.query);
});

app.get('/api/GetParts',(req,res)=>{
    res.send([1,2,3]);
});
app.listen(3000,()=>{
    console.log(`listing to port ${prt}`);
})