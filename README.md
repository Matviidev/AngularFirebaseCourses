## Angular Firebase course project

Demo Angular application built with **Angular 13 + Angular Material** and integrated with **Firebase (Auth, Firestore, Storage, Hosting, Functions)**.  
This repo is set up for **local development using Firebase Emulators** with optional seed data in `test-data/`.
[Current deploy](https://fir-course-b595a.web.app/courses/serverless-angular/login)

### What’s inside

- **Angular app** (`src/`)
  - **Login** via FirebaseUI (Email/Password + Google)
  - **Course catalog** (Beginner/Advanced) backed by Firestore
  - **Course details** page with paginated lessons (subcollection `courses/{courseId}/lessons`)
  - **Admin-only routes** for:
    - Creating courses (also uploads a thumbnail to Firebase Storage)
    - Creating users (UI scaffold)
- **Firebase Cloud Functions** (`functions/`) — currently a template with `setGlobalOptions({ maxInstances: 10 })`
- **Firebase config** (`firebase.json`, `firestore.rules`, `storage.rules`, `firestore.indexes.json`)
- **Emulator seed data** (`test-data/`) for Auth + Firestore

### Prerequisites

- **Node.js + npm**
  - Frontend (Angular 13): a Node LTS is recommended.
  - Functions: `functions/package.json` declares **Node 22** (`"engines": { "node": "22" }`).
    - If you use `nvm`, you can run different Node versions for the root vs `functions/`.
- **Firebase CLI**: installed as a dependency (`firebase-tools`) and also runnable via `npx firebase ...`

### Install

From the repo root:

```bash
npm install
```

Install function dependencies too:

```bash
cd functions && npm install
```

### Run locally (recommended: emulators + Angular)

This project is wired to Firebase emulators when `environment.useEmulators` is `true`:

- Auth emulator: `localhost:9099`
- Firestore emulator: `localhost:8080`
- Functions emulator: `localhost:5001`

Start emulators **with seeded test data**:

```bash
npm run local-dev
```

In a second terminal, start Angular:

```bash
npm start
```

Then open the app at `http://localhost:4200`.

### Deploy

This repo is configured for Firebase Hosting to serve `dist/`:

1. Build the Angular app:

```bash
npm run build
```

2. Deploy:

```bash
npx firebase deploy
```

Note: `firebase.json` runs a functions predeploy hook:

- `npm --prefix functions run build`

### Environment configuration

- Development Firebase config is in `src/environments/environment.ts`.
- Production config is currently minimal (`src/environments/environment.prod.ts`).
  - If you deploy this yourself, you’ll typically want to add your Firebase config to `environment.prod.ts`
    (or load it via environment variables / runtime config).
