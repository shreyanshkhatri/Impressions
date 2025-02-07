const express = require("express");
const { createAnonymousUser } = require("../controllers/userController");
const router = express.Router();

router.post("/create", createAnonymousUser);

module.exports = router;
