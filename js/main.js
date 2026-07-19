/* =========================================================
   Distribuidora Casa Vázquez — Main JavaScript file
   Vanilla JavaScript with no external libraries.

   Functions:
   1. Open and close the mobile navigation menu.
   2. Display the current year in the footer.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- 1. Mobile navigation menu ---------- */
  var botonMenu = document.querySelector(".boton-menu");
  var menu = document.querySelector(".menu");

  if (botonMenu && menu) {
    botonMenu.addEventListener("click", function () {
      var estaAbierto = menu.classList.toggle("abierto");

      // Update the accessibility state for screen readers
      botonMenu.setAttribute(
        "aria-expanded",
        estaAbierto ? "true" : "false"
      );
    });

    // Close the menu after a navigation link is selected on mobile
    var enlaces = menu.querySelectorAll("a");

    enlaces.forEach(function (enlace) {
      enlace.addEventListener("click", function () {
        menu.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 2. Current year in the footer ---------- */
  var anio = document.querySelector(".anio-actual");

  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

   /* ---------- 3. Contact form feedback ---------- */
  var formularioContacto = document.querySelector("#formulario-contacto");

  if (formularioContacto) {
    formularioContacto.addEventListener("submit", function (evento) {
      evento.preventDefault();

      alert(
        "Este formulario todavía no está conectado. Por favor, contáctanos por WhatsApp."
      );
    });
  }
});
