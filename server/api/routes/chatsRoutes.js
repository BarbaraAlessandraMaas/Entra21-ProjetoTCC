const router = require("express").Router();

const authMiddleware = require("../middlewares/authMiddleware");
const chatsControllers = require("../controllers/chatsControllers");

// Criar um chat
router.post("/", authMiddleware, chatsControllers.createChat);

// Obter chats do cliente
router.get("/", authMiddleware, chatsControllers.getChats)

module.exports = router;