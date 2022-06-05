import "dotenv/config";
import express from 'express';

const app = express();
const PORT =process.env.PORT || 8000;
app.use(express.json())//to convert into json
import cors from 'cors';
app.use(cors());
//db connection
import createConnection from "./src/config/dbConfig.js";
createConnection();

//LOAD MIIDLEWARES
import userRouter from './src/routers/userRouter.js';
import transactionRouter from "./src/routers/transactionRouter.js"

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transaction", transactionRouter);

//for fromt en
app.get('/',(req,res)=>
{
    res.send("we will snd react app here");
}
)
 app.listen(PORT, (error)=>
 {
     error && console.log("error");
     console.log(`Server is running  on port http://localhost:${PORT}`);

 }

 )