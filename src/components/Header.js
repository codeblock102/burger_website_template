export function createHeader() {
  return `
    <header class="header">
      <nav class="nav">
        <div class="logo">Burger Bliss</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" onclick="document.body.classList.toggle('menu-open')">
          <i class="fas fa-bars"></i>
        </button>
        <div class="nav-links">
          <button class="close-menu-btn" aria-label="Close menu" onclick="document.body.classList.remove('menu-open')">
            <i class="fas fa-times"></i>
          </button>
          <a href="#menu" onclick="document.body.classList.remove('menu-open')">Menu</a>
          <a href="#about" onclick="document.body.classList.remove('menu-open')">About</a>
          <a href="#contact" onclick="document.body.classList.remove('menu-open')">Contact</a>
          <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" class="nav-order-button">
            <i class="fab fa-uber"></i> Order Now
          </a>
        </div>
      </nav>
      <div class="hero" data-aos="fade-up">
        <h1>Welcome to Burger Bliss</h1>
        <p>Savor the moment with our delicious burgers</p>
        <a href="#menu" class="cta-button">View Menu</a>
      </div>
    </header>
  `;
}