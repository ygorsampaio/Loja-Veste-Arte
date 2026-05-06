const PRODUTOS = [

  // ── FUTEBOL ──
  {
    id: 1, cat: 'futebol', tag: 'Clube',
    nome: 'Santa Cruz — Retrô',
    sub: 'Camisa estampada inspirada na identidade clássica, trazendo a energia das arquibancadas e a essência histórica do Santa Cruz.',
    preco: 89.90, old: 109.90,
    img: 'https://cdn.awsli.com.br/800x800/1545/1545280/produto/62183004/eff712783c.jpg'
  },
  {
    id: 2, cat: 'futebol', tag: 'Lenda',
    nome: 'Seleção Brasileira — Romário 94',
    sub: 'Camisa estampada inspirada na comemoração histórica de Romário após o título da Copa de 1994, trazendo nostalgia, orgulho brasileiro e estética retrô.',
    preco: 69.90, old: 89.90,
    img: 'https://r2.mont.ink/produto_imagens/241723/phpp9ydd2.png'
  },
  {
    id: 3, cat: 'futebol', tag: 'Ídolo',
    nome: 'Cristiano Ronaldo — Champions Glory',
    sub: 'Camisa estampada inspirada na comemoração histórica de CR7 após conquistar a Champions League pelo Real Madrid, trazendo atmosfera lendária.',
    preco: 74.90,
    img: 'https://images.tcdn.com.br/img/img_prod/1183067/camiseta_oversized_cristiano_ronaldo_2097_1_d65e9971f6d5b9756695d613252ceff3.jpg'
  },
  {
    id: 26, cat: 'futebol', tag: 'Craque',
    nome: 'Napoli — Kvaradona Era',
    sub: 'Camisa estampada inspirada na fase histórica de Kvaratskhelia no Napoli, trazendo atmosfera italiana, futebol arte e homenagem ao apelido "Kvaradona".',
    preco: 69.90,
    img: 'https://ih1.redbubble.net/image.4131569508.5641/ssrco,slim_fit_t_shirt,flatlay,05081f:66c8590f4e,front,wide_portrait,x1000-bg,f8f8f8.1.jpg'
  },
  {
    id: 40, cat: 'futebol', tag: 'Clube',
    nome: 'Bayern de Munique — Olise 2026',
    sub: 'Camisa estampada nas cores preta e vermelha inspirada em Michael Olise no Bayern de Munique, trazendo estética moderna, velocidade e presença europeia.',
    preco: 69.90, novo: true,
    img: 'https://i.etsystatic.com/62892551/r/il/e3721f/7883909166/il_fullxfull.7883909166_sfn1.jpg'
  },

  // ── GAMES ──
  {
    id: 4, cat: 'games', tag: 'Survival',
    nome: 'The Last of Us Part II',
    sub: 'Camisa estampada inspirada no universo pós-apocalíptico de The Last of Us, trazendo um visual intenso, sombrio e marcante.',
    preco: 84.90, old: 99.90,
    img: 'https://acdn-us.mitiendanube.com/stores/002/096/788/products/blusinha-abbys-revenge-014febc92ffb8447cf17087736661740-640-0.webp'
  },
  {
    id: 5, cat: 'games', tag: 'Open World',
    nome: 'Grand Theft Auto VI',
    sub: 'Camisa estampada inspirada no universo neon e urbano de GTA VI, combinando caos, estilo e estética street moderna.',
    preco: 79.90, novo: true,
    img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpnwmnt0iyy4c1'
  },
  {
    id: 6, cat: 'games', tag: 'Western',
    nome: 'Red Dead Redemption II',
    sub: 'Camisa estampada inspirada no Velho Oeste de Red Dead Redemption II, trazendo clima de aventura, liberdade e sobrevivência.',
    preco: 84.90, old: 104.90,
    img: 'https://i.etsystatic.com/47673590/r/il/dae349/7961898523/il_300x300.7961898523_rh92.jpg'
  },
  {
    id: 27, cat: 'games', tag: 'Horror',
    nome: 'Resident Evil — Nemesis',
    sub: 'Camisa estampada inspirada no terror clássico de Resident Evil, destacando a presença brutal e icônica de Nemesis.',
    preco: 79.90,
    img: 'https://i.etsystatic.com/57364975/r/il/149b98/7670176941/il_fullxfull.7670176941_94bd.jpg'
  },
  {
    id: 28, cat: 'games', tag: 'Horror',
    nome: 'Silent Hill — Pyramid Head',
    sub: 'Camisa estampada inspirada no terror psicológico de Silent Hill, trazendo a aura sombria e perturbadora de Pyramid Head.',
    preco: 69.90, old: 89.90,
    img: 'https://hellxhell.com/cdn/shop/files/silenthill.png?v=1736056857&width=1445'
  },

  // ── FILMES ──
  {
    id: 7, cat: 'filmes', tag: 'Cult',
    nome: 'Laranja Mecânica — Ultra Violence',
    sub: 'Camisa estampada inspirada no visual icônico de Laranja Mecânica, trazendo estética cult, rebeldia e identidade underground.',
    preco: 65.90,
    img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrpyn1ixfcjf92'
  },
  {
    id: 8, cat: 'filmes', tag: 'Ação',
    nome: 'John Wick — Continental Club',
    sub: 'Camisa estampada inspirada no universo elegante e brutal de John Wick, combinando ação cinematográfica e visual street premium.',
    preco: 69.90, old: 84.90,
    img: 'https://photos.enjoei.com.br/camiseta-john-wick-101957855/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8zNDkzODUyOS8wZjhjZTEyZGVjN2I1ZDY5YjMxNzQ3MzkxNjNkYzM5NS5qcGc'
  },
  {
    id: 9, cat: 'filmes', tag: 'Sci-Fi',
    nome: 'Interestelar — Beyond Time',
    sub: 'Camisa estampada inspirada em Interestelar, trazendo referências ao espaço profundo, exploração e conexão além do tempo.',
    preco: 69.90,
    img: 'https://img.elo7.com.br/product/zoom/4F6AA27/camiseta-interestelar-interestelar.jpg'
  },
  {
    id: 29, cat: 'filmes', tag: 'Fantasia',
    nome: 'Senhor dos Anéis — Mordor Awaits',
    sub: 'Camisa estampada inspirada no universo de Senhor dos Anéis, trazendo atmosfera medieval, aventura épica e estética fantástica.',
    preco: 74.90,
    img: 'https://cf.shopee.com.br/file/6fadffc3e2cec6c3464470d3698dae8e'
  },
  {
    id: 30, cat: 'filmes', tag: 'Cult',
    nome: 'Clube da Luta — Project Mayhem',
    sub: 'Camisa estampada inspirada em Clube da Luta, combinando rebeldia urbana, visual underground e estética de filme cult.',
    preco: 65.90, old: 79.90,
    img: 'https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjzu7ecd0qo38f'
  },

  // ── ANIME ──
  {
    id: 10, cat: 'anime', tag: 'Dark',
    nome: 'Tokyo Ghoul — Kaneki Ken',
    sub: 'Camisa estampada inspirada em Tokyo Ghoul, trazendo visual sombrio, conflito interno e estética urbana intensa.',
    preco: 59.90, old: 74.90,
    img: 'https://http2.mlstatic.com/D_NQ_NP_859059-MLB81382418312_122024-O-camiseta-anime-tokyo-ghoul-manga-camisa-casual-kaneki-ken.webp'
  },
  {
    id: 11, cat: 'anime', tag: 'Shounen',
    nome: 'Dragon Ball Z — Broly',
    sub: 'Camisa estampada inspirada no lendário Broly, combinando energia explosiva, força absurda e visual clássico de batalha.',
    preco: 59.90,
    img: 'https://vlack.in/cdn/shop/files/vk-broly-dragon-ball-z-black-oversized-t-shirt-full-back-green-illustration-japanese-text.webp?v=1763899900&width=1445'
  },
  {
    id: 12, cat: 'anime', tag: 'Hero',
    nome: 'Boku no Hero — All Might',
    sub: 'Camisa estampada inspirada no Símbolo da Paz, trazendo estética heroica, presença marcante e energia de esperança.',
    preco: 69.90, novo: true,
    img: 'https://shonenstyle.com.br/cdn/shop/files/ALLMIGHTBRANCA.png?v=1766607023&width=4000'
  },
  {
    id: 13, cat: 'anime', tag: 'Isekai',
    nome: 'Re:Zero — Subaru Natsuki',
    sub: 'Camisa estampada inspirada em Re:Zero, trazendo drama psicológico, destino quebrado e atmosfera intensa de isekai.',
    preco: 64.90, old: 79.90,
    img: 'https://i.etsystatic.com/53996626/r/il/302642/6440870412/il_300x300.6440870412_cr4h.jpg'
  },
  {
    id: 31, cat: 'anime', tag: 'Psychological',
    nome: 'Death Note — Ryuk',
    sub: 'Camisa estampada inspirada em Death Note, trazendo estética sombria, inteligência estratégica e clima psicológico marcante.',
    preco: 64.90,
    img: 'https://img.elo7.com.br/product/360x360/4DC9A8D/camiseta-death-note-ryuk-goku.jpg'
  },

  // ── MÚSICA ──
  {
    id: 14, cat: 'musica', tag: 'Grunge',
    nome: 'Nirvana — Smells Like Teen Spirit',
    sub: 'Camisa estampada inspirada na estética grunge dos anos 90, trazendo visual desgastado e identidade alternativa underground.',
    preco: 59.90, old: 74.90,
    img: 'https://ultraviolencestore.com.br/wp-content/uploads/2016/10/Nirvana-preta.png'
  },
  {
    id: 15, cat: 'musica', tag: 'Rap',
    nome: "Racionais MC's — Nada como um dia após o outro dia",
    sub: "Camisa estampada inspirada na estética urbana e nas letras marcantes dos Racionais MC's, trazendo identidade de rua e peso cultural.",
    preco: 69.90, novo: true,
    img: 'https://i.pinimg.com/564x/56/35/8c/56358c493aac04386c4561fe93b43879.jpg'
  },
  {
    id: 16, cat: 'musica', tag: 'Alternative',
    nome: 'Deftones — Around the Far',
    sub: 'Camisa estampada inspirada na atmosfera melancólica e intensa do Deftones, misturando rock alternativo e estética sombria.',
    preco: 59.90, old: 74.90,
    img: 'https://gcp-images.majestic.ink.rsvcloud.com/images/product_v2/main_image/e3564c4cfb86bc1f37b0f6e32e771062.jpg'
  },
  {
    id: 32, cat: 'musica', tag: 'Rap',
    nome: 'L7NNON — Freio da Blazer',
    sub: 'Camisa estampada inspirada na estética do rap nacional, trazendo visual urbano, identidade street e influência do trap brasileiro.',
    preco: 64.90,
    img: 'https://img.elo7.com.br/product/685x685/4ED4589/camiseta-l7nnon-camiseta-l7nnon.jpg'
  },
  {
    id: 33, cat: 'musica', tag: 'Alternative',
    nome: 'Radiohead — The Bends',
    sub: 'Camisa estampada inspirada na estética introspectiva e experimental do Radiohead, com visual minimalista e atmosfera melancólica.',
    preco: 69.90, novo: true,
    img: 'https://vrzshop.com/2506-large_default/t-shirt-radiohead-the-bends.jpg'
  },

  // ── CULTURAL ──
  {
    id: 17, cat: 'cultural', tag: 'Rio',
    nome: 'Rio de Janeiro continua lindo',
    sub: 'Camisa estampada inspirada nas tardes cariocas, combinando praia, o Cristo Redentor e a energia única do Rio de Janeiro.',
    preco: 54.90,
    img: 'https://down-br.img.susercontent.com/file/2f1cf572227b34ef528428870ea22f31'
  },
  {
    id: 18, cat: 'cultural', tag: 'São Paulo',
    nome: 'São Paulo — Paulista',
    sub: 'Camisa estampada inspirada na estética urbana de São Paulo, trazendo a Paulista como protagonista.',
    preco: 54.90,
    img: 'https://images.tcdn.com.br/img/img_prod/737444/90_camiseta_paulista_sao_paulo_identidade_urbana_cida_3_20250916102318_e8d6fd2842ec.jpg'
  },
  {
    id: 34, cat: 'cultural', tag: 'Lenda',
    nome: 'Perna Cabeluda — Recife Noturno',
    sub: 'Camisa estampada inspirada na famosa lenda urbana pernambucana da Perna Cabeluda, misturando terror regional e estética street.',
    preco: 59.90, novo: true,
    img: 'https://gcp-images.majestic.ink.rsvcloud.com/images/product_art/final_image/b602f064a1857ec319b0ddecf9c56fec.webp'
  },
  {
    id: 35, cat: 'cultural', tag: 'Pernambuco',
    nome: 'Camisa de PE — Pernambuco Vive',
    sub: 'Camisa estampada inspirada na identidade pernambucana, trazendo orgulho nordestino, cultura urbana e referências visuais do Recife.',
    preco: 59.90,
    img: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-lfvhgx6aaz461a'
  },
  {
    id: 36, cat: 'cultural', tag: 'Olinda',
    nome: 'Pitombeira — Agente Secreto',
    sub: 'Camisa estampada inspirada no tradicional bloco Pitombeira dos Quatro Cantos e na estética do filme Agente Secreto.',
    preco: 49.90, novo: true,
    img: 'https://gama-uploads.nyc3.cdn.digitaloceanspaces.com/2026/01/f-objeto-camiseta-pitombeira-m.jpg'
  },
];

