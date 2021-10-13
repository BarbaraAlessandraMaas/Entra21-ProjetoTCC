const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares de request
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Iportando as rotas
const clientesRoutes = require("./routes/clientesRoutes");
const funcionarioRoutes = require("./routes/funcionarioRoutes");

// Definindo os middlewares
app.use(express.json());
app.use(require("./middlewares/errorHandlerMiddleware"))

// Definindo as rotas
app.use("/api/clientes", clientesRoutes);
app.use("/api/funcionario", funcionarioRoutes)

// Testando se o servidor está rodando
app.listen(PORT, () => console.log("O servidor esta rodando"));