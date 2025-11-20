import express from "express";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT;

app.get("/hi" ,(req,res) => {
    try {
       res.status(200).json({msg : "yoo this is for practice of local hosting"}) 
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})

app.listen(PORT,()=>{
    console.log(`server running 🏃‍➡️ http://localhost:${PORT}/hi`);
})