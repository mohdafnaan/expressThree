import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/home",(req,res)=>{
    try {
        let a = 10;
        console.log(a);
        
        res.status(200).json({msg : `this is loacal host,${a}`})


    } catch (error) {
        console.log(error.name);
        res.status(500).json({msg : error.name})
    }
})

app.listen(PORT,()=>{
    console.log(`server started http://localhost:${PORT}/home`);
})