const menuTlacidlo = document.querySelector(".menu-tlacidlo");
const menu = document.querySelector(".menu");
const menuOdkazy = document.querySelectorAll(".menu a");
const rok = document.querySelector("#rok");

function nastavMenu(otvorene) {
  menuTlacidlo.setAttribute("aria-expanded", String(otvorene));
  menu.classList.toggle("menu-otvorene", otvorene);
  document.body.classList.toggle("menu-otvorene", otvorene);

  const popis = menuTlacidlo.querySelector(".sr-only");
  popis.textContent = otvorene ? "Zavrieť menu" : "Otvoriť menu";
}

menuTlacidlo.addEventListener("click", () => {
  const otvorene = menuTlacidlo.getAttribute("aria-expanded") === "true";
  nastavMenu(!otvorene);
});

menuOdkazy.forEach((odkaz) => {
  odkaz.addEventListener("click", () => nastavMenu(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 680) {
    nastavMenu(false);
  }
});

const pozorovatel = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("viditelny");
        pozorovatel.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

document.querySelectorAll(".zjav").forEach((element) => {
  pozorovatel.observe(element);
});

rok.textContent = new Date().getFullYear();
