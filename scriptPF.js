function botaoF() {
    // Desabilita o botão de envio após ser clicado
    let enviarBtn = document.getElementById('botaoFree');
    enviarBtn.disabled = true;

    // Habilita o botão de "Responder novamente"
    let resetBtn = document.getElementById('botaoPremium');
    resetBtn.disabled = false;
};