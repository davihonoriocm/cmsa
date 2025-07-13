
function enviarWhats() {
    const numero = "558598077612"; // Seu número com DDI e DDD
    const texto = document.getElementById("msg").value;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

// Adiciona um ouvinte de evento para o envio do formulário.
// Isso quer dizer: quando o formulário com id="formInt" for enviado, a função será executada.
document.getElementById("formInt").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const intencao = form.intencao.value;
    const nome = form.nome.value;
    const baseurl = "https://script.google.com/macros/s/AKfycbwPQgfqS-0VDwT9gB5mF4O4m5jKJLuMs1KcbfLWfR4trZepqtf0d8ReaFH4Fb-YoNaH/exec";
    const urlComDados = `${baseurl}?intencao=${encodeURIComponent(intencao)}&nome=${encodeURIComponent(nome)}`;

    console.log("URL para envio:", urlComDados);

    fetch(urlComDados)
        .then(res => res.text())
        .then(retorno => {
            alert(retorno);
            form.reset();
            history.replaceState(null, '', window.location.pathname);
        })
        .catch(err => {
            console.error("Erro:", err);
            alert(err);
        });
});

