const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Simulação de dados sobre One Piece
const onePieceData = {
    "Luffy": "Luffy é o capitão dos Piratas do Chapéu de Palha.",
    "Zoro": "Zoro é o espadachim dos Piratas do Chapéu de Palha.",
    "Nami": "Nami é a navegadora dos Piratas do Chapéu de Palha.",
    // Adicione mais personagens e informações conforme necessário
};

// Rota para o chatbot
app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    
    // Respostas básicas
    let response = "Desculpe, não entendi isso.";

    for (const character in onePieceData) {
        if (userMessage.includes(character.toLowerCase())) {
            response = onePieceData[character];
            break;
        }
    }

    res.json({ reply: response });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
