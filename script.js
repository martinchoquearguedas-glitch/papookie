/* =========================================================
   PAPOOKIE — script.js
   Manejo de carrito, catálogo de 10 sabores,
   rotación semanal, catering interactivo y comunidad.
   ========================================================= */

// ---------- CATÁLOGO DE 10 SABORES (productos.html) ----------
const SABORES_CATALOGO = [
  {
    nombre: "Pastel de Api",
    imagen: "img/pastel-de-api.jpeg",
    descripcion: "Una cookie inspirada en el clásico api morado. Suave masa de api morado, rellena con una cremosa capa de ganache de api y limón, coronada con un crujiente topping de queso San Javier.",
    etiqueta: "Clásico paceño"
  },
  {
    nombre: "Red Velvet",
    imagen: "img/red-velvet.jpeg",
    descripcion: "Suave, cremosa y delicada. Masa de red velvet acompañada de una irresistible ganache de chocolate blanco y un toque fresco de ralladura de limón.",
    etiqueta: "Favorito"
  },
  {
    nombre: "Frooty",
    imagen: "img/frooty.jpeg",
    descripcion: "Una explosión divertida de chocolate y fruta. Masa de chocolate oscuro con cereal de frutas, cubierta con un suave topping de malvavisco de vainilla y cereal picado para darle el toque crujiente perfecto.",
    etiqueta: "Divertido"
  },
  {
    nombre: "Dubai Gold",
    imagen: "img/dubai-gold.jpeg",
    descripcion: "Intensa, crujiente y llena de sabor. Masa de chocolate oscuro con un topping crujiente estilo Dubai y nueces mixtas, cubierta con una capa de ganache de chocolate y un delicado toque de oro.",
    etiqueta: "Premium"
  },
  {
    nombre: "Lemon Gold",
    imagen: "img/lemon-gold.jpeg",
    descripcion: "Una combinación fresca y elegante. Masa de vainilla y canela cubierta con un topping de pie de limón y crema batida, terminada con chocolate blanco, ralladura de limón y un toque de oro comestible.",
    etiqueta: "Elegante"
  },
  {
    nombre: "S'mores",
    imagen: "img/smores.jpeg",
    descripcion: "Una combinación irresistible de chocolate y dulzura. Masa con chispas de chocolate, cubierta con malvaviscos, jarabe de chocolate y un toque de dulce de leche para crear una cookie llena de sabor.",
    etiqueta: "Irresistible"
  },
  {
    nombre: "Tiramisú",
    imagen: "img/tiramisu.jpeg",
    descripcion: "Una cookie inspirada en los sabores del clásico tiramisú. Una combinación que busca llevar la esencia de este delicioso postre a cada mordida, con una presentación especial al estilo Papookie.",
    etiqueta: "Especial"
  },
  {
    nombre: "Crunch Cookie",
    imagen: "img/crunch-cookie.jpeg",
    descripcion: "Una cookie pensada para quienes disfrutan de una experiencia llena de texturas. Su propuesta destaca por ese toque crujiente que le da personalidad, creando una combinación especial en cada mordida.",
    etiqueta: "Texturas"
  },
  {
    nombre: "Frutos Rojos",
    imagen: "img/frutos-rojos.jpeg",
    descripcion: "Una combinación dulce y frutal con un toque delicado. Acompañada de un suave merengue y una deliciosa salsa de frutos rojos, que aportan un contraste entre la cremosidad y el sabor fresco de la fruta.",
    etiqueta: "Frutal"
  },
  {
    nombre: "Pie de Manzana",
    imagen: "img/pie-de-manzana.jpeg",
    descripcion: "Una cookie inspirada en el clásico pie de manzana. Una propuesta que busca combinar el encanto de este tradicional postre con el estilo artesanal de Papookie, ofreciendo una experiencia dulce y reconfortante en cada mordida.",
    etiqueta: "Tradicional"
  }
];

