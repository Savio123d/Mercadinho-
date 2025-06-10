const catalogContainer = document.getElementById('product-catalog');

async function fetchProducts() {
  try {
    // Adiciona um feedback de carregamento
    catalogContainer.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
    
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    catalogContainer.innerHTML = '<p class="text-danger">Erro ao carregar produtos. Tente novamente mais tarde.</p>';
  }
}

function renderProducts(products) {
  catalogContainer.innerHTML = ''; // Limpa o spinner de carregamento

  products.forEach(product => {
    // Cria a coluna da grid do Bootstrap para responsividade
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';

    // Cria o card do produto usando as classes do Bootstrap
    const productCard = document.createElement('div');
    productCard.className = 'card product-card shadow-sm';

    productCard.innerHTML = `
      <img src="${product.image}" class="card-img-top" alt="${product.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text text-truncate">${product.description}</p>
        <h4 class="mt-auto">R$ ${product.price.toFixed(2)}</h4>
      </div>
    `;
    
    col.appendChild(productCard);
    catalogContainer.appendChild(col);
  });
}

// Inicia o carregamento dos produtos
fetchProducts();