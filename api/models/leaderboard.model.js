import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    referrel: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const Leaderboard = mongoose.model('Leaderboard', boardSchema)

export default Leaderboard