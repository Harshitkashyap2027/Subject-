// lvlBase Main JavaScript
// Handles: Navbar, mobile menu, scroll animations, FAQ accordion, tabs, active nav

// ===== NAVBAR HTML =====
const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="navbar-inner">
      <a href="./index.html" class="navbar-logo">
        ⚡ <span class="gradient-text">lvlBase</span>
      </a>
      <ul class="navbar-links" id="navbar-links">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./product.html">Product</a></li>
        <li><a href="./solutions.html">Solutions</a></li>
        <li><a href="./features.html">Features</a></li>
        <li><a href="./pricing.html">Pricing</a></li>
        <li><a href="./demo.html">Demo</a></li>
        <li><a href="./ai-lab.html">AI Lab</a></li>
      </ul>
      <div class="navbar-actions">
        <a href="./login.html" class="btn btn-ghost btn-sm">Login</a>
        <a href="./register.html" class="btn btn-primary btn-sm">Get Started</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a href="./index.html">Home</a>
  <a href="./product.html">Product</a>
  <a href="./solutions.html">Solutions</a>
  <a href="./features.html">Features</a>
  <a href="./pricing.html">Pricing</a>
  <a href="./demo.html">Demo</a>
  <a href="./ai-lab.html">AI Lab</a>
  <a href="./integrations.html">Integrations</a>
  <a href="./about.html">About</a>
  <a href="./blog.html">Blog</a>
  <div class="mobile-actions">
    <a href="./login.html" class="btn btn-outline btn-full">Login</a>
    <a href="./register.html" class="btn btn-primary btn-full">Get Started Free</a>
  </div>
</div>
`;

// ===== FOOTER HTML =====
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="./index.html" style="font-size:1.4rem;font-weight:800;display:flex;align-items:center;gap:0.4rem;text-decoration:none;">
          ⚡ <span class="gradient-text">lvlBase</span>
        </a>
        <p>The all-in-one platform for organizations that run on performance, learning, and AI-powered insights.</p>
        <div class="footer-social">
          <a href="#" class="social-icon" aria-label="Twitter">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.734l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" class="social-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="./features.html">Features</a></li>
          <li><a href="./pricing.html">Pricing</a></li>
          <li><a href="./demo.html">Demo</a></li>
          <li><a href="./integrations.html">Integrations</a></li>
          <li><a href="./marketplace.html">Marketplace</a></li>
          <li><a href="./ai-lab.html">AI Lab</a></li>
          <li><a href="./product.html">Product Overview</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="./solutions.html#education">Education</a></li>
          <li><a href="./solutions.html#healthcare">Healthcare</a></li>
          <li><a href="./solutions.html#corporate">Corporate</a></li>
          <li><a href="./solutions.html#government">Government</a></li>
          <li><a href="./use-cases.html">Use Cases</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="./about.html">About Us</a></li>
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="./careers.html">Careers</a></li>
          <li><a href="./partners.html">Partners</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="./legal.html">Terms of Service</a></li>
          <li><a href="./legal.html#privacy">Privacy Policy</a></li>
          <li><a href="./legal.html#cookies">Cookie Policy</a></li>
          <li><a href="./legal.html#data">Data Protection</a></li>
          <li><a href="./support.html">Support</a></li>
          <li><a href="./docs.html">Documentation</a></li>
          <li><a href="./developers.html">Developers</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span id="footer-year"></span> lvlBase, Inc. All rights reserved.</p>
      <div class="status-dot">All systems operational</div>
    </div>
  </div>
</footer>
`;

// ===== INJECT NAVBAR & FOOTER =====
function injectLayout() {
  const navTarget = document.getElementById('navbar-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

  // Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== ACTIVE NAV LINK =====
function setActiveNavLink() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const allLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');
  allLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.replace('./', '').split('/').pop();
    if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length === 0) return;
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(function(el) { observer.observe(el); });
}

// ===== FAQ ACCORDION =====
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');
      // Close all
      faqItems.forEach(function(i) { i.classList.remove('open'); });
      // Open clicked if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ===== TABS =====
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const targetId = btn.dataset.tab;
      const container = btn.closest('[data-tabs]') || document;
      // Deactivate all tabs in container
      container.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      container.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
      // Activate clicked
      btn.classList.add('active');
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    });
  });
}

// ===== FILTER BUTTONS =====
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const group = btn.closest('.filter-group');
      if (group) group.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const target = btn.dataset.target;
      if (!target) return;
      document.querySelectorAll(`[data-category]`).forEach(function(card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', function() {
  injectLayout();
  initNavbarScroll();
  initMobileMenu();
  setActiveNavLink();
  initScrollAnimations();
  initFAQ();
  initTabs();
  initFilters();
});
