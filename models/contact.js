var mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
	firstName : String,
	lastName: String,
	email: String,
	mobile : Number,
	message : String
});

module.exports = mongoose.model("Contact",contactSchema);