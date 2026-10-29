# Abdullah Al Mamun — Portfolio
React + Vite + TypeScript + Tailwind CSS 3 + React Router (HashRouter) + Motion + Lucide.

## Run locally
```
npm install
npm run dev        # development server
npm run build      # production build -> dist/
npm run preview
```
Commit the generated `package-lock.json`: the workflow uses `npm ci`.

## Edit content
- Personal info, tagline, About text, education, experience: `src/data/personal.ts`
- Skills: `src/data/skills.ts` (icons load from the Devicon CDN; a text fallback shows if one fails)
- Projects: `src/data/projects.ts`. Add an entry with a unique `slug`; the card and `/#/projects/<slug>` page appear automatically. Empty `liveUrl`/`repoUrl` show as unavailable.
- Project screenshots: put files in `public/images/projects/` and set `image: 'images/projects/name.png'` (no leading slash).
- Profile photo: download it from your Drive link and save as `public/images/profile.jpg`. A monogram shows until then.
- Resume: save as `public/resume/resume.pdf`. The button switches from "Resume coming soon" to a download automatically.

## Base path (GitHub Pages)
Edit the two constants at the top of `vite.config.ts`: `REPO_NAME` (your repo name) or `USER_SITE = true` for `username.github.io`.

## Deploy
1. Create a GitHub repo, push this project to `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Push; `.github/workflows/deploy.yml` builds and deploys. Site: `https://<user>.github.io/<REPO_NAME>/`.

Hash routing means refreshing `/#/projects/project-1` works on Pages.

## Troubleshooting
- Blank page / 404 assets: `REPO_NAME` doesn't match the repo name.
- `npm ci` fails: commit `package-lock.json`.
- Photo missing: file must be exactly `public/images/profile.jpg`.
- Workflow fails on deploy: confirm Pages source is "GitHub Actions".
