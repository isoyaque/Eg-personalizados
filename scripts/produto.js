const produtos = [
    { cod: 'T1', type: 'topper', price: '16,00', name: 'Topper simples', imagem: '' },
    { cod: 'T2', type: 'topper', price: '20,00', name: 'Topper 3D', imagem: '' },
    { cod: 'L1', type: 'lembrancinha', price: '7,00', name: 'Sacola personalizada', imagem: 'imagens/produtos/sacola barbie.jpeg' },
    { cod: 'L2', type: 'lembrancinha', price: '10,00', name: 'Cofrinho personalizado', imagem: 'imagens/produtos/cofre.jpeg' },
    { cod: 'L3', type: 'lembrancinha', price: '20,00', name: 'Kit diversão', itens: 'Livro de colorir personalizado, Kit de giz de cera e jogo da memoria', imagem: 'imagens/produtos/kit 1.jpeg' },
    { cod: 'C1', type: 'caixa', price: '5,00', name: 'Caixa bala 3D', imagem: 'imagens/produtos/aixa bala.jpeg' },
    { cod: 'C2', type: 'caixa', price: '5,00', name: 'Caixa milk 3D', imagem: 'imagens/produtos/Caixinha milk.jpeg' },
    { cod: 'C3', type: 'caixa', price: '6,00', name: 'Caixa piramide', imagem: 'imagens/produtos/caixa piramide.jpeg' },
    { cod: 'C4', type: 'caixa', price: '6,00', name: 'Caixa cubo 3D', imagem: 'imagens/produtos/caixa cubo.jpeg' },
    { cod: 'C5', type: 'caixa', price: '2,50', name: 'Marmitinha personalizada', imagem: 'imagens/produtos/marmita.jpeg' },
    { cod: 'C6', type: 'caixa', price: '7,00', name: 'Caixa tipo maleta personalizada', imagem: 'imagens/produtos/caixa maleta.jpeg' },
];


// produto.html
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index'); // Obtém o índice da URL

if (index !== null) {
    const produto = produtos[index]; // Acesse o produto usando o índice
    const nomeProduto = document.querySelector('.produto-nome');
    const imagemProduto = document.querySelector('.produto-imagem-unica');
    const precoProduto = document.querySelector('.produto-preço');

    // Atualiza os elementos com os dados do produto
    if (produto) {
        nomeProduto.innerHTML = produto.name;
        precoProduto.innerHTML = 'R$ ' + produto.price;
        imagemProduto.src = produto.imagem; // Coloque a imagem aqui
    } else {
        // Caso o produto não exista
        console.error('Produto não encontrado!');
    }
} else {
    console.error('Índice não fornecido!');
}



function criarProduto(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');

    const nomeProduto = document.createElement('h3');
    nomeProduto.textContent = produto.name;
    produtoDiv.appendChild(nomeProduto);

    const imagemProduto = document.createElement('img');
    imagemProduto.src = produto.imagem || 'imagens/produtos/default.jpg'; // Se não houver imagem, usar uma default
    produtoDiv.appendChild(imagemProduto);

    const precoProduto = document.createElement('p');
    precoProduto.textContent = 'R$ ' + produto.price;
    produtoDiv.appendChild(precoProduto);

    const botaoAcessar = document.createElement('button');
    botaoAcessar.textContent = 'Conferir agora';
    botaoAcessar.addEventListener('click', () => {
        // Aqui você define o índice que corresponde ao produto
        const index = produtos.indexOf(produto); // Obtém o índice do produto atual
        window.location.href = `produto.html?index=${index}`; // Redireciona para o produto.html com o índice
    });
    produtoDiv.appendChild(botaoAcessar);



    listaProdutos.appendChild(produtoDiv);
}




// botao zap

const chamarZap = document.querySelector('.chamar');

// Supondo que 'produto' é o objeto atual que contém as informações do produto
const produto = produtos[index]; // Supondo que você já tenha definido 'index' anteriormente

function chamarnoZap() {
    const nomeProduto = produto.name; // Pega o nome do produto
    window.location.href = `https://api.whatsapp.com/send?phone=5513997544393&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20item%20${nomeProduto}`;
}

chamarZap.addEventListener('click', () => {
    chamarnoZap();
});