// ---------- GALLETAS CLÁSICAS & SEMANA (Para inicio/comprar) ----------
const GALLETAS_CLASICAS = [
  { id: "clasica-1", nombre: "Chispas de Chocolate", precio: 12, imagen: "img/galleta1.jpg", descripcion: "La clásica e infalible. Masa suave de vainilla cargada de chispas de chocolate semiamargo derretidas.", colorFondo: "#E8EFFF" },
  { id: "clasica-2", nombre: "Doble Chocolate", precio: 12, imagen: "img/galleta2.jpg", descripcion: "Para los amantes del cacao. Masa oscura de chocolate rellena con trozos de chocolate blanco.", colorFondo: "#F3E5F5" },
  { id: "clasica-3", nombre: "Red Velvet", precio: 12, imagen: "img/galleta3.jpg", descripcion: "Nuestra famosa Red Velvet con un centro suave de queso crema dulce.", colorFondo: "#FFEBEE" },
  { id: "clasica-4", nombre: "Avena y Pasas", precio: 12, imagen: "img/galleta4.jpg", descripcion: "Horneada a la perfección con avena tostada, canela y pasas jugosas.", colorFondo: "#FFF3E0" },
  { id: "clasica-5", nombre: "Macadamia Blanca", precio: 12, imagen: "img/galleta5.jpg", descripcion: "Mezcla dulce y salada con nueces de macadamia crujientes y chocolate blanco.", colorFondo: "#E0F7FA" },
  { id: "clasica-6", nombre: "Mantequilla de Maní", precio: 12, imagen: "img/galleta6.jpg", descripcion: "Masa densa y suave de mantequilla de maní pura, terminada con cristales de sal.", colorFondo: "#FFF8E1" }
];

const SABORES_SEMANA = [
  { id: "semana-1", nombre: "Frooty Loops Chocolate", precio: 15, imagen: "img/frooty.png", descripcion: "Una explosión divertida de chocolate y fruta. Masa de chocolate oscuro con cereal de frutas, cubierta con un suave topping de malvavisco de vainilla y cereal picado para darle el toque crujiente perfecto.", colorFondo: "#FF8F00" },
  { id: "semana-2", nombre: "Red Velvet & Lime Cream", precio: 15, imagen: "img/red-velvet.png", descripcion: "Suave, cremosa y delicada. Masa de red velvet acompañada de una irresistible ganache de chocolate blanco y un toque fresco de ralladura de limón.", colorFondo: "#B71C1C" },
  { id: "semana-3", nombre: "Pastel de Api®", precio: 15, imagen: "img/pastel-de-api.png", descripcion: "Una cookie inspirada en el clásico api morado. Suave masa de api morado, rellena con una cremosa capa de ganache de api y limón, coronada con un crujiente topping de queso San Javier.", colorFondo: "#5E35B1" },
  { id: "semana-4", nombre: "Dubai Gold Pistacho", precio: 18, imagen: "img/dubai-gold.png", descripcion: "Intensa, crujiente y llena de sabor. Masa de chocolate oscuro con un topping crujiente estilo Dubai y nueces mixtas, cubierta con una capa de ganache de chocolate y un delicado toque de oro.", colorFondo: "#388E3C" },
  { id: "semana-5", nombre: "Lemon Gold Pie", precio: 15, imagen: "img/lemon-gold.png", descripcion: "Una combinación fresca y elegante. Masa de vainilla y canela cubierta con un topping de pie de limón y crema batida, terminada con chocolate blanco, ralladura de limón y un toque de oro comestible.", colorFondo: "#FBC02D" }
];

function obtenerTodosLosProductos() { return [...GALLETAS_CLASICAS, ...SABORES_SEMANA]; }
function obtenerProductoPorId(id) { return obtenerTodosLosProductos().find((p) => p.id === id); }
function formatoPrecio(valor) { return "Bs. " + Number(valor).toFixed(0); }

// ---------- RENDERIZADO DE CATÁLOGOS ----------
function renderizarCatalogoGalletas() {
  const contenedor = document.getElementById("grid-catalogo-10");
  if (!contenedor) return;

  contenedor.innerHTML = SABORES_CATALOGO.map((p) => `
    <article class="tarjeta-galeria">
      <div class="tarjeta-galeria-img">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
        <span class="badge-sabor">${p.etiqueta}</span>
      </div>
      <div class="tarjeta-galeria-cuerpo">
        <h3>${p.nombre}</h3>
        <p class="descripcion-galeria">${p.descripcion}</p>
      </div>
    </article>
  `).join("");
}

