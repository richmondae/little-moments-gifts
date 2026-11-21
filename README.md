# Little Moments Gift Co.

A locally previewable gift storefront with product browsing, search, filters, wishlist, a LocalStorage cart, and demonstration checkout.

## Preview with Live Server

1. Open this repository in VS Code.
2. Right-click `index.html` and choose **Open with Live Server**.
3. Product photos are loaded from Unsplash. Cart, wishlist, and demo orders are stored in your browser only.

## Deploy to Vercel later

The repository is prepared for Vercel's Vite build. When you're ready, sign in to Vercel, choose **Add New → Project**, and import `richmondae/little-moments-gifts` from GitHub. Vercel can build from a private GitHub repository; the deployed website itself remains public by default. Select the Vite preset if it is not detected. The included `vercel.json` sets the build command to `npm run build` and the output directory to `dist`. Importing the repo also connects future deployments to pushes on the selected production branch.

This repository change prepares the build but does not create or connect a Vercel project. Keep the repository public while you use GitHub Pages; on GitHub Free, making it private unpublishes Pages.

## License

The original project source is marked © 2026 richmondae, all rights reserved. No reuse permission is granted without written permission. See LICENSE; third-party assets and dependencies keep their own terms.

## Demo limitations

Checkout does not process payments or submit a real order. PayPal is not connected. LocalStorage is not shared between visitors or devices.