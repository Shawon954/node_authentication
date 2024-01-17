const express = require('express');
const router = express.Router();

const authrr = require('../middleware/authcat');

const authregister = require("../controller/auth_controller");

router.get('/user',authrr, authregister.getemployee)
router.post('/register',authregister.register);
router.post('/login',authregister.login);

module.exports = router;