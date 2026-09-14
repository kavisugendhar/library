const express = require('express');
const router = express.Router();

const {student2} = require('../controller/user2controller') 

router.route('/')
    .put( student2)  

module.exports = router;