// ── LABELS E DESCRIÇÕES ──────────────────────────────
const LABELS = {
  all:      'Catálogo completo',
  futebol:  'Futebol',
  games:    'Games',
  filmes:   'Filmes',
  anime:    'Anime',
  musica:   'Música',
  cultural: 'Cultural',
};

const DESC = {
  futebol:  'Clubes, ídolos e momentos históricos do futebol mundial.',
  games:    'Universos icônicos dos videogames em estampas autorais.',
  filmes:   'Do cult ao blockbuster — cinema que você usa.',
  anime:    'Personagens e momentos inesquecíveis da cultura japonesa.',
  musica:   'Rock, rap e alternativo na pele.',
  cultural: 'Identidade brasileira, nordestina e urbana.',
};

// ── ESTADO ──────────────────────────────────────────
let cart       = [];
let activeCat  = 'all';
let searchQ    = '';
let sortMode   = 'default';
let toastTimer = null;

// ── HELPERS ─────────────────────────────────────────
const fmt = n  => 'R$ ' + n.toFixed(2).replace('.', ',');
const $   = id => document.getElementById(id);

// ── RENDERIZAR GRID ──────────────────────────────────
function renderGrid() {
  const q = searchQ.toLowerCase();

  let lista = PRODUTOS.filter(p =>
    (activeCat === 'all' || p.cat === activeCat) &&
    (
      p.nome.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q)  ||
      p.tag.toLowerCase().includes(q)
    )
  );

  // ordenação
  if (sortMode === 'preco-asc')   lista = [...lista].sort((a, b) => a.preco - b.preco);
  if (sortMode === 'preco-desc')  lista = [...lista].sort((a, b) => b.preco - a.preco);
  if (sortMode === 'novo')        lista = [...lista].sort((a, b) => (b.novo ? 1 : 0) - (a.novo ? 1 : 0));

  $('count-label').textContent  = lista.length + ' produtos';
  $('hero-badge').innerHTML     = `${PRODUTOS.length}<br><span>peças</span>`;

  if (!lista.length) {
    $('grid').innerHTML = `
      <p style="color:var(--text2);font-size:14px;grid-column:1/-1;padding:40px 0;">
        Nenhum produto para "<strong>${searchQ}</strong>".
      </p>`;
    return;
  }

  $('grid').innerHTML = lista.map((p, i) => `
    <article class="card" data-cat="${p.cat}" style="animation-delay:${i * 0.03}s">
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.nome}" loading="lazy" />
        <div class="card-badges">
          <span class="badge-cat">${LABELS[p.cat] || p.cat}</span>
          ${p.novo ? '<span class="badge-new">Novo</span>'  : ''}
          ${p.old  ? '<span class="badge-sale">Promoção</span>' : ''}
        </div>
      </div>
      <div class="card-body">
        <div class="card-tag">${p.tag}</div>
        <div class="card-name">${p.nome}</div>
        <div class="card-sub">${p.sub}</div>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="card-price">${fmt(p.preco)}</span>
            ${p.old ? `<span class="card-old">${fmt(p.old)}</span>` : ''}
          </div>
          <button class="add-btn" onclick="addCart(${p.id})" aria-label="Adicionar ${p.nome} ao carrinho">+</button>
        </div>
      </div>
    </article>
  `).join('');
}

