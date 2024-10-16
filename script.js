const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Função para enviar a mensagem
    function sendMessage() {
        const userMessage = userInput.value.trim(); // Remove espaços em branco

        if (userMessage) {
            appendMessage('Você: ' + userMessage);
            userInput.value = ''; // Limpa o campo de entrada
            getBotResponse(userMessage);
        }
    }

    // Adiciona evento ao botão "Enviar"
    sendButton.addEventListener('click', sendMessage);

    // Adiciona evento para enviar a mensagem ao pressionar "Enter"
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Função para adicionar mensagens ao chatbox
    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight; // Rola para a parte inferior
    }

    // Função para obter a resposta do bot
    function getBotResponse(message) {
        let botMessage;

        // Respostas simples baseadas em palavras-chave
        if (message.toLowerCase().includes('olá')) {
            botMessage = 'Olá, bem-vindo ao suporte do Safe Zone! Como posso ajudar?';
        } else if (message.toLowerCase().includes('tchau')) {
            botMessage = 'Até mais! Tenha um bom dia!';
        } else if (message.toLowerCase().includes('problemas para acessar minha conta')) {
            botMessage = 'Sinto muito pelo transtorno. Você pode tentar redefinir sua senha clicando em "Esqueci minha senha" na tela de login. Caso precise de mais ajuda, estou aqui para auxiliar!';
        } else if (message.toLowerCase().includes('está travando')) {
            botMessage = 'Lamento que esteja enfrentando esse problema. Você pode tentar reiniciar o sistema ou atualizar o software para a versão mais recente. Se o problema persistir, envie uma descrição detalhada do que está acontecendo, e vou te ajudar o mais rápido possível!';
        } else if (message.toLowerCase().includes('sem internet')) {
            botMessage = 'O Safe Zone foi desenvolvido para funcionar offline em áreas sem conexão. Assim que você se conectar novamente, o app sincronizará as informações mais recentes. Para ter acesso a dados offline, certifique-se de baixar os mapas na opção "Mapas"';
        } else if (message.toLowerCase().includes('mapa não está carregando')) {
            botMessage = 'Entendo a frustração. Verifique se você está conectado à internet e se deu permissão para o uso de geolocalização no aplicativo. Se o problema continuar, tente fechar e reabrir o aplicativo. Se precisar de mais ajuda, estamos aqui!';
        } else if (message.toLowerCase().includes(' históricos de surtos')) {
            botMessage = 'Para visualizar dados históricos de surtos, acesse o menu "Históricos Surtos" no app. Caso você seja um usuário premium, terá acesso a informações detalhadas de surtos anteriores em sua área. Se precisar de ajuda para navegar nessa função, estarei por aqui.';
        } else {
            botMessage = 'Desculpe, não entendi. Pode reformular?';
        }

        appendMessage('Suporte: ' + botMessage);
    }