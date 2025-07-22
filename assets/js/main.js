// ====================
// Font Size Control
// ====================
function setFontSize(sizeClass) {
  document.body.classList.remove('font-small', 'font-medium', 'font-large');
  document.body.classList.add(sizeClass);
}

// ====================
// DOM Ready
// ====================
window.addEventListener("DOMContentLoaded", () => {
  setFontSize('font-medium');

  // Load includes in sequence
  Promise.all([
    fetch('assets/includes/home-button.html').then(res => res.text()),
    fetch('assets/includes/footer.html').then(res => res.text()),
    fetch("nav.html").then(res => res.text())
  ]).then(([homeButtonHTML, footerHTML, navHTML]) => {
    document.getElementById("home-button-container").innerHTML = homeButtonHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;
    document.getElementById("nav-container").innerHTML = navHTML;

    setupNavigation();
  });

  // Font size control buttons
  document.querySelectorAll('.font-size-control').forEach(button => {
    button.addEventListener('click', () => {
      const sizeClass = button.getAttribute('data-size');
      setFontSize(sizeClass);
    });
  });
});

// ====================
// Navigation Setup
// ====================
function setupNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav');
  const menuLabel = document.querySelector('.menu-label');
  const isMobile = window.matchMedia("(hover: none)").matches;

  // Highlight active page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href").split("?")[0].split("#")[0];
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  // Language switching
  const translations = ["home", "heim", "σπίτι"];
  let lastIndex = -1;

  hamburger.addEventListener("mouseover", () => {
    if (!menuLabel) return;

    let index;
    do {
      index = Math.floor(Math.random() * translations.length);
    } while (index === lastIndex);
    lastIndex = index;

    menuLabel.textContent = translations[index];
    menuLabel.classList.add("translated");
  });

  hamburger.addEventListener("mouseout", () => {
    menuLabel.classList.remove("translated");
  });

  // Nav reveal (hover on desktop, click on mobile)
  if (isMobile) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');      
    });
  } else {
    hamburger.addEventListener('mouseenter', () => {
      hamburger.classList.add('active');
      navMenu.classList.add('active');
    });

    hamburger.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!navMenu.matches(':hover')) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        }
      }, 200);
    });

    navMenu.addEventListener('mouseleave', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
    hamburger.addEventListener('click', () => {
          window.location.href = "index.html";
        
    });
  }
}

// ====================
// Lightbox Settings
// ====================
if (typeof lightbox !== 'undefined') {
  lightbox.option({
    'resizeDuration': 0,
    'imageFadeDuration': 0,
    'fadeDuration': 0,
    'wrapAround': true,
    'albumLabel': "%1 of %2"
  });
}