// ── CARRINHO ─────────────────────────────────────────
window.addCart = function(id) {
  const p  = PRODUTOS.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else cart.push({ ...p, qty: 1 });
  renderCart();
  bumpBadge();
  showToast('✓  ' + p.nome + ' adicionado!');
};

window.changeQty = function(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) cart = cart.filter(x => x.id !== id);
  renderCart();
};

window.removeItem = function(id) {
  cart = cart.filter(x => x.id !== id);
  renderCart();
};

function renderCart() {
  const total    = cart.reduce((a, i) => a + i.preco * i.qty, 0);
  const totalQty = cart.reduce((a, i) => a + i.qty, 0);

  $('cart-count').textContent = totalQty;
  $('cart-total').textContent = fmt(total);

  if (!cart.length) {
    $('cart-items').innerHTML = `
      <p class="empty-msg">
        <span class="empty-icon">🛒</span>
        Seu carrinho está vazio.<br>Adicione produtos para começar.
      </p>`;
    return;
  }

  $('cart-items').innerHTML = cart.map(i => `
    <div class="ci">
      <img src="${i.img}" alt="${i.nome}" />
      <div>
        <div class="ci-tag">${i.tag}</div>
        <div class="ci-name">${i.nome}</div>
      </div>
      <div style="text-align:right">
        <div class="ci-price">${fmt(i.preco * i.qty)}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${i.id},-1)" aria-label="Diminuir">−</button>
          <span  class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id}, 1)" aria-label="Aumentar">+</button>
          <button class="rm-btn"  onclick="removeItem(${i.id})"   aria-label="Remover">×</button>
        </div>
      </div>
    </div>
  `).join('');
}

