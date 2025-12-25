# Website Image Guide

This guide explains how to manage and replace the images on your website.

## Image Location
All images for the website should be placed in the following folder:
`public/images/`

## Replacing Images
To change an image on the website, simply replace the file in the `public/images/` folder with your new image. **You must keep the exact same filename.**

### List of Images
| Description | Filename | Format |
|-------------|----------|--------|
| **Website Logo** (Top left) | `logo_white.png` | PNG (Transparent background recommended) |
| **Browser Tab Icon** (Favicon) | `icon_purple.png` | PNG |

### How to Add New Images
1. Copy your image file into `public/images/`.
2. Note the filename (e.g., `my-new-photo.jpg`).
3. View the code where you want to add it and reference it like this:
   ```tsx
   <img src={`${import.meta.env.BASE_URL}images/my-new-photo.jpg`} alt="Description" />
   ```

## Publishing Changes
After replacing images, remember to push your changes to GitHub to see them live:
```bash
git add .
git commit -m "Updated website images"
git push
```
