document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main-content");

  // Load default content
  loadPage("home");

  // Universal event handler (event delegation)
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[data-page]');
    if (link) {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);
    }
  });

  function loadPage(page) {
    fetch(`pages/${page}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then(html => {
        main.innerHTML = html;
        window.scrollTo(0, 0); // optional: scroll to top
      })
      .catch(err => {
        console.error("Error loading page:", err);
        main.innerHTML = `
          <p style="padding: 2rem; color: red;">Contenuto non disponibile.</p>`;
      });
  }
});
