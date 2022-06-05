import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: [50, "Name must be less than 50 characters"],
    },
    email: {
      type: String,
      unique:true,
      index:1,
      required: true,
      maxlength: [50, "Name must be less than 50 characters"],
    },
    password: {
      type: String,
      required: true,
      minlength: [5, "password  must be more than 5 characters"],
      maxlength: [50, "Name must be less than 50 characters"],
    },
  },
  {
    timestamps: true,
  }
);
 export default mongoose.model('User',UserSchema);//users