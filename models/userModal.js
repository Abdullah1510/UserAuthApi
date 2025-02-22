import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true});

// this is named export we have to import by using {User}.This is very important qustion according to named export and default export
export const User = mongoose.model("User", userSchema);