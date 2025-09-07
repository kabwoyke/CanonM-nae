# Overview

Canon Mînae Botanical Park is a full-stack web application showcasing a nature adventure park in Thigio, Kenya. The application serves as a comprehensive marketing and booking platform featuring beautiful botanical gardens, camping facilities, hiking trails, dining options, and corporate team-building services. Built with React on the frontend and Express.js on the backend, it provides an immersive experience for visitors to explore park offerings and submit contact inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application uses React with TypeScript in a single-page application (SPA) architecture. The UI is built with shadcn/ui components providing a modern, accessible design system with Radix UI primitives. TailwindCSS handles styling with a nature-themed color palette emphasizing greens and earth tones. The application uses Wouter for lightweight client-side routing and TanStack Query for server state management and API communication.

The component structure follows a modular approach with reusable UI components and dedicated page sections for different park features (hero, services, gallery, dining, team building, testimonials, contact). Form handling utilizes React Hook Form with Zod schema validation for type safety and user input validation.

## Backend Architecture
The server implements a RESTful API architecture using Express.js with TypeScript. The application follows a layered architecture pattern with clear separation between routes, storage, and business logic. The storage layer uses an interface-based design (IStorage) with an in-memory implementation (MemStorage) for development, designed to be easily replaceable with a database implementation.

The API provides endpoints for contact inquiry submission and retrieval, with proper error handling and validation using Zod schemas. Request logging middleware tracks API performance and responses for monitoring purposes.

## Build System and Development
Vite serves as the build tool and development server, providing fast hot module replacement and optimized production builds. The project uses ESBuild for server bundling, ensuring fast compilation times. TypeScript configuration spans both client and server code with shared type definitions in a common directory.

The development setup includes automatic server restarts with tsx and integrated error overlays. Production builds generate optimized static assets served by the Express server.

## Data Storage and Schema Management
The application uses Drizzle ORM for database schema definition and type generation, configured for PostgreSQL dialect. Database schemas are defined in TypeScript with automatic type inference and Zod integration for runtime validation. The schema includes users and contact inquiries tables with proper constraints and default values.

Migration management is handled through Drizzle Kit, providing version control for database schema changes. The current storage implementation uses in-memory data structures but is designed to easily transition to PostgreSQL using the existing schema definitions.

## Session and State Management
Client-side state management relies on TanStack Query for server state caching and synchronization. The query client configuration includes appropriate cache policies and error handling strategies. Form state is managed locally with React Hook Form, while UI state uses React's built-in state management.

The application includes toast notifications for user feedback and implements proper loading states throughout the user interface. No authentication system is currently implemented, but the database schema includes a users table for future expansion.

# External Dependencies

## UI and Styling
- **Radix UI**: Provides accessible, headless UI components for dialogs, forms, navigation, and interactive elements
- **TailwindCSS**: Utility-first CSS framework for responsive design and consistent styling
- **shadcn/ui**: Pre-built component library combining Radix UI with TailwindCSS for rapid development
- **Lucide React**: Icon library providing consistent iconography throughout the application

## State Management and Data Fetching
- **TanStack Query**: Server state management with caching, background updates, and error handling
- **React Hook Form**: Form state management with validation and optimized re-renders
- **Zod**: Runtime type validation and schema definition for forms and API data

## Development and Build Tools
- **Vite**: Fast build tool and development server with hot module replacement
- **TypeScript**: Static type checking across client and server code
- **ESBuild**: Fast JavaScript bundler for production server builds

## Database and ORM
- **Drizzle ORM**: Type-safe SQL query builder and schema management
- **Drizzle Kit**: Database migration and schema management tools
- **@neondatabase/serverless**: PostgreSQL database adapter designed for serverless environments

## Routing and Navigation
- **Wouter**: Lightweight client-side routing library for single-page application navigation

## Development Utilities
- **tsx**: TypeScript execution for development server
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not actively used)
- **class-variance-authority**: Utility for managing conditional CSS classes in components

The application is designed to be deployed on platforms supporting Node.js with PostgreSQL database connectivity, with specific optimizations for Replit hosting environment.