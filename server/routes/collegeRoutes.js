const { Router } = require('express');
const collegeControllers = require('../controllers/collegeControllers')

const router = Router();

router.get('/college', collegeControllers.college_get);
router.post('/college', collegeControllers.college_post);
router.get('/college/:id',collegeControllers.college_getOne);


module.exports = router;