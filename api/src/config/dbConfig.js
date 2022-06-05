import mongoose from "mongoose";
 const createConnection =()=>{
 try
 {
     const con= mongoose.connect(process.env.MONGO_URL);
     con && console.log("connected to monmgodb");
 }
 catch(error)
 {
     comsole.log("error in connection to mongodb");
    
 }
}
export default createConnection;