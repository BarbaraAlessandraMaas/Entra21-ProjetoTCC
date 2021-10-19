const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const messagesControllers = require("../controllers/messagesControllers");

// Criar uma mensagem
router.post("/", authMiddleware, messagesControllers.createMessage);

// Obter mensagens de um chat
router.get("/:id", authMiddleware, messagesControllers.getMessageFromChat);

module.exports = router;