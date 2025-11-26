const modal = document.getElementById("modal__reserva");
const btnOpen = document.querySelector("[data-open-modal]");
const btnClose = document.querySelector(".modal__reserva__close");

btnOpen.addEventListener("click", (e) => {
  e.preventDefault();
  modal.hidden = false;
});

btnClose.addEventListener("click", () => {
  modal.hidden = true;
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.hidden = true;
});
