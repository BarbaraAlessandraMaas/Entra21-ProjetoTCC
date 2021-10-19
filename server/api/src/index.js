require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares de request
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Definindo as rotas
app.use("/api/clientes", require("./routes/clientesRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));


// Definindo o middleware de tratamento de erros
app.use(require("./middlewares/authmiddleware"));
app.use(require("./middlewares/errorHandlerMiddleware"));

app.listen(PORT, () => console.log("O servidor está rodando na porta: " + PORT))