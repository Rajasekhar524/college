const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({
    ClgId:{
        type: Number,
        required:true,
        unique:true
    },
    Name:{
        type:String
    },
    Yearfounded:{
        type:Number,
    },
    City:{
        type:String,
        required:true

    },
    State:{
        type: String,
        required:true
    },
    Country:{
        type: String,
        required:true
    },  
    Noofstudents:{
        type:Number,
        required:true
    },
    Courses:{
        type: []
    }

})

const College = mongoose.model('college',collegeSchema)

module.exports = College;