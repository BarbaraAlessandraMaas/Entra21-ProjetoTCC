const users = require("../models/users");

// Obter todos os usuários
function getAllUsers(req, res, next) {
    res.json(users);
};

// Obter usuário pelo Id
function getUserById(req, res, next) {
    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        res.status(404).json({ message: "User not found!" });       
    }

    res.json(user);
}

// Criar um usuário
function createUser(req, res, next) {
    const { id, name, email, cpf, telefone, password } = req.body;

    //Verificando se o e-mail já está cadastrado
    const userAlreadyExists = users.find(user => user.email === email);

    if (userAlreadyExists) {
        return res.status(409).json({ message: "User already exists" })
    }

    const user = {id, name, email, cpf, telefone, password };

    //Inserindo o usuário
    users.push(user);

    res.status(201).json(user);
}

// Atualizar as informações de um usuário
function updateUser(req, res, next) {
    const { name } = req.body;
    const userId = req.params.id;

    const user = users.find(user => user.user.id == userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name;

    res.json(user);
}

// Atualizar um usuário
function deleteUser(req, res, next) {
    // Obter o id dos parametros
    const userId = req.params.id;

    // Verificar se o usuário com aquele id existe
    const userIdInDB = users.findIndex(user => user.id == userId);

    if (userIdInDB < 0) {
        return res.status(404).json({ message: "User not found" });
    }

    // Remover o usuario do bd ()
    users.splice(userIdInDB, 1)

    res.status(204).end();
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};