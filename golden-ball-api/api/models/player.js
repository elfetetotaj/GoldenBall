import mongoose from "mongoose";

const PlayerSchema = mongoose.PlayerSchema({
    name:String,
    lastName:String,
    birthday: Date,
    photo: String,
    position: String,
    goals: Number,
    price: Number,
    update_date: {type: Date, default: Date.now},

});
module.exports = mongoose.model('player', PlayerSchema);