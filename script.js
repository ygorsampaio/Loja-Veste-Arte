// Dados dos produtos (Simulando uma API)
const produtos = [
    {
        id: 1,
        nome: "Camisa 'Caos'",
        preco: 159.00,
        categoria: "Abstrato",
        imagem: "https://images.unsplash.com/photo-1574180563860-02653474c810?q=80&w=800"
    },
    {
        id: 2,
        nome: "T-Shirt 'Botânica'",
        preco: 129.00,
        categoria: "Floral",
        imagem: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800"
    },
    {
        id: 3,
        nome: "Blusa 'Prisma'",
        preco: 179.00,
        categoria: "Geométrico",
        imagem: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800"
    },
    {
        id: 4,
        nome: "Sweater 'Pincelada'",
        preco: 220.00,
        categoria: "Abstrato",
        imagem: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800"
    }
];

let carrinhoCount = 0;

// Função para renderizar os produtos
function renderizarProdutos(filtro = "todos") {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ""; // Limpa a tela

    const produtosFiltrados = filtro === "todos" 
        ? produtos 
        : produtos.filter(p => p.categoria === filtro);

    produtosFiltrados.forEach(produto => {
        const card = `
            <div class="group bg-white border border-zinc-100 overflow-hidden transition-all hover:shadow-xl">
                <div class="relative aspect-[3/4] overflow-hidden">
                    <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute top-4 left-4 bg-orange-600 text-white text-[9px] font-bold px-2 py-1 uppercase">
                        ${produto.categoria}
                    </div>
                </div>
                <div class="p-6 flex justify-between items-end">
                    <div>
                        <h3 class="text-sm font-bold uppercase mb-1">${produto.nome}</h3>
                        <p class="text-zinc-400 text-xs">Coleção Estampas 2026</p>
                        <p class="text-lg font-bold mt-2 text-orange-600">R$ ${produto.preco.toFixed(2)}</p>
                    </div>
                    <button onclick="adicionarAoCarrinho()" class="bg-zinc-900 text-white p-3 rounded-full hover:bg-orange-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// Lógica de Carrinho (Simples)
window.adicionarAoCarrinho = () => {
    carrinhoCount++;
    document.getElementById('cart-count').innerText = carrinhoCount;
    // Pequeno feedback visual
    const cartIcon = document.getElementById('cart-count');
    cartIcon.classList.add('scale-125');
    setTimeout(() => cartIcon.classList.remove('scale-125'), 200);
};

// Lógica de Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Estilo dos botões
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-zinc-900', 'text-white');
            b.classList.add('border', 'border-zinc-200');
        });
        e.target.classList.add('bg-zinc-900', 'text-white');
        e.target.classList.remove('border', 'border-zinc-200');

        // Filtrar produtos
        renderizarProdutos(e.target.dataset.filter);
    });
});

// Inicialização
renderizarProdutos();
