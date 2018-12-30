const express=require('express');
const app=express();
app.get('/test',(req,res)=>{
    res.send("hello node");
});
app.listen(3000,()=>{
    console.log("listing to port 3000");
})