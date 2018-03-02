var router = require("express").Router();
var controller = require("./controller");

router.get("/new/*", controller.checkUrl, controller.newUrl);
router.get("/:url", controller.redirect);

module.exports = router;