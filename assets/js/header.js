document.addEventListener("DOMContentLoaded", function () {
  // Elementos de controle do menu
  const menuToggle = document.getElementById("menuToggle");
  const menuAberto = document.querySelector(".menu-aberto");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const body = document.body;

  // Abre/fecha o menu ao mudar o estado do checkbox
  menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
      menuAberto.classList.add("active");
      body.classList.add("no-scroll");
    } else {
      menuAberto.classList.remove("active");
      body.classList.remove("no-scroll");
    }
  });

  // Fecha o menu ao clicar em um link de navegação
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.checked = false;
      menuAberto.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
});

function scrollToContato() {
  const contatoSection = document.querySelector("#contato");
  const targetPosition =
    contatoSection.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 2000; // Duração em milissegundos (2 segundos)
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Normaliza o progresso entre 0 e 1

    // Equação de easing para suavizar a rolagem
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  requestAnimationFrame(animation);
}
