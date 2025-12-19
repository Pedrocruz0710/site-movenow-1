let indiceAtual = 1;

// Lista de imagens para o fundo desfocado (Devem ser as mesmas dos slides)
const imagensDeFundo = [
    "url('/imagens/frota/vuck.png')",
    "url('/imagens/frota/3 quartos.png')",
    "url('/imagens/frota/carreta (1).png')",
    "url('/imagens/frota/4x2 toco.png')",
    "url('/imagens/frota/truck 6x2.png')"
];

mostrarSlide(indiceAtual);

function mudarSlide(n) {
    mostrarSlide(indiceAtual += n);
}

function irParaSlide(n) {
    mostrarSlide(indiceAtual = n);
}

function mostrarSlide(n) {
    let i;
    let slides = document.getElementsByClassName("bloco-s2");
    let dots = document.getElementsByClassName("dot");

    // Lógica circular (se passar do último, volta pro 1)
    if (n > slides.length) { indiceAtual = 1 }
    if (n < 1) { indiceAtual = slides.length }

    // Reseta todos os slides e bolinhas
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("ativo");
    }

    // Ativa o slide atual
    slides[indiceAtual - 1].classList.add("ativo");
    dots[indiceAtual - 1].classList.add("ativo");

    // ATUALIZA O FUNDO DESFOCADO
    // Pegamos a div de fundo pelo ID e trocamos a imagem
    document.getElementById("bg-desfocado").style.backgroundImage = imagensDeFundo[indiceAtual - 1];
}