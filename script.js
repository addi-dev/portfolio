/* ===================================================
   PORTFOLIO — script.js
   Full Stack Developer Portfolio
   Data-driven, modular, vanilla JS
   =================================================== */

/* ============================================================
   DATA LAYER — Edit this section to customize the portfolio
   ============================================================ */

/** Hero section meta */
const hero = {
  name: "Mohammed Addi",
  role: "Full Stack Developer",
  description:
    "I build scalable web applications from pixel-perfect frontends to robust cloud architectures. Turning complex problems into elegant, high-performance digital products.",
  stats: [
    { number: "5+", label: "Years exp." },
    { number: "40+", label: "Projects done" },
    { number: "15+", label: "Happy clients" },
  ],
};

/** Navigation links */
const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Languages", href: "#languages" },
  { label: "Contact", href: "#contact" },
];

/** About section */
const about = {
  paragraphs: [
    "I'm a full-stack developer with 5+ years of experience building production-grade web applications. I thrive at the intersection of clean architecture and beautiful user interfaces—writing code that is as maintainable as it is performant.",
    "I've worked with early-stage startups, scale-ups, and enterprise clients across e-commerce, fintech, and SaaS—shipping products that millions of people use every day.",
    "When I'm not coding, I'm contributing to open-source, reading about distributed systems, or experimenting with generative design tools.",
  ],
  details: [
    {
      key: "Status",
      value: '<span class="status-dot"></span> Available for work',
    },
    { key: "Location", value: "Remote / Worldwide" },
    { key: "Focus", value: "Full Stack & Architecture" },
    { key: "Email", value: "alex@mercer.dev" },
    { key: "Degree", value: "BSc Computer Science" },
  ],
};

/** Skills — categorized */
const skills = {
  frontend: [
    { name: "HTML5", icon: "fa-brands fa-html5", level: 95 },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", level: 92 },
    { name: "JavaScript", icon: "fa-brands fa-js", level: 95 },
    { name: "React", icon: "fa-brands fa-react", level: 95 },
    { name: "Vue.js", icon: "fa-brands fa-vuejs", level: 95 },
  ],
  backend: [
    { name: "PHP", icon: "fa-brands fa-php", level: 92 },
    { name: "Laravel", icon: "fa-brands fa-laravel", level: 92 },
  ],
  database: [
    { name: "MongoDB", icon: "🍃", level: 82 },
    { name: "MySQL", icon: "🐬", level: 85 },
  ],
  tools: [
    { name: "Git / GitHub", icon: "fa-brands fa-git-alt", level: 95 },
    // { name: "AWS", icon: "☁️", level: 80 },
    // { name: "Vercel", icon: "▲", level: 90 },
    // { name: "CI/CD", icon: "♻️", level: 82 },
    { name: "Figma", icon: "🎭fa-brands fa-figma", level: 75 },
    { name: "Linux", icon: "fa-brands fa-linux", level: 85 },
    // { name: "Webpack", icon: "📦", level: 78 },
    // { name: "Jest", icon: "🃏", level: 80 },
  ],
};

