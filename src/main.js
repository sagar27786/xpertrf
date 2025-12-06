// Main Application JavaScript
import './styles/main.css';

/**
 * App class - Main application logic
 */
class App {
  constructor() {
    this.scrollTopBtn = null;
    this.navbar = null;
  }

  /**
   * Initialize the application
   */
  init() {
    console.log('🚀 XpertRF Website Initialized');
    this.setupEventListeners();
  }

  /**
   * Set up event listeners
   */
  setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.onDOMReady();
    });

    window.addEventListener('load', () => {
      this.onWindowLoad();
    });

    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
  }

  /**
   * Called when DOM is ready
   */
  onDOMReady() {
    console.log('✅ DOM is ready');
    
    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // Initialize components
    this.initScrollToTop();
    this.initSmoothScroll();
    this.initNavbar();
    this.initContactForm();
  }

  /**
   * Called when window is fully loaded
   */
  onWindowLoad() {
    console.log('✅ Window fully loaded');
    // Hide loading spinner if exists
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }

  /**
   * Initialize Scroll to Top Button
   */
  initScrollToTop() {
    this.scrollTopBtn = document.getElementById('scrollTop');
    
    if (this.scrollTopBtn) {
      this.scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  /**
   * Handle scroll events
   */
  handleScroll() {
    // Show/hide scroll to top button
    if (this.scrollTopBtn) {
      if (window.pageYOffset > 300) {
        this.scrollTopBtn.classList.add('show');
      } else {
        this.scrollTopBtn.classList.remove('show');
      }
    }

    // Navbar shrink on scroll
    if (this.navbar) {
      if (window.pageYOffset > 50) {
        this.navbar.style.padding = '0.5rem 0';
      } else {
        this.navbar.style.padding = '1rem 0';
      }
    }
  }

  /**
   * Initialize smooth scrolling for anchor links
   */
  initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          
          if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
              navbarCollapse.classList.remove('show');
            }
          }
        }
      });
    });
  }

  /**
   * Initialize navbar
   */
  initNavbar() {
    this.navbar = document.querySelector('.navbar');
    
    // Add active class to nav links based on scroll position
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.pageYOffset + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }

  /**
   * Initialize contact form
   */
  initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Show success message
        this.showNotification('Thank you! Your message has been sent successfully.', 'success');
        
        // Reset form
        contactForm.reset();
      });
    }
  }

  /**
   * Show notification
   * @param {string} message - Notification message
   * @param {string} type - Notification type (success, error, info)
   */
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.style.cssText = 'position: fixed; top: 80px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
}

// Initialize app
const app = new App();
app.init();

// Export for external use if needed
export default App;
