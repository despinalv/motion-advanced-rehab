# Blog Management Guide

Currently, the blog posts are stored in a data file in the code. This is a simple way to manage content without complex tools, but it requires a few steps to update.

## How to Add or Edit a Post

1.  **Open the Data File**: Go to `src/data/blogPosts.tsx`.
2.  **Find the Language**: You will see two sections: `en` (English) and `es` (Spanish).
3.  **Add a New Post**: Copy an existing post block (starts with the ID, e.g., `'1': { ... }`) and paste it as a new entry.
    *   **ID**: Give it a unique number/ID (e.g., `'7'`).
    *   **Content**: Update the title, date, author, excerpts, and the main `content` section.
4.  **Images**: 
    *   Place your new image in `public/images/`.
    *   Update the `image` field in the post to match the filename (e.g., `${import.meta.env.BASE_URL}images/my_new_post.jpg`).

## Future Upgrade: Content Management System (CMS)

If you need a more user-friendly way to write (like Microsoft Word) or want to restrict access to specific team members without giving them code access, we recommend integrating a **Headless CMS** like **Contentful**.

**Benefits of a CMS:**
*   **Easy Interface**: Write and format text easily without seeing code.
*   **User Accounts**: Invite team members and control who can publish.
*   **No Code Updates**: Publishing a post happens instantly without needing a developer to update the site.

Let us know if you want to upgrade to a CMS!
