// ===== THEME TOGGLE (FAANG FEATURE) =====
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    current === "light" ? "dark" : "light",
  );
}

// default theme
document.documentElement.setAttribute("data-theme", "dark");

// ===== SCROLL SPY NAVIGATION =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.clientHeight;

    if (pageYOffset >= top - height / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===== INTERSECTION OBSERVER ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, section").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ===== SMOOTH LOADING EFFECT =====
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
// ===== HERO TEXT ANIMATION =====

const textArray = [
  "Frontend Developer",
  "UI Engineer",
  "Freelancer",
  "React Learner",
  "Building Modern Web Apps",
];

let textIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 70);
  } else {
    setTimeout(eraseEffect, 1200);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 400);
  }
}

typeEffect();
