const express = require('express');
const router = express.Router();
const {register, login, logout} = require('../controllers/auth_controller');
const {removeUser, changeUser} = require('../controllers/user_controller')
//User registeration
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);


router.put('user/:id', changeUser);
router.delete('user/:id', removeUser)


module.exports = router;

