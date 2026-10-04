# ✦ The Muse Society

> **"Great work. Good company."**  
> A bespoke platform and sanctuary for independent creators, writers, visual artists, and curious minds to build their own clubs, gather their people, and sustain their craft.

---

## 📖 Overview

**The Muse Society** is an editorial-style, high-aesthetic web application designed for creative patronage. Rather than chasing algorithms and fleeting social media engagement, creators can establish an intimate digital parlor for their work, offer memberships, publish journals, and receive patronage directly from their audience.

### Highlights
- 🏛️ **Bespoke Editorial Aesthetics**: Thoughtfully designed with Cormorant Garamond and Inter typography, rich cream and botanical green palettes, and timeless seal emblems.
- 💫 **Interactive UI & Motion**: Smooth micro-interactions, parallax imagery, reveal animations, interactive FAQs, and responsive club showcases.
- ⚡ **Modern Stack**: Built with React 19, TypeScript, Vite 8, and Tailwind CSS v4.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) & Custom CSS |
| **Formatting** | [oxfmt](https://github.com/oxc-project/oxc) |

---

## 📁 Project Structure

```text
TheMuseSociety/
├── public/                 # Static assets, SVG glyphs, and images
│   ├── assets/             # Creative portraits, artwork & SVG seals
│   └── fonts/              # Font assets
├── src/
│   ├── App.tsx             # Main application layout and sections
│   ├── index.css           # Global typography, tokens, animations, and Tailwind v4 setup
│   ├── main.tsx            # React application entrypoint
│   └── vite-env.d.ts       # Vite TypeScript declarations
├── index.html              # HTML document shell
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration with Tailwind CSS & site metadata plugins
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.11+` (recommended: `v22` or `v24`)
- **Package Manager**: `npm` (or `pnpm` / `yarn` / `bun`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/QuamarAbrar/TheMuseSociety.git
   cd TheMuseSociety
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:8443` (or the port indicated in the terminal).

---

## 📜 Available Scripts

- **`npm run dev`**: Launches Vite dev server with hot module replacement (HMR).
- **`npm run build`**: Compiles TypeScript and creates an optimized production bundle in `dist/`.
- **`npm run preview`**: Serves the production build locally for verification.
- **`npm run format`**: Runs `oxfmt` on source and configuration files.

---

## 🎨 Design Philosophy

- **Art is Better in Company**: Designed to make independent creators feel respected and empowered.
- **A Room of Your Own**: Prioritizes voice, personality, and aesthetic integrity over homogenized feeds.
- **Patrons, Not Passers-by**: Rituals, conversations, and meaningful patronage over disposable metrics.

---

## 📄 License

Private / All rights reserved.
