window.PortfolioUtils = {
  escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  },

  slugify(text) {
    return String(text ?? "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  },

  getProjectSlug(defaultSlug = "dqueue") {
    const params = new URLSearchParams(window.location.search);
    return params.get("project") || defaultSlug;
  },

  getProjects() {
    return Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  },

  getCategories() {
    return Array.isArray(window.PROJECT_CATEGORIES) ? window.PROJECT_CATEGORIES : [];
  },

  getProjectBySlug(slug) {
    return this.getProjects().find(project => project.slug === slug);
  },

  getProjectUrl(project) {
    return `project.html?project=${encodeURIComponent(project.slug)}`;
  },

  getMediaSrc(mediaItem) {
    if (!mediaItem) return "";
    if (typeof mediaItem === "string") return mediaItem;
    return mediaItem.src || "";
  },

  setBackgroundImage(element, imagePath) {
    if (!element || !imagePath) return;
    element.style.backgroundImage = `url('${imagePath}')`;
    element.classList.add("has-image");
  },

  getYouTubeId(url) {
    const value = String(url ?? "");

    const shortMatch = value.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch) return shortMatch[1];

    const longMatch = value.match(/[?&]v=([^?&]+)/);
    if (longMatch) return longMatch[1];

    const embedMatch = value.match(/youtube\.com\/embed\/([^?&]+)/);
    if (embedMatch) return embedMatch[1];

    return "";
  }
};