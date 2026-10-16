# Web Development Coursework and Practice

A collection of HTML, CSS, JavaScript, React, and Express exercises for web-development practice.

## Repository contents

- Root HTML files: introductory pages, attributes, images, tables, forms, assignments, and a seat-selection example.
- `css/`: box-model, flexbox, card, opacity, and basic styling exercises.
- `js/`: arrays, functions, objects, classes, assignments, and ES6 examples including promises and async/await.
- `bookapp/`: React + Vite book-catalog demo with navigation, login, and registration routes.
- `frontend/sanskar/src/components/`: additional React component exercises.
- `server.js`: a small Express server demonstrating routes.

## Open the static exercises

Clone the repository and open an HTML file directly in a browser:

```bash
git clone https://github.com/Sanskar1314/AbesCSEDS-B-Sanskar-.git
cd AbesCSEDS-B-Sanskar-
```

For example, open `assignment1.html`, `form.html`, or `css/flexbox.html`. These exercises can be viewed independently.

## Run the React book app

Use Node.js compatible with the Vite version declared in `bookapp/package.json` and npm.

```bash
cd bookapp
npm install
npm run dev
```

Visit the local address printed by Vite. The home page displays three sample books; `/login` and `/register` show their corresponding components.

Other available commands, run inside `bookapp/`:

```bash
npm run build
npm run preview
npm run lint
```

## Run the Express example

From the repository root, in a separate terminal:

```bash
npm install
node server.js
```

Open [localhost:8080](http://localhost:8080). The server implements `/` and `/contact`. The `/about` handler currently creates an array but does not send a response, so that route is unfinished. There is no root `npm start` script; use `node server.js`.

These are separate coursework examples, with no shared production deployment or automated test suite configured at the repository root.
