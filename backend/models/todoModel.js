const mongoose = require("mongoose")

const todoModel = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    description : {
        type : String
    }
})


module.exports = mongoose.model("TODO",todoModel);