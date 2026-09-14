const  mongoose = require("mongoose");

const STUDENTPRIOFILE = new mongoose.Schema({
    studentname : {
        type : String,
        required : [true , "Student is mandatory"]
    },
    studentid : {
        type : String,
        required : [true , "Student id is mandatory"]
    },

    bookname : {
        type : String,
        required : [true , "bookname is mandatory"]
    },
      authorname : {
        type : String,
        required : [true , "Author is mandatory"]
    },
    deadline : {
        type : String,
        required : [true , "Deadline"]
    }
})

module.exports = mongoose.model('student',STUDENTPRIOFILE)