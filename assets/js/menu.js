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
    { name: "Pizza Funghi", description: "tomatensauce, mozzarella, champignons, parmesan", price: "€4.50", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-161-funghi-primary.jpg" },
    { name: "Pizza Pesto", description: "bufelmozzarela, basilikumpesto, kirschtomaten, parmesan, basilikum", price: "€6.00", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-159-pesto-primary.jpg" },
    { name: "Pizza Parmiggiana", description: "tomatensauce, büffelmozzarella, gegrillte aubergine, kirschtomaten, basilikum, parmesan", price: "€6.00", category: "🥬 Vegetarian Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760302493591-785098170.jpg" },

    // Meat Pizzas
    { name: "Pizza Melanzane & Speck", description: "tomatensauce, mozzarella, champignons, auberginen, speck (1), ricotta", price: "€5.50", category: "🍖 Meat Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760304689938-378113944.png" },
    { name: "Pizza Piccante", description: "tomatensauce, mozzarella, scharfe salami, artischocken, kirschtomaten, knoblauch, chili, schwarze oliven (2), kapern", price: "€5.50", category: "🍖 Meat Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760304512164-580466459.jpg" },
    { name: "Pizza Patate & Cotto", description: "tomatensauce, mozzarella, kartoffeln, gekochter Schinken, schafkäse", price: "€5.00", category: "🍖 Meat Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760304346249-567379583.jpg" },

    // Fish Pizzas
    { name: "Pizza Mare & Provolone", description: "tomatensauce, mozzarella, meeresfrüchte, provolone, chili", price: "€5.00", category: "🐟 Fish Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760305081718-53711952.jpg" },
    { name: "Pizza Napoli", description: "tomatensauce, mozzarella, sardinen, schwarze oliven (2), kirschtomaten, kapern", price: "€5.00", category: "🐟 Fish Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-121-napoli-primary.jpg" },

    // Salads
    { name: "Insalata Mista", description: "salat der saison, kräuter, kirschtomaten, kerne, oregano, schwarze oliven", price: "€8.00", category: "🥗 Salads", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760305496986-954524010.png" },
    { name: "Insalata Forte", description: "salat der saison, kräuter, büffelmozzarella, artischoken, kirschtomaten, walnüsse, ricotta", price: "€10.50", category: "🥗 Salads", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-100-insalata-forte-primary.jpg" },

    // Drinks
    { name: "Coca Cola", description: "Flasche 0,33 L", price: "€3.50", category: "🥤 Non-Alcoholic Drinks", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760306270507-336384791.png" },
    { name: "Vino Rosso", description: "Hauswein Rot, 0,25 L", price: "€6.50", category: "🍺 Alcoholic Drinks", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },

    // Desserts
    { name: "Tiramisu", description: "Hausgemachtes klassisches Tiramisu", price: "€6.50", category: "🍰 Desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80" }
];

// Additional current items from the Prenzlauer Berg menu.
menuData.push(

    { name: "Garlic Olive Oil", description: "Garlic infused olive oil for dipping", price: "€0.50", category: "🫒 Oil", image: "https://prenzlauerberg.ziamariaberlin.de/images/wolt-asset-77.jpg" },
    { name: "Chili Olive Oil", description: "Spicy chili olive oil for dipping", price: "€0.50", category: "🫒 Oil", image: "https://prenzlauerberg.ziamariaberlin.de/images/wolt-asset-76.jpg" },
    { name: "Birra Moretti", description: "Lager beer, flasche 0,33 L", price: "€4.00", category: "🍺 Alcoholic Drinks", image: "https://prenzlauerberg.ziamariaberlin.de/images/befbf3ba-42df-11eb-ac0f-82027ecaa4ce_birra_moretti_0_33l.jpeg" },
    { name: "Vöslauer Mineralwasser Prickelnd", description: "Mineralwasser prickelnd, Flasche 0,25 L", price: "€2.50", category: "🥤 Non-Alcoholic Drinks", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760307469672-69322776.jpg" },
    { name: "Proviant Cola", description: "Cola, Flasche 0,33 L", price: "€4.00", category: "🥤 Non-Alcoholic Drinks", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760306193680-657882115.png" }
);

// Complete pizza and salad selections from the current restaurant menu.
menuData.push(
    { name: "Pizza Toscana", description: "zucchini, zwiebeln, paprika, schwarze oliven, olivenöl, minze", price: "€4.50", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-143-toscana-primary.jpg" },
    { name: "Pizza Marinara", description: "tomatensauce, knoblauch, kirschtomaten, oregano, olivenöl", price: "€4.00", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-141-marinara-primary.jpg" },
    { name: "Pizza Rusticana", description: "tomatensauce, artischoken, getrocknete tomaten, schwarze oliven, walnüsse, knoblauch, chili, olivenöl", price: "€5.50", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-147-rusticana-primary.jpg" },
    { name: "Pizza Noci", description: "auberginen, kartoffeln, walnüsse, rucola, knoblauch, olivenöl", price: "€5.50", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-145-noci-primary.jpg" },
    { name: "Pizza Primavera", description: "zucchini, zwiebeln, kirschtomaten, olivenöl, minze", price: "€4.00", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-142-primavera-primary.jpg" },
    { name: "Pizza Melanzane e Funghi", description: "champignons, knoblauch, auberginen, chili, olivenöl, getrocknete tomaten", price: "€5.00", category: "🌱 Vegan Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-118-melanzane-e-funghi-primary.jpg" },

    { name: "Pizza Patate & Pecorino", description: "tomatensauce, mozzarella, zucchini, zwiebeln, kartoffeln, schafskäse", price: "€5.00", category: "🥬 Vegetarian Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760301060032-451660881.jpg" },
    { name: "Pizza Verdure", description: "tomatensauce, mozzarella, verschiedene gebackene gemüse, knoblauch, oregano, schwarze oliven", price: "€4.50", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-95-verdure-primary.jpg" },
    { name: "Pizza Rucola", description: "tomato sauce, mozzarella, rocket, cherry tomatoes, parmesan", price: "€4.50", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-94-rucola-primary.jpg" },
    { name: "Pizza Spinaci", description: "tomato sauce, mozzarella, spinach, ricotta, parmesan", price: "€4.50", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-90-spinaci-primary.jpg" },
    { name: "Pizza Margherita", description: "tomatensauce, mozzarella, basilikum", price: "€4.00", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-86-margherita-primary.jpg" },
    { name: "Pizza Calabrese", description: "tomatensauce, mozzarella, paprika, kirschtomaten, artischocken, schwarze oliven (2), knoblauch, chili", price: "€5.00", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-97-calabrese-primary.jpg" },
    { name: "Pizza Zucchini", description: "tomato sauce, mozzarella, courgettes, onions, cherry tomatoes, mint", price: "€4.50", category: "🥬 Vegetarian Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760300787968-872573845.jpg" },
    { name: "Pizza Caprina", description: "tomatensauce, kirschtomaten, ziegenfrischkäse, walnüsse, getrocknete tomaten, rucola", price: "€6.00", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-112-caprina-primary.jpg" },
    { name: "Pizza Formaggi", description: "tomatensauce, mozzarella, gorgonzola, geräucherter scamorza, provolone, rosmarin", price: "€5.50", category: "🥬 Vegetarian Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-88-formaggi-primary.jpg" },

    { name: "Pizza Piccantina", description: "tomatensauce, mozzarella, scharfe salami (1), parmesan", price: "€5.00", category: "🍖 Meat Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760303878299-499818236.png" },
    { name: "Pizza Funghi & Speck", description: "tomatensauce, mozzarella, speck, champignons, parmesan", price: "€5.00", category: "🍖 Meat Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760304106588-678122712.jpg" },
    { name: "Pizza Tirolese", description: "mozzarella, zucchini, zwiebeln, speck, provolone, walnüsse", price: "€6.00", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-111-tirolese-primary.jpg" },
    { name: "Pizza Bresaola", description: "tomatensauce, büffelmozzarella, rinderschinken, walnüsse, schafskäse", price: "€6.50", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-105-bresaola-primary.jpg" },
    { name: "Pizza Salami", description: "tomatensauce, mozzarella, salami napoli, parmesan", price: "€5.00", category: "🍖 Meat Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760302796395-446943554.png" },
    { name: "Pizza Affumicata", description: "büffelmozzarella, kochschinken, champignons, geräucherter scamorza, getrocknete tomaten", price: "€6.00", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-104-affumicata-primary.jpg" },
    { name: "Pizza Cotto", description: "tomato sauce, mozzarella, gekochter schinken (1), provolone", price: "€5.00", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-91-cotto-primary.jpg" },
    { name: "Pizza Paesana", description: "tomatensauce, mozzarella, champignons, prosciutto, rucola, parmesan", price: "€5.50", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-109-paesana-primary.jpg" },
    { name: "Pizza Crudo", description: "tomatensauce, mozzarella, roher schinken (1), rosmarin, parmesan", price: "€5.00", category: "🍖 Meat Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-107-crudo-primary.jpg" },

    { name: "Pizza Provola & Sardelle", description: "tomato sauce, mozzarella, sardines, provolone, capers, chili", price: "€5.00", category: "🐟 Fish Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760305010012-889176361.jpg" },
    { name: "Pizza Sardelle", description: "tomatensauce, knoblauch, sardinen, kapern, chili, oregano", price: "€4.50", category: "🐟 Fish Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760304857566-423399254.png" },
    { name: "Pizza Salentina", description: "mozzarella, sardelle, gorgonzola, knoblauch, zucchini, minze, kapern, schwarze olive (2), zwiebel", price: "€5.50", category: "🐟 Fish Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-122-salentina-primary.jpg" },
    { name: "Pizza Tonno", description: "tomatensauce, mozzarella, thunfisch, zwiebeln, kapern, oregano", price: "€5.50", category: "🐟 Fish Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-89-tonno-primary.jpg" },
    { name: "Pizza Mare", description: "tomatensauce, knoblauch, meeresfrüchte, chili, oregano", price: "€5.50", category: "🐟 Fish Pizzas", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-120-mare-primary.jpg" },
    { name: "Pizza Frutti Di Mare", description: "meeresfrüchte, mozzarella, kirschtomaten, knoblauch, pfeffer, zitronen", price: "€6.50", category: "🐟 Fish Pizzas", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760305240739-147837589.jpg" },

    { name: "Insalata Tonno", description: "salat der saison, kräuter, thunfisch, zwiebeln, kapern, oregano", price: "€10.50", category: "🥗 Salads", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760305920081-371315829.jpg" },
    { name: "Insalata Di Verdure", description: "salat der saison, kräuter, gebackenes gemüse, champignons, zucchini, kerne, oregano", price: "€9.00", category: "🥗 Salads", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760305770517-560023441.jpg" },
    { name: "Insalata Di Capra", description: "salat der saison, friche kräuter, ziegenfrischkäse, walnüsse, getrocknete tomaten, kirschtomaten", price: "€10.00", category: "🥗 Salads", image: "https://prenzlauerberg.ziamariaberlin.de/images/products/product-98-insalata-di-capra-primary.jpg" },
    { name: "Insalata Verde", description: "salat der saison, kräuter, kartoffeln, zucchini, walnüsse, oregano", price: "€9.50", category: "🥗 Salads", image: "https://ziamariapberg.onrender.com/api/upload/uploads/product-1760305803191-973128012.jpg" }
);

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenu();
    setupFilterClicks();
});

function renderCategories() {
    const categories = [...new Set(menuData.map(item => item.category))];
    const filterBar = document.getElementById('categoryFilter');
    
    if (filterBar) {
        filterBar.innerHTML = categories.map(cat => `
            <button class="filter-pill" data-category="${cat}">
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
                
                // Keep the full menu visible and jump to the selected category.
                const category = e.target.getAttribute('data-category');
                const target = document.getElementById(category.replace(/\s+/g, '-'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}
