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

// Captura o índice do produto a partir da URL
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index'); 

if (index !== null) {
    const produto = produtos[index]; // Acessa o produto pelo índice
    const nomeProduto = document.querySelector('.produto-nome');
    const imagemProduto = document.querySelector('.produto-imagem-unica');
    const precoProduto = document.querySelector('.produto-preço');

    // Atualiza os elementos com os dados do produto
    if (produto) {
        nomeProduto.innerHTML = produto.name;
        precoProduto.innerHTML = 'R$ ' + produto.price;
        imagemProduto.src = produto.imagem || 'imagens/produtos/default.jpg'; // Imagem padrão se não houver
    } else {
        console.error('Produto não encontrado!');
    }
} else {
    console.error('Índice não fornecido!');
}

// Seleciona os elementos do DOM para exibir os produtos
const listaProdutos = document.getElementById('lista-produtos');
const tipoProdutoSelect = document.getElementById('tipoProduto');

// Função para criar os elementos HTML de um produto
function criarProduto(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');

    const nomeProduto = document.createElement('h3');
    nomeProduto.textContent = produto.name;
    produtoDiv.appendChild(nomeProduto);

    const imagemProduto = document.createElement('img');
    imagemProduto.src = produto.imagem || 'imagens/produtos/default.jpg';
    produtoDiv.appendChild(imagemProduto);

    const precoProduto = document.createElement('p');
    precoProduto.textContent = 'R$ ' + produto.price;
    produtoDiv.appendChild(precoProduto);

    const botaoAcessar = document.createElement('button');
    botaoAcessar.textContent = 'Conferir agora';
    botaoAcessar.addEventListener('click', () => {
        const index = produtos.indexOf(produto);
        window.location.href = `produto.html?index=${index}`; 
    });
    produtoDiv.appendChild(botaoAcessar);

    listaProdutos.appendChild(produtoDiv);
}

// Função para exibir produtos com base no filtro selecionado
function exibirProdutos(tipo) {
    listaProdutos.innerHTML = ''; // Limpa a lista antes de adicionar novos produtos

    const produtosFiltrados = tipo === 'todos' ? produtos : produtos.filter(produto => produto.type === tipo);
    produtosFiltrados.forEach(produto => criarProduto(produto));
}

// Evento para mudar o filtro de produtos quando a seleção é alterada
tipoProdutoSelect.addEventListener('change', (e) => {
    exibirProdutos(e.target.value);
});

// Inicialmente exibe todos os produtos
exibirProdutos('todos');

// Função para obter o valor do parâmetro da URL
function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
          results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Obtém o valor do parâmetro 'categoria' da URL
const categoria = getParameterByName('categoria');

// Se houver um parâmetro 'categoria', define o valor do select
if (categoria) {
    tipoProdutoSelect.value = categoria;
    exibirProdutos(categoria);
}

// Botão para chamar no WhatsApp
const chamarZap = document.querySelector('.chamar');

// Função para chamar no WhatsApp
function chamarnoZap() {
    const nomeProduto = produtos[index].name; 
    window.location.href = `https://api.whatsapp.com/send?phone=5513997544393&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20item%20${nomeProduto}`;
}

if (chamarZap) {
    chamarZap.addEventListener('click', chamarnoZap);
}
