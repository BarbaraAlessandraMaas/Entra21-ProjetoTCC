const createHttpError = require("http-errors");
const { QueryTypes } = require("sequelize/types");
const { Chat, Cliente, sequelize } = require("../src/db/models");

async function createChat(req, res, next) {
    const {nm_cliente, clientes  } = req.body;

    const transaction = await sequelize.transaction();
    try {
        const registeredClientes = await Cliente.findAll({ where: { id: clientes }});

        if(!registeredClientes) {
            throw new createHttpError(404, "Cliente(s) não cadastrados")
        }

        const chat = await Chat.creat({ nm_cliente });
        await chat.addClientes(registeredClientes);

        await transaction.commit();

        res.status(201).json(chat)
    } catch (error) {
        await transaction.rollback();
        console.log(error);
        next(error);
    }

    async function getChats(req, res, next) {
        const clienteId = res.locals.clienteId;

        try {
            const chats = await sequelize.query(`
                SELECT 
                    chat.id,
                    chat.name,
                FROM 
                    chats c 
                INNER JOIN
                    clientes_chats
                ON
                    clientes_chats.chat_id = chat.id
                INNER JOIN
                    clientes
                ON
                    clientes.id = clientes_chats.cliete_id
                WHERE
                    clientes.id = ?;
            `, { 
                replacements: [clienteId],
                type: QueryTypes.SELECT 
            });

            for (let chat of chats) {
               const clientes = await sequelize.query(
                    `
                    SELECT 
                        cliente.nm_cliente,
                        cliente.ds_email
                    FROM 
                        clientes
                    INNER JOIN
                        clientes_chats
                    ON
                        clientes_chats.cliente_id = cliente.id
                    WHERE
                    clientes_chats.chat_id = ?;
                `, { 
                    replacements: [chat.id],
                    type: QueryTypes.SELECT 
                });

                chat.clientes = clientes;
            }

            res.json(chats);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

}

module.exports = {
    createChat,
    getChats
}