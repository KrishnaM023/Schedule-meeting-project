const express = require('express');
const meetingController = require('../controllers/meetingController');

const router = express.Router();


router.get('/get-meeting', meetingController.getMeeting);
router.post('/schedule-meeting', meetingController.scheduleMeeting);
router.delete('/delete-meeting/:id', meetingController.deleteMeeting);

module.exports = router;
