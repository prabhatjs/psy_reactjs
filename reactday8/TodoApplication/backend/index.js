const express=require("express");
const { createTodos, updateTodos } = require("./typesz");

const app=express();
/**
 * In Node.js, express.json() is middleware provided by the Express.js framework.
 *  It is used to parse incoming requests with JSON payloads.
 *  When a client sends a POST, PUT, or PATCH request with a JSON payload, express.json()
 *  parses the JSON body of the request and exposes it on req.body property,
 *  making it easy to work with JSON data within your Express.js routes.
 * 
 **/
app.use(express.json());

app.post("/api/todo",function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodos.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            mes:"You send Worng Input"
        })
        return;
    }
    //
})

app.get("/api/todo",function(req,res){
    
})

app.put("/api/todo",function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodos.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            mes:'You Send wrong input for update'
        })
    }
})

app.delete("/api/todo/:id",function(req,res){
    
})

const PORT=8080;
app.listen(PORT,()=>{
    console.log("Backend Start on ",PORT);
});