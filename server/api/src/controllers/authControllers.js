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

    const err = new createHttpError(400, "Cpf ou senha inválidos");

    try {
        const clienteRegistrado = await Cliente.findOne({ where: { cpf } });

        // console.log(clienteRegistrado);

        if (!clienteRegistrado) {
            throw err;
        }

        const isPasswordValid = clienteRegistrado.isPasswordValid(password);

        console.log(clienteRegistrado.password);
        console.log(password)

        if (!isPasswordValid) {
            throw err;
        }

        const accessToken = createAccessToken(clienteRegistrado.id);

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