const Student = require('../models/Student')


module.exports.student_get = async (req,res) => {
    try{
        const students = await Student.find();

        res.send(students)

    } catch(err) {
        console.log(err)
    } 
}

module.exports.student_post = async (req,res) => {
    const {Name, YearOfBatch, collegeId, Skills } =req.body;

    try {
        const student = await Student.create({Name, YearOfBatch, collegeId, Skills});
        res.status(201).json(student)
   
    } catch(err) {
        console.log(err)
    }   
}