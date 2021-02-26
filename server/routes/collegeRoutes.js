const { Router } = require('express');
const collegeControllers = require('../controllers/collegeControllers')

const router = Router();

router.get('/college', collegeControllers.college_get);
router.post('/college', collegeControllers.college_post);
// router.get('/login', authControllers.login_get);
// router.post('/login', authControllers.login_post);

module.exports = router;