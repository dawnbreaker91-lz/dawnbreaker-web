(() => {
  const body = document.body;
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.hash))
    .filter(Boolean);

  body.classList.add("motion-enabled");
  requestAnimationFrame(() => body.classList.add("motion-ready"));

  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8%" },
  );
  revealItems.forEach((item) => observer.observe(item));

  const updatePageState = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    root.style.setProperty("--scroll-progress", `${Math.min(progress, 100)}%`);
    root.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.08, 52)}px`);
    header?.classList.toggle("is-scrolled", window.scrollY > 36);

    const marker = window.scrollY + Math.min(window.innerHeight * 0.36, 260);
    let activeId = "top";
    sections.forEach((section) => {
      if (section.offsetTop <= marker) activeId = section.id;
    });

    navLinks.forEach((link) => {
      const isActive = link.hash === `#${activeId}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  updatePageState();
  window.addEventListener("scroll", updatePageState, { passive: true });
  window.addEventListener("resize", updatePageState);
})();
