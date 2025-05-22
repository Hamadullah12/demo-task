const hamburger = document.querySelector(".hamburger-icon");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu and reset icons when clicking a nav link
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
