const menuData = [
    // Most Ordered
    { name: "Pizza Piccantina", description: "tomatensauce, mozzarella, scharfe salami (1), parmesan", price: "€5.00", category: "🔥 Most Ordered", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760303878299-499818236.png" },
    { name: "Pizza Salami", description: "tomatensauce, mozzarella, salami napoli, parmesan", price: "€5.00", category: "🔥 Most Ordered", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760302796395-446943554.png" },
    { name: "Pizza Formaggi", description: "tomatensauce, mozzarella, gorgonzola, geräucherter scamorza, provolone, rosmarin", price: "€5.50", category: "🔥 Most Ordered", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-88-formaggi-primary.jpg" },
    { name: "Pizza Tonno", description: "tomatensauce, mozzarella, thunfisch, zwiebeln, kapern, oregano", price: "€5.50", category: "🔥 Most Ordered", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-89-tonno-primary.jpg" },
    { name: "Pizza Margherita", description: "tomatensauce, mozzarella, basilikum", price: "€4.00", category: "🔥 Most Ordered", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-86-margherita-primary.jpg" },
    { name: "Pizza Spinaci", description: "tomato sauce, mozzarella, spinach, ricotta, parmesan", price: "€4.50", category: "🔥 Most Ordered", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-90-spinaci-primary.jpg" },
    { name: "Pizza Patate & Pecorino", description: "tomatensauce, mozzarella, zucchini, zwiebeln, kartoffeln, schafskäse", price: "€5.00", category: "🔥 Most Ordered", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760301060032-451660881.jpg" },
    { name: "Insalata Di Capra", description: "salat der saison, friche kräuter, ziegenfrischkäse, walnüsse, getrocknete tomaten, kirschtomaten", price: "€10.00", category: "🔥 Most Ordered", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-98-insalata-di-capra-primary.jpg" },
    { name: "Proviant Cola / Zuckerfrei", description: "Cola ohne Zucker, flasche 0,33 L", price: "€4.00", category: "🔥 Most Ordered", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760306270507-336384791.png" },
    { name: "Peroni", description: "Lager beer, flasche 0,33 L", price: "€4.00", category: "🔥 Most Ordered", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-139-peroni-0-33l-primary.webp" },

    // Vegan Pizzas
    { name: "Pizza Spinaci & Patate", description: "spinat, kartoffeln, rosmarin, knoblauch, olivenöl", price: "€4.00", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-158-spinaci-and-patate-primary.jpg" },
    { name: "Pizza Carciofi & Pomodori", description: "tomatensauce, knoblauch, artischocken, getrocknete tomaten, olivenöl, chili", price: "€4.50", category: "🌱 Vegan Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760293197671-866234985.jpg" },
    { name: "Pizza Spinaci & Funghi", description: "champignons, kartoffeln, spinat, olivenöl, chili", price: "€4.50", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-156-spinaci-and-funghi-primary.jpg" },
    { name: "Pizza Zucchini & Patate", description: "zucchini, zwiebeln, kartoffeln, olivenöl, oregan", price: "€4.00", category: "🌱 Vegan Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760293047166-845692205.jpg" },
    { name: "Pizza Genovese", description: "tomatensauce, zwiebeln, walnüsse, verschiedene gebackene gemüse, schwarze oliven, basilikum, olivenöl", price: "€5.00", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-157-genovese-primary.jpg" },
    { name: "Pizza Portofino", description: "spinat, kartoffeln, knoblauch, artischocken, rosmarin, olivenöl, chili", price: "€5.00", category: "🌱 Vegan Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760300137482-430065687.jpg" },

    // Vegetarian Pizzas
    { name: "Pizza Funghi", description: "tomatensauce, mozzarella, champignons, parmesan", price: "€4.50", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-87-funghi-primary.jpg" },
    { name: "Pizza Pesto", description: "bufelmozzarela, basilikumpesto, kirschtomaten, parmesan, basilikum", price: "€6.00", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-93-pesto-primary.jpg" },
    { name: "Pizza Parmiggiana", description: "tomatensauce, büffelmozzarella, gegrillte aubergine, kirschtomaten, basilikum, parmesan", price: "€6.00", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-92-parmiggiana-primary.jpg" },

    // Meat Pizzas
    { name: "Pizza Melanzane & Speck", description: "tomatensauce, mozzarella, champignons, auberginen, speck (1), ricotta", price: "€5.50", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-106-melanzane-and-speck-primary.jpg" },
    { name: "Pizza Piccante", description: "tomatensauce, mozzarella, scharfe salami, artischocken, kirschtomaten, knoblauch, chili, schwarze oliven (2), kapern", price: "€5.50", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-104-piccante-primary.jpg" },
    { name: "Pizza Patate & Cotto", description: "tomatensauce, mozzarella, kartoffeln, gekochter Schinken, schafkäse", price: "€5.00", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-105-patate-and-cotto-primary.jpg" },

    // Fish Pizzas
    { name: "Pizza Mare & Provolone", description: "tomatensauce, mozzarella, meeresfrüchte, provolone, chili", price: "€5.00", category: "🐟 Fish Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-114-mare-and-provolone-primary.jpg" },
    { name: "Pizza Napoli", description: "tomatensauce, mozzarella, sardinen, schwarze oliven (2), kirschtomaten, kapern", price: "€5.00", category: "🐟 Fish Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-113-napoli-primary.jpg" },

    // Salads
    { name: "Insalata Mista", description: "salat der saison, kräuter, kirschtomaten, kerne, oregano, schwarze oliven", price: "€8.00", category: "🥗 Salads", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-95-insalata-mista-primary.jpg" },
    { name: "Insalata Forte", description: "salat der saison, kräuter, büffelmozzarella, artischoken, kirschtomaten, walnüsse, ricotta", price: "€10.50", category: "🥗 Salads", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-97-insalata-forte-primary.jpg" },

    // Drinks
    { name: "Coca Cola", description: "Flasche 0,33 L", price: "€3.50", category: "🥤 Non-Alcoholic Drinks", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-124-coca-cola-0-33l-primary.webp" },
    { name: "Vino Rosso", description: "Hauswein Rot, 0,25 L", price: "€6.50", category: "🍺 Alcoholic Drinks", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },

    // Desserts
    { name: "Tiramisu", description: "Hausgemachtes klassisches Tiramisu", price: "€6.50", category: "🍰 Desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80" }
];

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu('🔥 Most Ordered');
    setupFilterClicks();
});

function renderCategories() {
    const categories = ['🔥 Most Ordered', '🌱 Vegan Pizzas', '🥬 Vegetarian Pizzas', '🍖 Meat Pizzas', '🐟 Fish Pizzas', '🥗 Salads', '🥤 Non-Alcoholic Drinks', '🍺 Alcoholic Drinks', '🫒 Oil', '🍰 Desserts'];
    const filterBar = document.getElementById('categoryFilter');
    
    if (filterBar) {
        filterBar.innerHTML = categories.map(cat => `
            <button class="filter-pill ${cat === '🔥 Most Ordered' ? 'active' : ''}" data-category="${cat}">
                ${cat}
            </button>
        `).join('');
    }
}

function renderMenu(selectedCategory) {
    const menuContainer = document.getElementById('menuGrid');
    if (!menuContainer) return;
    
    // If selectedCategory is null, render all sections
    const categoriesToRender = selectedCategory ? [selectedCategory] : [...new Set(menuData.map(item => item.category))];
    
    menuContainer.innerHTML = categoriesToRender.map(cat => {
        const items = menuData.filter(item => item.category === cat);
        if (items.length === 0) return '';
        
        return `
            <div class="menu-section" id="${cat.replace(/\s+/g, '-')}">
                <h2 class="serif italic section-title">${cat}</h2>
                <div class="menu-grid">
                    ${items.map(item => `
                        <div class="menu-card">
                            <div class="card-image">
                                <img src="${item.image}" alt="${item.name}">
                                <span class="category-badge">${cat.split(' ').slice(1).join(' ')}</span>
                            </div>
                            <div class="card-content">
                                <h3 class="serif">${item.name}</h3>
                                <p class="description">${item.description}</p>
                                <div class="card-footer">
                                    <span class="price">${item.price}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function setupFilterClicks() {
    const filterBar = document.getElementById('categoryFilter');
    if (filterBar) {
        filterBar.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-pill')) {
                // Update active state
                document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
                e.target.classList.add('active');
                
                // Render selected category
                const category = e.target.getAttribute('data-category');
                renderMenu(category);
                
                // Scroll to top of menu
                window.scrollTo({
                    top: document.getElementById('menuContent').offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
}
