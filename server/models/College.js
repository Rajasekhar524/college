const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({

    CollegeName:{
        type:String,
        required:true
    },
    Yearfounded:{
        type:Number,
    },
    Address:[],
    Country:{
        type: String,
        required:true
    },
    Students:[{
            ID:{
                type:Number,
                required:true
            },
            StudentName:{
                type:String,
                required:true
            },
            YearOfBatch:{
                type:Number,
                required:true
            },
            Skills:[]
    }],
    Courses:{
        type: []
    }

})

const College = mongoose.model('college',collegeSchema)

module.exports = College;