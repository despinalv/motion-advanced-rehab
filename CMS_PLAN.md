# CMS Integration Plan (Contentful)

This plan outlines how to upgrade your blog from a static file to a dynamic **Content Management System (CMS)**. We recommend **Contentful** because it is free for small teams, reliable, and separates content from code.

## Difficulty: Intermediate
*   **Time Required**: ~1-2 Hours
*   **Coding**: I handle most of the integration.
*   **Setup**: You will need to create an account and configure the "Model".

## The Workflow
1.  **Write**: Your team logs into `contentful.com` to write posts and upload images (like using Word/WordPress).
2.  **Publish**: They click "Publish".
3.  **Auto-Build**: Contentful tells GitHub to rebuild your site.
4.  **Live**: The new post appears on your website automatically.

---

## Step-by-Step Implementation

### Phase 1: Accounts & Setup (User Action)
1.  **Sign Up**: Create a free account at [Contentful.com](https://www.contentful.com/).
2.  **Create Space**: Create a new "Space" (e.g., "Motion Rehab Website").
3.  **Create Content Model**:
    *   Go to "Content Model" tab.
    *   Create a new type called **Blog Post**.
    *   Add fields matching our data:
        *   `Title` (Text)
        *   `Slug/ID` (Text - for the URL)
        *   `Date` (Date & Time)
        *   `Category` (Text or Dropdown)
        *   `Author` (Text)
        *   `Image` (Media)
        *   `Excerpt` (Long Text)
        *   `Content` (Rich Text)
4.  **Get API Keys**:
    *   Go to Settings > API Keys.
    *   Copy the `Space ID` and `Content Delivery API Access Token`.

### Phase 2: Code Integration (My Action)
1.  **Install SDK**: Add the `contentful` package to the project.
2.  **Create Service**: Write a script (`src/services/contentful.ts`) to fetch data from your new Contentful account using the keys.
3.  **Replace Data**: Update `blogPosts.tsx` to stop using the hardcoded list and instead use the data fetched from Contentful.
4.  **Async Handling**: Update the components to show a "Loading..." state while fetching the blog posts.

### Phase 3: Automation (Joint Action)
1.  **Secrets**: We add your API keys to GitHub Secrets so the website can build securely.
2.  **Webhooks**: We configure Contentful to "ping" GitHub whenever you publish a post, so the site updates automatically.

## Recommendation
Since you successfully edited the file yourself just now, **sticking with the local file method is perfectly fine for launch.** It is robust and simple.

However, if you want your team to be independent, say the word and we will start **Phase 2**.
