// Central content list — edit this to add new posts/videos.
// kind: "post" | "video"
// slug maps to posts/<slug>.html
const POSTS = [
  {
    slug: "building-a-rate-limiter",
    kind: "post",
    title: "Building a rate limiter from scratch",
    excerpt: "Token bucket vs. sliding window, and why I ended up rolling my own middleware.",
    date: "2026-08-12",
    tags: ["backend", "systems"]
  },
  {
    slug: "why-i-moved-to-postgres",
    kind: "post",
    title: "Why I moved a side project off Mongo to Postgres",
    excerpt: "Schema drift finally caught up with me. Notes on the migration.",
    date: "2026-07-02",
    tags: ["databases"]
  },
  {
    slug: "desk-setup-and-workflow",
    kind: "video",
    title: "My dev setup and daily workflow",
    excerpt: "A walkthrough of my terminal, editor config, and how I structure a workday.",
    date: "2026-06-18",
    tags: ["vlog", "setup"],
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    slug: "debugging-a-memory-leak",
    kind: "video",
    title: "Debugging a production memory leak (screen recording)",
    excerpt: "Live walkthrough of tracking down a leak in a Node service using heap snapshots.",
    date: "2026-05-30",
    tags: ["vlog", "debugging"],
    youtubeId: "dQw4w9WgXcQ"
  }
];

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// prefix = "" when called from root (index.html), "../" when called from /pages or /posts
function renderPostCard(p, prefix) {
  const href = `${prefix}posts/${p.slug}.html`;
  const kindLabel = p.kind === "video" ? "VIDEO" : "POST";
  const thumb = p.kind === "video"
    ? `<div class="post-thumb"><div class="play">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
       </div></div>`
    : `<div class="post-thumb">
         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v16H4z" opacity="0"/><path d="M6 8h12M6 12h12M6 16h8"/></svg>
       </div>`;
  return `
  <a class="post-card" href="${href}">
    ${thumb}
    <div class="post-body">
      <div class="post-meta">
        <span class="post-kind">${kindLabel}</span>
        <span>·</span>
        <span>${formatDate(p.date)}</span>
      </div>
      <h3 class="post-title">${p.title}</h3>
      <p class="post-excerpt">${p.excerpt}</p>
    </div>
  </a>`;
}
