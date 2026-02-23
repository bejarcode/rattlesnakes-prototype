# Rattlesnakes & Rainbows — Website Prototype

Static prototype for Sarah Stewart's botanical tarot website.

**Live preview:** https://bejarcode.github.io/rattlesnakes-prototype/

## Pages

| Page | File | Status |
|------|------|--------|
| Homepage | `index.html` | Done |
| Shop (card grid) | `shop.html` | Done |
| Card Detail (Death) | `card-death.html` | Done |
| Card Exploration | `card-exploration.html` | Done |
| About Sarah | `about.html` | Done |
| Murals | `murals.html` | Done |
| Illustration | `illustration.html` | Done |
| Contact | `contact.html` | Done |
| **PDP (Product Detail)** | `card-[name].html` | **Next up** |

## What's next: PDP (Product Detail Page)

The current `card-death.html` is a single card detail page. We need a proper PDP template that works for all cards with:
- Card image (large)
- Card name, plant names, archetype
- Meaning/description text
- Size selector with pricing
- Add to cart
- "The Plant Medicine" section
- Related cards

## Deploy to GitHub Pages

This prototype is served via GitHub Pages from a separate public repo. To push updates:

```bash
# From anywhere — run the deploy script
./deploy.sh
```

Or manually:

```bash
# 1. Go to the deploy repo
cd /tmp/rattlesnakes-deploy

# 2. Sync files from prototype
rsync -av --delete \
  --exclude='.git' \
  --exclude='README.md' \
  /Users/victor/dev/cx-presentation/2026/rattlesnakes-and-rainbows/rattlesnakes-prototype/ \
  /tmp/rattlesnakes-deploy/

# 3. Commit and push
cd /tmp/rattlesnakes-deploy
git add -A
git commit -m "Update prototype"
git push
```

The site updates within 1-2 minutes after push.

## Tech

- Pure HTML/CSS/JS, no build tools
- CSS architecture: `variables.css` > `typography.css` > `layout.css` > `components.css` > page-specific
- Design system: "Dark Temple" theme with gold accents
- Fonts: Cormorant Garamond (headings), Lora (body), Raleway (UI)
- All images served from `assets/images/`

## Repos

- **Main project:** `bejarcode/cx-presentation` (private) — full project with copy docs, brand docs, screenshots
- **Prototype preview:** `bejarcode/rattlesnakes-prototype` (public) — just the prototype for GitHub Pages
