import mongoose from "mongoose";

const PlayerSchema = mongoose.Schema(
  {
    name: String,
    lastName: String,
    birthday: Date,
    position: String,
    goals: Number,
    price: Number,
    Photo: String,
  }
  // {typeKey: "$type"}
);
const model = mongoose.model("player", PlayerSchema);

export default model;
