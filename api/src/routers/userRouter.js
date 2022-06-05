import express from "express";
import {createUser, findUser} from '../modules/user/User.model.js';
const router = express.Router();
//user registration
router.post("/",async(req,res)=>
{
    //console.log(req.body);
    //send data to db query
    try{
    const result = await createUser(req.body);
    console.log(result);
    res.json(
        {
            status: "success",
            message: "user created sucessfully"

        }
    )
    }
    catch(error)
    {
        let message=error.message
        if (message.includes("E11000 duplicate key")) {
          message = "this email is arleady registered";
        }
         res.json({
            status: "error",
            message

        }
         )
    }
}
)
//useer login
router.post("/login",async (req,res)=>
{
    try{
        const {email, password}=req.body;
        const user = await findUser({email,password});
        if(user?._id)
        {
            user.password=undefined;
            return res.json(
                {
                    status:"success",
                    message:"user logged in scueesfully",
                    user
                }
            )
        }
        return res.json({
          status: "error",
          message: "invalid creditential",
         
        });

    }
    catch(error)
    {
        res.json(
            {
                status:"errror",
                message:error.message
            }
        )
    }
})

export default router;
