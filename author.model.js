// importing mongoose using the require statement
const mongoose = require ('mongoose');

const AuthorSchema = new mongoose.Schema ({
    fullName: {
        type: String,
        required: [true, "Name must be provided."],
        minlength: [3, "Name must be at least 3 characters long."]
    }
}, {timestamps: true});


module.exports = mongoose.model("Author", AuthorSchema)