/** Work experience */
const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "TechNova Labs",
    companyIcon: "🚀",
    duration: "Jan 2023 – Present",
    description:
      "Led the architecture and development of a multi-tenant SaaS platform serving 50k+ users. Reduced API response times by 65% through strategic caching and query optimization. Mentored a team of 4 junior engineers.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Redis"],
  },
  {
    role: "Full Stack Developer",
    company: "Pixel & Code Agency",
    companyIcon: "🎨",
    duration: "Mar 2021 – Dec 2022",
    description:
      "Delivered 20+ client projects ranging from e-commerce platforms to internal dashboards. Built a real-time inventory system processing 10k+ events/minute using WebSockets and event-driven architecture.",
    tech: ["React", "Vue.js", "Python", "FastAPI", "MongoDB", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "StartupX",
    companyIcon: "⚡",
    duration: "Jun 2019 – Feb 2021",
    description:
      "Built the frontend of a fintech product from 0 to 1. Implemented complex data visualization dashboards, real-time price feeds, and a design system adopted across 3 products.",
    tech: ["React", "D3.js", "TypeScript", "GraphQL", "Storybook"],
  },
  {
    role: "Junior Web Developer",
    company: "Digital Wave Studio",
    companyIcon: "🌊",
    duration: "Sep 2018 – May 2019",
    description:
      "Developed marketing websites and landing pages for SMB clients. Gained strong foundations in performance optimization, accessibility, and cross-browser compatibility.",
    tech: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
];

/** Projects */
const projects = [
  {
    title: "FlowBoard — SaaS PM Tool",
    description:
      "A full-featured project management SaaS with real-time collaboration, Kanban boards, sprint tracking, and analytics dashboard. Supports teams up to 500 members.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
    badge: "Featured",
    gradient: "linear-gradient(135deg, #0d2137 0%, #1a1045 100%)",
    emoji: "📋",
  },
  {
    title: "ShopStream — E-Commerce",
    description:
      "Headless e-commerce platform with AI-powered recommendations, real-time inventory sync, and a 98% Lighthouse score. Handles 50k+ daily transactions.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Algolia"],
    github: "https://github.com",
    demo: "https://example.com",
    badge: "Production",
    gradient: "linear-gradient(135deg, #0d1f37 0%, #103426 100%)",
    emoji: "🛒",
  },
  {
    title: "DataLens — Analytics API",
    description:
      "High-throughput analytics ingestion API processing 1M+ events/day. Includes auto-aggregation pipelines, custom query DSL, and interactive chart builder.",
    tech: ["Python", "FastAPI", "PostgreSQL", "ClickHouse", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
    badge: "Open Source",
    gradient: "linear-gradient(135deg, #1a0d37 0%, #371030 100%)",
    emoji: "📊",
  },
  {
    title: "DevPing — Dev Monitoring",
    description:
      "Uptime monitoring and alerting platform with incident management, status pages, and on-call scheduling. Sub-second latency global checks from 12 regions.",
    tech: ["Go", "React", "TimescaleDB", "Redis", "AWS Lambda"],
    github: "https://github.com",
    demo: "https://example.com",
    badge: "Side Project",
    gradient: "linear-gradient(135deg, #0d1a37 0%, #142630 100%)",
    emoji: "🔔",
  },
  {
    title: "ArtGen — AI Creative Studio",
    description:
      "Web app for AI-assisted creative workflows—generate, edit, and export design assets at scale. Integrates with multiple AI image models via a unified API.",
    tech: ["Vue.js", "Node.js", "Python", "Replicate API", "S3"],
    github: "https://github.com",
    demo: "https://example.com",
    badge: "AI",
    gradient: "linear-gradient(135deg, #1a370d 0%, #372b10 100%)",
    emoji: "🎨",
  },
  {
    title: "ChatBridge — Messaging SDK",
    description:
      "Embeddable real-time messaging SDK with thread support, reactions, file uploads, and end-to-end encryption. Drop-in widget or full headless API.",
    tech: ["TypeScript", "WebSockets", "Node.js", "Redis Pub/Sub"],
    github: "https://github.com",
    demo: "https://example.com",
    badge: "Open Source",
    gradient: "linear-gradient(135deg, #37100d 0%, #371a10 100%)",
    emoji: "💬",
  },
];

/** Languages */
const languages = [
  { name: "English", flag: "🇬🇧", level: "Native", dots: 5 },
  { name: "Arabic", flag: "🇸🇦", level: "Native", dots: 5 },
  { name: "French", flag: "🇫🇷", level: "Professional", dots: 4 },
  { name: "German", flag: "🇩🇪", level: "Intermediate", dots: 3 },
];

/** Contact info */
const contactInfo = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "alex@mercer.dev",
    href: "mailto:alex@mercer.dev",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "github.com/alexmercer",
    href: "https://github.com",
  },
  {
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/alexmercer",
    href: "https://linkedin.com",
  },
  {
    icon: "fa-solid fa-globe",
    label: "Website",
    value: "alexmercer.dev",
    href: "https://example.com",
  },
];

/** Social links for footer */
const socials = [
  { icon: "fa-brands fa-github", href: "https://github.com" },
  { icon: "fa-brands fa-linkedin", href: "https://linkedin.com" },
  { icon: "fa-brands fa-twitter", href: "https://twitter.com" },
  { icon: "fa-solid fa-globe", href: "https://example.com" },
];

/* ============================================================
   RENDER ENGINE — Modular rendering functions
   ============================================================ */

/** Render navbar */
function renderNav() {
  const ul = document.getElementById("navLinks");
  ul.innerHTML = navItems
    .map(
      (item) =>
        `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`,
    )
    .join("");
}

