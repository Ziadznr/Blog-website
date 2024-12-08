const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    image: { type: String, required: true },
    bio: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Team", teamSchema);