document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("[data-card]");
  const expandAllBtn = document.getElementById("expandAllBtn");

  cards.forEach((card) => {
    const btn = card.querySelector(".toggle-btn");
    const content = card.querySelector(".card-content");

    btn.addEventListener("click", () => {
      toggleCard(content, btn);
    });
  });

  expandAllBtn.addEventListener("click", () => {
    const allOpen = [...document.querySelectorAll(".card-content")].every(
      (c) => c.classList.contains("open")
    );
    document.querySelectorAll("[data-card]").forEach((card) => {
      const btn = card.querySelector(".toggle-btn");
      const content = card.querySelector(".card-content");
      if (allOpen) {
        closeCard(content, btn);
      } else {
        openCard(content, btn);
      }
    });
  });

  function toggleCard(content, btn) {
    if (content.classList.contains("open")) {
      closeCard(content, btn);
    } else {
      openCard(content, btn);
    }
  }

  function openCard(content, btn) {
    content.classList.add("open");
    content.style.maxHeight = content.scrollHeight + "px";
    btn.textContent = "Ver menos";
  }

  function closeCard(content, btn) {
    content.style.maxHeight = 0;
    content.classList.remove("open");
    btn.textContent = "Ver más";
  }
});