function renderizarGalletasClasicas() {
  const contenedor = document.getElementById("grid-productos");
  if (!contenedor) return;

  contenedor.innerHTML = GALLETAS_CLASICAS.map((p) => `
    <article class="tarjeta-producto">
      <a href="producto.html?id=${p.id}" class="tarjeta-producto-link">
        <div class="tarjeta-producto-img">
          <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
          <span class="badge-disponible">Clásica</span>
        </div>
        <div class="tarjeta-producto-cuerpo">
          <h3>${p.nombre}</h3>
          <p class="descripcion">${p.descripcion}</p>
          <p class="precio">${formatoPrecio(p.precio)}</p>
        </div>
      </a>
      <div class="tarjeta-producto-acciones">
        <button class="btn btn-azul btn-block btn-sm" onclick="event.preventDefault(); agregarAlCarrito('${p.id}', 1)">Añadir al carrito</button>
      </div>
    </article>
  `).join("");
}

function renderizarSaboresSemanaHorizontal() {
  const contenedor = document.getElementById("grid-sabores-semana");
  if (!contenedor) return;

  contenedor.innerHTML = SABORES_SEMANA.map((s, index) => {
    const esInvertida = index % 2 !== 0 ? "invertida" : "";
    return `
      <a href="producto.html?id=${s.id}" class="tarjeta-semana-horizontal ${esInvertida}" style="--sabor-color: ${s.colorFondo}">
        <div class="sabor-hz-img">
          <img src="${s.imagen}" alt="${s.nombre}" loading="lazy">
        </div>
        <div class="sabor-hz-info">
          <span class="etiqueta-semana">Solo esta semana</span>
          <h3>${s.nombre}</h3>
          <p>${s.descripcion}</p>
          <div class="sabor-hz-botones">
            <span class="btn-falso-outline">Averigua más</span>
            <button class="btn-falso-blanco" onclick="event.preventDefault(); agregarAlCarrito('${s.id}', 1);">Ordena Ahora</button>
          </div>
        </div>
      </a>
    `;
  }).join("");
}

// ---------- PÁGINA INDIVIDUAL DE PRODUCTO ----------
let productoActualId = null;

function inyectarDetalleProducto() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  const producto = obtenerProductoPorId(id);
  if (!producto) { window.location.href = "index.html"; return; }
  productoActualId = producto.id;

  const fondo = document.getElementById("producto-fondo");
  if (fondo) fondo.style.backgroundColor = producto.colorFondo;

  const img = document.getElementById("producto-img");
  if (img) {
    let ruta = producto.imagen.startsWith("img/") ? producto.imagen : `img/${producto.imagen}`;
    img.src = encodeURI(ruta);
    img.alt = producto.nombre;
  }
  const nombre = document.getElementById("producto-nombre");
  if (nombre) nombre.textContent = producto.nombre;
  const desc = document.getElementById("producto-descripcion");
  if (desc) desc.textContent = producto.descripcion;
  const precio = document.getElementById("producto-precio");
  if (precio) precio.textContent = formatoPrecio(producto.precio);
}

function agregarGalletaActualAlCarrito() {
  if (productoActualId) agregarAlCarrito(productoActualId, 1);
}

// ---------- CARRITO ----------
const CLAVE_CARRITO = "papookie_carrito";
function obtenerCarrito() {
  try {
    const d = localStorage.getItem(CLAVE_CARRITO);
    return d ? JSON.parse(d) : [];
  } catch (e) {
    return [];
  }
}
function guardarCarrito(c) { localStorage.setItem(CLAVE_CARRITO, JSON.stringify(c)); }

function agregarAlCarrito(id, cantidad = 1) {
  const p = obtenerProductoPorId(id);
  if (!p) return;
  const c = obtenerCarrito();
  const ex = c.find((i) => i.id === id);
  if (ex) {
    ex.cantidad += cantidad;
  } else {
    let ruta = p.imagen.startsWith("img/") ? p.imagen : `img/${p.imagen}`;
    c.push({ id: p.id, nombre: p.nombre, imagen: ruta, cantidad });
  }
  guardarCarrito(c);
  actualizarInterfazCarrito();
  abrirCarrito();
}

