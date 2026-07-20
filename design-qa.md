# Design QA

## Comparison Target

- Source visual truth: `/Users/hyeoksu/.codex/generated_images/019f7e58-b3e9-7933-a2b6-131dfe74c6e0/exec-8d6e4589-7c39-4a16-a17a-9ecb9f4190d9.png`
- Browser-rendered implementation: `/Users/hyeoksu/Documents/정갱 포트폴리오 & 이력서/peacock-renewal/qa-evidence/qa-home-stitched.jpg`
- Mobile implementation: `/Users/hyeoksu/Documents/정갱 포트폴리오 & 이력서/peacock-renewal/qa-evidence/qa-home-mobile.jpg`
- Full-view comparison evidence: `/Users/hyeoksu/Documents/정갱 포트폴리오 & 이력서/peacock-renewal/qa-evidence/qa-comparison-full.jpg`
- Focused hero comparison evidence: `/Users/hyeoksu/Documents/정갱 포트폴리오 & 이력서/peacock-renewal/qa-evidence/qa-comparison-hero.jpg`
- Desktop viewport/state: 1440 × 1000, Home, default filter, menu/search closed
- Mobile viewport/state: 390 × 844, Home, menu/search closed

## Findings

No actionable P0, P1, or P2 findings remain.

- Fonts and typography: Pretendard Variable is bundled locally and used consistently. The hero, section headings, card labels, and utility text preserve the target's sans-serif hierarchy. Desktop and mobile wrapping was checked; no clipped or single-word orphan remains in the primary home flow.
- Spacing and layout rhythm: the target's split hero, three category cards, five-product rail, recipe pairing, dark brand-principles strip, three-story grid, and structured footer are reproduced in the same order. The production page intentionally uses a little more vertical breathing room than the compressed concept board.
- Colors and visual tokens: warm off-white surfaces, black typography, hairline borders, and the charcoal brand strip match the source direction. No decorative gradients are used.
- Image quality and asset fidelity: the hero, recipe, and brand-principles images were generated as dedicated high-resolution assets for their measured slots. Remaining product and category imagery uses the supplied source assets converted to WebP. No pixelated logo, placeholder, CSS illustration, handcrafted SVG, or fake product image remains.
- Copy and content: headings and labels preserve the original PEACOCK information architecture and use coherent Korean product copy. The original five destinations are retained.
- Icons: all interface icons use one Phosphor family with consistent stroke weight and sizing.
- Responsiveness: browser measurements at 390, 768, 1024, and 1440px showed `scrollWidth === innerWidth`; no horizontal overflow was found. Mobile hero, category cards, product grid, recipe feature, brand principles, and menu were visually checked.
- Accessibility: semantic headings, buttons, labels, alt text, skip link, focus-visible treatment, reduced-motion support, and practical mobile tap targets are present.

## Comparison History

### Iteration 1 — blocked

- [P1] Category and Gourmet card imagery was cropped too tall relative to the selected concept, and text sat over busy photography with insufficient readability.
  - Fix: normalized Gourmet card image height, selected the correct cheesecake image, and added a restrained translucent label surface to category cards.
  - Post-fix evidence: `qa-evidence/qa-comparison-full.jpg` shows aligned three-card modules and readable category copy.
- [P2] The first desktop hero heading wrapped to three lines instead of the target's two-line lockup.
  - Fix: reduced the display scale and widened the usable copy column.
  - Post-fix evidence: `qa-evidence/qa-comparison-hero.jpg`.
- [P2] The initial white source wordmark produced outlined letters after color filtering.
  - Fix: replaced it with the supplied black PEACOCK logo at its native display size.
  - Post-fix evidence: `qa-evidence/qa-comparison-hero.jpg`.
- [P2] The brand-principles heading broke inside the word “원칙으로”.
  - Fix: adjusted the heading scale so the phrase wraps at intentional boundaries.
  - Post-fix evidence: `qa-evidence/qa-comparison-full.jpg`.
- [P2] Dark subpage hero sources lost too much image detail beneath the overlay.
  - Fix: reduced overlay opacity and applied a small brightness correction to the photo layer.

### Iteration 2 — passed

- Reopened the final implementation in the in-app browser.
- Confirmed all five routes render with zero broken images.
- Confirmed menu open/close, search-to-results, category filter selection, route navigation, and interest-product toast.
- Confirmed 0 console errors or warnings in the final run.
- Confirmed desktop and mobile screenshot evidence after fixes.

## Primary Interactions Tested

- Mobile full-menu open and close
- Product-search panel, search for “짬뽕”, and results route
- Best-page CAFE filter: active state and two filtered results
- Interest-product add action and visible status toast
- Navigation across Home, Brand Story, Best, Products, and Gourmet

## Follow-up Polish

- [P3] The category labels use translucent panels instead of the source mock's bare text because the supplied photographs have less negative space. This is an intentional readability adaptation.

## Implementation Checklist

- [x] Selected visual implemented
- [x] High-resolution assets placed
- [x] Desktop and mobile layouts verified
- [x] Core interactions verified
- [x] Console checked
- [x] Production build verified

final result: passed
