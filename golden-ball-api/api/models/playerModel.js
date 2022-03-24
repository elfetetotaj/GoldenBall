import mongoose from "mongoose";

const PlayerSchema = mongoose.Schema(
  {
    name: String,
    lastName: String,
    position: String,
    goals: Number,
    price: String,
    team: String,
    files: String,
    Photo: String,
  },
  { typeKey: "$type" }
);
const model = mongoose.model("player", PlayerSchema);

export default model;
