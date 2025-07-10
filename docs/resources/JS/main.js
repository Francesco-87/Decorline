document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main-content");

  loadPage("home");

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[data-page]');
    if (link) {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);
       // Close nav menu if open (for mobile/hamburger)
    const nav = document.querySelector("nav");
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  }
  });

  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  function loadPage(page) {
    fetch(`../src/pages/${page}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then(html => {
        main.innerHTML = html;
        window.scrollTo(0, 0);

        // 👇 Put testimonial logic HERE, after content is loaded
        const testimonials = document.querySelectorAll(".testimonial-item");
        if (testimonials.length > 0) {
          let index = 0;

          function showTestimonial(i) {
            testimonials.forEach((el, idx) => {
              el.classList.toggle("active", idx === i);
            });
          }

          showTestimonial(index);

          setInterval(() => {
            index = (index + 1) % testimonials.length;
            showTestimonial(index);
          }, 5000);
        }
      })
      .catch(err => {
        console.error("Error loading page:", err);
        main.innerHTML = `<p style="padding: 2rem; color: red;">Contenuto non disponibile.</p>`;
      });
  }
});
