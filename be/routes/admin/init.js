var express = require('express');
var router = express.Router();
const articleRouter = require("./article");
const serviceRouter = require("./service");
const roomRouter = require("./room");

const roleRouter = require("./role");
const userRouter = require("./user");
const bookingRouter = require("./booking");
const staticRouter = require("./static");
const permissionRouter = require("./permission");
const adminRouter = require("./admin");
const menuRouter = require("./menu");
const cateRouter = require("./category");

router.use(articleRouter);
router.use(serviceRouter);
router.use(roomRouter);

router.use(userRouter);
router.use(roleRouter);
router.use(bookingRouter);
router.use(staticRouter);
router.use(permissionRouter);
router.use(adminRouter);
router.use(menuRouter);
router.use(cateRouter);

module.exports = router;
