/* =====================================================================
   CINCYSI LAB — CONTENT FILE
   Edit ONLY this file to add news, projects, members, or publications.
   Layout and styling live in the HTML pages and js/main.js.

   ---------------------------------------------------------------------
   QUICK HOW-TO
   ---------------------------------------------------------------------
   POST A NEWS ITEM (add to the TOP of `news`; newest first is automatic)
     {
       date: "2026-10-11",              // YYYY-MM-DD, required
       tag: "Award",                    // short label, e.g. Award, Paper, Event
       title: "Headline of the announcement",
       body: "One or two sentences of detail.",
       link: ""                         // optional URL, or leave ""
     },

   ADD A STUDENT / TEAM MEMBER (copy a block inside `members`)
     {
       name: "First Last",
       role: "Ph.D. Candidate",         // Postdoc, Ph.D. Candidate, Graduate Researcher, etc.
       photo: "images/members/first-last.jpg",   // optional; placeholder shown if missing
       email: "first.last@uc.edu",      // optional
       focus: "One line on research focus.",
       links: { linkedin: "", github: "", scholar: "", website: "" }   // leave "" to hide
     },

   ADD A PUBLICATION (copy a block inside `publications`)
     {
       year: 2026,
       title: "Paper title",
       authors: "Last A., Last B., Zhan J.",
       venue: "Journal or conference name",
       link: "https://doi.org/...",     // optional
       type: "Journal"                  // Journal, Conference, Preprint, Thesis...
     },

   ADD A PROJECT (copy a block inside `projects`)
     { title, status: "Active" | "Concluded", summary, tags: [] }

   RULES
     - Keep a comma after every entry except the last one in a list.
     - Keep text inside double quotes. Use \" for a quote inside text.
     - Save, then refresh. Grids and feeds reflow automatically.
   ===================================================================== */

