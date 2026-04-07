# RadiRide

RadiRide is a React frontend for a peer-to-peer two-wheeler rental platform. The current codebase is focused on the landing page experience: a fixed header, sidebar navigation, login/signup modal, app download modal, and a homepage search card for booking self-drive bikes across India.

## Current State of the Project

This repository currently contains a client-side application only.

- No backend or database is connected yet
- Authentication is UI-only
- Search is UI + client-side validation only
- Some branding in the UI still uses the name `RahiRide`
- A few symbols/icons in the rendered text show encoding issues in the current source

## Features Implemented

- Fixed navigation bar with logo, menu button, `Get the App`, and `Login / Signup`
- Slide-out sidebar menu with static navigation items
- Login/signup modal with:
  - mobile number input
  - OTP step transition
  - 4 separate OTP boxes with auto-focus behavior
- App download modal with:
  - QR code image
  - Play Store badge
  - App Store badge
- Homepage hero section with:
  - booking/search card
  - city selector populated from an external API
  - pickup location input
  - start and end date-time pickers
  - basic validation before search
- Feature strip showing bike rental selling points

## How the App Works Right Now

1. `client/src/App.js` renders the welcome heading, header, and homepage content.
2. `client/src/Navbar/Header.jsx` manages sidebar state and opens both modals.
3. `client/src/ContentPage/Home.jsx` fetches Indian states from an external API and fills the city dropdown.
4. The search form validates that:
   - a start date is selected
   - an end date is selected
   - the end date is after the start date
5. Search currently logs the form data to the browser console instead of calling a backend.

## External API Usage

The homepage currently depends on this API at runtime:

- `https://countriesnow.space/api/v0.1/countries/states`

It is used to fetch the list of Indian states for the city dropdown. If the request fails, the dropdown will not be populated.

## Tech Stack

- React 19
- React DOM 19
- Create React App
- Plain CSS in `src/App.css`
- Tailwind CSS tooling and directives are present
- PostCSS + Autoprefixer
- React Testing Library

## Styling Notes

- `client/src/index.css` includes Tailwind directives
- `client/tailwind.config.js` exists, but the `content` array is currently empty
- Most visible UI styling is currently written in `client/src/App.css`

## Project Structure

```text
RadiRide/
  README.md
  client/
    package.json
    package-lock.json
    public/
    src/
      App.js
      App.css
      index.js
      index.css
      App.test.js
      Navbar/
        Header.jsx
      LoginModal/
        AuthModal.jsx
      AppDownloadModal/
        DownloadModal.jsx
      ContentPage/
        Home.jsx
```

## Run Locally

```bash
cd client
npm install
npm start
```

Then open `http://localhost:3000`.

## Available Scripts

Run these commands inside the `client` folder:

- `npm start` starts the development server
- `npm run build` creates the production build
- `npm test` runs the test suite

## Known Gaps and Limitations

- No real login/signup integration
- No OTP sending or OTP verification service
- No route/page navigation for sidebar items
- Search does not return results yet
- No bikes list, booking flow, or checkout flow yet
- Store badges are visual only
- The hero image element is rendered without an image source
- Existing test file still checks for `learn react`, which does not match the current UI

## Suggested Next Improvements

- Connect the search form to a rides listing API
- Add loading and error UI for the states API request
- Add phone number validation before moving to the OTP step
- Replace placeholder console logging with real booking/search behavior
- Fix text encoding issues in icons and labels
- Finalize the product name across the project
- Update the test suite to match the current UI

## Key Source Files

- `client/src/App.js` - app root composition
- `client/src/Navbar/Header.jsx` - navbar, sidebar, and modal triggers
- `client/src/LoginModal/AuthModal.jsx` - phone and OTP modal flow
- `client/src/AppDownloadModal/DownloadModal.jsx` - app download popup
- `client/src/ContentPage/Home.jsx` - homepage search and states fetch
- `client/src/App.css` - main UI styling
