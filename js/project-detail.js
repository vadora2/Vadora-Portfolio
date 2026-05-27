const Utils = window.PortfolioUtils;

function getMediaType(mediaItem) {
  if (!mediaItem) return "";

  if (typeof mediaItem === "object" && mediaItem.type) {
    return mediaItem.type;
  }

  const value = Utils.getMediaSrc(mediaItem).toLowerCase();

  if (value.includes("youtu.be") || value.includes("youtube.com")) return "youtube";
  if (value.endsWith(".mp4")) return "video";
  if (value.endsWith(".pdf")) return "pdf";

  return "image";
}

function getMediaLabel(mediaItem, fallback = "Project media") {
  if (typeof mediaItem === "object" && mediaItem.label) {
    return mediaItem.label;
  }

  if (typeof mediaItem === "object" && mediaItem.title) {
    return mediaItem.title;
  }

  return fallback;
}

function shouldContainImage(mediaItem) {
  if (typeof mediaItem === "object" && mediaItem.fit === "contain") {
    return true;
  }

  const value = Utils.getMediaSrc(mediaItem).toLowerCase();

  return (
    value.includes("floorplan") ||
    value.includes("axo") ||
    value.includes("diagram") ||
    value.includes("plan")
  );
}

function setGalleryMedia(element, mediaItem) {
  if (!element) return;

  const src = Utils.getMediaSrc(mediaItem);

  if (!src) {
    element.remove();
    return;
  }

  const type = getMediaType(mediaItem);
  const label = getMediaLabel(mediaItem, "Project media");

  if (type === "pdf") {
    element.classList.add("pdf-preview");

    element.innerHTML = `
      <iframe
        src="${Utils.escapeHTML(src)}"
        title="${Utils.escapeHTML(label)}"
        loading="lazy">
      </iframe>

      <div class="pdf-preview-bar">
        <span class="pdf-preview-title">
          ${Utils.escapeHTML(label)}
        </span>

        <div class="pdf-preview-actions">
          <a class="btn" href="${Utils.escapeHTML(src)}" target="_blank" rel="noopener">
            Open PDF
          </a>
        </div>
      </div>
    `;

    return;
  }

  if (type === "youtube") {
    const videoId = Utils.getYouTubeId(src);
    const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";

    if (thumbnail) {
      element.style.backgroundImage = `url('${thumbnail}')`;
      element.classList.add("has-image", "video-slot");
    }

    element.innerHTML = `
      <a 
        class="video-link" 
        href="${Utils.escapeHTML(src)}" 
        target="_blank" 
        rel="noopener" 
        aria-label="Open project video">
        <span class="video-play">▶</span>
        <span class="video-label">
          ${Utils.escapeHTML(label || "Watch project video")}
        </span>
      </a>
    `;

    return;
  }

  if (type === "video") {
    element.classList.add("has-video");

    element.innerHTML = `
      <video controls muted playsinline preload="metadata">
        <source src="${Utils.escapeHTML(src)}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;

    return;
  }

  const testImage = new Image();

  testImage.onload = () => {
    element.style.backgroundImage = `url('${src}')`;
    element.classList.add("has-image");

    if (shouldContainImage(mediaItem)) {
      element.classList.add("contain-image");
    }
  };

  testImage.onerror = () => {
    element.remove();
  };

  testImage.src = src;
}

function renderProject(project, slug) {
  document.title = `${project.title} — Vadora Tang`;

  const media = (project.media || []).filter((item) => Utils.getMediaSrc(item));
  const galleryTitle = project.galleryTitle ?? "Process + final documentation";
  const galleryDescription = project.galleryDescription || "";

  return `
    <section class="project-hero">
      <div class="section-wrap">
        <div class="hero-window">
          <div class="window-bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="window-title">${Utils.escapeHTML(slug)}.html</span>
          </div>

          <div class="hero-image" id="heroImage">
            Hero image: ${Utils.escapeHTML(project.heroImage || "add image in js/projects-data.js")}
          </div>
        </div>
      </div>
    </section>

    <section class="project-intro">
      <div class="section-wrap intro-grid">
        <div>
          <span class="sticker">${Utils.escapeHTML(project.categoryLabel)}</span>
          <h1 class="project-title">${Utils.escapeHTML(project.title)}</h1>
          <p class="project-subtitle">${Utils.escapeHTML(project.subtitle)}</p>
          <p class="project-description">${Utils.escapeHTML(project.detailDescription)}</p>
        </div>

        <aside class="details-card">
          <div class="detail-row">
            <div class="detail-label">Project</div>
            <div class="detail-value">${Utils.escapeHTML(project.title)}</div>
          </div>

          <div class="detail-row">
            <div class="detail-label">Category</div>
            <div class="detail-value">${Utils.escapeHTML(project.categoryLabel)}</div>
          </div>

          <div class="detail-row">
            <div class="detail-label">Duration</div>
            <div class="detail-value">${Utils.escapeHTML(project.duration)}</div>
          </div>

          <div class="detail-row">
            <div class="detail-label">Role</div>
            <div class="detail-value">${Utils.escapeHTML(project.role)}</div>
          </div>

          <div class="detail-row">
            <div class="detail-label">Tools</div>
            <div class="detail-value">${Utils.escapeHTML(project.tools)}</div>
          </div>

          <div class="detail-row">
            <div class="detail-label">Year</div>
            <div class="detail-value">${Utils.escapeHTML(project.year)}</div>
          </div>

          ${
            project.reportFile
              ? `
                <div class="project-actions">
                  <a 
                    class="btn report-btn" 
                    href="${Utils.escapeHTML(project.reportFile)}" 
                    download>
                    ↓ ${Utils.escapeHTML(project.reportLabel || "Download report")}
                  </a>
                </div>
              `
              : ""
          }
        </aside>
      </div>
    </section>

    <section class="content-section">
      <div class="section-wrap">
        <article class="hmw-card">
          <span class="hmw-eyebrow">Design Framing</span>
          <h2>How Might We</h2>
          <p>${Utils.escapeHTML(project.hmw)}</p>
        </article>

        <div class="content-grid">
          <article class="text-card">
            <h3>Challenge</h3>
            <p>${Utils.escapeHTML(project.problem)}</p>
          </article>

          <article class="text-card">
            <h3>Approach</h3>
            <p>${Utils.escapeHTML(project.approach)}</p>
          </article>

          <article class="text-card">
            <h3>Outcome</h3>
            <p>${Utils.escapeHTML(project.outcome)}</p>
          </article>
        </div>

        <div class="wide-card">
          <div class="window-bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="window-title">project media</span>
          </div>

          <div class="wide-card-body">
            ${galleryTitle ? `<h2>${Utils.escapeHTML(galleryTitle)}</h2>` : ""}
            ${
              galleryDescription
                ? `<p>${Utils.escapeHTML(galleryDescription)}</p>`
                : ""
            }

            ${
              media.length > 0
                ? `
                  <div class="image-grid">
                    ${media
                      .map(
                        (item, index) => `
                          <div class="image-slot" id="galleryMedia${index}">
                            ${Utils.escapeHTML(
                              getMediaLabel(
                                item,
                                `Media ${String(index + 1).padStart(2, "0")}`
                              )
                            )}
                          </div>
                        `
                      )
                      .join("")}
                  </div>
                `
                : `
                  <p class="empty-gallery-note">
                    Add media for this project in js/projects-data.js.
                  </p>
                `
            }
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderNotFound(slug) {
  return `
    <section class="not-found">
      <div class="section-wrap">
        <h1>Project not found</h1>
        <p>
          No project page exists for 
          <strong>${Utils.escapeHTML(slug)}</strong> yet. 
          Check the slug in <strong>js/projects-data.js</strong>.
        </p>
        <a class="btn primary" href="index.html#projects">Back to Projects</a>
      </div>
    </section>
  `;
}

function initProjectDetail() {
  const slug = Utils.getProjectSlug();
  const project = Utils.getProjectBySlug(slug);
  const app = document.getElementById("app");

  if (!app) return;

  if (!project) {
    app.innerHTML = renderNotFound(slug);
    return;
  }

  app.innerHTML = renderProject(project, slug);

  Utils.setBackgroundImage(
    document.getElementById("heroImage"),
    project.heroImage
  );

  (project.media || []).forEach((mediaItem, index) => {
    setGalleryMedia(
      document.getElementById(`galleryMedia${index}`),
      mediaItem
    );
  });
}

function initProjectDockScroll() {
  const dockNav = document.querySelector(".dock-nav");
  let dockTimer;

  window.addEventListener(
    "scroll",
    () => {
      if (!dockNav) return;

      dockNav.classList.add("is-scrolling");

      clearTimeout(dockTimer);

      dockTimer = setTimeout(() => {
        dockNav.classList.remove("is-scrolling");
      }, 180);
    },
    { passive: true }
  );
}

initProjectDetail();
initProjectDockScroll();