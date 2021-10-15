const jwt = require("jsonwebtoken");
const createHttpError = require("http-errors");

module.exports = (req, res, next) => {
    const accessToken = req.headers.authorization.split(" ")[1];

    console.log(accessToken)
    try {
        const decoded = jwt.verify(accessToken, process.env.TOKEN_SECRET);

        console.log(decoded.sub)
        res.locals.userId = decoded.sub
    } catch (error) {
        console.log(error)
        throw new createHttpError(401, "Access Token inválido")
    }
}