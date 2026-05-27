const Utils = window.PortfolioUtils;

function renderProjectCard(project) {
  const hasImage = Boolean(project.heroImage);
  const imageHTML = hasImage
    ? `<img src="${Utils.escapeHTML(project.heroImage)}" alt="${Utils.escapeHTML(project.title)} project preview" loading="lazy" onerror="this.remove(); this.parentElement.classList.remove('has-image');" />`
    : "";

  const cardLink = Utils.getProjectUrl(project);

  return `
    <article class="project-card" data-slug="${Utils.escapeHTML(project.slug)}" data-visible="${project.visible}">
      <div class="card-img ${hasImage ? "has-image" : ""}" style="--fallback-bg:${Utils.escapeHTML(project.fallback || "linear-gradient(135deg, var(--ice), var(--aqua))")};">
        ${imageHTML}
      </div>
      <div class="card-body">
        <span class="tag">${Utils.escapeHTML(project.categoryLabel)}</span>
        <h4 class="card-title">${Utils.escapeHTML(project.title)}</h4>
        <p class="card-desc">${Utils.escapeHTML(project.cardDescription)}</p>
        <p class="card-meta">${Utils.escapeHTML(project.meta)}</p>
        <a href="${Utils.escapeHTML(cardLink)}" class="open-file-btn">view project ↗</a>
      </div>
    </article>
  `;
}

function getProjectsForCategory(category) {
  const projects = Utils.getProjects().filter(project => project.visible);

  if (category.id === "selected") {
    return projects.filter(project => project.featured);
  }

  return projects.filter(project => project.categoryGroup === category.id);
}

