const jwt = require("jsonwebtoken");
const createHttpError = require("http-errors");

module.exports = (req, res, next) => {
    const accessToken = req.headers.authorization?.split(" ")[1];
        
    try {        
        const decoded = jwt.verify(accessToken, process.env.TOKEN_SECRET);
                        
        res.locals.clienteId = decoded.sub;

        next();
    } catch (error) {
        console.log(error);
        throw new createHttpError(401, "Access Token inválido");
    }
    
}