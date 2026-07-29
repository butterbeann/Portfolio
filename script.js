const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  const button = card.querySelector(".project-toggle");
  const projectLink = card.querySelector(".project-link");

  button.addEventListener("click", (event) => {
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

const translations = {
  en: {
    navAbout: "About",
    navWork: "Selected Work",
    aboutHeading: "About",
    aboutP1:
      "Teresa Ross Tellechea is based in New York City. She works across Spanish and English, with a focus on subtitling, translation, and film exhibition.",
    aboutP2:
      "She is especially interested in the poetics of translation and in finding creative ways to preserve tone, rhythm, and emotional honesty as dialogue moves beyond its language of origin.",
    aboutP3:
      "Her work includes subtitle translation, timing, revision, and live soft-titling for independent film, repertory cinema, and festival exhibition.",
    contactHeading: "Contact",
    aboutWorkLink: "Selected Work →",
    workHeading: "Selected Work",
    workInstruction: "Select an image to learn more about the project.",
    lhTitle: "Laurel & Hardy",
    lhMeta: "Film Forum · 2026",
    lhRole: "Spanish → English · Subtitle translation and live soft-titling",
    lhCopy:
      "Prepared English subtitles for select screenings of rarely shown Spanish-language Laurel & Hardy shorts during Film Forum's Laurel & Hardy festival. The work included translating dialogue, adapting songs and period humor, preparing the subtitles for Subtival, and manually advancing them from the booth during projection.",
    annTitle: "Ann Demeulemeester Spring / Summer 2026 BTS",
    annMeta: "Silken Weinberg · 2026 · 8 min",
    annRole: "English subtitles · Translation editing and timing",
    annCopy:
      "Created English captions for a behind-the-scenes film documenting the development of a fashion collection. The captions were carefully timed and edited to support comprehension while remaining visually unobtrusive and aligned with the film's pacing and aesthetic.",
    outriderTitle: "Outrider",
    outriderMeta: "Alystyre Julian · 2025 · 101 min",
    outriderRole: "English → Spanish · Subtitle translation and timing",
    outriderCopy:
      "Created Spanish subtitles from scratch for an independent feature composed largely of spoken-word poetry, including translation, timing, line breaks, and quality control. Although an AI-generated draft was provided, the poetic language and non-standard dialogue structure required a complete rebuild. Cultural references and poetic phrasing were adapted while preserving tone and rhythm.",
    lilithTitle: "A Biography of Lilith",
    lilithMeta: "Lynne Sachs · 1997 · 35 min",
    lilithRole: "English → Spanish · Subtitle revision",
    lilithCopy:
      "Revised and corrected Spanish subtitles for the film's 4K restoration, which screened at the Ambulante Documentary Film Festival in Mexico City in April 2024. The work involved refining translation accuracy, improving linguistic consistency, and adapting subtitles for clarity and readability in a festival exhibition context.",
    learnMore: "Learn more →",
    backToImage: "back to image",
    footerService: "English ⇄ Spanish subtitling",
    location: "New York City"
  },

  es: {
    navAbout: "Sobre mí",
    navWork: "Trabajos",
    aboutHeading: "Sobre mí",
    aboutP1:
      "Teresa Ross Tellechea reside en Nueva York y trabaja entre el español y el inglés, con especial atención a la subtitulación, la traducción y la exhibición cinematográfica.",
    aboutP2:
      "Le interesa especialmente la dimensión poética de la traducción y encontrar formas creativas de preservar el tono, el ritmo y la honestidad emocional de un diálogo al pasar de una lengua a otra.",
    aboutP3:
      "Su trabajo incluye la traducción, sincronización, revisión y subtitulación en vivo para cine independiente, cine de repertorio y festivales.",
    contactHeading: "Contacto",
    aboutWorkLink: "Trabajos →",
    workHeading: "Trabajos seleccionados",
    workInstruction: "Selecciona una imagen para conocer mejor el proyecto.",
    lhTitle: "Laurel & Hardy",
    lhMeta: "Film Forum · 2026",
    lhRole: "Español → inglés · Traducción y subtitulación en vivo",
    lhCopy:
      "Subtítulos en inglés para varias proyecciones de cortometrajes poco vistos de Laurel & Hardy rodados en español, presentados durante el ciclo dedicado al dúo en Film Forum. Traducción de diálogos, adaptación de canciones y humor de época, preparación de los subtítulos para Subtival y avance manual desde la cabina durante las proyecciones.",
    annTitle: "Ann Demeulemeester Spring / Summer 2026 BTS",
    annMeta: "Silken Weinberg · 2026 · 8 min",
    annRole: "Subtítulos en inglés · Edición y sincronización",
    annCopy:
      "Subtítulos en inglés para una pieza de making-of sobre el desarrollo de una colección de moda. Edición y sincronización orientadas a facilitar la comprensión sin imponerse visualmente y respetando el ritmo y la estética de la película.",
    outriderTitle: "Outrider",
    outriderMeta: "Alystyre Julian · 2025 · 101 min",
    outriderRole: "Inglés → español · Traducción y sincronización de subtítulos",
    outriderCopy:
      "Traducción al español, sincronización, división de líneas y control de calidad para un largometraje independiente compuesto en gran parte por poesía oral. El proyecto partía de un borrador generado por inteligencia artificial que requirió una reconstrucción completa. Adaptación de referencias culturales y formulaciones poéticas procurando preservar el tono y el ritmo del original.",
    lilithTitle: "A Biography of Lilith",
    lilithMeta: "Lynne Sachs · 1997 · 35 min",
    lilithRole: "Inglés → español · Revisión de subtítulos",
    lilithCopy:
      "Revisión y corrección de los subtítulos en español para la restauración en 4K de A Biography of Lilith, presentada en el Festival Ambulante de Cine Documental en Ciudad de México en abril de 2024. Revisión orientada a mejorar la precisión de la traducción, la coherencia lingüística y la claridad y legibilidad en un contexto de exhibición en festivales.",
    learnMore: "Más información →",
    backToImage: "volver a la imagen",
    footerService: "Subtitulación entre inglés y español",
    location: "Nueva York"
  }
};

const languageButtons = document.querySelectorAll(".language-button");

function applyLanguage(language) {
  const selected = translations[language] ? language : "en";

  document.documentElement.lang = selected;
  localStorage.setItem("portfolioLanguage", selected);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[selected][key];

    if (translation) {
      element.textContent = translation;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === selected;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.title =
    selected === "es"
      ? document.body.querySelector('[aria-current="page"]')?.getAttribute("href") === "projects.html"
        ? "Trabajos seleccionados | Teresa Ross Tellechea"
        : "Teresa Ross Tellechea"
      : document.body.querySelector('[aria-current="page"]')?.getAttribute("href") === "projects.html"
        ? "Selected Work | Teresa Ross Tellechea"
        : "Teresa Ross Tellechea";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});

const savedLanguage = localStorage.getItem("portfolioLanguage");
const browserLanguage = navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
applyLanguage(savedLanguage || browserLanguage);
