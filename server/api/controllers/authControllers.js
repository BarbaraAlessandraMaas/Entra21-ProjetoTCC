const createHttpError = require("http-errors");
const { Cliente } = require("../src/db/models");
const jwt = require("jsonwebtoken");

function createAccessToken(cd_cliente) {
   return jwt.sign({
        sub: cd_cliente
    }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION })
}

async function login(req, res, next) {
    const { nr_cpf, ds_senha } = req.body;

    const err = new createHttpError(400, "Cpf inválido");
    const erro = new createHttpError(400, "senha inválido");
    try{
        const cliente = await Cliente.findOne({ where: { nr_cpf } });

        

        if(!cliente) {
            throw err;
        }

        if (!cliente.isPasswordValid(ds_senha)) {
            throw erro;
        }

        const accessToken = createAccessToken(cliente.cd_cliente);

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