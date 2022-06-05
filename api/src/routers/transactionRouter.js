import express from "express";
import { createTransaction, deleteTransaction, findTransaction } from "../modules/Transaction/Transcation.model.js";
const router =express.Router();
router.get("/", async(req,res)=>
{
    try{
        
        
        
        //console.log(req.headers.authorization);
        console.log("roshan"+req.headers);
        
        
        const {authorization} =req.headers;
        console.log({authorization});
      

        
        const filter = {userId: authorization};
       console.log(filter);
        const result= await findTransaction(filter);
        res.json({
            status:"success",
            message:"successfully filterd",
            result
        })


    }
    catch(error)
    {
        res.json({
            status:"error",
            message:error.message,
        })
    }

})
router.post("/", async(req, res) => {
    try{
        console.log(req.body);
        const result =await createTransaction
        (req.body);
        result?._id ? res.json(
            {
                status:"success",
                message:"TRASNACTION HAS BEEN ADDED SUCESSFULLY"
            }
        ):
        res.json(
            {
                status:"error",
                message:"unable to create a new connection"
            }
        )


    }
    catch(error)
    {
        res.json({
          status: "invlaid",
          message: "not connected",
        });

    }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await createTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "TRASNACTION HAS BEEN ADDED SUCESSFULLY",
        })
      : res.json({
          status: "error",
          message: "unable to create a new connection",
        });
  } catch (error) {
    res.json({
      status: "invlaid",
      message: "not connected",
    });
  }
});


router.delete("/", async (req, res) => {
  try {
    const ids=req.body;
    const {authorization}=req.headers;
    const result = await deleteTransaction(ids,authorization);
    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: "TRASNACTION HAS BEEN deleted sucessfully",
        })
      : res.json({
          status: "error",
          message: "unable to delete a new connection",
        });
  } catch (error) {
    res.json({
      status: "invlaid",
      message: "not connected",
    });
  }
});
export default router;