# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React + Vite web application for displaying a medical AI prompt collection. The site has two main sections:
- **Landing Page** (`/`): Public marketing page with LINE sign-up CTA for healthcare professionals
- **Prompt Collection App** (`/x9dm20zk5p`): Password-protected prompt viewer (password: `demo`)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

### Routing Structure (App.jsx)
- Uses React Router v7 with BrowserRouter
- `/` → LandingPage (public)
- `/x9dm20zk5p` → PromptCollectionApp (password-protected)
- All unknown routes redirect to `/`

### Content Data Pipeline
Content is sourced from an Obsidian markdown file and converted to JS:

1. **Source**: `GenerativeAI_Prompt_Collection_Master.md` (external Obsidian vault)
2. **Converter**: `scripts/convert_md_to_data.py` parses markdown into chapters/sections, copies images from Obsidian attachments to `public/assets/`
3. **Output**: `src/data/content.js` exports `contentData` array

To update content, edit the source markdown and run: `python scripts/convert_md_to_data.py`

### Component Hierarchy
```
PromptCollectionApp
├── AuthScreen (password gate)
├── Layout (sidebar + main content wrapper)
│   ├── Sidebar (chapter navigation)
│   ├── SearchBox
│   └── Footer
├── WelcomeScreen (home state)
└── PromptCard (renders markdown sections with react-markdown + rehype-raw)
```

### State Management
All state is local React state in PromptCollectionApp:
- `isAuthenticated`: boolean for auth gate
- `activeChapterId`: null = welcome screen, string = chapter view
- `searchQuery`: string for full-text search across all sections

### Styling
- `src/styles/main.css`: Base styles and CSS variables
- `src/styles/theme.css`: Color theme variables
- `src/styles/glass.css`: Glassmorphism UI components
- `src/styles/lp.css`: Landing page specific styles

Uses CSS custom properties for theming (e.g., `--primary-color`, `--glass-border`, `--text-secondary`).

## Key Dependencies
- `react-markdown` + `rehype-raw`: Render markdown with HTML support in PromptCard
- `react-router-dom`: Client-side routing