function quitarDelCarrito(id) {
  guardarCarrito(obtenerCarrito().filter((i) => i.id !== id));
  actualizarInterfazCarrito();
}
function cambiarCantidadCarrito(id, delta) {
  const c = obtenerCarrito();
  const i = c.find((x) => x.id === id);
  if (!i) return;
  i.cantidad += delta;
  if (i.cantidad <= 0) return quitarDelCarrito(id);
  guardarCarrito(c);
  actualizarInterfazCarrito();
}
function obtenerCantidadTotalCarrito() {
  return obtenerCarrito().reduce((t, i) => t + i.cantidad, 0);
}
function obtenerTotalCarrito() {
  return obtenerCarrito().reduce((t, i) => {
    const p = obtenerProductoPorId(i.id);
    return t + i.cantidad * (p ? p.precio : 0);
  }, 0);
}

function renderizarCarritoLateral() {
  const lista = document.getElementById("lista-carrito");
  if (!lista) return;
  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    lista.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.<br>🍪</p>`;
    return;
  }
  lista.innerHTML = carrito.map((item) => {
    const p = obtenerProductoPorId(item.id);
    const precio = p ? p.precio : 0;
    return `
      <div class="item-carrito">
        <img src="${encodeURI(item.imagen)}" alt="${item.nombre}">
        <div class="item-carrito-info">
          <span class="nombre">${item.nombre}</span>
          <span class="precio-unit">${formatoPrecio(precio)} c/u</span>
          <div class="item-carrito-fila">
            <div class="controles-cantidad"><button onclick="cambiarCantidadCarrito('${item.id}', -1)">−</button><span class="valor">${item.cantidad}</span><button onclick="cambiarCantidadCarrito('${item.id}', 1)">+</button></div>
            <button class="quitar-item" onclick="quitarDelCarrito('${item.id}')">Eliminar</button>
          </div>
        </div>
      </div>`;
  }).join("");
  const total = document.getElementById("total-carrito");
  if (total) total.textContent = formatoPrecio(obtenerTotalCarrito());
}

function renderizarResumenPedidoComprar() {
  const cont = document.getElementById("resumen-pedido");
  if (!cont) return;
  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    cont.innerHTML = `<p class="carrito-vacio">Aún no añadiste galletas.</p>`;
    return;
  }
  cont.innerHTML = carrito.map((i) => {
    const p = obtenerProductoPorId(i.id);
    const pre = p ? p.precio : 0;
    return `
      <div class="fila-resumen">
        <div class="fila-resumen-info"><img src="${encodeURI(i.imagen)}" alt="${i.nombre}"><div><p class="nombre">${i.nombre}</p><p class="cantidad">Cantidad: ${i.cantidad}</p></div></div>
        <span class="subtotal">${formatoPrecio(pre * i.cantidad)}</span>
      </div>`;
  }).join("");
  const t = document.getElementById("total-pedido");
  if (t) t.textContent = formatoPrecio(obtenerTotalCarrito());
}

function actualizarInterfazCarrito() {
  renderizarCarritoLateral();
  renderizarResumenPedidoComprar();
  const c = document.getElementById("contador-carrito");
  if (c) {
    const q = obtenerCantidadTotalCarrito();
    c.textContent = q;
    c.classList.toggle("oculto", q === 0);
  }
}
function abrirCarrito() {
  document.getElementById("panel-carrito")?.classList.add("abierto");
  document.getElementById("fondo-carrito")?.classList.add("activo");
  document.body.style.overflow = "hidden";
}
function cerrarCarrito() {
  document.getElementById("panel-carrito")?.classList.remove("abierto");
  document.getElementById("fondo-carrito")?.classList.remove("activo");
  document.body.style.overflow = "";
}
function irAComprarDesdeCarrito() { window.location.href = "comprar.html"; }

// ---------- UTILIDADES Y NAVEGACIÓN ----------
const WHATSAPP_NUMERO = "59172093848";

function construirMensajePedido(d) {
  const c = obtenerCarrito();
  const lineas = c.map((i) => {
    const p = obtenerProductoPorId(i.id);
    return `▪️ ${i.cantidad}x *${i.nombre}* — ${formatoPrecio((p ? p.precio : 0) * i.cantidad)}`;
  });
  const m = [
    "🍪 *NUEVO PEDIDO PAPOOKIE* 🍪",
    "-----------------------------------",
    ...lineas,
    "-----------------------------------",
    `*TOTAL:* ${formatoPrecio(obtenerTotalCarrito())}`,
    "",
    "👤 *DATOS DEL CLIENTE*",
    `*Nombre:* ${d.nombre}`,
    `*WhatsApp:* ${d.whatsapp}`,
    `*Entrega:* ${d.entrega}`,
    `*Dirección:* ${d.direccion}`,
    d.observaciones ? `*Notas:* ${d.observaciones}` : null,
  ].filter(Boolean).join("\n");
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(m)}`;
}

