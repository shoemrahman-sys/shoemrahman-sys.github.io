# Abdul Rahaman Shoem: Data Analyst Portfolio

Static site built with plain HTML, CSS and JavaScript. No build step, no frameworks.

## Contents
- `index.html`: the page
- `css/styles.css`, `js/main.js`: styling and dashboard lightbox
- `images/`: four PulsePay dashboard screenshots (full size for the lightbox, `-thumb` versions for the gallery)
- `assets/Abdul_Rahaman_Shoem_Resume.docx`: file behind every "Download resume" button

## Deploy on GitHub Pages
1. Create a public repository on GitHub. For a root URL, name it `shoemrahman-sys.github.io`. Any other name publishes at `https://shoemrahman-sys.github.io/<repo-name>/`.
2. Unzip this folder and upload its **contents** (not the folder itself) to the repository root, so `index.html` sits at the top level. Using git:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/shoemrahman-sys/<repo-name>.git
   git push -u origin main
   ```
3. In the repository go to **Settings > Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch `main` and folder `/ (root)`, then **Save**.
4. Wait 1 to 2 minutes, then open the URL shown at the top of the Pages settings.
5. Test the live site: resume download, email, phone, GitHub and LinkedIn links, and the dashboard gallery.

## Updating
- **Resume:** replace `assets/Abdul_Rahaman_Shoem_Resume.docx`, keeping the same file name.
- **Dashboards:** replace the files in `images/`, keeping the same names. Update captions and alt text in `js/main.js` and `index.html` if the content changes.

## Notes
- All figures come from the resume and the PulsePay dashboard screenshots.
- If you use a custom domain, add it under Settings > Pages. Nothing in the code needs to change, because all paths are relative.
