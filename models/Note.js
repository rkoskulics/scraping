var mongoose = require("mongoose");

// Save a reference to Schema constructor
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    title: String,
    body: String
});

var Note = mongoose.model("Note", NoteSchema);

module.exports =  Note;