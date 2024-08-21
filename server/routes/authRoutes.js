const express = require('express');
const router = express.Router();
const cors = require('cors');
const { loginUser} = require('../controllers/authController');


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);
//router
router.post('/loginuser', loginUser);


module.exports = router