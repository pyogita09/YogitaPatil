// Simple script for future interactivity (like smooth scroll or dark mode toggles)
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });
  