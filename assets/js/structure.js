// opacity
window.addEventListener("load", () => {
  let sidebar = document.querySelector(".presentation");
  let content = document.querySelector(".description");

  // Mostra la sidebar
  sidebar.style.opacity = "1";

  // Dopo 1 secondo, mostra il resto
  setTimeout(() => {
    content.style.opacity = "1";
  }, 500);
});

// Cursor qui suive avec lumiere
let spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
  spotlight.style.setProperty("--x", `${e.clientX}px`);
  spotlight.style.setProperty("--y", `${e.clientY}px`);
});

// Ingrandir les image

document.addEventListener("DOMContentLoaded", () => {
  let clickableThumbnails = document.querySelectorAll(".bigger");

  let modal = document.getElementById("imageModal");
  let modalImage = document.getElementById("modalImage");
  let closeButton = document.querySelector(".close-button");
  let body = document.body;

  function getScrollbarWidth() {
    let outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll";
    outer.style.msOverflowStyle = "scrollbar";
    document.body.appendChild(outer);
    let inner = document.createElement("div");
    outer.appendChild(inner);
    let scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return scrollbarWidth;
  }

  let scrollbarWidth = getScrollbarWidth();
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    `${scrollbarWidth}px`
  );

  clickableThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      modal.classList.add("active");
      modalImage.src = thumbnail.dataset.fullSrc;
      body.classList.add("no-scroll");
    });
  });

  let closeModal = () => {
    modal.classList.remove("active");
    body.classList.remove("no-scroll");
  };

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
