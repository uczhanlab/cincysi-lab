# cincysi.si: Maintenance Guide

A static site with no build step. Upload the folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, or UC web hosting).

```
cincysi/
├── index.html          Landing: mission and "Latest News & Announcements"
├── research.html       Active and concluded projects
├── members.html        Group picture plus individual member grid
├── publications.html   Publications grouped by year
├── js/
│   ├── data.js         ✏️ ALL CONTENT. This is the only file you normally edit.
│   ├── main.js         Layout logic. Leave alone.
│   └── theme.js        Colour palette (Cyber Blue, Ink, Steel, Mist)
└── images/
    ├── group-photo.jpg         Whole-group picture (landscape, at least 2000px wide)
    └── members/
        └── first-last.jpg      One headshot per member (square, about 800px)
```

## Posting news (for lab managers)

Open `js/data.js` and add a block at the top of the `news` list:

```js
{
  date: "2026-10-11",                 // YYYY-MM-DD
  tag: "Award",                       // Award, Paper, Event, Welcome, etc.
  title: "Headline of the announcement",
  body: "One or two sentences of detail.",
  link: ""                            // optional URL
},
```

The feed sorts itself by date. The home page shows the five most recent items.

## Adding a student or team member

Copy one block inside `members` and fill in the fields. Leave `photo` blank to show the placeholder, and remove any links you don't have (set them to `""`).

Member roles used on the site: `Postdoc`, `Ph.D. Candidate`, `Graduate Researcher`, `Undergraduate Researcher`, `Alumni` (move alumni to a separate list if you want to group them).

## Adding a publication

Copy one block inside `publications`:

```js
{
  year: 2026,
  title: "Paper title",
  authors: "Last A., Last B., Zhan J.",
  venue: "Journal or conference name",
  link: "https://doi.org/...",
  type: "Journal"                     // Journal, Conference, Preprint, Thesis
},
```

Publications are grouped and sorted by year automatically.

## Adding a project

Copy one block inside `projects` and set `status` to `"Active"` or `"Concluded"`.

## Local preview

Run `python3 -m http.server 8000` in the folder and visit `http://localhost:8000`.

## Deployment checklist for cincysi.si

1. Replace every placeholder entry in `news`, `members`, `publications`, and `projects`.
2. Confirm the mission statement in `lab.mission` with the PI.
3. Replace `#TODO` links in `links`.
4. Add `images/group-photo.jpg` and member headshots.
5. Check the layout at phone (375px), tablet (768px), and desktop (1280px+) widths.
6. Point the `.si` domain at the static host and enable HTTPS.

## Design system

| Token       | Hex       | Use                          |
|-------------|-----------|------------------------------|
| Cyber       | `#00A8E8` | Accents, links, active states |
| Glow        | `#33D1FF` | Hover and highlights          |
| Ink         | `#0B1A2B` | Header, footer, hero, text    |
| Steel       | `#1E2F45` | Group photo panel, dark cards |
| Mist        | `#F1F5F9` | Page background               |

Typography: Space Grotesk for headings, Inter for body text. Cards use a 1px low-opacity ring and a soft shadow so they stay legible on both desktop and mobile.
