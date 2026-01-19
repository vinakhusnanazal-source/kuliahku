const toggle = document.getElementById("darkToggle");

if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "on");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("darkMode", "off");
    toggle.textContent = "🌙";
  }
});
