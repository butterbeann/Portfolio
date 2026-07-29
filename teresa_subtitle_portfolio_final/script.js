const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  const button = card.querySelector(".project-toggle");
  const projectLink = card.querySelector(".project-link");

  button.addEventListener("click", (event) => {
    // Let the external project link work without closing the card.
    if (event.target.closest(".project-link")) return;

    const willOpen = !card.classList.contains("is-open");

    projectCards.forEach((otherCard) => {
      otherCard.classList.remove("is-open");
      otherCard
        .querySelector(".project-toggle")
        .setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      card.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });

  if (projectLink) {
    projectLink.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
});
