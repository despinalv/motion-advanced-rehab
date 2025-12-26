# Website Image Guide

This guide explains how to manage and replace all images on your website without touching the code.

## Instructions
1.  **Get your images ready**: Make sure your images are in **WebP** format (except for the logo/icon which are PNG).
2.  **Rename them**: Rename your image files to match the **exact filenames** listed below.
3.  **Upload**: Place them all in the `public/images/` folder.

If a file is missing, that part of the website will show a broken image icon until you add it.

## Image List

### Branding
| Section | Description | Filename | Format |
|---------|-------------|----------|--------|
| **Navigation** | Top Left Logo | `logo_white.png` | PNG (Transparent) |
| **Browser** | Browser Tab Icon | `icon_purple.png` | PNG |

### Home Page
| Section | Description | Filename | Format |
|---------|-------------|----------|--------|
| **Hero** | Main background image | `hero_bg.webp` | WebP |
| **Services** | Athlete Rehab Card | `service_rehab.webp` | WebP |
| **Services** | Return to Run Card | `service_running.webp` | WebP |
| **Services** | Online Coaching Card | `service_online.webp` | WebP |

### Dashboard (Phone Demo)
| Section | Description | Filename | Format |
|---------|-------------|----------|--------|
| **Profile** | User profile picture | `avatar_placeholder.webp` | WebP |
| **Videos** | "Hip Mobility Flow" thumbnail | `video_mobility.webp` | WebP |
| **Videos** | "Full Body Unlock" thumbnail | `video_fullbody.webp` | WebP |
| **Videos** | "Core Foundations" thumbnail | `video_strength.webp` | WebP |

### About Us
| Section | Description | Filename | Format |
|---------|-------------|----------|--------|
| **Team** | Sofía López | `team_sofia.webp` | WebP |
| **Team** | Maria J. López | `team_maria.webp` | WebP |
| **Team** | Karen Lagos | `team_karen.webp` | WebP |

### Blog
| Section | Description | Filename | Format |
|---------|-------------|----------|--------|
| **Post 1** | Active Recovery Article | `blog_1.webp` | WebP |
| **Post 2** | Perfect Posture Article | `blog_2.webp` | WebP |
| **Post 3** | Zone 2 Training Article | `blog_3.webp` | WebP |
| **Post 4** | Pain Science Article | `blog_4.webp` | WebP |
| **Post 5** | Mobility vs Flexibility | `blog_5.webp` | WebP |
| **Post 6** | Tendon Nutrition Article | `blog_6.webp` | WebP |

## Publishing Changes
After adding or replacing images, run these commands to update the live site:
```bash
git add .
git commit -m "Update images"
git push
```
