# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A personal portfolio website built with React, TypeScript, and Tailwind CSS. The site showcases projects, blog posts, skills, and contact information using a modern, animated single-page application design.

## Development Commands

### Installation
```bash
yarn install
# or
npm install
```

### Development Server
```bash
yarn dev
# Runs both CSS compilation and React dev server concurrently
```

Alternative individual commands:
```bash
yarn start              # Start React dev server only
yarn watch:style        # Watch and compile CSS only
```

### Build
```bash
yarn build              # Build production bundle (includes CSS compilation)
yarn build:style        # Compile CSS for production only
```

### Testing
```bash
yarn test               # Run tests with react-scripts
```

## Architecture

### Routing

The app uses **react-router-dom v5** for client-side routing:
- `/` - Home page with portfolio overview
- `/project/:id` - Individual project detail pages

Routes are configured in `src/App.tsx` using `BrowserRouter`, `Switch`, and `Route` components.

### Component Structure

This project follows **Atomic Design** principles with a strict component hierarchy:

1. **Atoms** (`src/components/atoms/`) - Basic building blocks
   - Individual UI elements: buttons, text, avatars, containers
   - Examples: `HeaderText`, `FullRoundButton`, `HighlightedText`, `Avatar`

2. **Molecules** (`src/components/molecules/`) - Simple component combinations
   - Composed of multiple atoms
   - Examples: `TextIconButton`, `MenuButton`, `SectionTitle`, `ProjectCard`, `BlogPost`

3. **Organisms** (`src/components/organisms/`) - Complex, self-contained sections
   - Major page sections with distinct functionality
   - Components: `Header`, `About`, `Projects`, `Blogs`, `Skills`, `Contact`, `Navigation`

4. **Templates** (`src/components/templates/`) - Page-level layouts
   - `Landing` - Main template that orchestrates all organisms into the complete page

5. **Pages** (`src/pages/`) - Complete views
   - `Home` - Assembles the Landing template with actual data
   - `ProjectDetails` - Displays detailed information for a single project with images, tech stack, and features

### Additional Component Categories

- **Animations** (`src/components/animations/`) - Framer Motion animation wrappers
  - `Letter`, `Highlighter`, `FromDirection`, `Reveal`, `FadeIn`, `StaggerChildren`
  - Imported as a namespace: `import Animated from 'components/animations'`

- **Decorations** (`src/components/decorations/`) - Visual embellishments
  - `Bullets`, `Stripes`

- **Icons** (`src/components/icons/`) - SVG icon components
  - Social media icons, UI icons
  - Imported as namespace: `import Icons from 'components/icons'`

### Data Management

All content is centralized in `src/data/`:
- `header.ts` - Personal info and profile picture
- `sections.ts` - Section titles and labels
- `about.tsx` - About section content
- `projects.ts` - Project portfolio items with detailed information
  - Each project includes: `id`, `title`, `description`, `longDescription`, `type`, `url`, `live`, `figma`, `techStack`, `features`, `images`, `status`, `year`
- `blogs.ts` - Blog post listings
- `skills.tsx` - Skills list
- `contact.ts` - Contact information and social links
- `index.ts` - Centralized exports

**To modify portfolio content**, edit files in `src/data/` rather than component files.

**Project Images**: The `images` array in project data uses placeholder images. Replace these with actual project screenshots stored in `src/assets/img/` or external URLs.

### Styling System

- **Tailwind CSS** v2.0 with PostCSS
- Custom color palette: indigo, cyan, gray (coolGray), yellow, white, black, blue
- Custom font: Urbanist (primary), Inter var (fallback)
- Source: `src/assets/css/styles.css` → compiled to `src/assets/css/app.css`
- Custom spacing: `full-2` (calc(100% + 0.5rem))
- Extended variants for group-hover, group-focus behaviors
- **Dark mode** enabled with class-based strategy (default: dark mode)

### Dark Mode Implementation

The app supports light/dark theme switching with:
- **ThemeContext** (`src/contexts/ThemeContext.tsx`) - Manages theme state with localStorage persistence
- **ThemeToggle** component in navigation - Animated button with sun/moon icons
- **Default theme**: Dark mode
- **Toggle location**: Header navigation, left of the menu button
- All components use `dark:` Tailwind variants for dark mode styling
- Theme preference is saved to localStorage and persists across sessions

### TypeScript Configuration

- Base URL: `./src` - Import from src root without relative paths
  - Example: `import { Header } from 'components/organisms'` instead of `import { Header } from '../../../components/organisms'`
- Strict mode enabled
- Target: ES5 with ESNext modules

### Animation Library

Uses **Framer Motion** (v2.9.4) for all animations. Animation components in `src/components/animations/` provide reusable motion wrappers.

## Key Development Notes

### Adding New Content

1. **New Project**: Add entry to `src/data/projects.ts` with type `ProjectCardDataProps`
2. **New Blog**: Add entry to `src/data/blogs.ts`
3. **New Skill**: Add entry to `src/data/skills.tsx`
4. **Profile Changes**: Edit `src/data/header.ts` and `src/data/about.tsx`

### Component Development

- Follow Atomic Design hierarchy strictly
- Use TypeScript for all new components
- Define types/interfaces in separate `types.ts` files for complex props
- Leverage base URL imports: `import X from 'components/...'`
- Use Tailwind utility classes; avoid custom CSS
- Wrap animations with components from `src/components/animations/`

### Third-Party Libraries

- **@headlessui/react** - Unstyled, accessible UI components
- **@iconify/react** - Icon library (devicon, logos, tabler sets)
- **framer-motion** - Animation library
- **react-intersection-observer** - Scroll-based triggers
- **body-scroll-lock** - Manage scroll behavior
- **classnames** - Conditional className composition

### Icon Management

Custom SVG icons are in `src/components/icons/index.tsx`. Import as:
```typescript
import Icons from 'components/icons';
// Usage: <Icons.Github />
```

For external icon libraries, use @iconify packages.
