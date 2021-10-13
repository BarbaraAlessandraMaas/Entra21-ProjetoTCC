const express = require("express");
const router = express.Router();

// Importando o controller
const clientesControllers = require("../controllers/clientesControllers");

// Obter todos os usuários
router.get("/", clientesControllers.getAllClientes);

// Obter um usuário específico
router.get("/:id", clientesControllers.getClienteById);

// Criar um usuário
router.post("/", clientesControllers.createCliente);

// Atualizar as informações de um usuário
router.put("/:id", clientesControllers.updateCliente);

// Remover um usuário
router.delete("/:id", clientesControllers.deleteCliente);

module.exports = router;