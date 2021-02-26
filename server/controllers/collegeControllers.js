const College = require('../models/College')


module.exports.college_get = async (req,res) => {
    try{
        const colleges = await College.find();

        res.send(colleges)

    } catch(err) {
        console.log(err)
    }
}

module.exports.college_post = async (req,res) => {
    const {
        ClgId,
        Name,
        Yearfounded,
        City,
        State,
        Country,
        Noofstudents,
        Courses
         } =req.body;

    try {
        const college = await College.create({
            ClgId,
            Name,
            Yearfounded,
            City,
            State,
            Country,
            Noofstudents,
            Courses});
        res.status(201).json(college)
   
    } catch(err) {
        console.log(err)
    }   
}