# Muhammad Jubril — Portfolio

A multi-page personal portfolio site (HTML, CSS, vanilla JavaScript).

## Folder structure
```
├── index.html
├── about.html
├── projects.html
├── skills.html
├── certificates.html
├── media.html
├── journey.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── media/
```
No build step, no dependencies — it's plain static files, so it deploys as-is.

## Push to GitHub
1. Create a new repository on GitHub (e.g. `portfolio`).
2. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

## Deploy on Vercel
1. Go to vercel.com and log in (you can sign in with your GitHub account).
2. Click **Add New → Project**.
3. Select the GitHub repo you just pushed.
4. Framework preset: choose **Other** (it's a static site — no build command needed).
5. Leave the Build Command and Output Directory blank.
6. Click **Deploy**.

Vercel will give you a live URL (e.g. `your-project.vercel.app`) once it finishes — that's your live portfolio link.
