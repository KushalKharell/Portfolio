# kushalkharel.com

A minimalist, dark/light-mode portfolio site — plain HTML/CSS/JS, no build step.

## Structure

```
index.html              Homepage
pages/about.html         About
pages/experience.html    Experience / timeline / resume
pages/vlog.html          Video-only feed
pages/posts.html         Combined written + video feed (filterable)
posts/*.html             Individual post/video detail pages
css/style.css            All styling (theme tokens at the top)
js/main.js                Theme toggle + mobile nav
js/posts-data.js          Content list (edit this to add posts/videos)
assets/resume.pdf         Your résumé (add this file yourself)
CNAME                     Custom domain config for GitHub Pages
```

## Editing content

- **Bio / contact / skills**: edit `pages/about.html` directly.
- **Work history**: edit the `.timeline-item` blocks in `pages/experience.html`.
- **Adding a new post or video**: 
  1. Add an entry to the `POSTS` array in `js/posts-data.js` (copy an existing one).
  2. Copy `posts/building-a-rate-limiter.html` (written) or `posts/desk-setup-and-workflow.html` (video) into `posts/<your-slug>.html` and edit the content. The filename must match the `slug` field.
  3. It'll automatically show up on the homepage, `/pages/posts.html`, and `/pages/vlog.html` (if it's a video).
- **Resume**: drop your PDF at `assets/resume.pdf`.
- **Social links / email**: search-and-replace `you@kushalkharel.com`, the GitHub URL, and the LinkedIn URL — they appear in the footer and nav of every page.

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `kushalkharel.com` or `portfolio`).
2. Push this folder's contents to the repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / root**.
4. Under **Settings → Pages → Custom domain**, enter `kushalkharel.com` and save (this writes the `CNAME` file — already included here, so it should auto-fill).
5. Enable **Enforce HTTPS** once GitHub finishes provisioning the certificate (can take up to ~24h).

## Pointing your domain at GitHub Pages

At your domain registrar (wherever `kushalkharel.com` is registered), set:

**A records** (for the apex domain `kushalkharel.com`) pointing to GitHub's IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME record** (for `www.kushalkharel.com`, optional but recommended):
```
www.kushalkharel.com  →  <your-username>.github.io
```

DNS changes can take anywhere from a few minutes to 48 hours to propagate.

## Local preview

Just open `index.html` in a browser, or serve it locally:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
