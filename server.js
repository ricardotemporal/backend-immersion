/**
 * Módulo principal para iniciar o servidor da aplicação.
 * Este código configura e inicia um servidor utilizando o framework Express.
 * 
 * Endpoints disponíveis:
 * - GET /api: Retorna uma mensagem de boas-vindas.
 */

// Importa o módulo Express para criar o servidor
import express from "express";

// Criação de uma instância da aplicação Express
const app = express();

/**
 * Inicia o servidor na porta 3000.
 * Exibe uma mensagem no console para confirmar que o servidor está ativo.
 */
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

/**
 * Rota principal da API.
 * 
 * @route GET /api/
 * @returns {string} Mensagem de boas-vindas à imersão.
 */
app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});
