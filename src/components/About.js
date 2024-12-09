export function createAbout() {
  return `
    <section id="about" class="about-section">
      <div class="about-content" data-aos="fade-up">
        <h2>Our Story</h2>
        <p>Since 1970, Burger Bliss has been crafting the perfect burger experience. What started as a small family-owned joint has grown into a beloved destination for burger enthusiasts, while maintaining our commitment to quality and tradition.</p>
        <div class="features">
          <div class="feature" data-aos="fade-up" data-aos-delay="100">
            <i class="fas fa-leaf fa-2x" style="color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h3>Fresh Ingredients</h3>
            <p>We partner with local farmers and suppliers to source the freshest, highest-quality ingredients for our burgers and toppings.</p>
          </div>
          <div class="feature" data-aos="fade-up" data-aos-delay="200">
            <i class="fas fa-utensils fa-2x" style="color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h3>Made to Order</h3>
            <p>Every burger is crafted to perfection when you order, ensuring the best possible taste and quality in every bite.</p>
          </div>
          <div class="feature" data-aos="fade-up" data-aos-delay="300">
            <i class="fas fa-heart fa-2x" style="color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h3>Family Recipe</h3>
            <p>Our secret sauce and special seasoning blend have been passed down through three generations of burger artisans.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}