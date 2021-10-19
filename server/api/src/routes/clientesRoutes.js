const router = require("express").Router();

const authMiddleware = require("../middlewares/authmiddleware");
const clientesControllers = require("../controllers/clientesControllers")

// Criar um cliente
router.post("/", clientesControllers.createCliente);

// Obter um cliente
router.get("/:id", authMiddleware, clientesControllers.getCliente);

// Editar um cliente
router.put("/:id", clientesControllers.updateCliente);

module.exports = router;