# Khem Honey Perpas — Developer Portfolio

A responsive static portfolio made with HTML, CSS, and JavaScript.

## Files
- `index.html` — page content and sections
- `style.css` — layout, colors, responsive styles, and animations
- `script.js` — mobile navigation, reveal animations, and current year

## Run locally
Open `index.html` in your browser, or use the Live Server extension in VS Code.

## Before submitting
1. Confirm your school and current year level.
2. Replace `your.email@example.com` in `index.html` with your professional email.
3. Check every project description and status. Only claim features you have actually built.
4. Add your own project screenshots and links if available.
5. Test on desktop and mobile.

## Publish with GitHub Pages
1. Create a GitHub repository named `khem-portfolio` (or another name you prefer).
2. Upload `index.html`, `style.css`, and `script.js` to the repository's root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for deployment, then use the website URL shown in the Pages settings.

GitHub Pages publishes static HTML, CSS, and JavaScript files. The website will be public, so do not include private information.


## Add your images
The `assets/` folder contains replaceable SVG placeholders. To add your own pictures, copy the image into `assets/` and update the matching `src` or `data-certificate` path in `index.html`.

- Profile: replace `assets/profile-placeholder.svg` with your photo (for example, `assets/khem-profile.jpg`) and update the profile image `src`.
- Projects: add screenshots such as `assets/library-system.png`, then update each `.project-photo` image `src`. You can use a different image path for each project card.
- Certificates: add certificate images such as `assets/certificate-java.jpg`, then update both the `src` and `data-certificate` values on each `.certificate-preview` button to the same file path. Update the certificate title, issuer, and year in the card. Clicking the card opens a larger preview.

Keep filenames simple (lowercase, no spaces) and upload the `assets` folder together with the HTML, CSS, and JS files when publishing.
