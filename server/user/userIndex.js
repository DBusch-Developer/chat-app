import { Router } from "express";
import passport from "passport";
import userCreate from "./userCreate.js";
import userAvatarUpload from "./userAvatarUpload.js";
import userGetMany from "./userGetMany.js";

const userRouter = Router();

userRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  userCreate
);
// userRouter.post("/", userCreate)

userRouter.put(
  "/avatar",
  passport.authenticate("jwt", { session: false }),
  userAvatarUpload
);

userRouter.get("/", userGetMany);



export default userRouter;