/** Render hero */
function renderHero() {
  document.getElementById("heroName").textContent = hero.name;
  document.getElementById("heroDesc").textContent = hero.description;

  // Typewriter for role
  typeWriter(document.getElementById("heroRole"), hero.role);

  // Stats
  document.getElementById("heroStats").innerHTML = hero.stats
    .map(
      (s) =>
        `<div class="stat-item">
      <span class="stat-number">${s.number}</span>
      <span class="stat-label">${s.label}</span>
    </div>`,
    )
    .join("");
}

/** Typewriter effect */
function typeWriter(el, text, speed = 55) {
  let i = 0;
  el.innerHTML =
    '<span class="typed-accent"></span><span class="cursor-blink">|</span>';
  const typed = el.querySelector(".typed-accent");
  const blink = el.querySelector(".cursor-blink");
  blink.style.cssText =
    "animation: blink 0.8s step-end infinite; color: var(--accent);";

  // Add blink animation
  const style = document.createElement("style");
  style.textContent = "@keyframes blink { 50% { opacity: 0; } }";
  document.head.appendChild(style);

  setTimeout(() => {
    const interval = setInterval(() => {
      if (i < text.length) {
        typed.textContent += text[i++];
      } else {
        clearInterval(interval);
        setTimeout(() => {
          blink.style.display = "none";
        }, 2000);
      }
    }, speed);
  }, 900);
}

/** Render about section */
function renderAbout() {
  document.getElementById("aboutText").innerHTML = about.paragraphs
    .map((p) => `<p>${p}</p>`)
    .join("");

  document.getElementById("aboutCard").innerHTML = about.details
    .map(
      (d) =>
        `<div class="about-card-row">
      <span class="about-card-key">${d.key}</span>
      <span class="about-card-val">${d.value}</span>
    </div>`,
    )
    .join("");
}

/** Render skills with tab switching */
function renderSkills() {
  const panels = document.getElementById("skillsPanels");

  panels.innerHTML = Object.entries(skills)
    .map(
      ([category, items]) =>
        `<div class="skills-panel ${category === "frontend" ? "active" : ""}" data-panel="${category}">
      ${items
        .map(
          (skill) =>
            `<div class="skill-chip">
          <span class="skill-icon"><i class="${skill.icon}"></i></span>
          <span class="skill-name">${skill.name}</span>
          <div class="skill-bar-wrap">
            <div class="skill-bar" data-level="${skill.level}"></div>
          </div>
        </div>`,
        )
        .join("")}
    </div>`,
    )
    .join("");

  // Tab interaction
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".skills-panel")
        .forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const panel = document.querySelector(`[data-panel="${btn.dataset.tab}"]`);
      panel.classList.add("active");

      // Animate bars when panel shown
      setTimeout(() => animateSkillBars(panel), 50);
    });
  });

  // Animate initial panel
  setTimeout(() => {
    animateSkillBars(document.querySelector(".skills-panel.active"));
  }, 400);
}

function animateSkillBars(panel) {
  panel.querySelectorAll(".skill-bar").forEach((bar) => {
    bar.style.width = bar.dataset.level + "%";
  });
}

/** Render experience timeline */
function renderExperience() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = experiences
    .map(
      (exp, i) =>
        `<div class="timeline-item" style="transition-delay:${i * 0.1}s">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">${exp.role}</div>
            <div class="timeline-company">
              <span>${exp.companyIcon}</span>
              <span>${exp.company}</span>
            </div>
          </div>
          <span class="timeline-duration">${exp.duration}</span>
        </div>
        <p class="timeline-description">${exp.description}</p>
        <div class="timeline-tech">
          ${exp.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>`,
    )
    .join("");
}

