const express = require('express');
const router = express.Router();
const {updatestudent} = require('../controller/usercontroller')
const {student2} = require('../controller/user2controller') 

router.route('/')
    .put( updatestudent)  

module.exports = router;