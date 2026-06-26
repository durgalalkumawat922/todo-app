import express from "express";
import mongoConnect from "./lib/mongoConnect.js";
import Task from "./Models/task.js";
import taskRouter from "./routes/task.js";
import userRouter from "./routes/user.js";
import cors from "cors"


const app = express();

app.use(cors({
  origin: true
}))

app.use(express.json());

mongoConnect();

// creating route 
app.use("/api/task", taskRouter);
app.use("/api/user", userRouter);


// app.post("/api/auth", );


// running my server on the port
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});