/** Render projects grid */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects
    .map(
      (proj, i) =>
        `<article class="project-card" style="transition-delay:${(i % 3) * 0.1}s">
      <div class="project-image">
        <div class="project-image-inner" style="background:${proj.gradient}">
          <div class="project-placeholder">${proj.emoji}</div>
        </div>
        <span class="project-badge">${proj.badge}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-description">${proj.description}</p>
        <div class="project-tech">
          ${proj.tech.map((t) => `<span>${t}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${proj.github}" target="_blank" rel="noopener" class="btn btn-outline">
            <i class="fa-brands fa-github" width="14" height="14"></i> GitHub
          </a>
          <a href="${proj.demo}" target="_blank" rel="noopener" class="btn btn-outline">
            <i class="fa-solid fa-arrow-up-right-from-square" width="14" height="14"></i> Live Demo
          </a>
        </div>
      </div>
    </article>`,
    )
    .join("");
}

/** Render languages */
function renderLanguages() {
  const grid = document.getElementById("languagesGrid");
  grid.innerHTML = languages
    .map(
      (lang, i) =>
        `<div class="language-card" style="transition-delay:${i * 0.1}s">
      <span class="lang-flag">${lang.flag}</span>
      <div class="lang-name">${lang.name}</div>
      <div class="lang-level">${lang.level}</div>
      <div class="lang-dots">
        ${Array.from(
          { length: 5 },
          (_, j) =>
            `<div class="lang-dot ${j < lang.dots ? "filled" : ""}"></div>`,
        ).join("")}
      </div>
    </div>`,
    )
    .join("");
}

/** Render contact section */
function renderContact() {
  document.getElementById("contactLinks").innerHTML = contactInfo
    .map(
      (c) =>
        `<a href="${c.href}" target="_blank" rel="noopener" class="contact-link">
      <div class="contact-link-icon">
        <i class="${c.icon}" width="18" height="18"></i>
      </div>
      <div class="contact-link-text">
        <strong>${c.label}</strong>
        <span>${c.value}</span>
      </div>
    </a>`,
    )
    .join("");
}

/** Render footer */
function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById("footerCopy").textContent =
    `© ${year} Alex Mercer — Built with HTML, CSS & Vanilla JS`;

  document.getElementById("footerSocials").innerHTML = socials
    .map(
      (s) =>
        `<a href="${s.href}" target="_blank" rel="noopener" class="social-btn" aria-label="${s.icon}">
      <i class="${s.icon}" width="16" height="16"></i>
    </a>`,
    )
    .join("");
}

/* ============================================================
   INTERACTIONS
   ============================================================ */

/** Sticky navbar + active link on scroll */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  const onScroll = () => {
    // Sticky style
    navbar.classList.toggle("scrolled", window.scrollY > 60);

    // Active link
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
    });
    links.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`,
      );
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

/** Mobile menu */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  // Overlay
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  const close = () => {
    toggle.classList.remove("open");
    links.classList.remove("open");
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const open = toggle.classList.toggle("open");
    links.classList.toggle("open", open);
    overlay.classList.toggle("visible", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  overlay.addEventListener("click", close);

  // Close on nav link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", close);
  });
}

/** IntersectionObserver for reveal animations */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );

  // Generic reveal
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Timeline items
  document
    .querySelectorAll(".timeline-item")
    .forEach((el) => observer.observe(el));

  // Project cards
  document
    .querySelectorAll(".project-card")
    .forEach((el) => observer.observe(el));

  // Language cards
  document
    .querySelectorAll(".language-card")
    .forEach((el) => observer.observe(el));
}

/** Custom cursor */
function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursorFollower");
  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  // Smooth follower
  const animateFollower = () => {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
  };
  animateFollower();

  // Hover expand
  document
    .querySelectorAll("a, button, .skill-chip, .project-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("expand");
        follower.classList.add("expand");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("expand");
        follower.classList.remove("expand");
      });
    });
}

/** Contact form handler */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector(".btn-primary");
    btn.disabled = true;
    btn.querySelector("span").textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "✓ Message sent! I'll get back to you within 24h.";
        status.className = "form-status success";
        form.reset();
      } else {
        const data = await response.json();
        const msg =
          data?.errors?.map((e) => e.message).join(", ") ||
          "Something went wrong.";
        status.textContent = "✗ " + msg;
        status.className = "form-status error";
      }
    } catch {
      status.textContent = "✗ Network error — please try again.";
      status.className = "form-status error";
    }

    btn.disabled = false;
    btn.querySelector("span").textContent = "Send Message";

    setTimeout(() => {
      status.textContent = "";
      status.className = "form-status";
    }, 6000);
  });
}

/** Smooth scroll for all anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/** Parallax on hero orbs */
function initParallax() {
  const orbs = document.querySelectorAll(".orb");
  document.addEventListener("mousemove", (e) => {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;
    orbs.forEach((orb, i) => {
      const strength = (i + 1) * 12;
      orb.style.transform = `translate(${xRatio * strength}px, ${yRatio * strength}px)`;
    });
  });
}

/* ============================================================
   BOOT — Initialize everything
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render all data-driven sections
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderLanguages();
  renderContact();
  renderFooter();

  // 2. Interactions
  initNavbar();
  initMobileMenu();
  initReveal();
  initCursor();
  initContactForm();
  initSmoothScroll();
  initParallax();
});
