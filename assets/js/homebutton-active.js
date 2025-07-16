document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".home-button a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href").split("?")[0].split("#")[0];
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
