const { Cliente } = require("../db/models");
const createHttpError = require("http-errors");

async function getClientes() {
    const clientes = await Cliente.findAll();

    return clientes;
}

async function createCliente({ name, email, password }) {
    const [cliente, created] = await Cliente.findOrCreate({
        where: { email },
        defaults: { name, password }
    });

    if (!created) {
        throw new createHttpError(409, "E-mail já cadastrado");
    }

    return cliente;
}

async function updateCliente(id, name, password, email, phone) {
    const cliente = await Cliente.findOne({ where: { id } });
    console.log(id, name, password, email, phone)
    try {

        
        console.log(cliente)
        if (!cliente) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        cliente.name = name;
        cliente.password = password;
        cliente.email = email;
        cliente.phone = phone;
        await cliente.save();
    } catch (error) {
        console.log(error)

    }
    return cliente;
}

async function removeCliente(id) {
    const cliente = await Cliente.findOne({ where: { id } });

    if (!cliente) {
        throw new createHttpError(404, "Usuário não encontrado");
    }

    await cliente.destroy();
}

module.exports = {
    getClientes,
    createCliente,
    updateCliente,
    removeCliente
}