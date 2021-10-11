const employees = require("../db/models/employees");

// Obter todos os usuários
function getAllEmployees(req, res, next) {
    res.json(employees);
};

// Obter usuário pelo Id
function getEmployeeById(req, res, next) {
    const employeeId = req.params.id;

    const employee = employees.find(employee => employee.id == employeeId);

    if (!employee) {
        res.status(404).json({ message: "Employee not found!" });       
    }

    res.json(employee);
}

// Criar um usuário
function createEmployee(req, res, next) {
    const { id, name, email, employeeNumber, acessNumber, password } = req.body;

    //Verificando se o e-mail já está cadastrado
    const employeeAlreadyExists = employees.find(employee => employee.email === email);

    if (employeeAlreadyExists) {
        return res.status(409).json({ message: "User already exists" })
    }

    const employee = { id, name, email, employeeNumber, acessNumber, password };

    //Inserindo o usuário
    employees.push(employee);

    res.status(201).json(employee);
}

// Atualizar as informações de um usuário
function updateEmployee(req, res, next) {
    const { name } = req.body;
    const employeeId = req.params.id;

    const employee = employees.find(employee => employee.employee.id == employeeId);

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }

    employee.name = name;

    res.json(employee);
}

// Atualizar um usuário
function deleteEmployee(req, res, next) {
    // Obter o id dos parametros
    const employeeId = req.params.id;

    // Verificar se o usuário com aquele id existe
    const employeeIdInDB = employees.findIndex(employee => employee.id == employeeId);

    if (employeeIdInDB < 0) {
        return res.status(404).json({ message: "Employee not found" });
    }

    // Remover o usuario do bd ()
    employees.splice(employeeIdInDB, 1)

    res.status(204).end();
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};