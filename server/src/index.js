require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

// Middlewares de request
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Definindo as rotas
app.use("/api/clientes", require("./routes/clientesRoutes"));
app.use("/api/funcionario", require("./routes/funcionarioRoutes"));

// Definindo os middlewares
app.use(require("./middlewares/errorHandlerMiddleware"))

// Testando se o servidor está rodando
app.listen(PORT, () => console.log("O servidor esta rodando"));