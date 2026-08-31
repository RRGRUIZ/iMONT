// ===== DATOS =====
const productosData = [
    {
        id: 1,
        nombre: "Funda Silicona Compatible",
        categoria: "fundas",
        precio: 25000,
        descripcion: "Funda de silicona suave al tacto, protección total contra golpes y caídas.",
        imagenes: [
            "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1587332907256-5f9c02dfd72a?w=400&h=300&fit=crop"
        ],
        colores: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffd93d"],
        variantes: ["Rojo", "Verde", "Azul", "Menta", "Amarillo"],
        keywords: ["funda", "silicona", "protector", "iphone", "apple"]
    },
    {
        id: 2,
        nombre: "Funda Magsafe Transparente",
        categoria: "fundas",
        precio: 30000,
        descripcion: "Funda transparente con imanes Magsafe, resistente a amarillamiento.",
        imagenes: [
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=300&fit=crop"
        ],
        colores: ["#ffffff", "#f0f0f0"],
        variantes: ["Transparente", "Mate"],
        keywords: ["magsafe", "transparente", "funda", "imanes", "iphone"]
    },
    {
        id: 3,
        nombre: "PowerBank 10000mAh",
        categoria: "powerbank",
        precio: 45000,
        descripcion: "Batería externa de alta capacidad con carga rápida USB-C y USB-A.",
        imagenes: [
            "https://images.unsplash.com/photo-1609592426326-ec0be6e2750c?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1609592426768-0a0c883f4db8?w=400&h=300&fit=crop"
        ],
        colores: ["#2c2c2e", "#f5f5f7"],
        variantes: ["Negro", "Blanco"],
        keywords: ["powerbank", "batería", "carga", "usb"]
    },
    {
        id: 4,
        nombre: "Cable USB-C 2 Metros",
        categoria: "cargadores",
        precio: 15000,
        descripcion: "Cable trenzado de alta durabilidad, soporta carga rápida.",
        imagenes: [
            "https://images.unsplash.com/photo-1593941707882-1a149bba9b7b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1593941707870-9dee8b226f4a?w=400&h=300&fit=crop"
        ],
        colores: ["#2c2c2e", "#ffffff"],
        variantes: ["1 Metro", "2 Metros"],
        keywords: ["cable", "usb-c", "cargador"]
    },
    {
        id: 5,
        nombre: "Cable Lightning 2 Metros",
        categoria: "cargadores",
        precio: 15000,
        descripcion: "Cable oficial MFi para iPhone, carga rápida y sincronización.",
        imagenes: [
            "https://images.unsplash.com/photo-1593941707882-1a149bba9b7b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1593941707870-9dee8b226f4a?w=400&h=300&fit=crop"
        ],
        colores: ["#2c2c2e", "#ffffff"],
        variantes: ["1 Metro", "2 Metros"],
        keywords: ["cable", "lightning", "iphone", "mfi"]
    },
    {
        id: 6,
        nombre: "AirPods Pro 2",
        categoria: "audifonos",
        precio: 180000,
        descripcion: "Audífonos inalámbricos con cancelación de ruido activa y audio espacial.",
        imagenes: [
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1606220542757-a67f465d76e3?w=400&h=300&fit=crop"
        ],
        colores: ["#ffffff"],
        variantes: ["Blanco"],
        keywords: ["airpods", "pro", "audífonos", "inalámbricos"]
    },
    {
        id: 7,
        nombre: "Diadema Apple Style",
        categoria: "audifonos",
        precio: 85000,
        descripcion: "Diadema over-ear con diseño minimalista, sonido de alta calidad.",
        imagenes: [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop"
        ],
        colores: ["#2c2c2e", "#f5f5f7"],
        variantes: ["Negro", "Blanco"],
        keywords: ["diadema", "over-ear", "audífonos", "apple"]
    }
];

const combosData = [
    {
        id: 'combo1',
        nombre: "Combo Básico",
        precio: 10000,
        descripcion: "Ideal para empezar, incluye lo esencial para proteger y cargar tu dispositivo.",
        imagenes: ["https://images.unsplash.com/photo-1593941707882-1a149bba9b7b?w=400&h=300&fit=crop"],
        incluye: ["1 Cargador USB-C", "1 Funda Silicona", "1 Funda Magsafe Transparente"],
        ahorro: "Ahorra $30.000",
        keywords: ["combo", "básico", "funda", "cargador"]
    },
    {
        id: 'combo2',
        nombre: "Combo Kit Ecosistema",
        precio: 285000,
        descripcion: "El combo completo para tener todo lo que necesitas.",
        imagenes: ["https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop"],
        incluye: [
            "1 Funda Silicona",
            "1 Cargador USB-C",
            "1 Diadema Apple Style",
            "1 AirPods Pro 2",
            "1 PowerBank 10000mAh",
            "1 Cable 2 Metros (Obsequio)"
        ],
        ahorro: "Ahorra $75.000 + Obsequio",
        keywords: ["combo", "ecosistema", "completo"]
    },
    {
        id: 'combo3',
        nombre: "Combo Premium",
        precio: 225000,
        descripcion: "La mejor selección para los que buscan calidad y estilo.",
        imagenes: ["https://images.unsplash.com/photo-1587332907256-5f9c02dfd72a?w=400&h=300&fit=crop"],
        incluye: [
            "2 Fundas (a elección)",
            "1 Cargador USB-C",
            "1 AirPods Pro 2",
            "1 PowerBank 10000mAh",
            "1 Cable 2 Metros (Obsequio)"
        ],
        ahorro: "Ahorra $50.000 + Obsequio",
        keywords: ["combo", "premium", "calidad"]
    }
];

// ===== ESTADO =====
let cart = [];
let selectedItems = new Set();
let currentFilter = 'all';
let currentTheme = localStorage.getItem('theme') || 'light';
let currentView = 'productos';
let pedidos = JSON.parse(localStorage.getItem('imont_pedidos')) || [];
let pedidoActual = null;
let pedidosSeleccionadosTodos = new Set();

