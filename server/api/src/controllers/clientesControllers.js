const { Cliente } = require("../db/models"); 
const createHttpError = require("http-errors");
const clientesServices = require("../services/clientesServices");



async function createCliente(req, res, next) {
    const { name, cpf, password, phone, email } = req.body;
    try {                
        const [cliente, created] = await Cliente.findOrCreate({
            where: { email },
            defaults: { name, cpf, password, phone }
        });

        if (!created) {
            throw new createHttpError(409, "E-mail já cadastrado");
        }

        res.status(201).json(cliente);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

async function getCliente(req, res, next) {
    const clienteId = res.locals.clienteId;

    try {
        const cliente = await Cliente.findOne({ where: { id: clienteId }});

        if (!cliente) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        res.json(cliente);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

async function updateCliente(req, res, next) {
    const { name, password, email, phone } = req.body;
    try {
        const cliente = await clientesServices.updateCliente(req.params.id, name, password, email, phone);

        res.status(200).json(cliente);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCliente,
    getCliente,
    updateCliente
}