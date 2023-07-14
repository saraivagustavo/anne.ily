function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    if (password === "illicitaffairs") {
        // Senha correta, redirecionar para a página desejada
        window.location.href = "conteudo.html";
    } else {
        alert("Senha incorreta. Tente novamente. (obs: se vc não é a anne, vaza do site fazendo favor.");
    }
}
