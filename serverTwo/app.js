import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/home", (req,res) => {
    try {

        res.status(200).json({msg : "hi everyone this is for the practice of express"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error.message})
    }
})

app.listen(PORT,()=>{
    console.log(`server shuru hogya dosto ${PORT}`);
})

