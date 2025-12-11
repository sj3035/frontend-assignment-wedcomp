
# Frontend Assignment – Pixel-Perfect Implementation

This project is a pixel-perfect, component-driven implementation of the provided Frontend Assignment Figma design. It faithfully reproduces the visual layout, typography, spacing, and interactions as required for the evaluation.

The final application is deployed and can be viewed live at:

## Live Demo
**URL:** [https://frontend-assignment-wedcomp.vercel.app/](https://frontend-assignment-wedcomp.vercel.app/)

---

## 1. Setup Instructions

To run this project locally, follow these steps:

### Clone the Repository
```sh
git clone <your-repository-url>
cd <project-folder>
````

### Install Dependencies

```sh
npm install
```

### Run Development Server

```sh
npm run dev
```

The app will typically be accessible at `http://localhost:5173`.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

The app is built using **Vite**, ensuring fast dev reloads and optimized production output.

-----

## 2\. Tech Stack Used

### Core Technologies

  * **React (TypeScript):** Component-based architecture with type safety.
  * **Vite:** Fast bundler and dev environment.
  * **Tailwind CSS:** Utility-first styling for consistent spacing & typography.
  * **React Router:** Navigation support (if needed based on design structure).

### UI & Animation

  * **Framer Motion:** Smooth entrance animations and micro-interactions.
  * **Custom Tailwind Theme Tokens:** Used to accurately implement Figma colors, spacing, and fonts, ensuring design consistency.

### Code Quality

  * **ESLint + Prettier:** Ensures clean, maintainable, and consistent code throughout the project.

-----

## 3\. Key Features Implemented

The following features were meticulously implemented to meet the assignment criteria:

### ✔ Pixel-Perfect Figma Reproduction

The UI matches the Figma design with high accuracy, including:

  * Exact spacing values and vertical rhythm.
  * Precise font weights, line-heights, and scaling.
  * Accurate grid structure and component alignment.
  * Faithful reproduction of shadows, border radii, and brand colors.

### ✔ Modular Component Architecture

The UI is broken into clean, reusable, and self-contained components, such as:

  * `Navbar`
  * `Hero Section`
  * `Content Cards`
  * `Informational Sections`
  * `CTA blocks`
  * `Footer`
    This structure ensures scalability and easy future extension.

### ✔ Smooth Animations & Interactions

  * Subtle fade-ins and slide-ins using **Framer Motion** for an engaging initial load.
  * Clean hover transitions on buttons and interactive elements.
  * Micro-interactions enhancing UX without overwhelming motion.

### ✔ Accessibility Considerations

  * Usage of semantic HTML elements (`<header>`, `<nav>`, `<footer>`, etc.).
  * Keyboard-accessible controls (focus states for buttons/links).
  * Sufficient contrast for text and buttons adhering to WCAG guidelines.
  * Proper `alt` text for images and icons.

### ✔ High-Performance Frontend

  * Vite-optimized build process.
  * Minimal unused CSS due to Tailwind’s JIT (Just-In-Time) engine.

-----

## 4\. Assumptions Made

To scope the project, the following assumptions were made:

  * **Responsiveness:** The assignment required desktop-only implementation; mobile responsiveness was not included unless explicitly detailed in the provided Figma design file.
  * **Interactions:** UI behavior and animations follow the Figma prototype where interactions were visibly defined.
  * **Design Source:** All assets, colors, and typography were taken directly from the Figma file.
  * **Scope:** Only screens present in the Figma were implemented—no added or assumed pages.
  * **Backend:** No backend integration was required for this assignment.

-----

## 5\. Time Spent on the Assignment

| Task | Duration |
| :--- | :--- |
| Analyzing Figma & identifying components | 1 hour |
| Project scaffolding & Tailwind configuration | 0.5 hour |
| Component development & styling | 2 hours |
| Page layout assembly & pixel adjustments | 2 hours |
| Adding animations & interaction states | 0.5 hour |
| Final cleanup, testing & documentation | 0.5 hour |
| **Total Time Spent** | **\~6.5 hours** |

-----
