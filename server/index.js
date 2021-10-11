const express = require("express");
const app = express();
const PORT = 3000;

// Iportando as rotas
const usersRoutes = require("./routes/usersRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

// Definindo os middlewares
app.use(express.json());

// Definindo as rotas
app.use("/users", usersRoutes);

// Testando se o servidor está rodando
app.listen(PORT, () => console.log("O servidor esta rodando"));