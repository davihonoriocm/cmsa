function enviarWhats() {
    const numero = "558598077612"; // Seu número com DDI e DDD
    const texto = document.getElementById("msg").value;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}