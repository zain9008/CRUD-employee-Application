# React & Tailwind CSS Minimal Starter Pack

A clean, minimal starter pack for creating React projects with Tailwind CSS configured. This project features a streamlined setup with only essential dependencies to get you started quickly.

## Features

- **React 18** - Latest stable version of React
- **Tailwind CSS 3** - Utility-first CSS framework for rapid UI development
- **Minimal Dependencies** - Only what you need to get started
- **Responsive Design** - Mobile-first approach

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
   git clone https://github.com/your-username/react-tailwind-css-starter-pack.git
   cd react-tailwind-css-starter-pack
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

Common packages you might want to add:
- **React Router**: `npm install react-router-dom`
- **Form handling**: `npm install react-hook-form`
- **API calls**: `npm install axios`
- **State management**: `npm install zustand` or `npm install @reduxjs/toolkit react-redux`

## Working with Tailwind CSS

### Creating Reusable Components

Create your reusable Tailwind components in the `src/components` directory. For example:

```jsx
// src/components/Button.jsx
export const Button = ({ children, variant = "primary" }) => {
  const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};
```

### Custom Tailwind Extensions

Add custom utilities, components, or theme extensions in your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#3B82F6',
      },
      spacing: {
        '128': '32rem',
      }
    }
  },
  plugins: [
    // Add custom plugins here
  ],
}
```

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.