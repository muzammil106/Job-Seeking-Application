import mongoose from "mongoose";


const testschema = new mongoose.Schema({
    id: {
      type: Number,
      
    },
    userId: {
        type: Number,
        
      },
      title: {
        type: String,
        
      },
      body: {
        type: String,
        
      },
    
  });

export const Test = mongoose.model("Test",testschema);