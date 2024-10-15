import mangoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide your name."],
        minLength:[3,"Name must at least contain 3 chracters!"],
        maxLength:[30,"Name cannot exceed 30 chracters!"],
    },
    email:{
        type:String,
        required:[true,"Please Provide your Email."],
        validate:[validator.isEmail,"Please Provide a valid Email."],
    },
    phone:{
        type:Number,
        required:[true,"Please Provide your Phonenumber."],
    },
    password:{
        type:String,
        required:[true,"Please Provide your Password."],
        minLength:[8,"Password must contain at least 8 chracters!"],
        maxLength:[32,"Password cannot exceed 32 chracters!"],
        // select:false
    },
    role:{  
        type:String,
        required:[true,"Please Provide your role."],
        enum:["Job Seeker","Employer"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

// Hashing the Password

// userSchema.pre("save",async function(next){
//     if(!this.isModified("password")){
//         next()
//     }
    // this.password= await bcrypt.hash(this.password,10);
// });
// Comparing Password
// userSchema.methods.comparePassword = async function(enteredPassword) {
//     const isMatch = enteredPassword === User.password;;
//     return isMatch;
//   }


// Generating A JWT token for authorization 
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE,
    });
}

export const User = mongoose.model("User",userSchema)