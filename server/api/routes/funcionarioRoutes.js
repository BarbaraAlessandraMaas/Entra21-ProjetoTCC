const express = require("express");
const router = express.Router();

// Importando o controller
const funcionarioControllers = require("../controllers/funcionarioControllers");

// Obter todos os funcionários
router.get("/", funcionarioControllers.getAllFuncionarios);

// Obter um funcionário específico
router.get("/:id", funcionarioControllers.getFuncionarioById);

// Criar um funcionário
router.post("/", funcionarioControllers.createFuncionario);

// Atualizar as informações de um funcionário
router.put("/:id", funcionarioControllers.updateFuncionario);

// Remover um funcionário
router.delete("/:id", funcionarioControllers.deleteFuncionario);

module.exports = router;