// animação no badge do carrinho ao adicionar
function bumpBadge() {
  const el = $('cart-count');
  el.classList.remove('bump');
  void el.offsetWidth; // reflow para reiniciar animação
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 200);
}

// ── DRAWER ───────────────────────────────────────────
function openDrawer()  {
  $('drawer').classList.add('open');
  $('overlay').classList.add('open');
}
function closeDrawer() {
  $('drawer').classList.remove('open');
  $('overlay').classList.remove('open');
}

$('cart-btn').addEventListener('click', openDrawer);
$('close-drawer').addEventListener('click', closeDrawer);
$('close-drawer2').addEventListener('click', closeDrawer);
$('overlay').addEventListener('click', closeDrawer);

// ── FILTRO DE CATEGORIAS ─────────────────────────────
function setCategory(cat) {
  activeCat = cat;
  document.querySelectorAll('.pill').forEach(p =>
    p.classList.toggle('active', p.dataset.cat === cat)
  );
  $('section-title').textContent = LABELS[cat] || 'Catálogo';
  $('section-desc').textContent  = DESC[cat]   || '';
  renderGrid();
}

$('cat-pills').addEventListener('click', e => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  setCategory(btn.dataset.cat);
});

document.querySelectorAll('.hero-cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setCategory(btn.dataset.cat);
    $('catalog').scrollIntoView({ behavior: 'smooth' });
  });
});

