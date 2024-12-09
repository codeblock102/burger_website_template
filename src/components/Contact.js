export function createContact() {
  return `
    <section id="contact" class="contact-section">
      <div class="contact-content" data-aos="fade-up">
        <h2>Visit Us Today</h2>
        <div class="contact-info">
          <div class="address" data-aos="fade-up" data-aos-delay="100">
            <i class="fas fa-map-marker-alt fa-2x" style="color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h3>Location</h3>
            <p>123 Burger Street</p>
            <p>Foodie City, FC 12345</p>
            <p>Free parking available</p>
          </div>
          <div class="hours" data-aos="fade-up" data-aos-delay="200">
            <i class="fas fa-clock fa-2x" style="color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h3>Hours</h3>
            <p>Monday - Thursday: 11am - 10pm</p>
            <p>Friday - Saturday: 11am - 11pm</p>
            <p>Sunday: 12pm - 9pm</p>
          </div>
          <div class="phone" data-aos="fade-up" data-aos-delay="300">
            <i class="fas fa-phone-alt fa-2x" style="color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h3>Contact</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: hello@burgerbliss.com</p>
            <p>Reservations recommended</p>
          </div>
        </div>
      </div>
    </section>
  `;
}