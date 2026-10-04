# Rules for this project

These rules apply to anyone working on this repo, people or AI.

> These rules are a first draft. They should match the doc rules used in the Call-Clutch project. Update this file when those rules are copied over.

## Keep the docs up to date
| When you… | Update |
|---|---|
| Finish any piece of work | `progress.md`: add a line under today's date and refresh "Current status" |
| Start or finish a backlog item | `backlog.md`: tick it when done; add new work you discover |
| Make a choice between options (tech, design, business rule) | `decisions.md`: add a new numbered entry. Never edit an old decision's meaning; replace it with a new one |
| Learn a business fact (price rule, delivery area, contact) | `business.md` |
| Change how the code is laid out, run or deployed | `README.md` |

## Business facts
- Never invent business facts (delivery area, charges, return rules, prices). If a fact isn't in `business.md`, ask the owner and list it in `backlog.md` under "Waiting on the business owner".
- Don't show the UPI ID on the website (D-003).
- The WhatsApp number lives in one place in the code (`js/config.js`). Don't hard-code it elsewhere.

## Code
- Plain HTML, CSS and JavaScript only. No framework, no build step, no `npm` (D-007).
- Mobile first: check every page at phone width.
- The owner edits `products.json` by hand on GitHub. Keep its format simple and show an example in `README.md` whenever the format changes.
