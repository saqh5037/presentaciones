# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Interactive React presentation system with authentication, animated slides, export capabilities (PDF/Word), and token-based sharing. Features multiple business presentations with smooth transitions and professional layouts.

## Commands
- `npm run dev` - Start development server on port 4321 with network access
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint with React hooks and refresh plugin rules
- `npm run token-server` - Start Express server for token management on port 4322
- `npm run user-server` - Start user API server with Prisma on port 4323
- `npx prisma migrate dev` - Run database migrations
- `npx prisma studio` - Open Prisma Studio for database management
- `npm run db:seed` - Seed database with initial data
- `npm run db:studio` - Alternative command for Prisma Studio

## Architecture

### Tech Stack
- **Frontend**: React 19.1.1, React Router DOM v7, Framer Motion 12.23
- **Backend**: Express 4.18, Prisma ORM 6.14 with SQLite
- **Export**: jspdf 3.0, html2canvas 1.4, docx 9.5, file-saver 2.0
- **Build**: Vite 7.1.2 with React plugin
- **Icons**: Lucide React 0.539

### Core Systems

#### Authentication & Authorization
- Login system with bcrypt password hashing
- Role-based access (admin/viewer)
- Per-presentation access control via allowedPresentations field
- Protected routes with AuthContext provider
- Session management with lastLogin tracking

#### Presentation Engine
- Slide-based navigation with keyboard controls (arrows, ESC)
- Framer Motion animations with per-slide configs
- Multiple presentation formats:
  - Standard viewer at `/presentation/{name}`
  - Export view at `/presentation/{name}/export`
  - Print view at `/presentation/{name}/print`
- Current presentations in `/src/presentations/`:
  - **labsis-expert**: AI lab solution (15 slides with 3a/3b/3c variants)
  - **musi-kickoff**: FIFCO retail project (10 slides)
  - **musi-kickoffV2**: Enhanced version with updated features
  - **dynamtek**: Command center dashboard (11 slides)
  - **etiquetas-bernardo**: School labels (58 printable items)
  - **claude-code-wbi**: Claude Code WBI presentation
  - **claude-code-wbi-equipo**: Team version of Claude Code WBI

#### Token Sharing System
- 30-day expiration tokens (12-character alphanumeric)
- Dual storage: persistent file + session fallback
- Public access via `/share/{token}` route
- Token server on port 4322 saves to `/public/sharedTokens.json`
- Async validation with automatic expiration checking

#### Export Capabilities
Three export modes implemented:
1. **Word Documents**: Full formatted document via docx library
2. **PDF Presentation**: Visual slide capture using html2canvas
3. **PDF Document**: Text-based PDF generation with jsPDF

### Server Configuration

#### Development Server (Vite)
- Port: 4321 (strict enforcement)
- Host: 0.0.0.0 (all network interfaces)
- Proxy: `/api` routes to localhost:4323
- Allowed hosts: localhost, *.trycloudflare.com, *.loca.lt
- HMR enabled for rapid development

#### API Servers
- **Token Server** (port 4322): Manages presentation sharing tokens
- **User API** (port 4323): Full user CRUD with Prisma ORM

### Data Management
- **presentations.js**: Central registry with metadata, categories, tags
- **Categories**: Personal, Dynantek, WBI with color coding
- **Database**: SQLite with Prisma schema (User, Session models)
- **User Fields**: username, password, email, name, role, allowedPresentations (JSON)

### Component Structure
```
/src
  /components       # ProtectedRoute and shared components
  /contexts        # AuthContext for authentication state
  /data            # presentations.js registry
  /pages           # Dashboard, Login, AdminPanel, SharedPresentation
  /presentations   # Individual presentation folders with slides
  /services        # API communication utilities
  /utils           # shareUtils.js for token generation
```

### ESLint Configuration
- React hooks and refresh plugins enabled
- Unused vars allowed if uppercase or underscore-prefixed
- ECMAScript 2020 with JSX support
- Global ignore: dist directory