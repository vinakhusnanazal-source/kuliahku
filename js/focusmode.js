const focusBtn = document.getElementById("focusToggle");

// cek preferensi
if (localStorage.getItem("focusMode") === "on") {
  document.body.classList.add("focus");
}

// toggle fokus
focusBtn.addEventListener("click", () => {
  document.body.classList.toggle("focus");

  if (document.body.classList.contains("focus")) {
    localStorage.setItem("focusMode", "on");
  } else {
    localStorage.setItem("focusMode", "off");
  }
});
