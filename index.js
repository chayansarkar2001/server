import express from "express"

const app = express()

app.get('/',(req,res)=>{
    res.status(200)
    res.json({message:"welcome to render deploy"})
})
app.get('*',(req,res)=>{
    res.status(200).json({message:"Page can't find"})
})

app.listen(5000,()=>console.log("listning in 5000"))