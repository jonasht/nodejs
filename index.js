const express = require("express")
const app = express()
const port = 500


app.get('/',(req,res)=>{
    res.send("pagina inicial")
})

app.listen(port,()=>{
    console.log("servidor redando")

})

