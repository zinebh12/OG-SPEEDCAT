# OG-SPEEDCAT

A modern front-end project built with **React 19**, **TypeScript**, and **Vite**, styled with **Tailwind CSS** and animated using **Framer Motion**.

> **Note:** This README is based on the project's configuration files (`package.json`, `index.html`, etc.). Feel free to update the description section below with more specific details about what the app does.

## ✨ Tech Stack

- **[React 19](https://react.dev/)** – UI library
- **[TypeScript](https://www.typescriptlang.org/)** – Static typing
- **[Vite](https://vitejs.dev/)** – Build tool & dev server
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first styling
- **[Motion](https://motion.dev/)** (Framer Motion) – Animations
- **[Font Awesome](https://fontawesome.com/)** – Icons
- **ESLint** – Linting with TypeScript-aware rules

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes bundled with Node.js)

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/zinebh12/OG-SPEEDCAT.git
cd OG-SPEEDCAT
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

## 🛠️ Available Scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Starts the local development server       |
| `npm run build`    | Type-checks and builds the app for production |
| `npm run preview`  | Serves the production build locally       |
| `npm run lint`     | Runs ESLint across the project            |

## 📁 Project Structure

```
OG-SPEEDCAT/
├── public/          # Static assets
├── src/             # Application source code
├── index.html       # HTML entry point
├── package.json     # Dependencies & scripts
├── tsconfig.json     # TypeScript configuration
├── vite.config.ts    # Vite configuration
└── eslint.config.js  # ESLint configuration
```

## 🧩 Building for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder, ready to be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

## 📄 License

This project is licensed under the [MIT License](LICENSE).
