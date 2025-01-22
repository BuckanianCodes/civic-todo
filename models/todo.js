const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    todoTitle:{ 
        type:String,
        required:true,
        unique:true
    },
    todoDescription:{ 
        type:String,
        required:true,
    },
    done:{ 
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports = mongoose.model("todo",todoSchema)