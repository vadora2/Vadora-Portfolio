const archiveContainer = document.getElementById("projectsArchive");
const categoryTabs = document.getElementById("archiveCategoryTabs");
const Utils = window.PortfolioUtils;

function escapeHTML(value) {
  return Utils?.escapeHTML ? Utils.escapeHTML(value) : String(value);
}

function getProjectsArray() {
  return Array.isArray(PROJECTS) ? PROJECTS : Object.values(PROJECTS);
}

function slugifyCategory(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getProjectCategoryId(project) {
  return project.categoryGroup || project.categoryLabel || project.category || "Other";
}

function getCategoryConfig(categoryId) {
  return (window.PROJECT_CATEGORIES || []).find((category) => category.id === categoryId);
}

function getProjectCategoryTitle(categoryId) {
  return getCategoryConfig(categoryId)?.title || categoryId;
}

function getProjectCategoryNote(categoryId, projectCount) {
  return getCategoryConfig(categoryId)?.note || `${projectCount} project${projectCount === 1 ? "" : "s"}`;
}

function getProjectDescription(project) {
  return project.cardDescription || project.description || project.subtitle || "";
}

function getProjectImage(project) {
  return project.cardImage || project.heroImage || "";
}

function getProjectSlug(project) {
  return project.slug || slugifyCategory(project.title);
}

function getProjectMeta(project) {
  return project.duration || project.context || project.year || "";
}

function getVisibleProjects() {
  return getProjectsArray().filter((project) => project.visible !== false);
}

function getUniqueCategories(projects) {
  const projectCategoryIds = [...new Set(projects.map((project) => getProjectCategoryId(project)))];
  const visibleCategoryIds = (window.PROJECT_CATEGORIES || [])
    .filter((category) => category.visible !== false && projectCategoryIds.includes(category.id))
    .map((category) => category.id);
  const remainingCategoryIds = projectCategoryIds.filter((categoryId) => !visibleCategoryIds.includes(categoryId));

  return [...visibleCategoryIds, ...remainingCategoryIds];
}

function renderCategoryTabs(categories) {
  if (!categoryTabs) return;

  categoryTabs.innerHTML = categories
    .map((categoryId) => {
      const categoryTitle = getProjectCategoryTitle(categoryId);
      const categoryAnchor = slugifyCategory(categoryId);

      return `
        <a href="#${categoryAnchor}" class="archive-tab">
          ${escapeHTML(categoryTitle)}
        </a>
      `;
    })
    .join("");
}

function renderProjectCard(project) {
  const slug = getProjectSlug(project);
  const image = getProjectImage(project);
  const category = project.categoryLabel || getProjectCategoryTitle(getProjectCategoryId(project));
  const description = getProjectDescription(project);
  const meta = getProjectMeta(project);
  const imageClass = image ? "card-img has-image" : "card-img";

  return `
    <a class="project-card" href="project.html?project=${encodeURIComponent(slug)}">
      <div class="${imageClass}">
        ${
          image
            ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(project.title)}" loading="lazy" />`
            : ""
        }
      </div>

      <div class="card-body">
        <span class="card-tag">${escapeHTML(category)}</span>
        <h3 class="card-title">${escapeHTML(project.title)}</h3>
        <p class="card-desc">${escapeHTML(description)}</p>
        ${meta ? `<p class="card-meta">${escapeHTML(meta)}</p>` : ""}
        <span class="open-file-btn">view project ↗</span>
      </div>
    </a>
  `;
}

function renderProjectsArchive() {
  if (!archiveContainer) return;

  const visibleProjects = getVisibleProjects();

  if (!visibleProjects.length) {
    archiveContainer.innerHTML = `
      <p class="empty-projects">No projects are currently visible.</p>
    `;
    return;
  }

  const categories = getUniqueCategories(visibleProjects);
  renderCategoryTabs(categories);

  archiveContainer.innerHTML = categories
    .map((category) => {
      const categoryId = slugifyCategory(category);

      const categoryProjects = visibleProjects.filter(
        (project) => getProjectCategoryId(project) === category
      );
      const categoryTitle = getProjectCategoryTitle(category);
      const categoryNote = getProjectCategoryNote(category, categoryProjects.length);

      return `
        <section class="project-category archive-project-category" id="${categoryId}">
          <div class="category-title-row">
            <h2 class="category-title">${escapeHTML(categoryTitle)}</h2>
            <p class="category-note">
              ${escapeHTML(categoryNote)}
            </p>
          </div>

          <div class="cards-grid">
            ${categoryProjects.map(renderProjectCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

renderProjectsArchive();
