const { funcionarios } = require("../src/db/models/funcionario");

// Obter todos os usuários
function getAllFuncionarios(req, res, next) {
    res.json(funcionarios);
};

// Obter usuário pelo Id
function getFuncionarioById(req, res, next) {
    const funcionarioId = req.params.id;

    const funcionario = funcionarios.find(funcionario => funcionario.id == funcionarioId);

    if (!funcionario) {
        res.status(404).json({ message: "funcionario not found!" });       
    }

    res.json(funcionario);
}

// Criar um usuário
function createFuncionario(req, res, next) {
    const { id, name, email, funcionarioNumber, acessNumber, password } = req.body;

    //Verificando se o e-mail já está cadastrado
    const funcionarioAlreadyExists = funcionarios.find(funcionario => funcionario.email === email);

    if (funcionarioAlreadyExists) {
        return res.status(409).json({ message: "User already exists" })
    }

    const funcionario = { id, name, email, funcionarioNumber, acessNumber, password };

    //Inserindo o usuário
    funcionarios.push(funcionario);

    res.status(201).json(funcionario);
}

// Atualizar as informações de um usuário
function updateFuncionario(req, res, next) {
    const { name } = req.body;
    const funcionarioId = req.params.id;

    const funcionario = funcionarios.find(funcionario => funcionario.funcionario.id == funcionarioId);

    if (!funcionario) {
        return res.status(404).json({ message: "funcionario not found" });
    }

    funcionario.name = name;

    res.json(funcionario);
}

// Atualizar um usuário
function deleteFuncionario(req, res, next) {
    // Obter o id dos parametros
    const funcionarioId = req.params.id;

    // Verificar se o usuário com aquele id existe
    const funcionarioIdInDB = funcionarios.findIndex(funcionario => funcionario.id == funcionarioId);

    if (funcionarioIdInDB < 0) {
        return res.status(404).json({ message: "funcionario not found" });
    }

    // Remover o usuario do bd ()
    funcionarios.splice(funcionarioIdInDB, 1)

    res.status(204).end();
}

module.exports = {
    getAllFuncionarios,
    getFuncionarioById,
    createFuncionario,
    updateFuncionario,
    deleteFuncionario
};