
document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('user-greeting').textContent = `Olá, ${usuarioLogado}!`;
        document.getElementById('logoutBtn').addEventListener('click', () => {
            sessionStorage.removeItem('usuarioLogado');
            window.location.href = 'index.html';
        });
    }

    fetchProducts();
    renderCart();
});

const catalogContainer = document.getElementById('product-catalog');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutButton = document.getElementById('checkoutButton');
const confirmOrderButton = document.getElementById('confirmOrderButton');
const checkoutTotal = document.getElementById('checkoutTotal');

let cartModalInstance;
let checkoutModalInstance;

document.addEventListener('DOMContentLoaded', function () {
    cartModalInstance = new bootstrap.Modal(document.getElementById('cartModal'));
    checkoutModalInstance = new bootstrap.Modal(document.getElementById('checkoutModal'));
});



let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
let allProducts = [];
let detailModalInstance;

document.addEventListener('DOMContentLoaded', function () {
    cartModalInstance = new bootstrap.Modal(document.getElementById('cartModal'));
    checkoutModalInstance = new bootstrap.Modal(document.getElementById('checkoutModal'));

    detailModalInstance = new bootstrap.Modal(document.getElementById('productDetailModal'));
});


async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        allProducts = await response.json();
        renderProducts(allProducts);
    } catch (error) {
        console.error("Falha ao buscar produtos:", error);
    }
}

function renderProducts(products) {
    catalogContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col';

        productCard.innerHTML = `
            <div class="card h-100 product-card">
                <img src="${product.image}" class="card-img-top p-3" alt="${product.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text mt-auto"><strong>Preço: R$ ${product.price.toFixed(2)}</strong></p>
                    <div class="d-grid gap-2 mt-2">
                         <button class="btn btn-outline-secondary" onclick="showProductDetails(${product.id})">Ver Detalhes</button>
                         <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        `;
        catalogContainer.appendChild(productCard);
    });
}

function showProductDetails(productId) {

    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductTitle').textContent = product.title;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = `R$ ${product.price.toFixed(2)}`;

    const modalFooter = document.getElementById('modalProductFooter');
    modalFooter.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}'); detailModalInstance.hide();">Adicionar ao Carrinho</button>
    `;

    detailModalInstance.show();
}

function addToCart(id, title, price, image) {

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(id) {

    const itemEncontrado = cart.find(item => item.id === id);

    if (itemEncontrado) {

        if (itemEncontrado.quantity > 1) {
            itemEncontrado.quantity--;
        } else {

            cart = cart.filter(item => item.id !== id);
        }
    }

    updateCart();
}

function updateCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        checkoutButton.disabled = true;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');

            cartItem.className = 'd-flex justify-content-between align-items-center mb-3';
            cartItem.innerHTML = `
                <div class="d-flex align-items-center col-8">
                    <img src="${item.image}" width="60" class="me-3" alt="${item.title}">
                    <div>
                        <h6 class="mb-1">${item.title}</h6>
                        <small class="text-muted">Qtd: ${item.quantity} x R$ ${item.price.toFixed(2)}</small>
                    </div>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <span class="fw-bold me-3" style="min-width: 90px; text-align: right;">R$ ${(item.quantity * item.price).toFixed(2)}</span>
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remover</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        checkoutButton.disabled = false;
    }

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    checkoutTotal.textContent = `R$ ${total.toFixed(2)}`;
}

checkoutButton.addEventListener('click', () => {
    cartModalInstance.hide();
    checkoutModalInstance.show();
});

confirmOrderButton.addEventListener('click', () => {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;

    if (deliveryAddress.trim() === '') {
        alert('Por favor, preencha o endereço de entrega.');
        return;
    }

    console.log('--- Pedido Confirmado ---');
    console.log('Itens:', cart);
    console.log('Método de Pagamento:', paymentMethod);
    console.log('Endereço de Entrega:', deliveryAddress);

    cart = [];
    updateCart();

    confirmOrderButton.blur();

    checkoutModalInstance.hide();
    alert('Obrigado! Seu pedido foi realizado com sucesso.');
});