# Next.js Monorepo Project

A modern monorepo setup using Turborepo, Next.js 16, and shadcn/ui components for building scalable web applications.

## 🚀 Features

- **Monorepo Architecture**: Managed with Turborepo for efficient builds and caching
- **Next.js 16**: Latest version with App Router and Turbopack
- **React 19**: Cutting-edge React features
- **Tailwind CSS v4**: Utility-first CSS framework
- **shadcn/ui**: Beautiful, accessible UI components
- **TypeScript**: Full type safety across the codebase
- **ESLint**: Code linting and formatting

## 📁 Project Structure

```
nextjs-project/
├── apps/
│   ├── main/              # Main application (port 3000)
│   └── nextjs-router/     # Router-focused app (port 3001)
├── packages/              # Shared packages (currently empty)
├── package.json           # Root dependencies and scripts
├── turbo.json            # Turborepo configuration
└── README.md             # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nextjs-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start all applications in development mode:
```bash
npm run dev
```

This will start:
- Main app at http://localhost:3000
- Next.js Router app at http://localhost:3001

### Individual Apps

Run a specific app:
```bash
# Main app only
cd apps/main && npm run dev

# Router app only
cd apps/nextjs-router && npm run dev
```

### Build

Build all apps:
```bash
npm run build
```

Build a specific app:
```bash
cd apps/<app-name> && npm run build
```

## 📦 Scripts

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps
- `npm run kill-ports` - Kill processes on ports 3000 and 3001
- `npm run dev-clean` - Kill ports and start dev servers

## 🎨 UI Components

Each app has its own shadcn/ui setup with local components:

- Button
- Card (with data-slot attributes)
- Utilities (cn function for class merging)

Components are located in `apps/<app-name>/ui/components/ui/`

## 🔧 Configuration

- **Tailwind CSS**: Configured in each app with custom theme variables
- **TypeScript**: Path aliases set up (`@/ui/*` points to local UI folder)
- **ESLint**: Next.js recommended rules

## 🚀 Deployment

Each app can be deployed independently or together. Use the build scripts and deploy the `.next` output.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📄 License

This project is private and not licensed for public use.