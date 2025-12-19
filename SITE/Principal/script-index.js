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


document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema Movenow carregado!"); // Confirmação que o JS rodou

    // --- NAV DESKTOP ---
    const navbar = document.querySelector("nav");

    if (navbar) {
        window.addEventListener("scroll", () => {
            // Mostra no console a posição atual (Aperte F12 para ver)
            // console.log("Posição do Scroll:", window.scrollY); 

            if (window.scrollY > 50) {
                if (!navbar.classList.contains("minimizada")) {
                    console.log("Descendo: Adicionando classe .minimizada");
                    navbar.classList.add("minimizada");
                }
            } else {
                if (navbar.classList.contains("minimizada")) {
                    console.log("Subindo: Removendo classe .minimizada (Voltando ao original)");
                    navbar.classList.remove("minimizada");
                }
            }
        });
    } else {
        console.error("ERRO: A tag <nav> não foi encontrada no HTML.");
    }

    // --- MENU MOBILE ---
    const mobileWrapper = document.getElementById('mobile-wrapper');
    const btnLateral = document.getElementById('btn-lateral-solto');

    if (btnLateral && mobileWrapper) {
        btnLateral.addEventListener('click', (e) => {
            if (e.type === 'touchstart') e.preventDefault();
            mobileWrapper.classList.toggle('ativa');
        });
    }
});