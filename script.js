// Esperando que me entregues la lista de productos
const productos = [];

// Función para renderizar tarjetas de productos en pantalla
function mostrarProductos(items) {
  const container = document.getElementById('products-grid');
  container.innerHTML = '';

  if (items.length === 0) {
    container.innerHTML = '<p class="placeholder-text">Pásame tus productos para mostrarlos aquí 🛍️</p>';
    return;
  }

  items.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img">
      <h3>${producto.nombre}</h3>
      <p class="product-description">${producto.descripcion}</p>
      <div class="product-price">$${producto.precio}</div>
      <button class="btn-buy" onclick="consultarProducto('${producto.nombre}')">Consultar / Comprar</button>
    `;
    container.appendChild(card);
  });
}

// Función para filtrar por categoría
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const categoria = e.target.dataset.category;
    if (categoria === 'todos') {
      mostrarProductos(productos);
    } else {
      const filtrados = productos.filter(p => p.categoria === categoria);
      mostrarProductos(filtrados);
    }
  });
});

function consultarProducto(nombre) {
  alert(`¡Gracias por tu interés en ${nombre}! Pronto podrás enviarme un mensaje por WhatsApp.`);
}

// Inicializar
mostrarProductos(productos);