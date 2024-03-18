const express=require("express");
const { createTodos, updateTodos } = require("./typesz");
const todo=require('./TodoSchema');
const cors=require('cors')
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
app.use(cors({}));
app.post("/api/todo", async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodos.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            mes:"You send Worng Input"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false,
    })
    res.json({
        mesg:"Todo Created"
    })
})

app.get("/api/todo", async function(req,res){
    const todos=await todo.find({});
    res.json({
        todos
    })
    
})

app.put("/api/todo/completed", async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodos.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            mes:'You Send wrong input for update'
        })
    }
    await todo.update({
        _id:req.body.id
    },
        {
            completed:true
        })
    res.json({
            mesg:"todo marked as completed"
    })
})

app.delete("/api/todo/:id",function(req,res){
    
})

module.exports=app