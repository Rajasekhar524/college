const { Router } = require('express');
const studentControllers = require('../controllers/stundentControllers')

const router = Router();

router.get('/students', studentControllers.student_get);
router.post('/students', studentControllers.student_post);
// router.get('/login', authControllers.login_get);
// router.post('/login', authControllers.login_post);

module.exports = router;