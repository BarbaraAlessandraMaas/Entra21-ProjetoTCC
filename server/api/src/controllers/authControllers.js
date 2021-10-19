const { Cliente } = require("../db/models");
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");

function createAccessToken(clienteId) {
    return jwt.sign({
        sub: clienteId
    }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
}

async function login(req, res, next) {
    const { cpf, password } = req.body;

    const err = new createHttpError(400, "E-mail ou senha inválidos");

    try {
        const cliente = await Cliente.findOne({ where: { cpf } });

        if (!cliente) {
            throw err;
        }

        if (!cliente.isPasswordValid(password)) {
            throw err;
        }

        const accessToken = createAccessToken(cliente.id);

        res.json(accessToken);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    login,
    createAccessToken
};