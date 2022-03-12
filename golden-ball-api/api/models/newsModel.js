import mongoose from "mongoose";

const NewSchema = mongoose.Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
});
const model = mongoose.model("new", NewSchema);

export default model;
