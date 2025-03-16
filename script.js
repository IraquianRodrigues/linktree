document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-theme")
  const body = document.body
  const yearSpan = document.getElementById("year")

  // Atualiza o ano dinamicamente
  yearSpan.textContent = new Date().getFullYear()

  // Alternância de tema
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
  })
})