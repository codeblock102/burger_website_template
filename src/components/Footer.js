export function createFooter() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; ${new Date().getFullYear()} Burger Bliss. All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  `;
}