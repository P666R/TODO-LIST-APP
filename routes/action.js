const express = require('express');
const router = express.Router();

// get actions controller path to use actions controller
const actionsController = require('../controllers/actions_controller');

// MW to decode data incomming from browser
router.use(express.urlencoded({ extended: true }));

// to handle the requests coming to /action/create-task and execute create function from actions_controller
router.post('/create-task', actionsController.create);

// to handle the requests coming to /action/create-task and execute delete function from actions_controller
router.post('/delete-tasks', actionsController.delete);

module.exports = router;