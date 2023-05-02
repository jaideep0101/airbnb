import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
       type:String,
       required:true,
       unique:true
    },
    name:String,
    password:String
})

const user = mongoose.model("user",userSchema);
export default user;