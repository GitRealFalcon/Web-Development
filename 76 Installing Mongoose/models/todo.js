import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    Title: String,
    Desc : String,
    isDone:Boolean,
    Days:Number
});

export const Todo = mongoose.model('Todo', TodoSchema);