// ── BUSCA ─────────────────────────────────────────────
$('search-input').addEventListener('input', e => {
  searchQ = e.target.value;
  $('search-clear').style.display = searchQ ? 'block' : 'none';
  renderGrid();
});

$('search-clear').addEventListener('click', () => {
  searchQ = '';
  $('search-input').value = '';
  $('search-clear').style.display = 'none';
  renderGrid();
});

// ── ORDENAÇÃO ─────────────────────────────────────────
$('sort-select').addEventListener('change', e => {
  sortMode = e.target.value;
  renderGrid();
});

// ── DARK MODE ─────────────────────────────────────────
function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  $('icon-moon').style.display = dark ? 'none'  : 'block';
  $('icon-sun').style.display  = dark ? 'block' : 'none';
  try { localStorage.setItem('va-tema', dark ? '1' : '0'); } catch (_) {}
}

$('theme-btn').addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});

// ── TOAST ─────────────────────────────────────────────
function showToast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ── QR CODE (canvas) ──────────────────────────────────
function gerarQR(canvas, url) {
  const ctx    = canvas.getContext('2d');
  const sz     = 180;
  const cols   = 19;
  const cell   = Math.floor((sz - 20) / cols);
  const offset = 10;
  const seed   = url.split('').reduce((a, c) => a + c.charCodeAt(0), 0);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, sz, sz);

  ctx.fillStyle = '#0d0d0d';
  for (let r = 0; r < cols; r++) {
    for (let c = 0; c < cols; c++) {
      if ((seed * (r + 1) * (c + 1) + r * 7 + c * 13) % 17 > 8) {
        ctx.fillRect(offset + c * cell, offset + r * cell, cell - 1, cell - 1);
      }
    }
  }

  // finder patterns (cantos)
  [[offset, offset], [offset + (cols - 7) * cell, offset], [offset, offset + (cols - 7) * cell]]
    .forEach(([x, y]) => {
      ctx.fillStyle = '#0d0d0d'; ctx.fillRect(x, y, cell * 7, cell * 7);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(x + cell, y + cell, cell * 5, cell * 5);
      ctx.fillStyle = '#0d0d0d'; ctx.fillRect(x + cell * 2, y + cell * 2, cell * 3, cell * 3);
    });

  ctx.strokeStyle = '#e8410a';
  ctx.lineWidth   = 4;
  ctx.strokeRect(2, 2, sz - 4, sz - 4);
}

