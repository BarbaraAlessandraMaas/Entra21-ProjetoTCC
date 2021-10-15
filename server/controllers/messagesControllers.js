const { QueryTypes } = require("sequelize/types");
const { Message, Chat, sequelize } = require("../src/db/models");
const createHttpError = require("http-errors");

async function createMessage(req, res, next) {
    const clienteId = res.locals.clienteId;
    const { message, chatId } = req.body;

    try {
        const chat = await Chat.findOne({ where: { id: chatId }, include: "clientes" });

        if (!chat) {
            throw new createHttpError(404, "Chat não encontrado");
        }

        const clienteInChat = chat.clientes.find(cliente => cd_cliente === clienteId);

        if (!clienteInChat) {
            throw new createHttpError(400, "Cliente não faz parte dess e chat");
        }

        const newMessage = await Message.create({ message, cd_cliente: clienteId, chat_id: chatId })

        res.status(201).json(newMessage)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getMessageFromChat(req, res, next) {
    const clienteId = res.locals.clienteId;
    const chatId = res.params.id;
    try {
        const chat = await Chat.findOne({ where: { id: chatId }, include: "clientes" });

        if (!chat) {
            throw new createHttpError(404, "Chat não encontrado");
        }

        const clienteInChat = chat.clientes.find(cliente => cliente.id === clienteId);

        if (!clienteInChat) {
            throw new createHttpError(400, "Cliente não faz parte dess e chat");
        }

        const message = await sequelize.query(`
                SELECT 
                    m.id,
                    m.message,
                    cliente.od as "clienteId"
                FROM 
                    messages m
                INNER JOIN
                    clientes
                ON
                    m.clientes_id = clientes.id
                WHERE
                    m.chat_id = ?;
            `, {
            replacements: [chat.id],
            type: QueryTypes.SELECT
        });

        res.json(message);
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports = {
    createMessage,
    getMessageFromChat
}