function iniciarFormularioPedido() {
  const form = document.getElementById("form-pedido");
  if (!form) return;
  const opc = document.querySelectorAll(".opcion-entrega");
  const inputE = document.getElementById("campo-entrega");
  opc.forEach((o) =>
    o.addEventListener("click", () => {
      opc.forEach((x) => x.classList.remove("activa"));
      o.classList.add("activa");
      inputE.value = o.dataset.valor;
    })
  );
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (obtenerCarrito().length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    window.open(
      construirMensajePedido({
        nombre: document.getElementById("campo-nombre").value.trim(),
        whatsapp: document.getElementById("campo-whatsapp").value.trim(),
        direccion: document.getElementById("campo-direccion").value.trim(),
        entrega: inputE.value,
        observaciones: document.getElementById("campo-observaciones").value.trim(),
      }),
      "_blank"
    );
  });
}

function iniciarNav() {
  const nav = document.getElementById("nav-principal");
  const h = document.getElementById("btn-hamburguesa");
  const en = document.getElementById("nav-enlaces");
  window.addEventListener("scroll", () => {
    if (nav) nav.classList.toggle("nav--con-sombra", window.scrollY > 12);
  });
  if (h && en) {
    h.addEventListener("click", () => {
      h.classList.toggle("activo");
      en.classList.toggle("movil");
    });
  }
}

function iniciarHero() {
  const s = document.querySelectorAll(".hero-slide");
  const p = document.querySelectorAll(".hero-controles button");
  if (s.length === 0) return;
  let act = 0;
  let temp;
  function mostrar(i) {
    s.forEach((x, idx) => x.classList.toggle("activa", idx === i));
    p.forEach((x, idx) => x.classList.toggle("activo", idx === i));
    act = i;
  }
  function sig() { mostrar((act + 1) % s.length); }
  function ant() { mostrar((act - 1 + s.length) % s.length); }
  function rein() { clearInterval(temp); temp = setInterval(sig, 6000); }
  p.forEach((x, i) => x.addEventListener("click", () => { mostrar(i); rein(); }));
  document.getElementById("hero-flecha-der")?.addEventListener("click", () => { sig(); rein(); });
  document.getElementById("hero-flecha-izq")?.addEventListener("click", () => { ant(); rein(); });
  rein();
}

