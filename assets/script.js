function enviarWhats() {
    const numero = "558598077612"; // Seu número com DDI e DDD
    const texto = document.getElementById("msg").value;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

// Adiciona um ouvinte de evento para o envio do formulário.
// Isso quer dizer: quando o formulário com id="formInt" for enviado, a função será executada.
document.getElementById("formInt").addEventListener("submit", function (e) {

    // Previne o comportamento padrão do formulário (que seria recarregar a página e enviar pela URL).
    // Isso é importante para podermos tratar o envio com JavaScript de forma personalizada.
    e.preventDefault();

    // Aqui pegamos o próprio formulário que foi enviado.
    // `e.target` se refere ao elemento que disparou o evento — neste caso, o <form>.
    const form = e.target;

    // Pegamos os valores digitados pelo usuário nos campos do formulário.
    // Estamos acessando diretamente os elementos pelo atributo `name` definido no HTML.
    const intencao = form.intencaoi.value;
    const nome = form.nome.value;

    // Aqui definimos a base da URL do Google Apps Script (Web App).
    // É para essa URL que vamos mandar os dados.
    // Substitua abaixo pela sua própria URL do Web App.
    const baseurl = "https://script.google.com/macros/s/AKfycbxCQSqGIYJLXRqld-gU5a_Se80LIYC7_OhBnBlNbSsn-TGAGEiJROeZcE1QdCwWSTXK/exec";

    // Agora montamos a URL completa com os dados (método GET).
    // Usamos encodeURIComponent() para evitar problemas com acentos, espaços e caracteres especiais.
    const urlComDados = `${baseurl}?intencao=${encodeURIComponent(intencao)}&nome=${encodeURIComponent(nome)}`;
    console.log("URL para envio:", urlComDados);
    // Enviamos a requisição GET usando fetch.
    // Como estamos usando método GET, os dados já estão embutidos na URL (urlComDados).
    fetch(urlComDados)
        // Quando o servidor responder, transformamos o conteúdo em texto.
        .then(res => res.text())

        // Com o texto de resposta em mãos, mostramos a mensagem na página e limpamos o formulário.
        .then(retorno => {
            // Mostramos a resposta do servidor na tela, dentro do parágrafo com id="resposta".
            alert(retorno);

            // Limpamos os campos do formulário para uma nova submissão.
            form.reset();
        })

        // Se acontecer algum erro (ex: sem internet ou URL errada), mostramos uma mensagem de erro no console e na tela.
        .catch(err => {
            console.error("Erro:", err);
            alert(err);
        });

});

