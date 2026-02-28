# Specification

## Summary
**Goal:** Display the Elite Properties logo image in the Navbar, immediately before the company name text, with the same gold-to-silver gradient ring border style used in the FeaturedCommercialCard section.

**Planned changes:**
- In `Navbar.tsx`, add an `<img>` tag referencing `frontend/public/assets/generated/elite-logo.dim_300x300.png` immediately to the left of the company name text "Elite Properties Real Estate Consultant"
- Size the logo to approximately 40–48px and vertically center it with the company name
- Apply the same gold-to-silver gradient ring/border styling (`#C9A84C` / `#A8A8A8`) currently used on the logo in the FeaturedCommercialCard section

**User-visible outcome:** The Elite Properties logo appears in the navbar to the left of the company name on all pages, styled with a matching gradient ring border, without breaking the layout on desktop or mobile.