function iniciarEnlacesWhatsapp() {
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent("¡Hola Papookie! 🍪 Tengo una consulta.")}`;
  ["whatsapp-flotante", "whatsapp-contacto", "whatsapp-footer"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

function calcularRangoSemana() {
  const el = document.getElementById("rango-semana");
  if (!el) return;
  const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const h = new Date();
  const d = (h.getDay() + 6) % 7;
  const l = new Date(h);
  l.setDate(h.getDate() - d);
  const dom = new Date(l);
  dom.setDate(l.getDate() + 6);
  el.textContent = `${l.getDate()} ${meses[l.getMonth()]} — ${dom.getDate()} ${meses[dom.getMonth()]}`;
}

function iniciarAcordeonFAQ() {
  const preguntas = document.querySelectorAll(".faq-pregunta");
  preguntas.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      document.querySelectorAll(".faq-item").forEach((i) => {
        if (i !== item) i.classList.remove("activo");
      });
      item.classList.toggle("activo");
    });
  });
}

// ---------- COMUNIDAD ----------
function iniciarFormularioComunidad() {
  const formCumple = document.getElementById("form-cumpleanos");
  if (!formCumple) return;

  formCumple.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("cumple-nombre").value.trim();
    const whatsapp = document.getElementById("cumple-whatsapp").value.trim();
    const mes = document.getElementById("cumple-mes").value;

    const msj = document.getElementById("mensaje-exito-cumple");
    if (msj) msj.classList.remove("oculto");

    const mensaje = [
      "🎂 *NUEVO REGISTRO DE CUMPLEAÑOS POOKIE* 🎂",
      "-----------------------------------",
      `*Nombre:* ${nombre}`,
      `*WhatsApp:* ${whatsapp}`,
      `*Mes del cumple:* ${mes}`,
      "",
      "¡Por favor, añádanme a la base de datos para mi sorpresa!",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
    formCumple.reset();
  });
}

// ---------- CATERING INTERACTIVO ----------
let estadoCatering = {
  evento: "Cumpleaños",
  invitados: "50 personas",
  presentacion: "Mini Pookies Box",
};

function seleccionarEvento(nombreEvento, elementoBtn) {
  estadoCatering.evento = nombreEvento;
  document.querySelectorAll(".btn-evento").forEach((btn) => btn.classList.remove("activo"));
  elementoBtn.classList.add("activo");

  const elResumen = document.getElementById("resumen-evento");
  if (elResumen) elResumen.innerText = nombreEvento;
}

function actualizarInvitados(valor) {
  const numValor = parseInt(valor, 10);
  const texto = numValor >= 200 ? "200+ personas" : `${numValor} personas`;

  estadoCatering.invitados = texto;

  const display = document.getElementById("display-invitados");
  if (display) display.innerText = texto;

  const resumen = document.getElementById("resumen-invitados");
  if (resumen) resumen.innerText = texto;
}

function seleccionarPresentacion(nombrePresentacion, elementoTarjeta) {
  estadoCatering.presentacion = nombrePresentacion;

  document.querySelectorAll(".tarjeta-presentacion").forEach((tarjeta) => {
    tarjeta.classList.remove("activa");
    const icono = tarjeta.querySelector(".icono-check");
    if (icono) icono.classList.remove("check-activo");
  });

  elementoTarjeta.classList.add("activa");
  const icono = elementoTarjeta.querySelector(".icono-check");
  if (icono) icono.classList.add("check-activo");

  const elResumen = document.getElementById("resumen-presentacion");
  if (elResumen) elResumen.innerText = nombrePresentacion;
}

function enviarCotizacionWhatsApp() {
  const nombre = document.getElementById("cat-nombre")?.value.trim() || "";
  const whatsapp = document.getElementById("cat-whatsapp")?.value.trim() || "";
  const direccion = document.getElementById("cat-direccion")?.value.trim() || "";

  if (!nombre || !whatsapp || !direccion) {
    alert("Por favor, completa tus datos personales (Nombre, WhatsApp y Dirección/Zona) en el resumen antes de enviar.");
    return;
  }

  const mensaje = [
    "🎉 *NUEVA COTIZACIÓN DE CATERING* 🎉",
    "-----------------------------------",
    "📋 *DETALLES DEL EVENTO*",
    `*Tipo:* ${estadoCatering.evento}`,
    `*Invitados:* ${estadoCatering.invitados}`,
    `*Presentación:* ${estadoCatering.presentacion}`,
    "-----------------------------------",
    "👤 *DATOS DEL CLIENTE*",
    `*Nombre:* ${nombre}`,
    `*WhatsApp:* ${whatsapp}`,
    `*Dirección/Zona:* ${direccion}`,
    "",
    "Quisiera coordinar disponibilidad, cantidades y precio final.",
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// =========================================================
// INICIALIZADOR GLOBAL (Se ejecuta una sola vez)
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogoGalletas();
  renderizarGalletasClasicas();
  renderizarSaboresSemanaHorizontal();
  inyectarDetalleProducto();
  actualizarInterfazCarrito();

  iniciarNav();
  iniciarHero();
  iniciarFormularioPedido();
  iniciarEnlacesWhatsapp();
  calcularRangoSemana();

  if (typeof iniciarAcordeonFAQ === "function") iniciarAcordeonFAQ();
  if (typeof iniciarFormularioComunidad === "function") iniciarFormularioComunidad();
});