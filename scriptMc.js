document.getElementById("marcarCidades").addEventListener("click", function (event) {
    event.preventDefault(); // Previne o recarregamento da página

    let cidade = document.getElementById("cidade").value;

    document.getElementById("exibeCidade").innerText = cidade;
    
});