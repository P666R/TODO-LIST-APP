const express = require('express');

// router middleware
const router = express.Router();

// path for controller function
const homecontroller = require('../controllers/home_controller');

// test message
console.log('Router loaded');

// assigned controller function to a route
router.get('/', homecontroller.home);

// exported router
module.exports = router;