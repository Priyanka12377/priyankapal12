# Portfolio Update Plan

## 1. Real Content from Resume

**Hero / About**
- Name: Priyanka Pal
- Title: Java Full Stack Developer | DSA Enthusiast
- Tagline from professional summary (scalable apps with Java, Node, Express, MongoDB; CareerAI; HAL deployment; 100+ LeetCode)
- Education: B.Tech CSE, KNIPSS Sultanpur (AKTU), CGPA 8.00, 2022–2026
- Stats: 100+ LeetCode · 10+ REST APIs · 25–30 FPS CV system · CGPA 8.00

**Experience (replace placeholders)**
- Java Full-Stack Developer (Trainee) — JSpiders Training & Development Center · 08/2025 – 04/2026
  - Bullet points from resume (Spring Boot APIs, Servlets, MySQL DML/DQL, Spring Security + JWT, React UI, Git, Agile)

**Projects (replace existing — keep just these two real ones, plus a "more coming" card)**
1. **CareerAI** — AI-Powered Full Stack Career Platform
   - Stack: Node.js, MongoDB, OpenAI GPT-4o-mini, Gemini 2.0 Flash, JWT, bcryptjs
   - Resume Analyzer, Live Job Search, GitHub Analyzer, AI Career Coach
   - Triple AI Fallback (OpenAI → Gemini → Mock) → 100% uptime
2. **Real-Time Object Detection System** — Defense Manufacturing @ HAL
   - YOLOv8, OpenCV, Python · 25–30 FPS · deployed on HAL intranet

**Tech Stack** (replace generic list with resume groups)
- Core Java · OOP · Collections · Exception Handling
- Backend: Node.js, Express, REST, JWT, bcryptjs, Spring Boot, Servlets
- Frontend: HTML5, CSS3, JavaScript, React.js
- Database: MongoDB (Mongoose), MySQL
- DSA: Arrays, Trees, DP, Graphs, Recursion (100+ LeetCode)
- Tools: Git, GitHub, Postman, Power BI, VS Code

**Certifications & Achievements**
- Python for Data Science — IBM Coursera
- 1st Place — Badminton, Intra-College Sports 2023–24

**Footer / Social links**
- Email: priyankapika0312@gmail.com
- Phone/WhatsApp: +91 8960589060
- LinkedIn: linkedin.com/in/priyanka-pal-67854a374
- GitHub: github.com/Priyanka12377

## 2. Stylish Photo Representation

Redesign the Hero profile photo block:
- Replace flat circle with a layered composition: aurora gradient ring + animated rotating conic-gradient border, glass plate behind photo, soft glow shadow, subtle floating tilt on mouse move.
- Add floating tech badges around the photo (Java, Spring, React, MongoDB) using motion `float-y` orbits.
- Add a small "Available for opportunities" status chip with pulsing dot anchored to the photo card.
- Keep the user's uploaded profile.jpeg as the only photo (no AI-generated portraits).

## 3. Contact Form → WhatsApp with Subject

Replace current fake submit with a WhatsApp deep-link flow:
- Fields: Name, Email, **Subject (radio chips: Backend Role · Project Collab · Coffee Chat · Other)**, Message
- On submit, build message:
  `Hi Priyanka! 👋\nName: <name>\nEmail: <email>\nSubject: <subject>\n\n<message>`
- Open `https://wa.me/918960589060?text=<encoded>` in new tab.
- Zod validation client-side (length limits per security guidelines), encodeURIComponent for the URL.
- Toast confirmation via existing sonner.

## 4. Design Inspiration from Reference Site

Reference: `ux-gallery-30.preview.emergentagent.com` — pull in these visual moves while keeping current premium dark base:
- Larger oversized serif/grotesk display type with mixed italic accent words in hero
- Marquee row of skills / "currently exploring" ticker between sections
- Bigger project cards with number index (01 / 02) and large hover image reveal
- Sticky side rail with section indicators
- Softer aurora — slightly warmer accent (amber/peach) alongside current violet/cyan
- Cleaner section dividers with hairline + label

I will adapt, not clone, to keep originality and respect existing system.

## 5. Files to Touch (Technical)

- `src/components/portfolio/Sections.tsx` — Hero photo composition, real content for About/Experience/Projects/TechStack/Achievements/Certificates, Contact form with subject chips + WhatsApp submit, footer socials
- `src/components/portfolio/Navbar.tsx` — confirm name/links
- `src/styles.css` — add warmer aurora accent var + marquee keyframes if needed
- New small component (optional): `src/components/portfolio/Marquee.tsx` for skills ticker
- Remove unused project AI-generated images (CareerAI + HAL only — may reuse existing project images or generate 2 fitting ones)

## 6. Out of Scope
- No backend / Cloud (WhatsApp link handles message delivery)
- No Three.js / GSAP additions
- Testimonials stays generic (resume has none) — keep current curated quotes or remove if you prefer

Let me know if I should drop Testimonials, or if the WhatsApp number / subject options need changes — otherwise I'll implement as above.