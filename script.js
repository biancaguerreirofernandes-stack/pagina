// Espera o HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão pelo seu ID
    const meuBotao = document.getElementById('meuBotao');
    // Seleciona o parágrafo da mensagem pelo seu ID
    const mensagemParagrafo = document.getElementById('mensagem');

    // Adiciona um "ouvinte de evento" (event listener) ao botão
    // Quando o botão é clicado, a função dentro é executada
    meuBotao.addEventListener('click', function() {
        // Altera o texto do parágrafo da mensagem
        mensagemParagrafo.textContent = 'Você clicou no botão! Parabéns!';
        // Altera a cor do texto para destacar
        mensagemParagrafo.style.color = 'blue';
    });
});
