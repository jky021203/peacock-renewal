# PEACOCK recipe section design QA

- Final result: **passed**
- Reference: `/Users/hyeoksu/Desktop/스크린샷 2026-07-20 오후 11.52.11.png`
- Implementation: `qa-evidence/recipe-implementation.jpg`
- Side-by-side comparison: `qa-evidence/recipe-comparison.jpg`
- Production URL: `https://peacock-renewal-sigma.vercel.app`
- Desktop viewport: 1440 × 900
- Mobile viewport: 390 × 844

## Visual comparison

The oversized edge-to-edge recipe treatment was replaced with the compact three-column composition from the reference: intro panel, recipe image card, and product card. The recipe and product cards share a 340px height, the plus control straddles the card boundary, and the section is constrained to a 1190px desktop container.

The existing high-resolution PEACOCK imagery was retained. The product package therefore differs from the white pouch shown in the reference, but this is an intentional P3 asset difference rather than a layout mismatch.

## Checks

- Desktop: three-column proportions, card heights, borders, radii, text spacing, and plus-button placement match the reference structure.
- Mobile: collapses to one column at 640px with no horizontal overflow; the secondary product card is hidden.
- Interaction: the recipe CTA/card continues to navigate to the Gourmet route.
- Typography: existing Pretendard system remains unchanged.
- Build: `vite build` completed successfully.
- Deployment: production deployment reached Ready status and the stable Vercel alias was updated.
- Console: no PEACOCK-originated runtime errors were observed during visual QA. Persisted warnings in the reused browser tab originated from the previously open Notion page.

## Comparison history

1. Initial issue (P1): the recipe image occupied most of the viewport and introduced excessive vertical whitespace.
2. Fix: restored the compact 3-column section and aligned both visual cards to the same height.
3. Post-fix: desktop metrics measured 1190px section width, 482px recipe card width, 365px product card width, and 340px shared card height; mobile width remained contained at 390px.
