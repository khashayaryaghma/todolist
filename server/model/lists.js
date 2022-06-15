const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "must provide course title"],
        maxlength: [20, "course must not be more than 20 characters"],
    },
});

module.exports = mongoose.model("List", listSchema);