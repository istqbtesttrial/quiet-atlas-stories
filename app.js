const STORIES = {
  1: {
    en: {
      label: "Story one",
      title: "The Soul Behind the Submission",
      subtitle: "On trust, guardianship, and the sacred bond between two souls.",
      read: "3 min read",
      chapter: "Trust · Responsibility · Connection",
      quote: "The essence is much deeper. It’s about souls.",
      body: [
        "I’ve walked this path long enough to know the difference between the surface and the truth. BDSM, for me, has never been about props or performance. It’s not about showing power for the sake of being powerful. The essence is much deeper. It’s about souls.",
        "When someone kneels before me, I don’t just see flesh. I see a soul opening itself, sometimes fragile, sometimes fierce, always carrying more than the world has ever allowed it to show. Submission is not weakness. It is a gift, the most raw, unfiltered trust a human can offer. And when it’s placed in my hands, I feel the weight of it like something sacred.",
        "That’s why I never see myself as an owner or a taker. I see myself as a guardian. My role as a Dom is to protect what’s been entrusted to me, to guide it, to challenge it when needed, and to honor it always. Every command, every silence, every touch carries meaning. It is not random. It is a language between souls.",
        "But this path is not just about them—it’s about me, too. My soul is as much a part of the exchange as theirs. Being a Dom is not wearing a mask; it is exposing my true self. My discipline, my patience, my hunger, my responsibility—all of that comes through when I lead. Their vulnerability forces me to be honest with myself, because if I fail in presence or in care, the bond breaks. And a broken bond is more than lost trust—it’s a wounded soul.",
        "For me, domination is almost spiritual. It is a practice of connection, of creation, of transformation. When I look into the eyes of someone who has given me their submission, I see more than desire. I see truth. And in that moment, my own soul responds, steady, grounded, carrying them, guiding them deeper.",
        "This is why I say: BDSM is not play. It’s not fantasy. It is real when two souls meet without masks, without shame, without fear. It is real when vulnerability and responsibility weave together into something unbreakable.",
        "And when that happens, when a submissive gives their soul and I answer with mine, it feels almost holy. That’s when BDSM becomes more than power exchange. It becomes truth. It becomes life..."
      ]
    },
    fr: {
      label: "Premier récit",
      title: "L’âme au cœur de la soumission",
      subtitle: "Sur la confiance, la responsabilité et le lien sacré entre deux âmes.",
      read: "3 min de lecture",
      chapter: "Confiance · Responsabilité · Connexion",
      quote: "L’essence est bien plus profonde. C’est une affaire d’âmes.",
      body: [
        "J’ai assez marché sur ce chemin pour savoir distinguer la surface de la vérité. Le BDSM, pour moi, n’a jamais été une affaire d’accessoires ni de spectacle. Il ne s’agit pas d’afficher le pouvoir pour le simple plaisir d’être puissant. L’essence est bien plus profonde. C’est une affaire d’âmes.",
        "Quand quelqu’un s’agenouille devant moi, je ne vois pas seulement de la chair. Je vois une âme qui s’ouvre, parfois fragile, parfois farouche, portant toujours bien plus que le monde ne lui a jamais permis de montrer. La soumission n’est pas une faiblesse. C’est un don : la confiance la plus brute, la plus nue qu’un être humain puisse offrir. Et quand elle se dépose entre mes mains, j’en sens le poids comme quelque chose de sacré.",
        "C’est pourquoi je ne me vois jamais comme celui qui possède ou qui prend. Je me vois comme un gardien. Mon rôle de Dom est de protéger ce qui m’est confié, de le guider, de le défier quand il le faut, et de l’honorer toujours. Chaque ordre, chaque silence, chaque contact porte un sens. Rien n’est arbitraire. C’est un langage entre âmes.",
        "Mais ce chemin ne concerne pas seulement l’autre — il me concerne, moi aussi. Mon âme fait tout autant partie de l’échange que la sienne. Être Dom, ce n’est pas porter un masque ; c’est exposer mon vrai moi. Ma discipline, ma patience, mon appétit, ma responsabilité — tout cela transparaît quand je guide. Cette vulnérabilité m’oblige à être honnête avec moi-même, car si je manque de présence ou d’attention, le lien se brise. Et un lien brisé, c’est bien plus qu’une confiance perdue — c’est une âme blessée.",
        "Pour moi, la domination est presque spirituelle. C’est une pratique de connexion, de création, de transformation. Quand je plonge mon regard dans les yeux de quelqu’un qui m’a offert sa soumission, je vois bien plus que du désir. Je vois la vérité. Et dans cet instant, mon âme à moi répond, stable, ancrée, portant cette âme, la guidant plus profondément.",
        "C’est pourquoi je dis : le BDSM n’est pas un jeu. Ce n’est pas une fantaisie. Il est réel quand deux âmes se rencontrent sans masque, sans honte, sans peur. Il est réel quand la vulnérabilité et la responsabilité s’entrelacent en quelque chose d’indissoluble.",
        "Et quand cela advient, quand une personne soumise offre son âme et que je réponds par la mienne, cela semble presque sacré. C’est alors que le BDSM dépasse l’échange de pouvoir. Il devient vérité. Il devient vie..."
      ]
    }
  }
};

