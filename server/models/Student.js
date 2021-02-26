const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    CollegeId: {
        type:Number,
        
    },
    Name:{
        type:String,
        required:true,
        unique:true
    },
    YearOfBatch:{
        type:Number,
        required:true,
        minLength:4
    },
    Skills:{
        type:[]
    },
    
})

const Student = mongoose.model('student',studentSchema)

module.exports = Student;