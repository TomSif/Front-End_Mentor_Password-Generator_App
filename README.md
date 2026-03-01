# Frontend Mentor - Password Generator App

<div align="center">

![Design preview for the Password generator app coding challenge](/preview.jpg)

**[Live Demo](https://front-end-mentor-password-generator-ec4kzpda9-tom-sifs-projects.vercel.app/) · [Repository](https://github.com/TomSif/Front-End_Mentor_Password-Generator_App/tree/main)**

</div>

---

## Overview

### The Challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the clipboard
- See a strength rating for their generated password
- View the optimal layout depending on their device's screen size
- See hover and focus states for all interactive elements

### Screenshot

![(/images/screenshot.png)]

---

## My Process

### Built With

- Semantic HTML5
- [React 19](https://react.dev/) — component architecture, `useState`, props drilling
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling, design tokens via `@theme`
- CSS custom properties — dynamic range slider gradient
- Clipboard API — `navigator.clipboard.writeText()`
- Mobile-first responsive layout

### Architecture Decisions

State is centralized in `App` as a single `options` object and passed down via props. Password generation is isolated in a pure utility function (`utils/generatePassword.js`). The strength score is a derived value computed directly in `StrengthContainer` — no extra state.

Error handling uses a guard clause pattern in the generate handler: a derived `hasError` boolean (no `useState`) drives contextual error messages depending on whether the length or the character type is missing.

### What I Learned

The most concrete things I consolidated on this project:

- Lifting state to the right parent — identifying the lowest common ancestor rather than the nearest one
- The difference between a derived value (`const`) and state (`useState`) — and when each is appropriate
- Passing a CSS custom property via React's `style` prop to drive a dynamic `linear-gradient` on a range input
- The `async/await` pattern on `navigator.clipboard.writeText()`, including the case where you don't need to store the returned value
- Separating pure logic into a `utils/` file as a deliberate architectural choice

### Continued Development

- TypeScript — typing props and utility functions
- More rigorous accessibility (keyboard navigation, ARIA live regions for dynamic content)
- Testing — unit tests for pure utility functions as a first step

### AI Collaboration

This project was built with [Claude](https://claude.ai) as a mentor, using a custom `AGENTS.md` instruction file. The approach was guided practice rather than code generation: I wrote all the code myself, with Claude providing targeted hints, identifying gaps in my understanding, and tracking progress across sessions in a `progression.md` file.

What worked well: the structured session format, honest diagnosis of what I thought I knew vs. what I actually knew, and the parallel example technique (neutral variable names) for unblocking without giving away the solution.

---

## Author

- Portfolio — [thomas-sifferle.com](https://thomas-sifferle.com)
- Frontend Mentor — [@TomSif](https://www.frontendmentor.io/profile/TomSif)
- GitHub — [@TomSif](https://github.com/TomSif)
