import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  refreshToken: {
    type: String,
    default: "",
  },
});

const userSchema = new Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  authStrategy: {
    type: String,
    default: "local",
  },
  token: {
    type: [sessionSchema],
  },
  lastLogin: {
    type: String,
    default: "",
  },
});

export default userSchema;
