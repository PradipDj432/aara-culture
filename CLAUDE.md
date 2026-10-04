# Rules for this project

These rules apply to anyone working on this repo, people or AI. Keep things simple: this is a small catalog site, not an online shop.

## Keep the docs up to date
| When you… | Update |
|---|---|
| Finish any piece of work | `progress.md`: add a line under today's date and refresh "Current status" |
| Start or finish a backlog item | `backlog.md`: tick it when done; add new work you discover |
| Make a choice between options (tech, design, business rule) | `decisions.md`: add a new numbered entry. Never edit an old decision's meaning; replace it with a new one |
| Learn a business fact (price rule, delivery area, contact) | `business.md` |
| Change how the code is laid out, run or deployed | `README.md` |

## Business facts
- Never invent business facts (delivery area, charges, return rules, prices, size measurements). If a fact isn't in `business.md`, ask the owner and list it in `backlog.md` under "Waiting on the business owner".
- Don't show the UPI ID on the website (D-003).
- The WhatsApp number and shop rules live in one place, `js/config.js`. Don't hard-code them elsewhere.

## Design ("minimal luxury", D-014)
- Colours: ivory background `#faf8f5`, black text and buttons `#141414`, muted grey `#6b645d`, sand behind photos `#efeae3`. No bright colours.
- Fonts: Cormorant Garamond for the logo and headings, Jost for everything else. Small labels are uppercase with wide letter spacing.
- Sharp corners (no rounded buttons or cards), thin 1px lines, lots of white space. Photos lead every page.

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-007).
- Mobile first: check every page at phone width (390px) with no horizontal scrolling.
- The owner edits `products.json` by hand on GitHub. Keep its format simple and show an example in `README.md` whenever the format changes.
- Text from `products.json` goes through `escapeHtml()` before it's put into the page.
- Product photos: 3:4 JPEG, about 1000px wide, under ~250 KB, named `ac-XXX-N.jpg` (D-015).
