import mongoose from "mongoose";
const TranscationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      maxlength: [10, "Name must be less than 10 characters"],
    },
    title: {
      type: String,
    
      required: true,
      maxlength: [50, "Name must be less than 50 characters"],
    },
    amount: {
      type: Number,
      required: true,
      
    },
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,

    }
  },
  {
    timestamps: true,
  }
);
//we have just created a new schema called TransctionSchema
export default mongoose.model("Transaction", TranscationSchema); //transcations
