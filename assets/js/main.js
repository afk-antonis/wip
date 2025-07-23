// ====================
// DOM Ready
// ====================
window.addEventListener("DOMContentLoaded", () => {
  setFontSize('font-medium');

  // Load includes in sequence
  Promise.all([
    fetch('assets/includes/home-button.html').then(res => res.text()),
    fetch('assets/includes/footer.html').then(res => res.text()),
  
  ]).then(([homeButtonHTML, footerHTML, navHTML]) => {
    document.getElementById("home-button-container").innerHTML = homeButtonHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;
    

  
  });
});

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
