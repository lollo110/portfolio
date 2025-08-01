// Cursor qui suive avec lumiere
let spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
  spotlight.style.setProperty("--x", `${e.clientX}px`);
  spotlight.style.setProperty("--y", `${e.clientY}px`);
});

// Arrow to left

let div = document.querySelector(".return");
let icone = document.querySelector("#icone");

div.addEventListener("mouseover", function () {
  icone.style.animation = "none";
  void icone.offsetWidth;
  icone.style.animation = "slide-out 1s forwards";
});
div.addEventListener("mouseout", function () {
  icone.style.animation = "none";
  void icone.offsetWidth;
  icone.style.animation = "slide-in 1s forwards";
});
