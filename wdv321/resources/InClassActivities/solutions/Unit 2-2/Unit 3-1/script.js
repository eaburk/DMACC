import { getCookie, setCookie } from "./helperFunctions.js";

function setTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

    setCookie("theme", theme, 7);
}

document.getElementById("btnDarkMode").addEventListener("click", () => {
  setTheme('dark');
});

document.getElementById("btnLightMode").addEventListener("click", () => {
  setTheme('light');
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = getCookie("theme");

  if (savedTheme) {
      document.body.classList.add(savedTheme);
  }
});