// Captura a barra de navegação
const navbar = document.querySelector("nav");

// Função que roda toda vez que a janela é rolada
window.addEventListener("scroll", function() {
    // Verifica a posição do scroll vertical (eixo Y)
    if (window.scrollY > 50) {
        // Se desceu mais de 50px, ADICIONA a classe que diminui
        navbar.classList.add("minimizada");
    } else {
        // Se voltou para o topo (menos de 50px), REMOVE a classe
        navbar.classList.remove("minimizada");
    }
});