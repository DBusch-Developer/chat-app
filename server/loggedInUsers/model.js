import mongoose from "mongoose";
import loggedInUserSchema from "./schema.js";

loggedInUserSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const loggedInUserModel = mongoose.model("LoggedInUser", loggedInUserSchema);

export default loggedInUserModel;
