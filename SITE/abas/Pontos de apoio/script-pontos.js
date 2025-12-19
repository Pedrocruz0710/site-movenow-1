/* ==========================================
   LÓGICA PARA O SLIDER DA SEÇÃO S2 (BASES)
   ========================================== */
   let indiceS2 = 1;
   mostrarSlideS2(indiceS2);
   
   // Avançar/Voltar
   function mudarSlideS2(n) {
       mostrarSlideS2(indiceS2 += n);
   }
   
   // Clicar na bolinha
   function slideAtualS2(n) {
       mostrarSlideS2(indiceS2 = n);
   }
   
   function mostrarSlideS2(n) {
       let i;
       let slides = document.getElementsByClassName("bloco-s2");
       let dots = document.getElementsByClassName("dot-s2");
   
       // Loop infinito
       if (n > slides.length) { indiceS2 = 1 }
       if (n < 1) { indiceS2 = slides.length }
   
       // Esconde todos
       for (i = 0; i < slides.length; i++) {
           slides[i].classList.remove("ativo");
       }
       // Desativa bolinhas
       for (i = 0; i < dots.length; i++) {
           dots[i].classList.remove("ativo");
       }
   
       // Mostra o atual
       if (slides.length > 0) slides[indiceS2 - 1].classList.add("ativo");
       if (dots.length > 0) dots[indiceS2 - 1].classList.add("ativo");
   }
   
   
   /* ==================================================
      LÓGICA PARA O SLIDER DA SEÇÃO S3 (PONTOS DE APOIO)
      ================================================== */
   let indiceS3 = 1;
   mostrarSlideS3(indiceS3);
   
   function mudarSlideS3(n) {
       mostrarSlideS3(indiceS3 += n);
   }
   
   function slideAtualS3(n) {
       mostrarSlideS3(indiceS3 = n);
   }
   
   function mostrarSlideS3(n) {
       let i;
       let slides = document.getElementsByClassName("bloco-s3");
       let dots = document.getElementsByClassName("dot-s3");
   
       if (n > slides.length) { indiceS3 = 1 }
       if (n < 1) { indiceS3 = slides.length }
   
       for (i = 0; i < slides.length; i++) {
           slides[i].classList.remove("ativo");
       }
       for (i = 0; i < dots.length; i++) {
           dots[i].classList.remove("ativo");
       }
   
       if (slides.length > 0) slides[indiceS3 - 1].classList.add("ativo");
       if (dots.length > 0) dots[indiceS3 - 1].classList.add("ativo");
   }



   
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