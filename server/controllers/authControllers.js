const createHttpError = require("http-errors");
const { Cliente } = require("../src/db/models");

function createAccessToken(clienteId) {
   return jwt.sign({
        sub: clienteId
    }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION })
}

async function login(req, res, next) {
    const { cpf, password } = req.body;
    try{
        const cliente = await Cliente.findOne({ where: { cpf } });

        const err = new createHttpError(400, "Cpf ou senha inválidos");

        if(!cliente) {
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