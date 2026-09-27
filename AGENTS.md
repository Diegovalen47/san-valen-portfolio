# AGENTS.md

Personal portfolio of Valentín Osorio. Static site built with Astro 5, Tailwind CSS 3, Flowbite and DaisyUI. Deployed automatically on every push to `master`.

## Commands

Package manager: **pnpm** (`pnpm-lock.yaml`).

| Task | Command | Notes |
| --- | --- | --- |
| Install | `pnpm install` | |
| Dev server | `pnpm dev` | http://localhost:4321 (redirects to `/en/`) |
| Build | `pnpm build` | Runs `astro check` (type-check) then `astro build` into `dist/` |
| Preview build | `pnpm preview` | Serves `dist/` |

There is no test suite. Verify changes with `pnpm build` (must report `0 errors`) and by checking both `/en/` and `/es/` in the dev server.

## Structure

```text
src/
├── pages/            # index.astro (redirect), en/index.astro, es/index.astro
├── layouts/          # Layout.astro: <head>, SEO meta, Navbar, Footer, global scripts
├── components/
│   ├── sections/     # One component per page section (Hero, Experiencie, Projects, Skills, About, Contact)
│   └── icons/        # Inline SVG icon components
├── i18n/
│   ├── ui.ts         # UI strings keyed by language (en, es)
│   ├── utils.ts      # getLangFromUrl, useTranslations
│   └── translations/ # Extra string groups spread into ui.ts
├── utils/            # Framework-agnostic helpers (e.g. duration.ts)
└── assets/           # Images, project screenshots, skills/*.svg logos
```

## Conventions

- **Bilingual content is mandatory.** Every user-facing string exists in both `en` and `es`. Short UI strings live in `src/i18n/ui.ts`; section data (experiences, projects) lives inline in the section component as `{ en, es }` objects.
- **Language resolution:** components call `getLangFromUrl(Astro.url)` and `useTranslations(lang)`; never hardcode a language.
- **Experience entries** (`src/components/sections/Experiencie.astro`) are ordered newest first and follow this shape: `link`, `logo` (company icon in `src/assets/companies/`), `title`, `time`, `startDate`, optional `endDate`, `description`, `bulletPoints`, `technologies`. Bullet points are one sentence: action verb + what was built + measurable impact.
- **Job durations:** set `startDate` (and `endDate` for past jobs) as `"YYYY-MM"` and leave the duration out of `time`. It is computed LinkedIn-style (both start and end months count) with `src/utils/duration.ts`; entries without `endDate` count up to today.
- **Dynamic dates:** the site is static, so values computed at build time go stale. Elements with `data-duration-start` / `data-years-since` are refreshed on the client by `refreshDynamicDates()` in `Layout.astro`. Reuse these attributes instead of adding new date logic.
- **Technology stack** (`src/components/sections/SkillsList.astro`) is an ordered list of categories (Languages, Frontend, Backend, Database, DevOps & Cloud, Testing, CI/CD, Tools), each with a translated `title`, optional `description` and its `skills`. Each skill needs a colored SVG in `src/assets/skills/` (devicon originals work well).
- **Styling:** Tailwind utility classes with `dark:` variants for every color. Component-specific CSS goes in a scoped `<style>` block.
- Code, comments and commit messages in English.

## Git workflow

- Commit directly to `master`; no PRs for this repo.
- Use Conventional Commits (`feat(scope):`, `fix(scope):`, `chore:`, `docs:`) and keep commits scoped to one concern.
- **Pushing to `master` triggers a production deployment.** Build and check locally before pushing.
