# Yalla Amigo Restaurant Website

## Overview

A bilingual (English/Italian) restaurant website for Yalla Amigo, a Middle Eastern restaurant in Milan specializing in shawarma and falafel. The site features smooth scroll-based animations, a responsive design, and integration with Glovo for food delivery ordering.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for scroll-based animations and transitions
- **State Management**: TanStack React Query for server state, React Context for language preferences
- **Smooth Scrolling**: react-scroll for navigation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for server bundling, Vite for client bundling

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Current Storage**: In-memory storage (`MemStorage`) as default, with PostgreSQL schema ready for database provisioning
- **Migrations**: Drizzle Kit for database migrations (output to `./migrations`)

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # UI components (Header, Hero, Menu, etc.)
│   │   ├── lib/          # Utilities, context, query client
│   │   └── hooks/        # Custom React hooks
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client and server
│   └── schema.ts     # Drizzle database schema
└── attached_assets/  # Static images and assets
```

### Key Design Decisions

1. **Bilingual Support**: Language context provider with translation dictionaries for EN/IT, stored in `LanguageContext.tsx`

2. **Component-Based Sections**: Single-page application with distinct sections (Hero, Menu, About, Reviews, Order) using smooth scroll navigation

3. **Brand Theming**: Custom CSS variables following brand colors (Red: #D62027, Green: #5BA240) defined in `index.css`

4. **Static Menu Data**: Menu items and reviews are hardcoded in component files rather than fetched from database

5. **Path Aliases**: TypeScript path aliases configured for clean imports (`@/` for client, `@shared/` for shared, `@assets/` for attached assets)

## External Dependencies

### Third-Party Services
- **Glovo**: External food delivery integration (link to Glovo ordering page)
- **Google Fonts**: Playfair Display, Inter, DM Sans, Geist Mono, Architects Daughter, Fira Code

### Database
- **PostgreSQL**: Required for production (DATABASE_URL environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL

### Key NPM Packages
- **UI**: @radix-ui/* primitives, class-variance-authority, tailwind-merge
- **Animation**: framer-motion
- **Data**: @tanstack/react-query, drizzle-orm, zod
- **Carousel**: embla-carousel-react
- **Date Handling**: date-fns