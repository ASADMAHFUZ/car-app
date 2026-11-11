# car-app (AutoPlaza.ch)

React + Vite mobile UI for the Maaholi / AutoPlaza car marketplace (home screen and Search hub).

## Setup

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build

## GitHub

Remote: [https://github.com/ASADMAHFUZ/car-app](https://github.com/ASADMAHFUZ/car-app)

After [Git for Windows](https://git-scm.com/download/win) is installed:

```powershell
cd C:\Users\Betopia\Downloads\car-app
powershell -ExecutionPolicy Bypass -File .\scripts\push-to-github.ps1
```

The script initializes git (if needed), sets `origin` to the repo above, commits, and pushes `main`.

If you cannot install Git right now, extract `car-app-source.zip` from Downloads and use GitHub’s **Add file → Upload files** on the empty repo, then upload the project folders (not `node_modules`).