const UI = {
  en: {
    nav: ["01 / Story", "02 / Story"],
    rail: "Independent bilingual writing · Issue 01",
    note: "Margin note",
    gallery: "← Design study",
    next: "Next story →",
    first: "← First story",
    atlasNote: "A reflection on trust, responsibility and the language shared between souls."
  },
  fr: {
    nav: ["01 / Récit", "02 / Récit"],
    rail: "Écrits bilingues indépendants · Numéro 01",
    note: "Note en marge",
    gallery: "← Étude visuelle",
    next: "Récit suivant →",
    first: "← Premier récit",
    atlasNote: "Une réflexion sur la confiance, la responsabilité et le langage partagé entre les âmes."
  }
};

function getStoryId() {
  const value = Number(new URLSearchParams(location.search).get("story"));
  return STORIES[value] ? value : 1;
}

let storyId = getStoryId();
let language = localStorage.getItem("story-language") === "fr" ? "fr" : "en";

function render() {
  const story = STORIES[storyId][language];
  document.documentElement.lang = language;
  document.title = `${story.title} — Two Voices`;
  document.querySelectorAll("[data-story-label]").forEach(el => el.textContent = story.label);
  document.querySelectorAll("[data-story-title]").forEach(el => el.textContent = story.title);
  document.querySelectorAll("[data-story-subtitle]").forEach(el => el.textContent = story.subtitle);
  document.querySelectorAll("[data-story-read]").forEach(el => el.textContent = story.read);
  document.querySelectorAll("[data-story-chapter]").forEach(el => el.textContent = story.chapter);
  document.querySelectorAll("[data-story-quote]").forEach(el => el.textContent = story.quote);
  document.querySelectorAll("[data-story-body]").forEach(el => {
    el.innerHTML = story.body.map((paragraph, index) => `<p${index === 0 ? ' class="lead"' : ''}>${paragraph}</p>`).join("");
  });
  document.querySelectorAll("[data-lang]").forEach(button => {
    const active = button.dataset.lang === language;
    button.setAttribute("aria-pressed", String(active));
    button.classList.toggle("active", active);
  });
  document.querySelectorAll("[data-story-link]").forEach(link => {
    const id = Number(link.dataset.storyLink);
    link.classList.toggle("active", id === storyId);
    link.setAttribute("aria-current", id === storyId ? "page" : "false");
    link.href = `?story=${id}`;
  });
  const counter = document.querySelector("[data-counter]");
  if (counter) counter.textContent = `0${storyId} / 01`;

  const ui = UI[language];
  document.querySelectorAll("[data-nav-story]").forEach(link => {
    link.textContent = ui.nav[Number(link.dataset.navStory) - 1];
  });
  document.querySelectorAll("[data-rail-label]").forEach(el => el.textContent = ui.rail);
  document.querySelectorAll("[data-note-label]").forEach(el => el.textContent = ui.note);
  document.querySelectorAll("[data-gallery-label]").forEach(el => el.textContent = ui.gallery);
  document.querySelectorAll("[data-atlas-note]").forEach(el => el.textContent = ui.atlasNote);
  document.querySelectorAll("[data-next-story]").forEach(link => {
    const nextId = 1;
    link.href = `?story=${nextId}`;
    link.dataset.targetStory = String(nextId);
    link.textContent = ui.first;
  });
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    language = button.dataset.lang;
    localStorage.setItem("story-language", language);
    render();
  });
});

document.querySelectorAll("[data-story-link], [data-next-story]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    storyId = 1;
    history.pushState({}, "", `?story=${storyId}`);
    window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    render();
  });
});

window.addEventListener("popstate", () => {
  storyId = getStoryId();
  render();
});

const progress = document.querySelector("[data-progress]");
if (progress) {
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
  };
  addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

render();
