const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('this is home')
})

app.use('/home/:id',(req,res,next)=>{
    const {id} = req.params.id;

    if(typeof id ==="number" ){
         return res.status(200).send("this is a number")
    }

    return res.status(403).send('this is not a number')
    
})

app.listen(3000,()=>{
    console.log(`server is running on http://localhost:3000`)
})