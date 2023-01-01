import express from "express"

const app = express()

app.get('/',(req,res)=>{
    res.send("welcome to render deploy")
})

app.listen(5000,()=>console.log("listning in 5000"))