# React & Tailwind CSS Minimal Starter Pack

A clean, minimal starter pack for creating React projects with Tailwind CSS configured. This project features a streamlined setup with only essential dependencies to get you started quickly. Updated on May 24, 2025.

## Features

- **React 18** - Latest stable version of React
- **Tailwind CSS 3** - Utility-first CSS framework for rapid UI development
- **Minimal Dependencies** - Only what you need to get started
- **Responsive Design** - Mobile-first approach
- **Pre-built Components** - Ready-to-use UI components with Tailwind CSS
- **Live README Display** - See documentation directly in your app

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── styles/          # Custom styles and Tailwind extensions
│   ├── App.jsx          # Main application component
│   ├── App.css          # App-specific styles
│   ├── index.js         # Entry point
│   └── index.css        # Global styles and Tailwind imports
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Usage

Follow these steps to get started:

1. Clone the repository

   ```sh
   git clone https://github.com/zohiaby/react-tailwind-css-starter.git
   cd react-tailwind-css-starter
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Packages

To add new dependencies to your project:

```sh
# For runtime dependencies
npm install package-name

# For development dependencies
npm install package-name --save-dev
```

### Recommended Packages

These packages work well with this starter and are easy to integrate:

- **Routing**:
  - React Router: `npm install react-router-dom`
- **Form Management**:
  - React Hook Form: `npm install react-hook-form`
  - Formik: `npm install formik yup`
- **API & Data Fetching**:
  - Axios: `npm install axios`
  - SWR: `npm install swr`
  - React Query: `npm install @tanstack/react-query`
- **State Management**:
  - Zustand (lightweight): `npm install zustand`
  - Redux Toolkit: `npm install @reduxjs/toolkit react-redux`
- **UI Enhancements**:
  - Headless UI: `npm install @headlessui/react`
  - Framer Motion: `npm install framer-motion`

## Working with Tailwind CSS

### Project Structure for Tailwind Components

This project follows a specific structure for organizing Tailwind CSS components:

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx    # Button variations
│   ├── Card.jsx      # Card component
│   └── ...           # Other UI components
├── styles/           # Custom styles
│   └── tailwind.css  # Custom Tailwind utilities
```

### Creating Reusable Components

Create your reusable Tailwind components in the `src/components` directory. We've included examples like Button and Card to help you get started.

#### Component Organization Pattern

The recommended pattern for creating components with multiple variants:

```jsx
// Example pattern for components with variants
const Component = ({
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  // Base classes that apply to all variants
  const baseClasses = "...";

  // Different style variations
  const variants = {
    default: "...",
    primary: "...",
    secondary: "...",
  };

  // Different size variations
  const sizes = {
    sm: "...",
    md: "...",
    lg: "...",
  };

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Component content */}
    </div>
  );
};
```

### Custom Tailwind Extensions

Extend Tailwind's functionality in the `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    extend: {
      // Custom colors
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },

      // Custom spacing
      spacing: {
        128: "32rem",
      },

      // Custom font family
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      // Custom animation
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [
    // Add custom plugins here if needed
  ],
};
```

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.
