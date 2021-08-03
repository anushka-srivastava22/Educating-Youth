var mongoose= require("mongoose");

var newBook = new mongoose.Schema({
	name : String,
	desc : String,
	author : String,
	price : String,
	cover : String,
	bookId : String,
	buyLink: String,
	sectionName: String,
	comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports= mongoose.model("Book", newBook);