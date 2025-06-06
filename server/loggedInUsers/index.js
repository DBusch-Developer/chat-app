import { Router } from "express"
import passport from "passport"
import create from "./create.js"
import userListRefresh from "./userListRefresh.js"

const loggedInUserRouter = Router()


// loggedInUserRouter.post("/", passport.authenticate("jwt", { session: false }),  create)

loggedInUserRouter.post("/", create)

loggedInUserRouter.get(
    "/refresh/:socketId",
    passport.authenticate("jwt", { session: false }),
    userListRefresh
  );

export default loggedInUserRouter

