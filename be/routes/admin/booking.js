var express = require('express');
var router = express.Router();

const bookingBuilder = require('../../app/controllers/cms/Booking.controller');
const authMiddleware = require('./../../app/middleware/AuthJwt');
const isAuth = authMiddleware.isAuth;

router.get('/booking/',isAuth,bookingBuilder.index);
router.get('/booking/:id',isAuth,bookingBuilder.show);
router.put('/booking/updatePayment/:id',isAuth,bookingBuilder.updatePayment);
router.put('/booking/update/:id',isAuth,bookingBuilder.update);
router.delete('/booking/:id',isAuth,bookingBuilder.delete);


module.exports = router;
