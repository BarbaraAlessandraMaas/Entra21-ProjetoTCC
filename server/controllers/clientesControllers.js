const { Cliente } = require("../src/db/models");
const db = require("../src/db/models");
const createHttpError = require("http-errors");

// Obter todos os clientes
function getAllClientes(req, res, next) {
    res.json(Cliente);
};

// Obter cliente
function getCliente(req, res, next) {
    const userId = res.locals.userId;

    try {
        const cliente = await Cliente.findOne({ where: {id: clienteId } });

        if (!cliente) {
            throw new createHttpError(404, "Cliente não encontrado")
        }

        res.json(cliente);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Criar um cliente
async function createCliente(req, res, next) {
    const { nm_cliente, ds_email, nr_cpf, nr_telefone, ds_senha } = req.body;
    try {
        const [cliente, created] = await Cliente.findOrCreate({
            where: { ds_email },
            defaults: { nm_cliente, nr_cpf, nr_telefone, ds_senha }
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

// Atualizar as informações de um cliente
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

// Atualizar um cliente
function deleteCliente(req, res, next) {
    // Obter o id dos parametros
    const clienteId = req.params.id;

    // Verificar se o cliente com aquele id existe
    const clienteIdInDB = clientes.findIndex(cliente => cliente.id == clienteId);

    if (clienteIdInDB < 0) {
        return res.status(404).json({ message: "cliente not found" });
    }

    // Remover o cliente do bd ()
    clientes.splice(clienteIdInDB, 1)

    res.status(204).end();
}

module.exports = {
    getAllClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente
};