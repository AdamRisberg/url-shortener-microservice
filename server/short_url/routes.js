var router = require("express").Router();
var controller = require("./controller");

router.get("/new/:url", controller.newUrl);

router.get("/:url", controller.redirect);

router.get("/", controller.getHomepage);

module.exports = router;