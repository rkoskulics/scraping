var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FunnySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

var Funny = mongoose.model("Funny", FunnySchema);

module.exports = Funny;