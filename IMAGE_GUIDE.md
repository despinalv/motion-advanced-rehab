# Website Image Guide

This guide explains how to manage and replace all images on your website without touching the code.

## Instructions
1.  **Get your images ready**: Make sure your images are in **JPG** format (except for the logo/icon which are PNG).
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
| **Hero** | Main background image | `hero_bg.jpg` | JPG |
| **Services** | Athlete Rehab Card | `service_rehab.jpg` | JPG |
| **Services** | Return to Run Card | `service_running.jpg` | JPG |
| **Services** | Online Coaching Card | `service_online.jpg` | JPG |

### Dashboard (Phone Demo)
| Section | Description | Filename | Format |
|---------|-------------|----------|--------|
| **Profile** | User profile picture | `avatar_placeholder.jpg` | JPG |
| **Videos** | "Hip Mobility Flow" thumbnail | `video_mobility.jpg` | JPG |
| **Videos** | "Full Body Unlock" thumbnail | `video_fullbody.jpg` | JPG |
| **Videos** | "Core Foundations" thumbnail | `video_strength.jpg` | JPG |

### About Us
| Section | Description | Filename | Format |
|---------|-------------|----------|--------|
| **Team** | Sofía López | `team_sofia.jpg` | JPG |
| **Team** | Maria J. López | `team_maria.jpg` | JPG |
| **Team** | Karen Lagos | `team_karen.jpg` | JPG |

### Blog
| Section | Description | Filename | Format |
|---------|-------------|----------|--------|
| **Post 1** | Active Recovery Article | `blog_1.jpg` | JPG |
| **Post 2** | Perfect Posture Article | `blog_2.jpg` | JPG |
| **Post 3** | Zone 2 Training Article | `blog_3.jpg` | JPG |
| **Post 4** | Pain Science Article | `blog_4.jpg` | JPG |
| **Post 5** | Mobility vs Flexibility | `blog_5.jpg` | JPG |
| **Post 6** | Tendon Nutrition Article | `blog_6.jpg` | JPG |

## Publishing Changes
After adding or replacing images, run these commands to update the live site:
```bash
git add .
git commit -m "Update images"
git push
```
