# RadiRide

RadiRide is a React-based frontend prototype for a peer-to-peer two-wheeler rental platform. The current codebase focuses on the landing experience and core entry interactions such as opening the navigation drawer, starting login/signup with an OTP-style flow, and showing an app download modal with QR/store links.

## Current Status

This repository currently contains a frontend application only. There is no backend, API integration, database, or real authentication flow implemented yet.

The UI branding in the code currently uses the name `RahiRide` in several components, while the repository is named `RadiRide`.

## Implemented Features

- Fixed top navigation bar with brand area and action buttons
- Slide-out sidebar menu opened from the hamburger icon
- `Login / Signup` modal with:
  - mobile number input
  - OTP screen transition
  - 4-digit OTP input boxes with auto-focus handling
- `Get the App` modal with:
  - QR code image
  - Play Store and App Store badges
- Basic responsive behavior that hides header action buttons on smaller screens

## Tech Stack

- React 19
- Create React App
- Plain CSS
- Tailwind CSS tooling installed but not currently used in the component code
- Lucide React installed as a dependency, but not currently used in the visible UI

## Project Structure

```text
RadiRide/
  README.md
  client/
    package.json
    public/
    src/
      App.js
      App.css
      Navbar/
        Header.jsx
      LoginModal/
        AuthModal.jsx
      AppDownloadModal/
        DownloadModal.jsx
```

## Main UI Flow

1. The app starts from `client/src/App.js`.
2. `Header.jsx` renders the fixed navbar and manages modal/sidebar open state.
3. Clicking the menu icon opens the sidebar.
4. Clicking `Login / Signup` opens `AuthModal.jsx`.
5. Clicking `Get the App` opens `DownloadModal.jsx`.

## How to Run Locally

```bash
cd client
npm install
npm start
```

After starting the development server, open `http://localhost:3000`.

## Available Scripts

From the `client` directory:

- `npm start` - runs the app in development mode
- `npm run build` - creates a production build
- `npm test` - runs the test suite

## What Is UI-Only Right Now

The following interactions are present as frontend behavior only:

- phone number submission
- OTP generation and verification
- resend OTP
- app store badge actions
- sidebar menu navigation

## Notes for Further Development

- Add form validation for phone number and OTP input
- Connect login flow to a real authentication service
- Replace static external images with managed project assets
- Add actual routes/pages for menu items
- Improve mobile navigation because header buttons are hidden on small screens
- Clean up text encoding issues visible in some symbols/icons
- Decide on final product name: `RadiRide` or `RahiRide`

## Entry Files

- `client/src/App.js` - app root
- `client/src/Navbar/Header.jsx` - navbar, sidebar, and modal state
- `client/src/LoginModal/AuthModal.jsx` - login/signup modal and OTP UI
- `client/src/AppDownloadModal/DownloadModal.jsx` - app download modal
- `client/src/App.css` - shared styling for the current UI
