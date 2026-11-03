# Album Tracker

A React and Vite learning project for discovering music albums, previewing tracks, and keeping a personal listening collection. It uses the iTunes Search API, Deezer's embeddable album player, and Gemini-powered recommendations.

## Screenshot and live link
Add your album-page screenshot here after running the app.
Live link: Add your Vercel URL after deployment.

## Features
- Search albums and artists using the iTunes Search API.
- Open album details, view the tracklist, and play available 30-second previews.
- Use the persistent mini player with previous, next, pause, and seek controls.
- Save albums with listening status, 1–5 star rating, and personal notes.
- Filter and sort the collection; saved data persists in the browser.
- Switch to the Deezer full-album player when a confident album match is available.
- Get LLM-powered recommendations based on saved album titles, artists, ratings, and statuses.

## Tech stack
React, Vite, Context API, iTunes Search API, Deezer, Google Gemini, and Vercel.

The core search, collection, and 30-second preview features can be tested without a Gemini key. Gemini recommendations require a valid key.

## Limitations
- iTunes provides 30-second previews, not complete tracks.
- The collection is saved only in the current browser's local storage.
- Deezer full-track playback may require logging in and having a plan that supports full tracks in your country.

## AI privacy note
The recommendation feature sends saved album titles, artists, ratings, and statuses to Google's Gemini API. Personal notes are not sent. Keep `GEMINI_API_KEY` out of React code and out of GitHub.

## Disclaimer
This is a learning project and is not affiliated with Apple, Spotify, Deezer, or Google.

## Submission checklist
- [ ] GitHub repository link
- [ ] Live Vercel link
- [ ] Screenshot of search results
- [ ] Screenshot of album page
- [ ] Screenshot of recommendations
- [ ] No API key committed to the repository
- [ ] Reflection question answers
