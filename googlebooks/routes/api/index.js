const router = require("express").Router();
const googleBookRoutes = require("./googleBooks");
const booksRoutes = require("./books");

router.use("/googleBooks", googleBookRoutes);
router.use("/userBooks", booksRoutes);


module.exports = router;