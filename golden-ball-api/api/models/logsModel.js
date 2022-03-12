import mongoose from "mongoose";

const LogSchema = mongoose.Schema({
  logInfo: String,
  date: { type: Date, default: Date.now },
});
const model = mongoose.model("logs", LogSchema);

export default model;
