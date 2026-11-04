# Album Tracker

A web-based music application with React and Vite that allows users to search for music albums, explore album details, view tracklists, and organize their personal music collection. Can save albums, add ratings and notes, track their listening status, and discover music recommendations through an AI-powered feature. The application integrates the iTunes Search API, Deezer, and Gemini to provide a more interactive music discovery experience.

## Screenshot and live link
![Album Discover](./screenshots/discover.png) 

(./screenshots\screenshots/collection.png) 

**Live link:** [View Album Tracker]:(https://album-tracker-val.vercel.app/)

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

## Run locally
1. ls
2. cd album-tracker
3. npm install
4. Copy `.env.example` to `.env.local` and add your Gemini API key as `GEMINI_API_KEY`.
5. Run `npm run dev` and open the local address shown in the terminal.

The core search, collection, and 30-second preview features can be tested without a Gemini key. Gemini recommendations require a valid key.

## Limitations
- Music previews from the iTunes Search API are limited to 30 seconds.
- The personal music collection is saved only in the user's browser and is not synchronized across different devices.
- Full-track playback through Deezer may require users to log in.
- Music previews may not be available for every track.
- AI recommendations require a valid Gemini API key.

## AI privacy note
The recommendation feature sends saved album titles, artists, ratings, and statuses to Google's Gemini API. Personal notes are not sent. Keep `GEMINI_API_KEY` out of React code and out of GitHub.

## Disclaimer
This is a learning project and is not affiliated with Apple, Spotify, Deezer, or Google. All trademarks, logos, and music-related content belong to their respective owners

## Submission checklist
- [/] GitHub repository link
- [/] Live Vercel link
- [/] Screenshot of search results
- [/] Screenshot of album page
- [/] Screenshot of recommendations
- [/] No API key committed to the repository
- [/] Reflection question answers
