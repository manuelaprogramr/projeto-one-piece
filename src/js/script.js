const botoes = document.querySelectorAll(".botao")
const personagens = document.querySelectorAll(".personagem") 

//a lista botoes, recebendo uma imagem/buttom com seletor  botão percorrera todo a classe botao e adc um addEventListener.
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

           //Aquele que ja foi clicado, remover a classe selecionado dele.
        desselecionarBotao();
            //adc a classe "selecionado" no botao que o usuario clicou
           botao.classList.add("selecionado");

            const personagemSelecionado = document.querySelector(".personagem.selecionado")
            personagemSelecionado.classList.remove("selecionado");


         //adc a classe "selecionado" no personagem que o usuario selecionou
           personagens[indice].classList.add("selecionado");//adcionando uma classe ao clicar no botao.
    });
});



function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

