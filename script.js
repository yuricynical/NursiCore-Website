window.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");
  
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("show");
  
      openIcon.style.display = isOpen ? "none" : "inline";
      closeIcon.style.display = isOpen ? "inline" : "none";
    });
  
    // Add this part to reset the menu on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove("show");
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
      }
    });
  });
  