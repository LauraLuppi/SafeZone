document.getElementById('cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Verificar se as senhas são iguais
    const senha = document.getElementById('senha').value;
    const senhaC = document.getElementById('senhaC').value;

    if (senha !== senhaC) {
        alert("As senhas não coincidem.");
        return;
    }

    // Verificação de email válido
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

});

// Máscara para o CPF
function applyCPFMask(cpfInput) {
    let value = cpfInput.value.replace(/\D/g, "");  // Remove caracteres não numéricos
    if (value.length > 11) value = value.slice(0, 11);  // Limita a 11 dígitos

    // Aplica a máscara CPF xxx.xxx.xxx-xx
    cpfInput.value = value.replace(/(\d{3})(\d)/, "$1.$2")
                          .replace(/(\d{3})(\d)/, "$1.$2")
                          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// Máscara para o RG
function MascaraRg(rgInput) {
    let value = rgInput.value.replace(/\D/g, "");  // Remove caracteres não numéricos
    if (value.length > 9) value = value.slice(0, 9);  // Limita a 9 dígitos

    // Aplica a máscara RG xx.xxx.xxx-x
    rgInput.value = value.replace(/(\d{2})(\d)/, "$1.$2")
                         .replace(/(\d{3})(\d)/, "$1.$2")
                         .replace(/(\d{3})(\d{1})$/, "$1-$2");
}
