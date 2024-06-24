const phone = "17996282915";
const motoInput = document.getElementById("inputMoto");
const detalhesInput = document.getElementById("inputDetalhes");

//Função para enviar o pedido para o whatsapp
function enviarPedido(){
    let moto = motoInput.value;
    let detalhes = detalhesInput.value;

    if (moto == "" || detalhes == ""){

        //Exibe a notificação de erro
        Toastify({
            text: "Preencha todos os campos!",
            duration: 5000,
            gravity: "top",
            position: 'right',
            backgroundColor: "black",
            close: true,
            style: {
                backgroundColor: "black",
                color: "white",
                boxShadow: "none",
                borderRadius: "100px",
                border: "1px solid red"
            }
        }).showToast();

        //Aplica as classess
        motoInput.classList.add("empty-input")
        detalhesInput.classList.add("empty-input")

    } else{
        let mensagem = `Oi, que horário você tem disponível? // Moto: ${moto} | Detalhes do pedido: ${detalhes}`;

        let mensagemUrl =  encodeURIComponent(mensagem);
        
        window.open(`https://wa.me/${phone}?text=${mensagemUrl}`, "_blank");
    }
}

//Remove as classes de empty-input caso o usuário digite
motoInput.addEventListener("input", function(){
    motoInput.classList.remove("empty-input");
    detalhesInput.classList.remove("empty-input");
});

detalhesInput.addEventListener("input", function(){
    motoInput.classList.remove("empty-input");
    detalhesInput.classList.remove("empty-input");
});

//Função de copiar o número
const contatoBtn = document.getElementById("header-contato");

contatoBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(phone)

    Toastify({
        text: "Número de telefone copiado!",
        duration: 5000,
        gravity: "top",
        position: 'right',
        backgroundColor: "black",
        close: true,
        style: {
            backgroundColor: "black",
            color: "white",
            boxShadow: "none",
            borderRadius: "100px",
            border: "1px solid red"
        }
    }).showToast();
    
})