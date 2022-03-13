import mongoose from "mongoose";

const PlayerSchema = mongoose.Schema(
  {
    name: String,
    lastName: String,
    position: String,
    goals: Number,
    price: String,
    team: String,
    Photo: String,
  },
);
const model = mongoose.model("player", PlayerSchema);

export default model;
