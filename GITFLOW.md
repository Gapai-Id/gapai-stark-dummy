# GITFLOW.md — Gapai Frontend

This file defines the Git workflow for the Gapai frontend project.
Follow every rule here strictly. Claude Code, Cursor, and Windsurf should reference this when generating branch names, commit messages, or PR descriptions.

---

## 🌿 Branch Strategy

```
main                    # Production. Never commit directly.
├── staging             # Pre-production QA. Merges from develop.
└── develop             # Integration branch. All features merge here.
    ├── feature/        # New features
    ├── fix/            # Bug fixes
    ├── chore/          # Config, deps, tooling, refactor
    └── hotfix/         # Emergency production fixes (branches from main)
```

### Branch Naming

```
feature/[ticket-id]-short-description
fix/[ticket-id]-short-description
chore/short-description
hotfix/short-description
```

Examples:
```
feature/GAP-42-candidate-list-page
fix/GAP-87-pagination-reset-on-filter
chore/upgrade-tanstack-query-v5
hotfix/auth-token-expiry-redirect
```

Rules:
- All branches from `develop` — except `hotfix/` which branches from `main`
- Ticket ID is required for `feature/` and `fix/` branches
- Use kebab-case, keep it under 50 characters
- Never work directly on `main`, `staging`, or `develop`

---

## 📝 Commit Convention (Conventional Commits)

Format: `type(scope): short description`

| Type | When to use |
|---|---|
| `feat` | New feature or visible UI change |
| `fix` | Bug fix |
| `style` | Tailwind/CSS changes, no logic change |
| `refactor` | Code restructure, no behavior change |
| `chore` | Deps, config, tooling, build scripts |
| `test` | Adding or fixing tests |
| `docs` | README, CLAUDE.md, comments |
| `perf` | Performance improvement |
| `revert` | Reverting a previous commit |

Scope = the feature or file area affected (optional but recommended):
```bash
feat(candidates): add candidate detail page
fix(auth): handle expired token on page refresh
style(dashboard): fix sidebar spacing on mobile
chore(deps): upgrade msw to v2.3.0
refactor(hooks): extract pagination logic to use-pagination hook
```

Rules:
- Subject line max 72 characters
- Use imperative mood: "add", "fix", "update" — not "added", "fixed", "updated"
- No period at the end of subject line
- Reference ticket in commit body if relevant: `Closes GAP-42`

---

## ⏱️ Commit Frequency

- Commit every working, non-breaking state
- Aim for commits every 15–30 minutes during active development
- Never commit broken TypeScript or lint errors
- Always run before committing:

```bash
pnpm typecheck && pnpm lint
```

---

## 🔀 Pull Request Rules

### Title format
Same as commit convention: `feat(scope): description`

### PR size
- Ideal: under 400 lines changed
- Maximum: 800 lines — split into smaller PRs if larger
- One feature or fix per PR — never bundle unrelated changes

### Target branch
| Branch type | Merge into |
|---|---|
| `feature/` | `develop` |
| `fix/` | `develop` |
| `chore/` | `develop` |
| `hotfix/` | `main` AND `develop` |

### Pre-PR checklist
- [ ] `pnpm typecheck` passes — zero TypeScript errors
- [ ] `pnpm lint` passes — zero lint errors
- [ ] All four states handled: loading, error, empty, success
- [ ] Tested visually at 375px (mobile) and 1440px (desktop)
- [ ] No `console.log` left in code
- [ ] Self-reviewed — read your own diff before requesting review

### PR description template
```markdown
## What
Short description of what this PR does.

## Why
Why this change is needed. Link to ticket: GAP-XX

## How
Key implementation decisions or anything the reviewer should know.

## Screenshots
Before / After if there are visual changes.

## Checklist
- [ ] typecheck passes
- [ ] lint passes
- [ ] loading / error / empty / success states handled
- [ ] mobile + desktop tested
- [ ] no console.log in code
```

---

## 🚀 Release Flow

```
develop → staging       # Deploy to staging for QA
staging → main          # Deploy to production
main → tag vX.X.X       # Tag the release
```

### Semantic versioning
```
v1.0.0   # Major — breaking change or full release
v1.1.0   # Minor — backward compatible new feature
v1.1.1   # Patch — bug fix only
```

---

## 💻 Git Commands Cheat Sheet

```bash
# Start a new feature
git checkout develop && git pull
git checkout -b feature/GAP-42-candidate-list-page

# Save work in progress without committing
git stash
git stash pop

# Sync with develop while working on a branch
git fetch origin
git rebase origin/develop

# Stage and commit
git add -p                           # Review and stage changes interactively
git commit -m "feat(candidates): add candidate list page"

# Push and open PR
git push origin feature/GAP-42-candidate-list-page

# Clean up after PR is merged
git checkout develop && git pull
git branch -d feature/GAP-42-candidate-list-page
```

---

## 🚫 What AI Should Never Do with Git

- ❌ Never suggest committing directly to `main`, `staging`, or `develop`
- ❌ Never generate a commit message without a `type(scope):` prefix
- ❌ Never suggest `git push --force` on shared branches
- ❌ Never generate a PR that mixes a feature with unrelated fixes or chores
- ❌ Never create a branch without following the naming convention above

---

*GITFLOW.md · Gapai Frontend · Last updated April 2026*
