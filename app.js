// ─── TELEGRAM WEB APP INIT ───────────────────────────────────
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#fdf6ec");
  tg.setBackgroundColor("#fdf6ec");
}

// ─── LANGUAGE STATE ──────────────────────────────────────────
const LANGS = ["en", "ru", "sr"];
const LANG_LABELS = { en: "EN", ru: "RU", sr: "SR" };

let currentLang = "ru";
let currentDog  = null;

// Helper: get translated value
function t(key) {
  return TRANSLATIONS[currentLang][key];
}
function d(dog, field) {
  return dog[field][currentLang];
}

// ─── LANGUAGE SWITCHER ───────────────────────────────────────
function buildLangSwitcher(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  LANGS.forEach((lang) => {
    const btn = document.createElement("button");
    btn.className = "lang-btn" + (lang === currentLang ? " lang-active" : "");
    btn.textContent = LANG_LABELS[lang];
    btn.setAttribute("aria-label", lang.toUpperCase());
    btn.onclick = () => switchLang(lang);
    container.appendChild(btn);
  });
}

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Rebuild all visible switchers
  ["lang-switcher-intro", "lang-switcher-dogs", "lang-switcher-profile"].forEach(buildLangSwitcher);

  // Re-render whatever screen is active
  const active = document.querySelector(".screen.active");
  if (active.id === "intro-screen")   renderIntro();
  if (active.id === "dogs-screen")    renderDogCards();
  if (active.id === "profile-screen" && currentDog) renderProfile(currentDog);
}

// ─── SCREEN MANAGEMENT ───────────────────────────────────────
function setScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function showIntro() {
  renderIntro();
  setScreen("intro-screen");
  if (tg) tg.BackButton.hide();
}

function showDogs() {
  renderDogCards();
  setScreen("dogs-screen");
  if (tg) tg.BackButton.show();
}

function showProfile(dogId) {
  const dog = DOGS.find((d) => d.id === dogId);
  if (!dog) return;
  currentDog = dog;
  renderProfile(dog);
  setScreen("profile-screen");
  if (tg) tg.BackButton.show();
}

// ─── RENDER INTRO ────────────────────────────────────────────
function renderIntro() {
  buildLangSwitcher("lang-switcher-intro");

  document.getElementById("intro-badge").textContent    = t("introBadge");
  const [line1, line2] = t("introTitle");
  document.getElementById("intro-title-line1").textContent = line1;
  document.getElementById("intro-title-line2").textContent = line2;
  document.getElementById("story-p1").textContent       = t("story1");
  document.getElementById("story-p2").textContent       = t("story2");
  document.getElementById("cta-text").textContent       = t("ctaBtn");
}

// ─── RENDER CARDS ────────────────────────────────────────────
function renderDogCards() {
  buildLangSwitcher("lang-switcher-dogs");

  document.getElementById("header-pack-title").textContent = t("packTitle");
  document.getElementById("header-pack-sub").textContent   = t("packSub");

  const grid = document.getElementById("dogs-grid");
  grid.innerHTML = "";

  const sorted = [...DOGS].sort((a, b) => (a.role === "mom" ? -1 : b.role === "mom" ? 1 : 0));

  sorted.forEach((dog, i) => {
    const card = document.createElement("div");
    card.className = "dog-card" + (dog.role === "mom" ? " mom-card" : "");
    card.style.animationDelay = `${i * 60}ms`;
    card.onclick = () => showProfile(dog.id);

    const statusClass = dog.booked ? "status-booked" : "status-free";
    const statusText  = dog.booked ? t("statusBooked")(dog.gender) : t("statusAvailable")(dog.gender);

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${dog.avatar}" alt="${d(dog, "name")}" loading="lazy" />
        ${dog.role === "mom" ? `<div class="mom-crown">${t("momLabel")}</div>` : ""}
        <div class="card-status ${statusClass}">${statusText}</div>
      </div>
      <div class="card-info">
        <div class="card-name">${d(dog, "name")}</div>
        <div class="card-meta">${d(dog, "age")} · ${d(dog, "weight")} · ${t(dog.gender === "male" ? "genderMale" : "genderFemale")}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ─── RENDER PROFILE ──────────────────────────────────────────
function renderProfile(dog) {
  buildLangSwitcher("lang-switcher-profile");

  const name = d(dog, "name");

  document.getElementById("profile-avatar").src         = dog.avatar;
  document.getElementById("profile-avatar").alt         = name;
  document.getElementById("profile-name").textContent   = name;
  document.getElementById("profile-age").textContent    = d(dog, "age");
  document.getElementById("profile-weight").textContent = d(dog, "weight");
  document.getElementById("profile-gender").textContent = t(dog.gender === "male" ? "genderMale" : "genderFemale");
  document.getElementById("profile-desc").textContent   = d(dog, "description");
  document.getElementById("section-about").textContent  = t("sectionAbout");
  document.getElementById("section-photos").textContent = t("sectionPhotos");

  const badge = document.getElementById("profile-badge");
  if (dog.booked) {
    badge.textContent = t("statusBooked")(dog.gender);
    badge.className = "profile-status-badge booked";
  } else {
    badge.textContent = t("statusAvailable")(dog.gender);
    badge.className = "profile-status-badge available";
  }

  if (dog.role === "mom") {
    document.getElementById("profile-hero").classList.add("mom-hero");
  } else {
    document.getElementById("profile-hero").classList.remove("mom-hero");
  }

  // Photos strip (language-agnostic)
  const strip = document.getElementById("photos-strip");
  strip.innerHTML = "";
  dog.photos.forEach((url, i) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${name} ${i + 1}`;
    img.loading = "lazy";
    img.className = "photo-thumb";
    img.onclick = () => openLightbox(url);
    strip.appendChild(img);
  });

  // Status section
  const statusSection = document.getElementById("profile-status-section");
  if (dog.booked) {
    statusSection.innerHTML = `
      <div class="status-box booked-box">
        <div class="status-emoji">🔒</div>
        <div class="status-text">
          <strong>${t("bookedTitle")(name, dog.gender)}</strong>
          <span>${t("bookedDesc")(name, dog.gender)}</span>
        </div>
      </div>
    `;
  } else {
    statusSection.innerHTML = `
      <div class="status-box free-box">
        <div class="status-emoji">💛</div>
        <div class="status-text">
          <strong>${t("freeTitle")(name, dog.gender)}</strong>
          <span>${t("freeDesc")(name, dog.gender)}</span>
        </div>
      </div>
    `;
  }
}

// ─── LIGHTBOX ────────────────────────────────────────────────
function openLightbox(url) {
  document.getElementById("lightbox-img").src = url;
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

// ─── INIT ────────────────────────────────────────────────────
if (tg) {
  tg.onEvent("backButtonClicked", () => {
    const active = document.querySelector(".screen.active");
    if (active.id === "dogs-screen")    showIntro();
    if (active.id === "profile-screen") showDogs();
  });
}

showIntro();
