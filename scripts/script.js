// Procutos



// carrosel

const esquerda = document.querySelector('.esquerda')
const direita = document.querySelector('.direita')
let imagem = 1;
let carrosel = document.querySelector('.carrosel')

function trocarImagemMais() {
    imagem += 1
}
function trocarImagemMenos() {
    imagem -= 1
}

function atualizarImagem() {
    if (imagem == 1) {
        carrosel.style.backgroundColor = 'green'
    } else if (imagem == 2) {
        carrosel.style.backgroundColor = 'black'
    } else if (imagem == 3) {
        carrosel.style.backgroundColor = 'pink'
    } else
        carrosel.style.backgroundColor = 'white'
}

esquerda.addEventListener('click', () => {
    trocarImagemMenos()
    if (imagem <= 0) {
        imagem = 4
    }
    atualizarImagem()
    console.log(imagem)
})

direita.addEventListener('click', () => {
    trocarImagemMais()
    if (imagem > 4) {
        imagem = 1
    }
    atualizarImagem()
    console.log(imagem)
})

setInterval(() => {
    imagem += 1
    atualizarImagem()
    if (imagem > 4) {
        imagem = 1
        atualizarImagem()
    } else if (imagem <= 0) {
        imagem = 4
        atualizarImagem()

    }
    console.log(imagem)

}, 5000)


//PRODUTOS


// Botão de Lembrancinhas
const lembrancinhasBtn = document.getElementById('lembrancinhasBtn');
lembrancinhasBtn.addEventListener('click', () => {
    window.location.href = 'produtos.html?categoria=lembrancinha';
});

// Botão de Topper
const topperBtn = document.getElementById('topperBtn');
topperBtn.addEventListener('click', () => {
    window.location.href = 'produtos.html?categoria=topper';
});

// Botão de Caixa
const caixaBtn = document.getElementById('caixaBtn');
caixaBtn.addEventListener('click', () => {
    window.location.href = 'produtos.html?categoria=caixa';
});