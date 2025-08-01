// Cursor qui suive avec lumiere
let spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
  spotlight.style.setProperty("--x", `${e.clientX}px`);
  spotlight.style.setProperty("--y", `${e.clientY}px`);
});

// Arrow to left

