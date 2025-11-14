/* -------------------------
   SCROLL ANIMATION
------------------------- */
/* Sections fade in when they enter viewport */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((sec) => observer.observe(sec));

  /* -------------------------
     PROJECT ICON PULSE ON VIEWPORT
  ------------------------- */
  const projectIcons = document.querySelectorAll(".project-icon");
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pulse-enter");
        }
      });
    },
    { threshold: 0.5 }
  );
  projectIcons.forEach((icon) => projectObserver.observe(icon));

  /* -------------------------
     TECH STACK HOVER HIGHLIGHT
  ------------------------- */
/* -------------------------
   SCROLL ANIMATION
------------------------- */
/* Sections fade in when they enter viewport */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((sec) => observer.observe(sec));

  /* -------------------------
     PROJECT ICON PULSE ON VIEWPORT
  ------------------------- */
  const projectIcons = document.querySelectorAll(".project-icon");
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pulse-enter");
        }
      });
    },
    { threshold: 0.5 }
  );
  projectIcons.forEach((icon) => projectObserver.observe(icon));

  /* -------------------------
     TECH STACK HOVER HIGHLIGHT
  ------------------------- */
  const techIcons = document.querySelectorAll(".tech-with-icon .icon");
  techIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.classList.add("highlight");
    });
    icon.addEventListener("mouseleave", () => {
      icon.classList.remove("highlight");
    });
  });

  /* -------------------------
     SMOOTH SCROLL FOR ANCHORS
  ------------------------- */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
  const techIcons = document.querySelectorAll(".tech-with-icon .icon");
  techIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.classList.add("highlight");
    });
    icon.addEventListener("mouseleave", () => {
      icon.classList.remove("highlight");
    });
  });

  /* -------------------------
     SMOOTH SCROLL FOR ANCHORS
  ------------------------- */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});