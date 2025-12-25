# SEO & Routing Upgrade Plan

## Goal
Enable "real" URLs for the website (e.g., `domain.com/blog/active-recovery` instead of just staying on `domain.com`). This is crucial for **SEO** (Google indexing) and **Shareability** (sending a link to a specific post).

## The Problem
Currently, the website is a "Single Page Application" (SPA) that "fakes" navigation. When you click a link, it just swaps headers/content without changing the URL. Google cannot "see" or "index" those hidden pages easily.

## The Solution: React Router
We need to install a standard library called `react-router-dom`.

| Feature | Current State | With React Router |
| :--- | :--- | :--- |
| **URL Bar** | Always `motion-rehab.github.io` | `/blog`, `/blog/post-1`, `/contact` |
| **Browser Back Button** | Custom code (fragile) | Native browser behavior (robust) |
| **Google Indexing** | Just the home page | Every page and blog post individually |
| **Direct Links** | Cannot share specific pages | Can share deep links |

## Implementation Steps
1.  **Install**: Add `react-router-dom` package.
2.  **Refactor `App.tsx`**: Replace the `useState` navigation logic with `<Routes>` and `<Route>`.
3.  **Update Links**: Change `onClick={() => onNavigate(...)}` to standard `<Link to="...">` components.
4.  **Blog Slugs**: Update `blogPosts.tsx` to include "slugs" (friendly URL names) instead of just IDs (e.g., `why-rest-is-rust` instead of `1`).

## CMS Note
**You do NOT need a CMS to get these URLs.** We can do this right now with your current setup. A CMS is just for *managing* the text easier later.
