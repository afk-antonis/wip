// Font size control function
function setFontSize(sizeClass) {
  document.body.classList.remove('font-small', 'font-medium', 'font-large');
  document.body.classList.add(sizeClass);
}

// Default font size on DOM content loaded
window.addEventListener("DOMContentLoaded", () => {
  setFontSize('font-medium');

  // Navigation menu activation and hamburger toggle
 fetch("nav.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("nav-container").innerHTML = data;

        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('nav');

        // Highlight active nav link
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll("nav a");

        navLinks.forEach(link => {
          const href = link.getAttribute("href").split("?")[0].split("#")[0];
          if (href === currentPage) {
            link.classList.add("active");
          }
        });

        // Toggle menu visibility
        hamburger.addEventListener('mouseenter', () => {
          hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
        });
        hamburger.addEventListener; navMenu.addEventListener('mouseleave', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });

  // Load home button include
  fetch('assets/includes/home-button.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById("home-button-container").innerHTML = data;
    });

  // Load footer include
  fetch("assets/includes/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
if (typeof lightbox !== 'undefined') {
    lightbox.option({
      'resizeDuration': 0,
      'imageFadeDuration': 0,
      'fadeDuration': 0,
      'wrapAround': true,
      'albumLabel': "%1 of %2"
    });
  }
