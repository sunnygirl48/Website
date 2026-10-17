# sanyamittal.com

My personal site for art, projects, and writing. Live at [sanyamittal.com](https://sanyamittal.com).

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Hosted on Vercel, code on GitHub at `sunnygirl48/Website`, domain registered at Squarespace and pointed at Vercel.

## What's in my folder

### Files I edit

| File | What it does |
|---|---|
| `src/app/page.tsx` | Homepage splash: the full-bleed artwork, my name top-left, and the "enter here" link. |
| `src/app/(site)/layout.tsx` | Shared frame for Work, Projects, About and Shop: my name top-left, the vertical menu top-right (the `links` list at the top), and the centered content column. |
| `src/app/(site)/work/page.tsx` | Work page (placeholder for now). |
| `src/app/(site)/projects/page.tsx` | Projects page: the two colored rectangles. Colors, links and labels are in the `projects` list at the top. |
| `src/app/(site)/about/page.tsx` | About page (placeholder for now). |
| `src/app/(site)/shop/page.tsx` | Shop page ("Coming soon" placeholder, no checkout). |
| `src/app/layout.tsx` | Root layout for every page. Sets the fonts and the default tab title (`sanyamittal.com`). |
| `src/app/globals.css` | Global styles: background and text colors, including dark mode. |
| `src/app/icon.svg` | The light blue peace sign shown in the browser tab. |
| `public/images/splash.jpg` | The homepage artwork. Replace it with a new file under the same name to change it. |
| `src/middleware.ts` | The password gate. It reads `SITE_PASSWORD` from the environment; the password itself is not in the code. |

The `(site)` folder is just a grouping folder. The parentheses mean it shares a layout between pages without showing up in the URL, so the Work page is `/work`, not `/(site)/work`.

### Config files I rarely touch

- `package.json` lists dependencies and scripts (`npm run dev`, `npm run build`). `package-lock.json` pins exact versions and is managed by npm.
- `next.config.ts` holds Next.js settings (empty right now).
- `tsconfig.json` is TypeScript settings, `postcss.config.mjs` wires up Tailwind, `eslint.config.mjs` is the lint rules.
- `.gitignore` lists what git skips: `node_modules`, `.next`, `.env*`, `.vercel`, `.claude`.
- `AGENTS.md` and `CLAUDE.md` are instructions for Claude Code.
- `public/*.svg` (file, globe, next, vercel, window) are unused starter icons. Safe to delete.

### Folders I don't edit

- `node_modules/` is installed packages.
- `.next/` is build output.
- `.vercel/` links this folder to my Vercel project.
- `.env.local` holds a local Vercel token.
- `.git/` is my version history.

## How I edit the site

1. **Open the folder in VS Code.** File → Open Folder → `sanyasite`.
2. **Start the preview.** Open the terminal in VS Code (Ctrl+`) and run:
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000. The password gate is not active locally.
3. **Edit a file and save.** The browser updates by itself.
   - Page text: edit the text inside the `<p>` tags in that page's `page.tsx`.
   - Menu: edit the `links` list at the top of `src/app/(site)/layout.tsx`.
   - Project colors, links, labels: edit the `projects` list at the top of `src/app/(site)/projects/page.tsx`.
   - Tab title: edit `title:` in the `metadata` block at the top of that page's file. Format is `pagename @ sanyamittal.com`, lowercase.
   - Artwork: drop a new image in as `public/images/splash.jpg`.
   - Styling: edit the `className="..."` strings. They use Tailwind (`text-sm` is small text, `gap-12` is spacing, `mx-auto` centers).
4. **Stop the preview** with Ctrl+C in the terminal.
5. **Publish.** Save and push to the `dev` preview:
   ```bash
   git add -A
   git commit -m "describe my change"
   git push origin dev
   ```
   Then push to the live site:
   ```bash
   git checkout main
   git merge dev
   git push origin main
   git checkout dev
   ```
   Vercel deploys automatically after each push. Production usually updates within a minute or two.

## Things to remember

- I always work on the `dev` branch. `git branch` shows which one I'm on.
- If `npm` isn't found in a terminal, run `eval "$(/opt/homebrew/bin/brew shellenv)"` first. Homebrew isn't on my PATH by default everywhere.
- `main` is the live site. `dev` gets its own Vercel preview URL.
- To change the site password: Vercel dashboard → Project → Settings → Environment Variables → `SITE_PASSWORD`, then redeploy. Env var changes don't apply until the next deploy.
- To take the site public, remove `SITE_PASSWORD` from Vercel and redeploy. The middleware lets everything through when it's unset.
- If the browser tab or the live site looks stale after a push, hard refresh with Cmd+Shift+R.

## Later

- Replace the plain-text "Sanya Mittal" signature on the homepage with my calligraphy.
- Build out Work (gallery), About, and Shop.
- If I start selling things: Stripe Checkout plus a small database. Vercel's free Hobby plan is for non-commercial use, so I'd need Pro once I'm selling.
- Verify the email on the Squarespace domain so it doesn't get suspended.
