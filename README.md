# Therapeutic Editorial Assessment

A sophisticated, editorial-style therapeutic assessment form for holistic practitioners.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Steps:
1.  **Push to `main`**: Any push to the `main` branch will trigger the `Deploy to GitHub Pages` workflow.
2.  **Configure GitHub Pages**:
    *   Go to your repository on GitHub.
    *   Navigate to **Settings** > **Pages**.
    *   Under **Build and deployment** > **Source**, select **GitHub Actions**.
3.  **Wait for Deployment**: The workflow will build the project and deploy it to your GitHub Pages URL.

## Local Development

1.  `npm install`
2.  `npm run dev`

## Building for Production

1.  `npm run build`
2.  The static files will be in the `dist/` folder.
