const express = require('express');
const roomDataController = require('../controllers/roomData');


const router = express.Router();

// Routes
router.get('/get-roomData', roomDataController.getRoomData);
router.patch('/update-roomData', roomDataController.updateRoomData);


module.exports = router;
