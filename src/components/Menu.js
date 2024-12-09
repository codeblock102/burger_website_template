import { createOrderButton } from './OrderButton.js';

export function createMenu() {
  const menuItems = [
    {
      name: 'Classic Burger',
      price: '$8.99',
      description: 'Juicy beef patty with fresh lettuce, tomatoes, crispy onions, and our secret sauce on a toasted brioche bun'
    },
    {
      name: 'Cheese Paradise',
      price: '$10.99',
      description: 'Double smashed beef patties, four-cheese blend, caramelized onions, and truffle mayo on a butter-toasted bun'
    },
    {
      name: 'Veggie Delight',
      price: '$9.99',
      description: 'House-made plant-based patty, avocado, roasted peppers, arugula, and vegan garlic aioli on a whole grain bun'
    },
    {
      name: 'Spicy Champion',
      price: '$11.99',
      description: 'Grilled chicken, jalapeños, pepper jack cheese, chipotle sauce, and crispy bacon on a charcoal bun'
    },
    {
      name: 'BBQ Bliss',
      price: '$12.99',
      description: 'Slow-cooked pulled pork, homemade BBQ sauce, coleslaw, and crispy onion rings on a pretzel bun'
    },
    {
      name: 'Ocean Catch',
      price: '$13.99',
      description: 'Fresh Atlantic cod, tartar sauce, pickled cucumber, and mixed greens on a brioche bun'
    }
  ];

  const menuHTML = menuItems.map(item => `
    <div class="menu-item" data-aos="fade-up">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span class="price">${item.price}</span>
    </div>
  `).join('');

  return `
    <section id="menu" class="menu-section">
      <h2 data-aos="fade-up">Our Signature Burgers</h2>
      <div class="menu-grid">
        ${menuHTML}
      </div>
      <div class="order-section">
        ${createOrderButton()}
      </div>
    </section>
  `;
}