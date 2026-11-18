# Reyner Elazaro Tampubolon — Portfolio

Static site for GitHub Pages. Four pages: Home, Projects, Education, and Contact.

The contact form posts to [FormSubmit](https://formsubmit.co) and delivers a real email to reynerelazaro@gmail.com. The first submission triggers a confirmation link to that inbox. After it is confirmed, later messages arrive without that step.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository (the empty `reyneret/GitHub-Portfolio` repo is a fit).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**.
4. Choose the branch (usually `main`) and the folder **/ (root)**, then save.
5. The site will be at `https://reyneret.github.io/GitHub-Portfolio/`.

Paths in the HTML are relative, so the same files work locally and as a project site.

## Local preview

```bash
python -m http.server 5500
```

Open `http://127.0.0.1:5500`.
