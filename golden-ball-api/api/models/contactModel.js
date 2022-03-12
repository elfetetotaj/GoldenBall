import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});
const model = mongoose.model("contact", ContactSchema);

export default model;