// ===== DOM ELEMENTS =====
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const themeToggle = document.getElementById('themeToggle');
const cartToggle = document.getElementById('cartToggle');
const cartBadge = document.getElementById('cartBadge');
const productModal = document.getElementById('productModal');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const confirmacionModal = document.getElementById('confirmacionModal');
const pedidosModal = document.getElementById('pedidosModal');
const chatbotModal = document.getElementById('chatbotModal');
const modalBody = document.getElementById('modalBody');
const cartContent = document.getElementById('cartContent');
const cartFooter = document.getElementById('cartFooter');
const selectedTotal = document.getElementById('selectedTotal');
const pedidosContent = document.getElementById('pedidosContent');
const modalClose = document.getElementById('modalClose');
const cartClose = document.getElementById('cartClose');
const checkoutClose = document.getElementById('checkoutClose');
const pedidosClose = document.getElementById('pedidosClose');
const chatbotClose = document.getElementById('chatbotClose');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const checkoutForm = document.getElementById('checkoutForm');
const selectAllCheckbox = document.getElementById('selectAll');
const deleteSelectedBtn = document.getElementById('deleteSelected');
const realizarPedidoBtn = document.getElementById('realizarPedido');

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    renderProducts();
    updateCartBadge();
    setupEventListeners();
});

// ===== FUNCIONES PRINCIPALES =====

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = themeToggle?.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

function renderProducts(filter = 'all', search = '') {
    let products = [...productosData];
    
    if (filter !== 'all') {
        products = products.filter(p => p.categoria === filter);
    }
    
    if (search) {
        const searchLower = search.toLowerCase();
        products = products.filter(p => {
            const searchableText = [
                p.nombre,
                p.descripcion,
                p.categoria,
                ...(p.keywords || []),
                ...(p.variantes || [])
            ].join(' ').toLowerCase();
            return searchableText.includes(searchLower);
        });
    }
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search" style="font-size: 48px; color: var(--text-secondary);"></i>
                <p style="color: var(--text-secondary);">No se encontraron productos</p>
                <p style="color: var(--text-secondary); font-size: 14px;">Intenta con otras palabras clave</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.imagenes[0]}" alt="${product.nombre}" class="product-card-image" 
                 onerror="this.src='https://via.placeholder.com/300x200?text=Sin+Imagen'">
            <h3>${product.nombre}</h3>
            <p class="description">${product.descripcion}</p>
            <div class="variants">
                ${product.colores.map(color => `
                    <span class="color-dot" style="background: ${color};" 
                          title="${product.variantes[product.colores.indexOf(color)] || ''}"></span>
                `).join('')}
            </div>
            <p class="price">$${product.precio.toLocaleString()}</p>
            <button class="add-to-cart" data-id="${product.id}">
                <i class="fas fa-shopping-bag"></i> Agregar al Carrito
            </button>
        </div>
    `).join('');
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const product = productosData.find(p => p.id === id);
            if (product) addToCart(product);
        });
    });
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart')) return;
            const id = parseInt(card.dataset.id);
            const product = productosData.find(p => p.id === id);
            if (product) openProductModal(product);
        });
    });
}

function renderCombos(search = '') {
    let combos = [...combosData];
    
    if (search) {
        const searchLower = search.toLowerCase();
        combos = combos.filter(c => {
            const searchableText = [
                c.nombre,
                c.descripcion,
                ...(c.keywords || []),
                ...(c.incluye || [])
            ].join(' ').toLowerCase();
            return searchableText.includes(searchLower);
        });
    }
    
    if (combos.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-box" style="font-size: 48px; color: var(--text-secondary);"></i>
                <p style="color: var(--text-secondary);">No se encontraron combos</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = combos.map(combo => `
        <div class="product-card combo-card" data-id="${combo.id}">
            <img src="${combo.imagenes[0]}" alt="${combo.nombre}" class="product-card-image"
                 onerror="this.src='https://via.placeholder.com/300x200?text=Sin+Imagen'">
            <h3>${combo.nombre}</h3>
            <p class="description">${combo.descripcion}</p>
            <div class="combo-badge">
                <span style="background: #34c759; color: white; padding: 2px 10px; border-radius: 12px; font-size: 12px;">
                    ${combo.ahorro}
                </span>
            </div>
            <p class="price">$${combo.precio.toLocaleString()}</p>
            <button class="add-to-cart combo-add" data-id="${combo.id}">
                <i class="fas fa-gift"></i> Ver Combo
            </button>
        </div>
    `).join('');
    
    document.querySelectorAll('.combo-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            const combo = combosData.find(c => c.id === id);
            if (combo) openComboModal(combo);
        });
    });
}

function openProductModal(product) {
    modalBody.innerHTML = `
        <div class="product-modal-content">
            <div class="product-modal-images">
                <img src="${product.imagenes[0]}" alt="${product.nombre}" 
                     class="product-modal-main-image" id="modalMainImage"
                     onerror="this.src='https://via.placeholder.com/400x300?text=Sin+Imagen'">
                <div class="product-modal-thumbnails">
                    ${product.imagenes.map(img => `
                        <img src="${img}" alt="Thumbnail" class="product-modal-thumbnail" 
                             onclick="document.getElementById('modalMainImage').src='${img}'"
                             onerror="this.src='https://via.placeholder.com/70x70?text=Error'">
                    `).join('')}
                </div>
            </div>
            <div class="product-modal-info">
                <h2>${product.nombre}</h2>
                <p class="product-modal-price">$${product.precio.toLocaleString()}</p>
                <p class="product-modal-description">${product.descripcion}</p>
                <div style="margin: 20px 0;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Selecciona color:</label>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        ${product.colores.map((color, index) => `
                            <button class="color-select-btn" data-color="${color}" 
                                    data-variant="${product.variantes[index]}"
                                    style="padding: 8px 16px; border: 2px solid var(--border-color); 
                                           border-radius: 8px; background: ${color}; cursor: pointer; 
                                           transition: var(--transition); color: ${color === '#ffffff' ? '#000' : '#fff'};
                                           font-weight: 500; font-size: 12px;">
                                ${product.variantes[index]}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <button class="add-to-cart-modal" 
                        style="width: 100%; padding: 15px; background: var(--accent); 
                               color: white; border: none; border-radius: 12px; font-weight: 600; 
                               cursor: pointer; transition: var(--transition); font-size: 16px;">
                    <i class="fas fa-shopping-bag"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
    
    document.querySelector('.add-to-cart-modal').addEventListener('click', () => {
        addToCart(product);
        productModal.style.display = 'none';
    });
    
    document.querySelectorAll('.color-select-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-select-btn').forEach(b => b.style.borderColor = 'var(--border-color)');
            btn.style.borderColor = 'var(--accent)';
        });
    });
}

