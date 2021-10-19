const { Server } = require("socket.io");

const io = new Server({ cors: { origin: "http://localhost:3000" } });

io.on("connection", (socket) => {
 console.log("cliente conectado")
});

io.listen(8080);