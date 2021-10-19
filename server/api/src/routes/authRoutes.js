const router = require("express").Router();

// Logar o usuário
router.post("/login", require("../controllers/authControllers").login);

module.exports = router;