function openComboModal(combo) {
    modalBody.innerHTML = `
        <div style="padding: 10px 0;">
            <h2 style="font-size: 28px; margin-bottom: 10px;">${combo.nombre}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">${combo.descripcion}</p>
            <div style="margin: 20px 0;">
                <img src="${combo.imagenes[0]}" alt="${combo.nombre}" 
                     style="width: 100%; max-height: 300px; object-fit: contain; 
                            background: var(--bg-secondary); border-radius: 12px;"
                     onerror="this.src='https://via.placeholder.com/400x300?text=Sin+Imagen'">
            </div>
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: 12px; margin: 20px 0;">
                <h3 style="margin-bottom: 15px;">📦 Incluye:</h3>
                <ul style="list-style: none; padding: 0;">
                    ${combo.incluye.map(item => `
                        <li style="padding: 8px 0; border-bottom: 1px solid var(--border-color); 
                                   display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: #34c759;"></i>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; 
                        flex-wrap: wrap; gap: 15px; margin: 20px 0;">
                <div>
                    <p style="font-size: 14px; color: var(--text-secondary);">
                        Precio regular: $${(combo.precio + 50000).toLocaleString()}
                    </p>
                    <p style="font-size: 32px; font-weight: 700; color: var(--accent);">
                        $${combo.precio.toLocaleString()}
                    </p>
                    <p style="color: #34c759; font-weight: 600;">${combo.ahorro}</p>
                </div>
                <button class="add-combo-cart" 
                        style="padding: 15px 40px; background: var(--accent); color: white; 
                               border: none; border-radius: 12px; font-weight: 600; 
                               cursor: pointer; transition: var(--transition); font-size: 16px;">
                    <i class="fas fa-shopping-bag"></i> Agregar Combo al Carrito
                </button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
    
    document.querySelector('.add-combo-cart').addEventListener('click', () => {
        addToCart({...combo, isCombo: true});
        productModal.style.display = 'none';
    });
}

// ===== CARRITO =====

function addToCart(item) {
    const existingItem = cart.find(c => c.id === item.id && c.isCombo === (item.isCombo || false));
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({
            ...item,
            quantity: 1,
            isCombo: item.isCombo || false,
            selected: false
        });
    }
    updateCartBadge();
    showNotification(`${item.nombre} agregado al carrito ✨`);
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartBadge.textContent = totalItems;
}

function openCartModal() {
    renderCart();
    cartModal.style.display = 'block';
}

function getItemKey(item) {
    return item.id + (item.isCombo ? '-combo' : '');
}

