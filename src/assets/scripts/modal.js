const form = document.querySelector(".modal__form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    form.innerHTML = `
      <p class="modal__success">¡Gracias! Tu reserva ha sido enviada correctamente.</p>
    `;
  } catch (error) {
    alert("Error: no se pudo enviar el formulario.");
  }
});
