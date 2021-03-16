const College = require('../models/College')


module.exports.college_get = async (req,res) => {
    try{
        const Colleges = await College.find();

        res.send(Colleges)

    } catch(err) {
        console.log(err)
    }
}

module.exports.college_getOne = async (req,res) => {
    try {
        const oneCollege = await College.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data:oneCollege
        })
        // res.send(oneCollege)
       
    } catch(err) {
        console.log(err)
    }
}

module.exports.college_post = async (req,res) => {

    try {
        const newCollege = await College.create(req.body);
        res.status(201).json(newCollege)
   
    } catch(err) {
        console.log(err)
    }   
}