function renderCart() {
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Tu carrito está vacío</p>
                <p class="sub-text">Agrega productos para comenzar</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        deleteSelectedBtn.disabled = true;
        selectAllCheckbox.checked = false;
        selectedTotal.textContent = '$0';
        return;
    }
    
    // Sincronizar selecciones
    cart.forEach(item => {
        const key = getItemKey(item);
        if (selectedItems.has(key)) {
            item.selected = true;
        } else {
            item.selected = false;
        }
    });
    
    const hasSelected = cart.some(item => item.selected);
    const allSelected = cart.every(item => item.selected);
    
    // Mostrar/ocultar footer
    if (hasSelected) {
        cartFooter.style.display = 'block';
        cartFooter.classList.add('visible');
        cartFooter.classList.remove('hidden');
    } else {
        cartFooter.style.display = 'none';
        cartFooter.classList.remove('visible');
        cartFooter.classList.add('hidden');
    }
    
    deleteSelectedBtn.disabled = !hasSelected;
    selectAllCheckbox.checked = allSelected && cart.length > 0;
    
    // Generar HTML
    cartContent.innerHTML = cart.map((item, index) => {
        const key = getItemKey(item);
        const isSelected = selectedItems.has(key);
        return `
            <div class="cart-item ${isSelected ? 'selected' : ''}">
                <div class="cart-item-check">
                    <input type="checkbox" ${isSelected ? 'checked' : ''} 
                           data-key="${key}" class="item-select">
                </div>
                <img src="${item.imagenes?.[0] || 'https://via.placeholder.com/60x60?text=Producto'}" 
                     alt="${item.nombre}" 
                     onerror="this.src='https://via.placeholder.com/60x60?text=Error'">
                <div class="cart-item-info">
                    <h4>${item.nombre}</h4>
                    <div class="item-price">
                        $${item.precio.toLocaleString()} 
                        ${item.isCombo ? '🎁 Combo' : ''}
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" data-index="${index}" data-action="minus">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity || 1}</span>
                        <button class="qty-btn" data-index="${index}" data-action="plus">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item-remove" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    // Actualizar total
    if (hasSelected) {
        const total = cart
            .filter(item => selectedItems.has(getItemKey(item)))
            .reduce((sum, item) => sum + (item.precio * (item.quantity || 1)), 0);
        selectedTotal.textContent = '$' + total.toLocaleString();
        
        // Actualizar mensaje de envío
        const ciudad = document.getElementById('ciudad')?.value || '';
        const envioMsg = document.getElementById('envioMensaje');
        if (ciudad.toLowerCase().includes('montelíbano') || ciudad.toLowerCase().includes('montelibano')) {
            envioMsg.innerHTML = '🎉 <strong>Envío Gratis</strong> en Montelíbano';
        } else {
            envioMsg.innerHTML = '📦 Envío a nivel nacional';
        }
    } else {
        selectedTotal.textContent = '$0';
    }
    
    // ===== EVENT LISTENERS =====
    document.querySelectorAll('.item-select').forEach(cb => {
        cb.onchange = function() {
            const key = this.dataset.key;
            if (this.checked) {
                selectedItems.add(key);
            } else {
                selectedItems.delete(key);
            }
            renderCart();
        };
    });
    
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            const index = parseInt(this.dataset.index);
            const action = this.dataset.action;
            if (action === 'plus') {
                cart[index].quantity = (cart[index].quantity || 1) + 1;
            } else {
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    const key = getItemKey(cart[index]);
                    selectedItems.delete(key);
                    cart.splice(index, 1);
                }
            }
            updateCartBadge();
            renderCart();
        };
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            const index = parseInt(this.dataset.index);
            const key = getItemKey(cart[index]);
            selectedItems.delete(key);
            cart.splice(index, 1);
            updateCartBadge();
            renderCart();
            showNotification('🗑️ Producto eliminado');
        };
    });
    
    selectAllCheckbox.onchange = function() {
        if (this.checked) {
            cart.forEach(item => {
                const key = getItemKey(item);
                selectedItems.add(key);
                item.selected = true;
            });
        } else {
            selectedItems.clear();
            cart.forEach(item => item.selected = false);
        }
        renderCart();
    };
    
    deleteSelectedBtn.onclick = function() {
        if (selectedItems.size === 0) return;
        if (confirm('¿Eliminar los ' + selectedItems.size + ' productos seleccionados?')) {
            cart = cart.filter(item => {
                const key = getItemKey(item);
                return !selectedItems.has(key);
            });
            selectedItems.clear();
            updateCartBadge();
            renderCart();
            showNotification('✅ Productos eliminados');
        }
    };
}

// ===== CHECKOUT =====

function openCheckoutModal() {
    const selectedCart = cart.filter(item => {
        const key = getItemKey(item);
        return selectedItems.has(key);
    });
    
    if (selectedCart.length === 0) {
        showNotification('⚠️ Selecciona al menos un producto');
        return;
    }
    
    checkoutModal.style.display = 'block';
    
    const ciudadInput = document.getElementById('ciudad');
    ciudadInput.removeEventListener('input', verificarEnvio);
    ciudadInput.addEventListener('input', verificarEnvio);
    verificarEnvio({ target: ciudadInput });
}

function verificarEnvio(e) {
    const ciudad = e.target.value.trim();
    const envioInfo = document.getElementById('envioCheckoutInfo');
    
    if (ciudad.toLowerCase() === 'montelíbano' || ciudad.toLowerCase() === 'montelibano') {
        envioInfo.innerHTML = `
            <div class="envio-checkout-info gratis">
                <span class="envio-tag">🎉 GRATIS</span>
                <p style="margin-top: 8px;"><strong>Envío Gratis</strong> para Montelíbano, Córdoba</p>
                <p style="font-size: 13px; color: var(--text-secondary);">
                    ✅ El vendedor realizará el domicilio personalmente
                </p>
            </div>
        `;
        envioInfo.className = 'envio-checkout-info gratis';
    } else if (ciudad) {
        envioInfo.innerHTML = `
            <div class="envio-checkout-info">
                <p><strong>📦 Envío a nivel nacional</strong></p>
                <p style="font-size: 13px; color: var(--text-secondary);">
                    Costo de envío a confirmar al momento del pedido
                </p>
                <p style="font-size: 13px; color: var(--text-secondary);">
                    Contáctanos para más información
                </p>
            </div>
        `;
        envioInfo.className = 'envio-checkout-info';
    }
}

// ===== WHATSAPP - FUNCIONES DE ENVÍO =====

function generarMensajeVendedor(pedido) {
    let mensaje = '🛍️ *NUEVO PEDIDO iMONT*\n\n';
    mensaje += `📋 *Número:* ${pedido.id}\n`;
    mensaje += `📅 *Fecha:* ${new Date(pedido.fecha).toLocaleString('es-CO')}\n\n`;
    mensaje += `👤 *Cliente:* ${pedido.cliente.nombre}\n`;
    mensaje += `📱 *Teléfono:* ${pedido.cliente.telefono}\n`;
    mensaje += `📍 *Dirección:* ${pedido.cliente.direccion}\n`;
    mensaje += `🏙️ *Ciudad:* ${pedido.cliente.ciudad || 'No especificada'}\n`;
    mensaje += `📝 *Instrucciones:* ${pedido.cliente.instrucciones || 'Ninguna'}\n`;
    mensaje += `💳 *Pago:* ${pedido.metodoPago}\n`;
    if (pedido.referenciaPago) {
        mensaje += `🔢 *Referencia:* ${pedido.referenciaPago}\n`;
    }
    mensaje += `\n📦 *PRODUCTOS:*\n`;
    pedido.productos.forEach(p => {
        mensaje += `- ${p.cantidad}x ${p.nombre} = $${(p.precio * p.cantidad).toLocaleString()}\n`;
        if (p.isCombo && p.incluye) {
            p.incluye.forEach(item => {
                mensaje += `  • ${item}\n`;
            });
        }
    });
    mensaje += `\n💰 *TOTAL:* $${pedido.total.toLocaleString()}\n`;
    
    const ciudad = (pedido.cliente.ciudad || '').toLowerCase();
    if (ciudad.includes('montelíbano') || ciudad.includes('montelibano')) {
        mensaje += `\n🎉 *ENVÍO GRATIS* - Montelíbano, Córdoba\n`;
        mensaje += `📦 El vendedor hará el domicilio personalmente.\n`;
    } else {
        mensaje += `\n📦 *Envío a nivel nacional* - Confirmar costo con el cliente.\n`;
    }
    
    mensaje += `\n✅ *Estado:* Confirmado por el cliente`;
    mensaje += `\n📱 Contactar al cliente al ${pedido.cliente.telefono}`;
    
    return mensaje;
}

function enviarWhatsApp(mensaje) {
    // 🔴 CAMBIA ESTE NÚMERO POR EL TUYO 🔴
    const phoneNumber = '573117612740';
    
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'width=600,height=700');
    copyToClipboard(mensaje);
    
    return whatsappUrl;
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('📋 Mensaje copiado al portapapeles');
        }).catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

// ===== CHATBOT =====

function abrirChatbot(pedido) {
    pedidoActual = pedido;
    
    const resumenDiv = document.getElementById('resumenPedido');
    const productosHTML = pedido.productos.map(p => 
        `<div class="item">${p.cantidad}x ${p.nombre} - $${(p.precio * p.cantidad).toLocaleString()}</div>`
    ).join('');
    
    resumenDiv.innerHTML = `
        <div class="message-content resumen-pedido-chat">
            <p><strong>📋 Pedido #${pedido.id}</strong></p>
            ${productosHTML}
            <div class="total">Total: $${pedido.total.toLocaleString()}</div>
            <p style="margin-top: 8px;"><strong>📍 Dirección:</strong> ${pedido.cliente.direccion}</p>
            <p><strong>📱 Teléfono:</strong> ${pedido.cliente.telefono}</p>
            <p><strong>💳 Pago:</strong> ${pedido.metodoPago}</p>
        </div>
    `;
    
    const envioDiv = document.getElementById('mensajeEnvio');
    const ciudad = pedido.cliente.ciudad || '';
    if (ciudad.toLowerCase().includes('montelíbano') || ciudad.toLowerCase().includes('montelibano')) {
        envioDiv.innerHTML = `
            <div class="message-content" style="background: #34c75920; border-left: 3px solid #34c759;">
                <p>🎉 <strong>¡Envío Gratis!</strong></p>
                <p>Como eres de Montelíbano, el envío es <strong>completamente gratis</strong>.</p>
                <p>El vendedor hará el domicilio personalmente.</p>
            </div>
        `;
    } else {
        envioDiv.innerHTML = `
            <div class="message-content">
                <p>📦 Envío a nivel nacional.</p>
                <p>El vendedor te contactará para confirmar el costo de envío.</p>
            </div>
        `;
    }
    
    chatbotModal.style.display = 'block';
}

// ===== PEDIDOS - GESTIÓN COMPLETA =====

function verMisPedidos() {
    pedidosModal.style.display = 'block';
    renderPedidos();
}

function renderPedidos() {
    if (pedidos.length === 0) {
        pedidosContent.innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
                <i class="fas fa-box" style="font-size: 48px; color: var(--text-secondary);"></i>
                <p style="color: var(--text-secondary); margin-top: 15px;">No tienes pedidos aún</p>
                <button onclick="location.reload()" class="btn-primary" style="margin-top: 15px;">
                    <i class="fas fa-shopping-bag"></i> Ir a comprar
                </button>
            </div>
        `;
        return;
    }

    // Obtener orden seleccionado
    const ordenSeleccionado = document.getElementById('ordenPedidos')?.value || 'reciente';
    
    // Ordenar pedidos
    let pedidosOrdenados = [...pedidos];
    
    switch(ordenSeleccionado) {
        case 'reciente':
            pedidosOrdenados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
            break;
        case 'antiguo':
            pedidosOrdenados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
            break;
        case 'precio-mayor':
            pedidosOrdenados.sort((a, b) => b.total - a.total);
            break;
        case 'precio-menor':
            pedidosOrdenados.sort((a, b) => a.total - b.total);
            break;
        default:
            pedidosOrdenados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    }

    // Contar pedidos por estado
    const pendientes = pedidosOrdenados.filter(p => p.estado === 'pendiente' || p.estado === 'confirmado').length;
    const entregados = pedidosOrdenados.filter(p => p.estado === 'entregado').length;
    const finalizados = pedidosOrdenados.filter(p => p.estado === 'finalizado').length;
    
    const hayPedidos = pedidosOrdenados.length > 0;

    let html = '';

    // Controles superiores - CON SELECCIONAR TODOS Y ELIMINAR
    html += `
        <div class="pedidos-controls">
            <div class="pedidos-actions-top">
                <div class="pedidos-orden">
                    <label for="ordenPedidos">📊 Ordenar por:</label>
                    <select id="ordenPedidos" onchange="renderPedidos()">
                        <option value="reciente" ${ordenSeleccionado === 'reciente' ? 'selected' : ''}>📅 Más reciente</option>
                        <option value="antiguo" ${ordenSeleccionado === 'antiguo' ? 'selected' : ''}>📅 Más antiguo</option>
                        <option value="precio-mayor" ${ordenSeleccionado === 'precio-mayor' ? 'selected' : ''}>💰 Mayor precio</option>
                        <option value="precio-menor" ${ordenSeleccionado === 'precio-menor' ? 'selected' : ''}>💰 Menor precio</option>
                    </select>
                </div>
                <div class="pedidos-actions-buttons">
                    ${hayPedidos ? `
                        <button class="btn-select-all" onclick="seleccionarTodosPedidos()">
                            <i class="fas fa-check-double"></i> Seleccionar todos
                        </button>
                        <button class="btn-delete-selected-all" id="deleteSelectedAll" onclick="eliminarSeleccionadosTodos()" disabled>
                            <i class="fas fa-trash"></i> Eliminar seleccionados
                        </button>
                    ` : ''}
                    ${finalizados > 0 ? `
                        <button class="btn-delete-finalizados" onclick="eliminarFinalizados()">
                            <i class="fas fa-trash"></i> Eliminar finalizados
                        </button>
                    ` : ''}
                </div>
            </div>
            <div class="pedidos-stats">
                <span class="stat-pendiente">⏳ Pendientes: ${pendientes}</span>
                <span class="stat-entregado">✅ Entregados: ${entregados}</span>
                <span class="stat-finalizado">📦 Finalizados: ${finalizados}</span>
                <span class="stat-total">📊 Total: ${pedidosOrdenados.length}</span>
            </div>
        </div>
    `;

    // Lista de pedidos
    pedidosOrdenados.forEach((pedido, index) => {
        // Buscar el índice real en el array original
        const realIndex = pedidos.indexOf(pedido);
        
        // Asegurar que el pedido tenga estado
        if (!pedido.estado) {
            pedido.estado = 'pendiente';
            pedidos[realIndex].estado = 'pendiente';
        }
        
        const esEntregado = pedido.estado === 'entregado';
        const esFinalizado = pedido.estado === 'finalizado';
        const esPendiente = pedido.estado === 'pendiente' || pedido.estado === 'confirmado';
        const isSelected = pedidosSeleccionadosTodos.has(realIndex);

        // Texto del estado
        let estadoTexto = '';
        let estadoClase = '';
        if (esPendiente) {
            estadoTexto = '⏳ Pendiente';
            estadoClase = 'pendiente';
        } else if (esEntregado) {
            estadoTexto = '✅ Entregado';
            estadoClase = 'entregado';
        } else if (esFinalizado) {
            estadoTexto = '📦 Finalizado';
            estadoClase = 'finalizado';
        }

        html += `
            <div class="pedido-item ${esFinalizado ? 'pedido-finalizado' : ''} ${esEntregado ? 'pedido-entregado' : ''}" 
                 data-index="${realIndex}" data-estado="${pedido.estado}">
                <div class="pedido-header">
                    <div class="pedido-header-left">
                        <input type="checkbox" class="checkbox-pedido" data-index="${realIndex}" 
                               ${isSelected ? 'checked' : ''} onchange="toggleSeleccionPedido(${realIndex})">
                        <strong>📦 ${pedido.id}</strong>
                        <br>
                        <span style="font-size: 12px; color: var(--text-secondary);">
                            ${new Date(pedido.fecha).toLocaleDateString('es-CO')} - 
                            ${new Date(pedido.fecha).toLocaleTimeString('es-CO')}
                        </span>
                    </div>
                    <span class="pedido-estado estado-${estadoClase}">
                        ${estadoTexto}
                    </span>
                </div>
                
                <div style="margin: 10px 0;">
                    <p><strong>👤 Cliente:</strong> ${pedido.cliente.nombre}</p>
                    <p><strong>📱 Teléfono:</strong> ${pedido.cliente.telefono}</p>
                    <p><strong>📍 Dirección:</strong> ${pedido.cliente.direccion}</p>
                    <p><strong>🏙️ Ciudad:</strong> ${pedido.cliente.ciudad || 'No especificada'}</p>
                    ${pedido.cliente.instrucciones ? `<p><strong>📝 Instrucciones:</strong> ${pedido.cliente.instrucciones}</p>` : ''}
                    <p><strong>💳 Pago:</strong> ${pedido.metodoPago}</p>
                </div>
                
                <div>
                    <strong>Productos:</strong>
                    <ul class="pedido-productos">
                        ${pedido.productos.map(p => `
                            <li>${p.cantidad}x ${p.nombre} - $${(p.precio * p.cantidad).toLocaleString()}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="pedido-total">
                    Total: $${pedido.total.toLocaleString()}
                </div>
                
                <div class="pedido-actions">
                    ${esPendiente ? `
                        <button class="btn-entregar" onclick="marcarEntregado(${realIndex})">
                            <i class="fas fa-check-circle"></i> Recibí mi pedido
                        </button>
                        <button class="btn-cancelar-pedido" onclick="cancelarPedido(${realIndex})">
                            <i class="fas fa-times"></i> Cancelar
                        </button>
                    ` : ''}
                    
                    ${esEntregado ? `
                        <button class="btn-finalizar" onclick="marcarFinalizado(${realIndex})">
                            <i class="fas fa-flag-checkered"></i> Finalizar Pedido
                        </button>
                    ` : ''}
                    
                    ${esFinalizado ? `
                        <button class="btn-eliminar-finalizado" onclick="eliminarPedidoFinalizado(${realIndex})">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    ` : ''}
                    
                    <button class="btn-whatsapp" onclick="contactarPorWhatsApp(${realIndex})">
                        <i class="fab fa-whatsapp"></i> Contactar
                    </button>
                </div>
            </div>
        `;
    });

    pedidosContent.innerHTML = html;
    
    // Actualizar estado del botón eliminar seleccionados
    actualizarBotonEliminarTodos();
}

// ===== FUNCIONES DE GESTIÓN DE PEDIDOS =====

// --- Funciones de estado ---
function marcarEntregado(index) {
    if (confirm('¿Confirmar que has RECIBIDO este pedido?')) {
        pedidos[index].estado = 'entregado';
        pedidos[index].fechaEntrega = new Date().toISOString();
        localStorage.setItem('imont_pedidos', JSON.stringify(pedidos));
        renderPedidos();
        showNotification('✅ Pedido marcado como ENTREGADO');
    }
}

function marcarFinalizado(index) {
    if (confirm('¿Finalizar este pedido? (Se podrá eliminar después)')) {
        pedidos[index].estado = 'finalizado';
        pedidos[index].fechaFinalizacion = new Date().toISOString();
        localStorage.setItem('imont_pedidos', JSON.stringify(pedidos));
        renderPedidos();
        showNotification('📦 Pedido FINALIZADO');
    }
}

function cancelarPedido(index) {
    if (confirm('¿Estás seguro de cancelar este pedido?')) {
        pedidos.splice(index, 1);
        localStorage.setItem('imont_pedidos', JSON.stringify(pedidos));
        renderPedidos();
        showNotification('✅ Pedido cancelado');
    }
}

function eliminarPedidoFinalizado(index) {
    if (pedidos[index].estado !== 'finalizado') {
        showNotification('⚠️ Solo se pueden eliminar pedidos finalizados');
        return;
    }
    
    if (confirm('¿Eliminar este pedido finalizado?')) {
        pedidos.splice(index, 1);
        localStorage.setItem('imont_pedidos', JSON.stringify(pedidos));
        renderPedidos();
        showNotification('🗑️ Pedido eliminado');
    }
}

function eliminarFinalizados() {
    const finalizados = pedidos.filter(p => p.estado === 'finalizado');
    if (finalizados.length === 0) {
        showNotification('⚠️ No hay pedidos finalizados para eliminar');
        return;
    }
    
    if (confirm(`¿Eliminar ${finalizados.length} pedido(s) finalizado(s)?`)) {
        pedidos = pedidos.filter(p => p.estado !== 'finalizado');
        localStorage.setItem('imont_pedidos', JSON.stringify(pedidos));
        renderPedidos();
        showNotification(`🗑️ ${finalizados.length} pedido(s) eliminado(s)`);
    }
}

function contactarPorWhatsApp(index) {
    const pedido = pedidos[index];
    const mensaje = `Hola, soy ${pedido.cliente.nombre}. Quiero consultar sobre mi pedido ${pedido.id}`;
    const phone = '573117612740';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// ===== FUNCIONES DE SELECCIÓN Y ELIMINACIÓN EN LOTE =====

function toggleSeleccionPedido(index) {
    const checkbox = document.querySelector(`.checkbox-pedido[data-index="${index}"]`);
    if (checkbox) {
        if (checkbox.checked) {
            pedidosSeleccionadosTodos.add(index);
        } else {
            pedidosSeleccionadosTodos.delete(index);
        }
        actualizarBotonEliminarTodos();
    }
}

function actualizarBotonEliminarTodos() {
    const btn = document.getElementById('deleteSelectedAll');
    if (btn) {
        btn.disabled = pedidosSeleccionadosTodos.size === 0;
        if (pedidosSeleccionadosTodos.size > 0) {
            btn.innerHTML = `<i class="fas fa-trash"></i> Eliminar ${pedidosSeleccionadosTodos.size} seleccionado(s)`;
        } else {
            btn.innerHTML = `<i class="fas fa-trash"></i> Eliminar seleccionados`;
        }
    }
}

function seleccionarTodosPedidos() {
    if (pedidos.length === 0) {
        showNotification('⚠️ No hay pedidos para seleccionar');
        return;
    }
    
    pedidosSeleccionadosTodos.clear();
    pedidos.forEach((p, index) => {
        pedidosSeleccionadosTodos.add(index);
    });
    
    // Actualizar checkboxes
    document.querySelectorAll('.checkbox-pedido').forEach(cb => {
        const idx = parseInt(cb.dataset.index);
        if (pedidosSeleccionadosTodos.has(idx)) {
            cb.checked = true;
        }
    });
    
    actualizarBotonEliminarTodos();
    showNotification(`✅ ${pedidos.length} pedido(s) seleccionado(s)`);
}

function eliminarSeleccionadosTodos() {
    if (pedidosSeleccionadosTodos.size === 0) {
        showNotification('⚠️ No hay pedidos seleccionados');
        return;
    }
    
    if (confirm(`¿Eliminar ${pedidosSeleccionadosTodos.size} pedido(s)?`)) {
        // Eliminar de atrás hacia adelante para no afectar índices
        const indicesOrdenados = Array.from(pedidosSeleccionadosTodos).sort((a, b) => b - a);
        for (let idx of indicesOrdenados) {
            pedidos.splice(idx, 1);
        }
        
        pedidosSeleccionadosTodos.clear();
        localStorage.setItem('imont_pedidos', JSON.stringify(pedidos));
        renderPedidos();
        showNotification(`🗑️ ${indicesOrdenados.length} pedido(s) eliminado(s)`);
    }
}

// ===== UTILIDADES =====

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--bg-card);
        color: var(--text-primary);
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: var(--shadow-hover);
        border: 1px solid var(--border-color);
        z-index: 3000;
        animation: slideUp 0.3s ease;
        max-width: 350px;
        font-size: 14px;
    `;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

function mostrarConfirmacionFinal(pedido) {
    document.getElementById('numeroPedido').textContent = pedido.id;
    document.getElementById('totalPedido').textContent = '$' + pedido.total.toLocaleString();
    document.getElementById('direccionPedido').textContent = pedido.cliente.direccion;
    document.getElementById('pagoPedido').textContent = pedido.metodoPago === 'contraentrega' ? 'Contraentrega (Efectivo)' : pedido.metodoPago;
    document.getElementById('telefonoPedido').textContent = pedido.cliente.telefono;
    
    const ciudad = (pedido.cliente.ciudad || '').toLowerCase();
    if (ciudad.includes('montelíbano') || ciudad.includes('montelibano')) {
        document.getElementById('envioPedido').textContent = '🚚 Envío Gratis en Montelíbano (Domicilio personal)';
    } else {
        document.getElementById('envioPedido').textContent = '📦 Envío a nivel nacional (Costo a confirmar)';
    }
    
    confirmacionModal.style.display = 'block';
}

// ===== EVENT LISTENERS =====

function setupEventListeners() {
    // Tema
    themeToggle.addEventListener('click', () => {
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
    
    // Búsqueda
    searchInput.addEventListener('input', function() {
        const search = this.value.trim();
        searchClear.style.display = search ? 'block' : 'none';
        
        if (currentView === 'productos') {
            renderProducts(currentFilter, search);
        } else if (currentView === 'combos') {
            renderCombos(search);
        }
    });
    
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchClear.style.display = 'none';
        searchInput.focus();
    });
    
    // Filtros
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts(currentFilter, searchInput.value.trim());
        });
    });
    
    // Navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentView = link.dataset.section;
            
            if (currentView === 'combos') {
                document.getElementById('filtersSection').style.display = 'none';
                renderCombos(searchInput.value.trim());
            } else if (currentView === 'pedidos') {
                document.getElementById('filtersSection').style.display = 'none';
                productsGrid.innerHTML = '';
                pedidosModal.style.display = 'block';
                renderPedidos();
            } else {
                document.getElementById('filtersSection').style.display = 'block';
                renderProducts(currentFilter, searchInput.value.trim());
            }
        });
    });
    
    // Modales
    modalClose.addEventListener('click', () => productModal.style.display = 'none');
    cartClose.addEventListener('click', () => cartModal.style.display = 'none');
    checkoutClose.addEventListener('click', () => checkoutModal.style.display = 'none');
    document.getElementById('cancelarCheckout').addEventListener('click', () => checkoutModal.style.display = 'none');
    pedidosClose.addEventListener('click', () => pedidosModal.style.display = 'none');
    chatbotClose.addEventListener('click', () => chatbotModal.style.display = 'none');
    
    // Abrir carrito
    cartToggle.addEventListener('click', openCartModal);
    
    // Realizar pedido
    realizarPedidoBtn.addEventListener('click', function() {
        const selectedCart = cart.filter(item => {
            const key = getItemKey(item);
            return selectedItems.has(key);
        });
        
        if (selectedCart.length === 0) {
            showNotification('⚠️ Selecciona al menos un producto');
            return;
        }
        
        cartModal.style.display = 'none';
        openCheckoutModal();
    });
    
    // Click fuera del modal
    window.addEventListener('click', (e) => {
        if (e.target === productModal) productModal.style.display = 'none';
        if (e.target === cartModal) cartModal.style.display = 'none';
        if (e.target === checkoutModal) checkoutModal.style.display = 'none';
        if (e.target === confirmacionModal) confirmacionModal.style.display = 'none';
        if (e.target === pedidosModal) pedidosModal.style.display = 'none';
        if (e.target === chatbotModal) chatbotModal.style.display = 'none';
    });
    
    // Checkout form
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombreCompleto').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const ciudad = document.getElementById('ciudad').value.trim();
        const departamento = document.getElementById('departamento').value.trim();
        const metodoPago = document.getElementById('metodoPago').value;
        
        if (!nombre || !telefono || !direccion || !ciudad || !departamento || !metodoPago) {
            showNotification('⚠️ Completa todos los campos obligatorios');
            return;
        }
        
        if (telefono.length < 10) {
            showNotification('⚠️ Teléfono inválido (mínimo 10 dígitos)');
            return;
        }
        
        const selectedCart = cart.filter(item => {
            const key = getItemKey(item);
            return selectedItems.has(key);
        });
        
        const pedido = {
            id: 'PED-' + Date.now().toString().slice(-8),
            fecha: new Date().toISOString(),
            cliente: {
                nombre,
                telefono,
                direccion,
                ciudad,
                departamento,
                instrucciones: document.getElementById('instrucciones').value.trim()
            },
            productos: selectedCart.map(item => ({
                nombre: item.nombre,
                precio: item.precio,
                cantidad: item.quantity || 1,
                isCombo: item.isCombo || false,
                incluye: item.incluye || []
            })),
            total: selectedCart.reduce((sum, item) => sum + (item.precio * (item.quantity || 1)), 0),
            metodoPago: metodoPago,
            referenciaPago: document.getElementById('referenciaPago').value.trim(),
            estado: 'pendiente'
        };
        
        pedidos.push(pedido);
        localStorage.setItem('imont_pedidos', JSON.stringify(pedidos));
        
        cart = [];
        selectedItems.clear();
        updateCartBadge();
        
        checkoutModal.style.display = 'none';
        abrirChatbot(pedido);
    });
    
    // Método de pago
    document.getElementById('metodoPago').addEventListener('change', function() {
        const refGroup = document.getElementById('referenciaPagoGroup');
        if (this.value === 'nequi' || this.value === 'bancolombia' || this.value === 'daviplata') {
            refGroup.style.display = 'block';
        } else {
            refGroup.style.display = 'none';
        }
    });
    
    // ===== CHATBOT - CONFIRMAR PEDIDO =====
    document.getElementById('confirmarPedido').addEventListener('click', function() {
        if (pedidoActual) {
            const index = pedidos.findIndex(p => p.id === pedidoActual.id);
            if (index !== -1) {
                pedidos[index].estado = 'confirmado';
                localStorage.setItem('imont_pedidos', JSON.stringify(pedidos));
            }
            
            const mensaje = generarMensajeVendedor(pedidoActual);
            console.log('📤 Mensaje para el vendedor:');
            console.log(mensaje);
            
            enviarWhatsApp(mensaje);
            showNotification('📱 Abriendo WhatsApp...');
            
            chatbotModal.style.display = 'none';
            mostrarConfirmacionFinal(pedidoActual);
            showNotification('✅ Pedido confirmado y enviado al vendedor');
            
            pedidoActual = null;
        }
    });
    
    document.getElementById('modificarPedido').addEventListener('click', function() {
        chatbotModal.style.display = 'none';
        showNotification('📝 Abriendo formulario para modificar...');
        openCheckoutModal();
    });
    
    document.getElementById('cancelarChatbot').addEventListener('click', function() {
        chatbotModal.style.display = 'none';
        showNotification('❌ Pedido cancelado');
    });
}

// ===== FUNCIONES GLOBALES =====
window.verMisPedidos = verMisPedidos;
window.cancelarPedido = cancelarPedido;
window.contactarPorWhatsApp = contactarPorWhatsApp;
window.marcarEntregado = marcarEntregado;
window.marcarFinalizado = marcarFinalizado;
window.eliminarPedidoFinalizado = eliminarPedidoFinalizado;
window.eliminarFinalizados = eliminarFinalizados;
window.seleccionarTodosPedidos = seleccionarTodosPedidos;
window.eliminarSeleccionadosTodos = eliminarSeleccionadosTodos;
window.toggleSeleccionPedido = toggleSeleccionPedido;
window.actualizarBotonEliminarTodos = actualizarBotonEliminarTodos;
window.renderPedidos = renderPedidos;