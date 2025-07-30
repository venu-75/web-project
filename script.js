// script.js

// Alert on form submit (login or signup)
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual submission
      alert(" Form submitted successfully!");
      form.reset(); // Optionally reset the form
    });
  });
});

// Highlight active navbar link
const navLinks = document.querySelectorAll(".navbar ul li a");
const currentPage = location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#0056d2";
    link.style.fontWeight = "bold";
  }
});
const scrollContainer = document.getElementById('scrollContainer');

    function scrollLeft() {
      scrollContainer.scrollBy({ left: -320, behavior: 'smooth' });
    }

    function scrollRight() {
      scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
    }
