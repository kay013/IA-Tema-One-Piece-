const respostas = {
    "quem é shanks": "Shanks é um dos Quatro Imperadores, capitão dos Piratas do Ruivo, e uma figura crucial na vida de Luffy, pois foi ele quem deu o Chapéu de Palha a Luffy.",
    "quem é o luffy": "Monkey D. Luffy é o protagonista de One Piece. Ele é o capitão dos Piratas do Chapéu de Palha.",
    "quem é o rei dos piratas": "O Rei dos Piratas era Gol D. Roger, o homem que conquistou o lendário tesouro, o One Piece.",
    "quantos episódios tem one piece": "One Piece tem mais de 1000 episódios e continua em andamento.",
    "o que é one piece": "One Piece é um tesouro lendário que ninguém conseguiu encontrar. Ele está escondido em algum lugar no Grand Line.",
    "quem são os chapéus de palha": "Os Chapéus de Palha são a tripulação do Luffy, composta por Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook e Jinbe.",
    "qual é o sonho do luffy": "O sonho do Luffy é encontrar o One Piece e se tornar o Rei dos Piratas!",
    "quem é o zoro": "Roronoa Zoro é o espadachim dos Piratas do Chapéu de Palha e um dos membros mais fortes da tripulação de Luffy.",
    "quem é o sanji": "Sanji é o cozinheiro dos Chapéus de Palha e um dos principais combatentes da tripulação. Ele sonha em encontrar o All Blue.",
    "quem é o chopper": "Tony Tony Chopper é o médico dos Chapéus de Palha. Ele é uma rena que comeu a Hito Hito no Mi, permitindo que ele se transformasse em humano.",
    "quem é o nico robin": "Nico Robin é a arqueóloga dos Chapéus de Palha e uma das poucas pessoas capazes de ler Poneglyphs, essenciais para encontrar o One Piece.",
    "quem é o nami": "Nami é a navegadora dos Chapéus de Palha e tem uma habilidade incrível em mapear e navegar pelas águas perigosas do Grand Line.",
    "quem é o usopp": "Usopp é o atirador dos Chapéus de Palha. Embora seja conhecido por suas histórias exageradas, ele é um grande inventor e estrategista.",
    "qual é a recompensa de luffy": "Atualmente, a recompensa de Monkey D. Luffy é de 3 bilhões de berries, após os eventos em Wano.",
    "qual é a recompensa de zoro": "Roronoa Zoro tem uma recompensa de 1.111.000.000 de berries, também após os eventos de Wano.",
    "o que é haki": "Haki é uma habilidade misteriosa que permite ao usuário sentir a presença de outros, usar força de vontade para subjugar oponentes e, em alguns casos, prever movimentos futuros.",
    "quantos membros tem os chapéus de palha": "Os Chapéus de Palha atualmente têm 10 membros.",
    "quem é o vilão de wano": "O principal vilão do arco de Wano é Kaido, um dos Quatro Imperadores e líder dos Piratas das Feras.",
    "quem matou o ace": "Portgas D. Ace foi morto por Akainu, um almirante da Marinha, durante a Guerra de Marineford.",
    "o que é o gear 4 do luffy": "O Gear 4 é uma técnica de luta de Luffy que usa o poder da Gomu Gomu no Mi para aumentar a força e a elasticidade de seu corpo, permitindo movimentos e ataques poderosos.",
    "quem é barbanegra": "Marshall D. Teach, conhecido como Barbanegra, é um dos principais antagonistas de One Piece. Ele é o líder dos Piratas do Barbanegra e também um dos Quatro Imperadores.",
};

function sendMessage() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    if (userInput.trim() === "") {
        return;
    }

    // Exibir a mensagem do usuário
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerText = userInput;
    chatbox.appendChild(userMessage);

    // Resposta do chatbot
    const botMessage = document.createElement("div");
    botMessage.className = "message bot-message";

    if (respostas[userInput]) {
        botMessage.innerText = respostas[userInput];
    } else {
        botMessage.innerText = "Desculpe, não sei a resposta para isso. Pergunte-me algo sobre One Piece!";
    }

    chatbox.appendChild(botMessage);

    // Limpar o input e rolar o chat para baixo
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}
