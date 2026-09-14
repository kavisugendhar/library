const mongoose  = require("mongoose");

const STAFFPROFILE = new mongoose.Schema ({
    staffname : {
        type : [String],
        required : [true, "Staff name is required"]
    },

    staffid : {
        type : [String],
        required : [true, "Staff id is mandatory"]
    },

})

module.exports = mongoose.model("staff",STAFFPROFILE)
