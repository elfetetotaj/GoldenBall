import mongoose from "mongoose";

const JobSchema = mongoose.Schema({
  name: String,
  description: String,
  date: { type: Date, default: Date.now },
});
const model = mongoose.model("job", JobSchema);

export default model;
