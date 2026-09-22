// Lista de productos actualizada
const productos = [
  {
    id: 'p1',
    nombre: 'Cuaderno Inteligente',
    categoria: 'Cuadernos',
    precio: 4500,
    imagen: 'https://i.ibb.co/MDDxz4QD/CUADERNO-INTELIGENTE.jpg',
    descripcion: 'Cuaderno inteligente con sistema de hojas removibles.'
  },
  {
    id: 'p2',
    nombre: 'Cuaderno Inteligente',
    categoria: 'Cuadernos',
    precio: 4500,
    imagen: 'https://i.ibb.co/LzFJcRQ8/CUADERNO-INTELIGENTE-2.jpg',
    descripcion: 'Cuaderno inteligente con sistema de hojas removibles.'
  },
  {
    id: 'p3',
    nombre: 'Cuaderno Inteligente',
    categoria: 'Cuadernos',
    precio: 4500,
    imagen: 'https://i.ibb.co/6RHvWrrr/CUADERNO-INTELIGENTE-3.jpg',
    descripcion: 'Cuaderno inteligente con sistema de hojas removibles.'
  },
  {
    id: 'p4',
    nombre: 'Cuaderno Eco A5',
    categoria: 'Cuadernos',
    precio: 2000,
    imagen: 'https://i.ibb.co/zV1LMpzC/CUADERNO-ECO-A5.jpg',
    descripcion: 'Cuaderno ecológico tamaño A5.'
  },
  {
    id: 'p5',
    nombre: 'Libreta Anillada A6',
    categoria: 'Libretas',
    precio: 2000,
    imagen: 'https://i.ibb.co/TDtfKK0d/LIBRETA-ANILLADA-A6.jpg',
    descripcion: 'Libreta anillada práctica tamaño A6.'
  },
  {
    id: 'p6',
    nombre: 'Anotador con Borde con Forma',
    categoria: 'Anotadores',
    precio: 2000,
    imagen: 'https://i.ibb.co/SXFqjkQ2/ANOTADOR-CON-BORDE-CON-FORMA.jpg',
    descripcion: 'Anotador infantil con borde troquelado con forma.'
  },
  {
    id: 'p7',
    nombre: 'Libreta con Lapicera',
    categoria: 'Libretas',
    precio: 1500,
    imagen: 'https://i.ibb.co/bgDWby9M/LIBRETA-CON-LAPICERA.jpg',
    descripcion: 'Set de libreta que incluye lapicera a juego.'
  },
  {
    id: 'p8',
    nombre: 'Banderín Feliz Cumpleaños',
    categoria: 'Fiesta',
    precio: 1500,
    imagen: 'https://i.ibb.co/YB0zcBnq/BANDERIN-FELIZ-CUMPLEA-OS.jpg',
    descripcion: 'Banderín decorativo para festejos de cumpleaños.'
  },
  {
    id: 'p9',
    nombre: 'Anotador con Elástico',
    categoria: 'Anotadores',
    precio: 2500,
    imagen: 'https://i.ibb.co/Y4gjv7C0/ANOTADOR-CON-ELASTICO.jpg',
    descripcion: 'Anotador con cierre elástico.'
  },
  {
    id: 'p10',
    nombre: 'Cuaderno Eco A5',
    categoria: 'Cuadernos',
    precio: 2000,
    imagen: 'https://i.ibb.co/Rkw80mys/CUADERNO-A5-c.jpg',
    descripcion: 'Cuaderno ecológico tamaño A5.'
  },
  {
    id: 'p11',
    nombre: 'Cuaderno Eco A5',
    categoria: 'Cuadernos',
    precio: 2000,
    imagen: 'https://i.ibb.co/zhtZmsvF/CUADERNO-A5.jpg',
    descripcion: 'Cuaderno ecológico tamaño A5.'
  },
  {
    id: 'p12',
    nombre: 'Cuaderno Eco A5',
    categoria: 'Cuadernos',
    precio: 2000,
    imagen: 'https://i.ibb.co/N8sVV6c/CUADERNO-ECO-A5-c.jpg',
    descripcion: 'Cuaderno ecológico tamaño A5.'
  },
  {
    id: 'p13',
    nombre: 'Anotador con Borde',
    categoria: 'Anotadores',
    precio: 2000,
    imagen: 'https://i.ibb.co/BKTt1j69/ANOTADOR-CON-BORDE.jpg',
    descripcion: 'Anotador con diseño especial en los bordes.'
  },
  {
    id: 'p14',
    nombre: 'Anotador con Borde',
    categoria: 'Anotadores',
    precio: 2000,
    imagen: 'https://i.ibb.co/N2SLMpB3/ANOTADOR-CON-BORDE-b.jpg',
    descripcion: 'Anotador con diseño especial en los bordes.'
  },
  {
    id: 'p15',
    nombre: 'Post It',
    categoria: 'Papelería',
    precio: 1500,
    imagen: 'https://i.ibb.co/FLwWH5hq/POST-IT-b.jpg',
    descripcion: 'Notas adhesivas tipo Post It.'
  },
  {
    id: 'p16',
    nombre: 'Banderín Feliz Cumpleaños',
    categoria: 'Fiesta',
    precio: 1500,
    imagen: 'https://i.ibb.co/ksN6d0PP/BANDERIN-FELIZ-CUMPLEA-OS-c.jpg',
    descripcion: 'Banderín decorativo para festejos de cumpleaños.'
  },
  {
    id: 'p17',
    nombre: 'Banderín Feliz Cumpleaños',
    categoria: 'Fiesta',
    precio: 1500,
    imagen: 'https://i.ibb.co/ZR22r0Tr/BANDERIN-FELIZ-CUMPLEA-OS-2.jpg',
    descripcion: 'Banderín decorativo para festejos de cumpleaños.'
  },
  {
    id: 'p18',
    nombre: 'Libreta de Osito con Lapicera',
    categoria: 'Libretas',
    precio: 1500,
    imagen: 'https://i.ibb.co/twtx8TZG/LIBRETA-DE-OSITO-CON-LAPICERA.jpg',
    descripcion: 'Libreta diseño Osito incluye lapicera.'
  },
  {
    id: 'p19',
    nombre: 'Chuletas x6',
    categoria: 'Accesorios',
    precio: 500,
    imagen: 'https://i.ibb.co/xSWTwb0M/CHULETA-X6.jpg',
    descripcion: 'Set de 6 chuletas para el cabello.'
  },
  {
    id: 'p20',
    nombre: 'Set Fashion x5',
    categoria: 'Accesorios',
    precio: 2500,
    imagen: 'https://i.ibb.co/Hpr35xQr/SET-FASHION-X5.jpg',
    descripcion: 'Set de moda fashion por 5 piezas.'
  },
  {
    id: 'p21',
    nombre: 'Cajita Organizadora',
    categoria: 'Papelería',
    precio: 2000,
    imagen: 'https://i.ibb.co/SwqFy7r2/CAJITA-ORGANIZADORA.jpg',
    descripcion: 'Cajita organizadora para tus accesorios y elementos.'
  },
  {
    id: 'p22',
    nombre: 'Set de Accesorios para Niña',
    categoria: 'Accesorios',
    precio: 2000,
    imagen: 'https://i.ibb.co/jPWLvHS0/SET-DE-ACCESORIOS-PARA-NI-A.jpg',
    descripcion: 'Set de hermosos accesorios para niña.'
  },
  {
    id: 'p23',
    nombre: 'Set de Accesorios para Niña',
    categoria: 'Accesorios',
    precio: 2000,
    imagen: 'https://i.ibb.co/2TmRymk/SET-ACCESORIOS-NI-A.jpg',
    descripcion: 'Set de hermosos accesorios para niña.'
  },
  {
    id: 'p24',
    nombre: 'Set de Accesorios para Niña',
    categoria: 'Accesorios',
    precio: 2000,
    imagen: 'https://i.ibb.co/DfSyNssB/SET-ACCESORIOS-NI-A-3.jpg',
    descripcion: 'Set de hermosos accesorios para niña.'
  },
  {
    id: 'p25',
    nombre: 'Kit de Manualidades Bijouterie',
    categoria: 'Manualidades',
    precio: 5000,
    imagen: 'https://i.ibb.co/7dDzQ3WB/KIT-DE-MANUALIDADES-BIJOUTERIU.jpg',
    descripcion: 'Completo kit de manualidades para crear tu propia bijouterie.'
  },
  {
    id: 'p26',
    nombre: 'Set de Chuletas x6',
    categoria: 'Accesorios',
    precio: 500,
    imagen: 'https://i.ibb.co/BKVZfkk9/CHULETAS.jpg',
    descripcion: 'Set de 6 chuletas para el cabello.'
  }
];

// Función para renderizar tarjetas de productos en pantalla
function mostrarProductos(items) {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
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

// Inicializar si existe el contenedor de la plantilla simple
document.addEventListener('DOMContentLoaded', () => {
  mostrarProductos(productos);
});
