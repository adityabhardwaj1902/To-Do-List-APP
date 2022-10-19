const express = require("express");

const router = express.Router();

const actionController = require("../controller/action_controller");

router.post("/create-task", actionController.create);

router.post("/delete-tasks", actionController.delete);

module.exports = router;
