document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    injectFooter();
    setupMobileNav();
    highlightActiveLink();
});

function injectHeader() {
    const header = document.createElement('header');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    header.innerHTML = `
        <div class="container nav-container">
            <a href="/" class="logo">
                <img src="./assets/images/logo.png" alt="Zia Maria" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                <span class="logo-text serif " style="display:none;">Zia Maria</span>
            </a>
            
            <nav class="nav-links" id="navLinks">
                <a href="/" data-page="index.html">Home</a>
                <a href="/menu" data-page="menu.html">Menu</a>
                <a href="/reserve" data-page="reserve.html">Reserve</a>
                <a href="/blog" data-page="blog.html">Blog</a>
                <a href="/contact" data-page="contact.html">Contact</a>
                <a href="/host" class="btn btn-primary" style="padding: 8px 20px;">Host With Us</a>
            </nav>
            
            <div class="mobile-toggle" id="mobileToggle">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    `;
    
    document.body.prepend(header);
}

function injectFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">
                        <img src="./assets/images/logo.png" alt="Zia Maria" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                        <span class="logo-text serif " style="display:none;">Zia Maria</span>
                    </div>
                    <p class="">"Contemporary Italian pizza in the heart of Friedrichshain."</p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/ziamaria.fhain/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reserve">Reserve</a></li>
                        <li><a href="/host">Host With Us</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Visit</h4>
                    <p>Neue Bahnhofstraße 32,<br>10245 Berlin</p>
                    <p><a href="https://wa.me/4917627705583" class="whatsapp-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a></p>
                    <p><a href="mailto:bringteamtogether@ziamariaberlin.com">bringteamtogether@ziamariaberlin.com</a></p>
                </div>
                
                <div class="footer-col">
                    <h4>Hours</h4>
                    <p>Mon - Wed: 12:00–22:00</p>
                    <p>Thu - Sat: 12:00–23:00</p>
                    <p>Sun: 12:00–22:00</p>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2026 Zia Maria Berlin.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(footer);
}

function setupMobileNav() {
    const toggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('navLinks');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            const icon = toggle.querySelector('i');
            if (nav.classList.contains('show')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }
}

function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
            link.classList.add('active');
        }
    });
}