// ── CHECKOUT ─────────────────────────────────────────
$('checkout-btn').addEventListener('click', () => {
  if (!cart.length) { showToast('Carrinho vazio!'); return; }

  const total    = cart.reduce((a, i) => a + i.preco * i.qty, 0);
  const totalQty = cart.reduce((a, i) => a + i.qty, 0);

  const linhas = cart.map(i =>
    `• ${i.qty}x ${i.nome} — ${fmt(i.preco * i.qty)}`
  ).join('\n');

  const msg   = `Olá! Quero finalizar meu pedido:%0A${encodeURIComponent(linhas)}%0A*Total: ${fmt(total)}*`;
  const waUrl = `https://wa.me/5581997153027?text=${msg}`;

  gerarQR($('qr-canvas'), waUrl);
  $('order-summary').textContent = `${totalQty} ${totalQty === 1 ? 'item' : 'itens'} · Total ${fmt(total)}`;
  $('wa-btn').onclick = () => window.open(waUrl, '_blank');
  $('modal').classList.add('open');
  closeDrawer();
});

$('close-modal').addEventListener('click',  () => $('modal').classList.remove('open'));
$('close-modal2').addEventListener('click', () => $('modal').classList.remove('open'));
$('modal').addEventListener('click', e => {
  if (e.target === $('modal')) $('modal').classList.remove('open');
});

// ── INIT ─────────────────────────────────────────────
(function init() {
  try {
    if (localStorage.getItem('va-tema') === '1') setTheme(true);
  } catch (_) {}
  renderGrid();
  renderCart();
})();
