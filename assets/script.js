function enviarWhats() {
    const numero = "558598077612"; // Seu número com DDI e DDD
    const texto = document.getElementById("msg").value;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

//Espera o envio do form (Botão Submit) e so executa ao clicar
document.getElementById("formInt").addEventListener("submit", function(e) {
    
    //Cancela o comportamento padrão do formulário. (Recarregar a página ao clicar)
    e.preventDefault();
    
    //Guarda uma referencia para o proprio formulario que foi enviado, ou seja para sabermos de qual pergunta vem aquela resposta
    const form = e.target;
    
    //Cria um pct de Dados em formato de OBJETO no JS.
    const dados = {
        intencao: form.intencaoi.value,
        nome: form.nome.value
    };

    //Define a URL para onde os dados serão enviados - URL da API
    const url = "https://script.google.com/macros/s/AKfycbygSyQRapjhqRmLSL0149poquy8tkV1BxEhCbUcvRypIQsM5X3bpsMkbgJnXmzOklsS/exec";

    //Inicia a requisição com Fetch para URL do servidor.
    fetch(url,{
        //Indica o metodo que queremos compartilhar os dads, no caso Post, mas pode ser Get,Put,Delete.
        method: "POST",
        //Diz ao servidor que estamos enviando dados no formato Json
        headers: {
            "Content-Type":"application/json"
        },

        //Transforma o objeto em txt json
        body: JSON,stringfy(dados)

    })
    //Dps da request send, aqui espera a resposta e transforma em txt
    .then(res => res.text())

    //Mostra um alerta de envio
    .then(retorno => {
        alert("Intenção enviada com sucesso!!!");
        
        //Limpa o formulário
        form.reset();
    })

    .catch(erro => {
        alert("Erro ao enviar intenção, Tente novamente, caso persistir entre em contato com Davi 85 99793-4089")
        console.error(erro);
    });
})
