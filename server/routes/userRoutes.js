import express from "express";
export const userRouter = express.Router();
import { userSignIn, userSignUp } from "../controller/login.js";
import { userDetail } from "../controller/userDetail.js";
import { createClient } from "../controller/createClient.js";
import { getAllClient } from "../controller/getAllClient.js";
import { deleteClient } from "../controller/deleteClient.js";
import { getClientById } from "../controller/getClientById.js";
import { updateClient } from "../controller/updateClient.js";

userRouter.get("/", (req, res) => {
  res.send("Hello Express");
});

//createClient
userRouter.post("/createClient", createClient);

//createClient
userRouter.put("/updateClient", updateClient);

//getClient
userRouter.get("/getAllClient", getAllClient);

//getClientById
userRouter.get("/getClientById/:id", getClientById);

//deleteClient
userRouter.delete("/deleteClient/:id", deleteClient);

//userSignIn
userRouter.post("/signin", userSignIn);

//userSignUp
userRouter.post("/signup", userSignUp);

//userDetail
userRouter.get("/userDetail", userDetail);
