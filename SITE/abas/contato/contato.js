document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. EFEITO DE SCROLL NA NAVBAR ---
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('minimizada');
        } else {
            nav.classList.remove('minimizada');
        }
    });

    // --- 2. MÁSCARA DE TELEFONE (Formatação automática) ---
    const inputTelefone = document.getElementById('telefone');

    inputTelefone.addEventListener('input', function(e) {
        let valor = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
        
        if (valor.length > 11) valor = valor.slice(0, 11); // Limita tamanho

        if (valor.length > 10) {
            // Formato Celular (11) 91234-5678
            valor = valor.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (valor.length > 5) {
            // Formato Fixo (11) 1234-5678 (enquanto digita)
            valor = valor.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (valor.length > 2) {
            // Apenas DDD (11) 123...
            valor = valor.replace(/^(\d\d)(\d{0,5}).*/, "($1) $2");
        } else {
            // Apenas o começo
            valor = valor.replace(/^(\d*)/, "($1");
        }
        
        e.target.value = valor;
    });

    // --- 3. BOTÕES SOCIAIS INFERIORES ---
    // Substitua os links abaixo pelos links reais da Movenow Realuz
    document.getElementById('whatsapp').addEventListener('click', () => {
        window.open('https://wa.me/5511999999999', '_blank'); // Coloque seu número aqui
    });

    document.getElementById('instagram').addEventListener('click', () => {
        window.open('https://instagram.com/seu_perfil', '_blank');
    });

    document.getElementById('linkedin').addEventListener('click', () => {
        window.open('https://linkedin.com/in/seu_perfil', '_blank');
    });

    document.getElementById('gmail').addEventListener('click', () => {
        window.location.href = 'mailto:contato@movenowrealuz.com.br';
    });

    // --- 4. ENVIO DO FORMULÁRIO PARA O WHATSAPP ---
    const formulario = document.getElementById('formulario-contato');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a página de recarregar

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        // Cria a mensagem formatada
        const mensagem = `*Novo Contato pelo Site*%0A%0A` +
                         `*Nome:* ${nome}%0A` +
                         `*Email:* ${email}%0A` +
                         `*Telefone:* ${telefone}`;

        // Número da empresa que receberá o lead (coloque o número real aqui)
        const numeroDestino = '5519999999999'; 

        // Abre o WhatsApp Web/App
        const url = `https://wa.me/${numeroDestino}?text=${mensagem}`;
        window.open(url, '_blank');
    });
});


document.getElementById('formulario-contato').addEventListener('submit', function(e){
    e.preventDefault(); // Impede que a página recarregue

    // 1. Captura os valores digitados
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    // --- CONFIGURAÇÃO ---
    let numeroDestino = "5519994296627"; 
    
    // URL CORRETA DA SUA PLANILHA (JÁ ATUALIZADA)
    let scriptURL = "https://script.google.com/macros/s/AKfycbxTbCSi0CUlB_LKJqZ5hKnzeVe8V3Wr7lMaIh7JfR7I49PZZDXltpDrFpNDE2b5Sho/exec"; 

    // 2. Envia para o Google Sheets (nos bastidores)
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Importante para segurança do navegador
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            telefone: telefone
        })
    }).then(() => {
        console.log("Dados salvos na planilha com sucesso!");
    }).catch(err => console.error("Erro ao salvar na planilha:", err));

    // 3. Monta a mensagem e abre o WhatsApp
    let mensagem = `Olá, vim pelo site da *Movenow Realuz*!%0A%0A`;
    mensagem += `*Nome:* ${nome}%0A`;
    mensagem += `*E-mail:* ${email}%0A`;
    mensagem += `*Contato:* ${telefone}`;

    let url = `https://wa.me/${numeroDestino}?text=${mensagem}`;
    
    // Pequeno atraso de meio segundo apenas para garantir que o navegador processou o envio da planilha
    setTimeout(() => {
        window.open(url, '_blank');
    }, 500);
});