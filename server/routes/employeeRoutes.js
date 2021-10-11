const express = require("express");
const router = express.Router();

// Importando o controller
const employeeControllers = require("../controllers/employeeControllers");

// Obter todos os funcionários
router.get("/", employeeControllers.getAllEmployees);

// Obter um funcionário específico
app.get("/:id", employeeControllers.getEmployeeById);

// Criar um funcionário
router.post("/", employeeControllers.createEmployee);

// Atualizar as informações de um funcionário
router.put("/:id", employeeControllers.updateEmployee);

// Remover um funcionário
router.delete("/:id", employeeControllers.deleteEmployee);

module.exports = router;