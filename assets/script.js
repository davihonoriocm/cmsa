
function enviarWhats() {
    const numero = "558598077612"; // Seu número com DDI e DDD
    const texto = document.getElementById("msg").value;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

document.getElementById("formInt").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const intencao = form.elements["intencao"].value;
    const nome = form.elements["nome"].value;

    const baseurl = "https://script.google.com/macros/s/AKfycbzE1stXGc2U3HiKIdEr8Qyw9d_oxn-QOge8wYcPthtPzRUjEhcbKwirT1eLTWyHANwt/exec";
    const urlComDados = `${baseurl}?intencao=${encodeURIComponent(intencao)}&nome=${encodeURIComponent(nome)}`;
    console.log("URL para envio:", urlComDados);

    fetch(urlComDados)
        .then(res => res.text())
        .then(retorno => {
            alert(retorno);
            form.reset();
            history.replaceState(null, '', window.location.pathname); // limpa a URL
        })
        .catch(err => {
            console.error("Erro:", err);
            alert("Erro ao enviar os dados.");
        });
});
