const { Clientes } = require("../src/db/models/cliente");
const createHttpError = require("http-errors")

// Obter todos os usuários
function getAllClientes(req, res, next) {
    res.json(Clientes);
};

// Obter usuário pelo Id
function getClienteById(req, res, next) {
    const clienteId = req.params.id;

    const cliente = Clientes.find(cliente => cliente.id == clienteId);

    if (!cliente) {
        res.status(404).json({ message: "cliente não encontrado!" });       
    }

    res.json(cliente);
}

// Criar um usuário
async function createCliente(req, res, next) {
    const { name, email, cpf, telefone, password } = req.body;
    try {

        const [cliente, created] = await Clientes.findOrCreate({
            where: { email },
            defaults: { name, cpf, telefone, password }
        });

        if (!created) {
            throw new createHttpError(409, "E-mail já cadastrado");
        }
        res.status(201).json(cliente);
    } catch (error) {
        console.log(error);
        next(error);
    }
    
}

// Atualizar as informações de um usuário
function updateCliente(req, res, next) {
    const { name } = req.body;
    const clienteId = req.params.id;

    const cliente = clientes.find(cliente => cliente.cliente.id == clienteId);

    if (!cliente) {
        return res.status(404).json({ message: "cliente not found" });
    }

    cliente.name = name;

    res.json(cliente);
}

// Atualizar um usuário
function deleteCliente(req, res, next) {
    // Obter o id dos parametros
    const clienteId = req.params.id;

    // Verificar se o usuário com aquele id existe
    const clienteIdInDB = clientes.findIndex(cliente => cliente.id == clienteId);

    if (clienteIdInDB < 0) {
        return res.status(404).json({ message: "cliente not found" });
    }

    // Remover o usuario do bd ()
    clientes.splice(clienteIdInDB, 1)

    res.status(204).end();
}

module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};