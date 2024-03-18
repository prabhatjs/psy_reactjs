const mongoose=require("mongoose");
const { boolean } = require("zod");
const todoschema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'A todo Must HAve a title'],
        unique:true
    },
    description:{
        type:String,
        required:[true,'A Todo must have a Description']
    },
    completed:{
        type:Boolean,
    }
})

const todo=mongoose.model('todo',todoschema);
module.exports=todo;