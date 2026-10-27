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
    { label: "Open Source Tools",    href: "tools.html" }
  ],

  // -------------------------------------------------------------------
  // FOOTER LINKS. Replace "#TODO" with real URLs. Remove any you don't need.
  // -------------------------------------------------------------------
  links: {
    email:    { label: "Contact the lab",  url: "mailto:justin.zhan@uc.edu" },
    linkedin: { label: "LinkedIn",         url: "#TODO" },
    github:   { url: 'https://github.com/uczhanlab', label: 'GitHub' },
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
  { src: "images/GrpPic3.jpg", caption: "Digital Futures 5th floor workspace, Fall 2026" },
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
      links: { linkedin: "https://www.linkedin.com/in/justin-zhan-366981256", github: "", scholar: "https://scholar.google.com/citations?user=3klqaJMAAAAJ&hl=en", website: "https://justinzhan.com" }
    },
    {
      name: "Gaurab Baral",
      role: "Ph.D. Student",
      photo: "images/members/Gaurab Baral.jpg",
      email: "baralgb@uc.edu",
      focus: "NLP, AI, Computer Vision",
      links: { linkedin: "https://www.linkedin.com/in/gaurab-baral-991333216/", github: "https://github.com/TempGaurab", scholar: "https://scholar.google.com/citations?user=N0TDR9AAAAAJ&hl=en&oi=ao", website: "https://tempgaurab.github.io/TempGaurab/" }
    },
    {
      name: "Yagna Manasa Boyapati",
      role: "Ph.D. Student",
      photo: "images/members/Manasa.jpeg",
      email: "boyapaya@mail.uc.edu",
      focus: "Federated Learning, Privacy-Preserving AI, LLMs & Agent Security, Responsible AI",
      links: { linkedin: "https://www.linkedin.com/in/boyapati-yagna-manasa/", github: "https://github.com/manasa2107", scholar: "https://scholar.google.com/citations?user=uHR64QcAAAAJ&hl=en&oi=ao", website: "https://manasa2107.github.io/" }
    },
    {
      name: "Prissha Chawla",
      role: "Ph.D. Student",
      photo: "images/members/Prissha Chawla.jpg",
      email: "chawlaps@mail.uc.edu",
      focus: "Prognostics, Machine Learning, Mechanical/Aerospace Applications",
      links: { linkedin: "https://www.linkedin.com/in/prisshachawla/", github: "", scholar: "", website: "" }
    },
    {
      name: "Arundhathi Dev",
      role: "Master's Student",
      photo: "images/members/Arundhathi Dev.jpg",
      email: "devai@mail.uc.edu",
      focus: "AI Inference, Performance Optimization, HW/SW Co-Design",
      links: { linkedin: "https://www.linkedin.com/in/devaru-ai/", github: "https://github.com/devaru-ai", scholar: "https://scholar.google.com/citations?user=mrtOLIQAAAAJ", website: "https://arundhathidev.me/" }
    },
    {
      name: "Sriharsha Itha",
      role: "Master's Student",
      photo: "images/members/Sriharsha Itha.jpg",
      email: "ithasa@mail.uc.edu",
      focus: "AI, LLM",
      links: { linkedin: "https://www.linkedin.com/in/harsha-i-909696221", github: "", scholar: "", website: "" }
    },
    {
      name: "Ritesh Janga",
      role: "Ph.D. Student",
      photo: "images/members/Ritesh.jpeg",
      email: "jangarh@mail.uc.edu",
      focus: "Federated Learning, LLM Evaluation, Reliable Agentic AI",
      links: { linkedin: "https://www.linkedin.com/in/ritesh-07j2002?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "https://github.com/Ritesh778", scholar: "https://scholar.google.com/citations?user=kgfbxRUAAAAJ&hl=en", website: "https://ritesh778.github.io/" }
    },
    {
      name: "Hoang Nhat Duy Le",
      role: "Master's Student",
      photo: "images/members/Hoang Nhat Duy Le.jpg",
      email: "lehoanny@mail.uc.edu",
      focus: "AI, Multi-Agent Systems, LLMs",
      links: { linkedin: "https://www.linkedin.com/in/hoangnhatduyle", github: "https://github.com/hoangnhatduyle", scholar: "", website: "https://hoangnhatduyle.github.io/portfolio/" }
    },
    {
      name: "Yang Lu",
      role: "Ph.D. Student",
      photo: "images/members/Yang Lu.png",
      email: "lu2y4@mail.uc.edu",
      focus: "Bioinformatics, BioNLP",
      links: { linkedin: "https://www.linkedin.com/in/yang-lu-73a87033/", github: "", scholar: "https://scholar.google.com/citations?user=xpP7NfsAAAAJ&hl=en", website: "" }
    },
    {
      name: "Monirul I. Mahmud",
      role: "Ph.D. Student",
      photo: "images/members/Monirul I. Mahmud.png",
      email: "mahmudmi@mail.uc.edu",
      focus: "Efficient LLM, LLM Security, Trustworthy AI",
      links: { linkedin: "https://www.linkedin.com/in/monirul-islam-mahmud/", github: "https://github.com/Monirules", scholar: "https://scholar.google.com/citations?user=9pLzr9UAAAAJ", website: "https://monirules.github.io/" }
    },
    {
      name: "Abdullah Al Mamun",
      role: "Ph.D. Student",
      photo: "images/members/Abdullah_Al_Mamun.jpg",
      email: "mamunal@mail.uc.edu",
      focus: "AI, ML, DS, LLMs, Trustworthy AI, Unsupervised Anomaly Detection, Robust Learning, Representation Learning, Statistical Calibration, Data Quality",
      links: { linkedin: "https://www.linkedin.com/in/abdullah-al-mamun-65a528165/", github: "", scholar: "https://scholar.google.com/citations?user=tja7LO0AAAAJ&hl=en", website: "" }
    },
    {
      name: "Dhathri Sree Monukonda",
      role: "Master's Student",
      photo: "images/members/dhathri m.png",
      email: "monukode@mail.uc.edu",
      focus: "AI",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
    {
      name: "Du Nguyen",
      role: "Master's Student",
      photo: "images/members/Du Nguyen.jpg",
      email: "nguye2d6@mail.uc.edu",
      focus: "Emotion Recognition, Data Science, LLM Evaluation",
      links: { linkedin: "https://www.linkedin.com/in/duquangnguyen/", github: "https://github.com/dunguyenforever", scholar: "", website: "" }
    },
    {
      name: "Kim Anh Phung",
      role: "Ph.D. Student",
      photo: "images/members/kim-anh-phung.jpg",
      email: "phungkh@mail.uc.edu",
      focus: "Computer Vision, Computational Biology",
      links: { linkedin: "", github: "", scholar: "", website: "" }
    },
    {
      name: "Kate Plas",
      role: "Ph.D. Student",
      photo: "images/members/Kate Plas.jpg",
      email: "plaska@mail.uc.edu",
      focus: "Reinforcement Learning, Spatial Transcriptomics, Object Detection",
      links: { linkedin: "https://www.linkedin.com/in/kate-plas-b2b391192/", github: "https://github.com/plask3189", scholar: "https://scholar.google.com/citations?user=MG5Bh_AAAAAJ&hl=en&oi=ao", website: "" }
    },
    {
      name: "Dakshitha Sai Pusala",
      role: "Master’s Student",
      photo: "images/members/Dakshitha Pusala.jpg",
      email: "pusaladi@mail.uc.edu",
      focus: "AI, Machine Learning",
      links: { linkedin: "www.linkedin.com/in/dakshithasaip14", github: "", scholar: "", website: "" }
    },
    {
      name: "Md Shihab Reza",
      role: "Ph.D. Student",
      photo: "images/members/Shihab Reza.jpg",
      email: "rezamb@mail.uc.edu",
      focus: "LLMs, LLM Security, Trustworthy AI, AI Forensics, Machine Learning",
      links: { linkedin: "http://www.linkedin.com/in/shihabrezaadit", github: "https://github.com/ShihabRezaAdit", scholar: "https://scholar.google.com/citations?user=7OiPbxwAAAAJ", website: "https://sites.google.com/view/shihabreza/home" }
    },
    {
      name: "Mansurbek Satarov",
      role: "Ph.D. Student",
      photo: "images/members/Mansurbek Satarov.jpg",
      email: "sataromk@mail.uc.edu",
      focus: "AI, Machine Learning, LLM Safety, Trustworthy AI, Agentic AI, NLP, Knowledge Graphs, Biomedical Informatics",
      links: { linkedin: "https://www.linkedin.com/in/mansurbek", github: "https://github.com/MansurPro", scholar: "https://scholar.google.com/citations?user=4L5_3fQAAAAJ", website: "https://mansurpro.netlify.app/" }
    },
    {
      name: "Hanniel Shih",
      role: "Ph.D. Student",
      photo: "images/members/Hanniel Shih.jpg",
      email: "shihhh@mail.uc.edu",
      focus: "Trustworthy AI, AI Safety, Medical Informatics, Data Science",
      links: { linkedin: "https://www.linkedin.com/in/hannielshih", github: "", scholar: "https://scholar.google.com/citations?user=WIxZ7HIAAAAJ&hl=en", website: "" }
    },
    {
      name: "Adwitiya Shukla",
      role: "Master's Student",
      photo: "images/members/adwitiya shukla.jpg",
      email: "shuklaaw@mail.uc.edu",
      focus: "AI, ML, Deep Learning, LLMs, Clinical NLP, Medical Coding",
      links: { linkedin: "https://www.linkedin.com/in/adwitiya-shukla-94109a264", github: "https://github.com/adwitiyashukla", scholar: "https://scholar.google.com/citations?user=kGfPJiwAAAAJ", website: "https://adwitiyashukla.com/" }
    },
    {
      name: "Yueh Tang",
      role: "Ph.D. Student",
      photo: "images/members/Yueh Tang.jpg",
      email: "tangy9@mail.uc.edu",
      focus: "LLM Agents, Web Agents, AI Verification, Trustworthy AI, Healthcare AI",
      links: { linkedin: "https://www.linkedin.com/in/yueh-tang-156116235/", github: "", scholar: "https://scholar.google.com/citations?user=xn8KH0wAAAAJ", website: "" }
    },
    {
      name: "Shukun Yang",
      role: "Ph.D. Student",
      photo: "images/members/shukun yang.jpg",
      email: "yang3sk@mail.uc.edu",
      focus: "AI, Bioinformatics, Complex Network",
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
      url: "https://beartrack.si",
      credit: { label: "Developed by", name: "Ritesh Janga" },
      tags: []
    },
    {
      name: "BibTeX Verifier",
      description: "Validates academic references to ensure BibTeX entries are accurate and resolvable. It allows users to upload a .bib file or paste single reference and checks the entries against online databases to verify their correctness.",
      url: "https://bibtex-verifier.vercel.app/",
      credit: { label: "Enhanced by", name: "Ritesh Janga" },
      tags: []
    },
    {
      name: "Citation Checker",
      description: "Verifies references in academic manuscripts before submission. Upload a paper or paste a reference list and it checks DOIs, authors, journals, and publication years against published records, flagging invalid citations and duplicates.",
      url: "https://citationchecker.jp/",
      credit: { label: "Recommended by", name: "Gaurab Baral" },
      tags: []
    }
  ]
};