window.SITE_DATA = {

  // -------------------------------------------------------------------
  // LAB IDENTITY
  // -------------------------------------------------------------------
  lab: {
    name: "CincySI Lab",
    fullName: "Super Intelligence Lab",
    institution: "University of Cincinnati",
    domain: "cincysi.si",
    // DRAFT mission copy: replace with the lab's official statement.
    mission: "We build intelligent systems that combine data science, artificial intelligence, and human-centred computing, so that people and machines reason together more effectively than either could alone.",
    tagline: "Super Intelligence: where data, AI, and people work as one."
  },

  // -------------------------------------------------------------------
  // NAVIGATION (top menu, in order)
  // -------------------------------------------------------------------
  nav: [
    { label: "Home",         href: "index.html" },
    { label: "Research",     href: "research.html" },
    { label: "Members",      href: "members.html" },
    { label: "Publications", href: "publications.html" },
    { label: "Lab Tools",    href: "tools.html" }
  ],

  // -------------------------------------------------------------------
  // FOOTER LINKS. Replace "#TODO" with real URLs. Remove any you don't need.
  // -------------------------------------------------------------------
  links: {
    email:    { label: "Contact the lab",  url: "mailto:justin.zhan@uc.edu" },
    linkedin: { label: "LinkedIn",         url: "#TODO" },
    github:   { label: "GitHub",           url: "#TODO" },
    drZhan:   { label: "Dr. Zhan's site",  url: "https://justinzhan.com" }
  },

  // -------------------------------------------------------------------
  // NEWS & ANNOUNCEMENTS (newest first is sorted automatically)
  // The entries below are PLACEHOLDERS. Replace them with real items.
  // -------------------------------------------------------------------
  news: [
    {
      date: "2026-09-20",
      tag: "Welcome",
      title: "Welcome to the new academic year",
      body: "Placeholder announcement. Replace with a real update about lab activities, new members, or recent results.",
      link: ""
    },
    {
      date: "2026-08-15",
      tag: "Paper",
      title: "Placeholder: paper accepted",
      body: "Placeholder announcement describing an accepted paper or talk.",
      link: ""
    }
  ],

  // -------------------------------------------------------------------
  // GROUP PHOTO. Leave `src` empty to show the placeholder card.
  // -------------------------------------------------------------------
groupPhotos: [
  { src: "images/GrpPic1.jpeg", caption: "CincySI Research Building, Fall 2026" },
  { src: "images/GrpPic2.jpeg", caption: "Digital Futures 5th floor workspace, Fall 2026" },
],

  // -------------------------------------------------------------------
  // PROJECTS. Representative funded work from Dr. Zhan's UC Research
  // Directory profile. Verify titles, status, and wording before publishing.
  // -------------------------------------------------------------------
  projects: [
    {
      title: "Experiential Learning Pathway in Artificial Intelligence",
      status: "Active",
      summary: "National Science Foundation project establishing an experiential pathway for students to learn applied AI.",
      tags: ["AI education", "NSF", "Experiential learning"]
    },
    {
      title: "Southwest Ohio Scholars: Academic Belonging in Computer Science",
      status: "Active",
      summary: "NSF S-STEM project supporting computer science students and studying how academic belonging is defined and supported.",
      tags: ["Broadening participation", "NSF S-STEM", "Computer science"]
    },
    {
      title: "Automated Mental Health Prediction",
      status: "Active",
      summary: "Office of Naval Research collaboration on predicting inward and outward destructive behaviours alongside mental health indicators.",
      tags: ["Mental health", "Behavioural prediction", "ONR"]
    },
    {
      title: "Biomedical Knowledge Graph and Data Analytics Framework",
      status: "Active",
      summary: "Work with Cincinnati Children's Hospital Medical Center on biomedical knowledge graphs and analytics frameworks for clinical research.",
      tags: ["Knowledge graphs", "Biomedical informatics", "Health analytics"]
    },
    {
      title: "Water-Energy Nexus Open Knowledge Network (WEN-OKN)",
      status: "Concluded",
      summary: "NSF Proto-OKN collaboration building knowledge-network infrastructure for water-energy research.",
      tags: ["Knowledge networks", "NSF", "Water-energy nexus"]
    }
  ],

  // -------------------------------------------------------------------
  // MEMBERS. The first entry is the PI. Remaining entries are PLACEHOLDERS.
  // -------------------------------------------------------------------
  members: [
    {
      name: "Justin Zhan",
      role: "Principal Investigator",
      photo: "images/Dr.Zhan2.jpeg",
      email: "justin.zhan@uc.edu",
      focus: "Data Science, Artificial Intelligence, Blockchain, Biomedical Informatics, Social Computing",
      links: { linkedin: "", github: "", scholar: "", website: "https://justinzhan.com" }
    },
    {
      name: "Ritesh Janga",
      role: "Ph.D. Student",
      photo: "images/Ritesh.jpeg",
      email: "jangarh@mail.uc.edu",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "https://www.linkedin.com/in/ritesh-07j2002?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "", scholar: "https://scholar.google.com/citations?user=kgfbxRUAAAAJ&hl=en", website: "" }
    },
    {
      name: "Yagna Manasa Boyapati",
      role: "Ph.D. Student",
      photo: "images/Manasa.jpeg",
      email: "boyapaya@mail.uc.edu",
      focus: "Federated Learning, Large Language Models, Privacy-Preserving AI",
      links: { linkedin: "https://www.linkedin.com/in/boyapati-yagna-manasa/", github: "https://github.com/manasa2107", scholar: "https://scholar.google.com/citations?user=uHR64QcAAAAJ&hl=en&oi=ao", website: "https://manasa2107.github.io/" }
    },
    {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
    {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
    {
      name: "Mamun, Abdullah Al",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
    {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
       {
      name: "Student Name",
      role: "Postdoctoral Researcher",
      photo: "",
      email: "",
      focus: "Placeholder research focus statement.",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
  ],

  // -------------------------------------------------------------------
  // PUBLICATIONS. The entries below are PLACEHOLDERS. Replace with lab outputs.
  // -------------------------------------------------------------------
  publications: [
    {
      year: 2026,
      title: "Placeholder paper title",
      authors: "Lab Member A., Lab Member B., Zhan J.",
      venue: "Journal or conference name",
      link: "",
      type: "Journal"
    },
    {
      year: 2025,
      title: "Placeholder conference paper title",
      authors: "Lab Member C., Zhan J.",
      venue: "Conference name",
      link: "",
      type: "Conference"
    }
  ],
    // -------------------------------------------------------------------
  // LAB TOOLS
  // -------------------------------------------------------------------
tools: [
    {
      name: "BearTrack",
      description: "Weekly work reporting portal for lab members to log progress and share updates with Dr. Zhan.",
      url: "https://beartrack-uc.vercel.app/",
      tags: []
    },
    {
      name: "BibTeX Verifier",
      description: "Validates academic references to ensure BibTeX entries are accurate and resolvable.",
      url: "https://bibtex-verifier.vercel.app/",
      tags: []
    }
  ]
};