function renderProjects() {
  const container = document.getElementById("projectCategories");
  if (!container) return;

  container.innerHTML = Utils.getCategories()
    .filter(category => category.visible)
    .map(category => {
      const cards = getProjectsForCategory(category);

      if (cards.length === 0) return "";

      return `
        <div class="project-category">
          <div class="category-title-row">
            <h3 class="category-title">${Utils.escapeHTML(category.title)}</h3>
            <p class="category-note">${Utils.escapeHTML(category.note)}</p>
          </div>
          <div class="cards-grid">
            ${cards.map(renderProjectCard).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

function setHeroImage() {
  const hero = document.getElementById("heroImage");
  const heroImage = window.SITE_ASSETS?.homeHeroImage;

  if (!hero || !heroImage) return;

  hero.style.backgroundImage = `url('${heroImage}')`;
  hero.classList.add("has-image");
  hero.textContent = "";
}

function prepareScrollAnimations() {
  const revealTargets = [
    ...document.querySelectorAll("#home .sticker, .hero-name, .hero-kicker, .hero-copy, .hero-actions, .hero-window"),
    ...document.querySelectorAll(".section-heading, .section-sub, .finder-window, .project-category, .project-card, .about-card, .resume-header, .resume-box, .mail-popup")
  ];

  revealTargets.forEach((el, index) => {
    el.classList.add("reveal");
    el.style.setProperty("--delay", `${Math.min(index * 35, 280)}ms`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  revealTargets.forEach(el => revealObserver.observe(el));
}

function initScrollEffects() {
  const progressBar = document.getElementById("scrollProgress");
  const scrollPercent = document.getElementById("scrollPercent");
  const scrollSection = document.getElementById("scrollSection");
  const dockNav = document.querySelector(".dock-nav");
  const heroWindow = document.querySelector(".hero-window");
  const finderWindow = document.querySelector(".finder-window");
  const mailPopup = document.querySelector(".mail-popup");
  const scrollOrbs = document.querySelectorAll(".scroll-orb");
  let scrollTicking = false;
  let dockTimer;

  function updateScrollEffects() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));

    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
    if (scrollPercent) scrollPercent.textContent = `${Math.round(progress * 100)}%`;

    if (heroWindow) heroWindow.style.setProperty("--hero-y", `${scrollTop * -0.035}px`);
    if (finderWindow) finderWindow.style.setProperty("--finder-y", `${Math.sin(progress * Math.PI) * -10}px`);
    if (mailPopup) mailPopup.style.setProperty("--mail-y", `${(1 - progress) * 10}px`);

    scrollOrbs.forEach((orb, index) => {
      const speed = Number(orb.dataset.speed || 0.1);
      const direction = index % 2 === 0 ? 1 : -1;
      orb.style.transform = `translate3d(${direction * progress * 38}px, ${scrollTop * speed}px, 0)`;
    });

    scrollTicking = false;
  }

  function requestScrollUpdate() {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScrollEffects);
      scrollTicking = true;
    }

    if (dockNav) {
      dockNav.classList.add("is-scrolling");
      clearTimeout(dockTimer);
      dockTimer = setTimeout(() => dockNav.classList.remove("is-scrolling"), 180);
    }
  }

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
        if (scrollSection) scrollSection.textContent = entry.target.id;
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(section => observer.observe(section));

  updateScrollEffects();
  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", updateScrollEffects);
}

function initAboutInteractions() {
  const aboutPlaygroundText = document.getElementById("aboutPlaygroundText");
  const aboutProfileChips = document.querySelectorAll(".profile-chip[data-copy]");

  aboutProfileChips.forEach(chip => {
    chip.addEventListener("click", () => {
      aboutProfileChips.forEach(item => item.classList.remove("is-active"));
      chip.classList.add("is-active");
      if (aboutPlaygroundText) aboutPlaygroundText.textContent = chip.dataset.copy;
    });
  });
}

function initScrapbook() {
  const scrapbookFrame = document.getElementById("aboutScrapbook");
  const scrapbookStickers = document.querySelectorAll(".scrap-sticker[data-note]");

  function activateScrapSticker(sticker) {
    scrapbookStickers.forEach(item => item.classList.remove("is-active"));
    sticker.classList.add("is-active");
  }

  scrapbookStickers.forEach(sticker => {
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    let hasDragged = false;

    sticker.addEventListener("pointerdown", event => {
      if (!scrapbookFrame) return;

      hasDragged = false;
      sticker.setPointerCapture(event.pointerId);

      const frameRect = scrapbookFrame.getBoundingClientRect();
      const stickerRect = sticker.getBoundingClientRect();

      startX = event.clientX;
      startY = event.clientY;
      startLeft = stickerRect.left - frameRect.left;
      startTop = stickerRect.top - frameRect.top;
    });

    sticker.addEventListener("pointermove", event => {
      if (!scrapbookFrame || !sticker.hasPointerCapture(event.pointerId)) return;

      const dx = event.clientX - startX;
      const dy = event.clientY - startY;

      if (Math.abs(dx) + Math.abs(dy) > 4) {
        hasDragged = true;
        sticker.dataset.dragged = "true";
      }

      if (!hasDragged) return;

      const frameRect = scrapbookFrame.getBoundingClientRect();
      const stickerRect = sticker.getBoundingClientRect();

      const maxLeft = frameRect.width - stickerRect.width;
      const maxTop = frameRect.height - stickerRect.height;

      const newLeft = Math.max(0, Math.min(maxLeft, startLeft + dx));
      const newTop = Math.max(0, Math.min(maxTop, startTop + dy));

      sticker.style.setProperty("--x", `${(newLeft / frameRect.width) * 100}%`);
      sticker.style.setProperty("--y", `${(newTop / frameRect.height) * 100}%`);
    });

    sticker.addEventListener("pointerup", event => {
      if (sticker.hasPointerCapture(event.pointerId)) {
        sticker.releasePointerCapture(event.pointerId);
      }

      if (!hasDragged) {
        activateScrapSticker(sticker);
      }

      window.setTimeout(() => {
        sticker.dataset.dragged = "false";
      }, 0);
    });

    sticker.addEventListener("click", () => {
      if (sticker.dataset.dragged === "true") return;
      activateScrapSticker(sticker);
    });
  });
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

renderProjects();
setHeroImage();
prepareScrollAnimations();
initScrollEffects();
initAboutInteractions();
initScrapbook();
initSmoothScrolling();