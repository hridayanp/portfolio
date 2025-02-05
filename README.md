# React + TypeScript + Vite Template

This template provides a minimal setup to get **React** working in **Vite** with **Hot Module Replacement (HMR)** and some basic ESLint rules. It's a great starting point for building modern React applications with TypeScript and Vite.

---

## Official Plugins

There are two official plugins available for React in Vite:

1. **@vitejs/plugin-react**: Uses Babel for Fast Refresh.
2. **@vitejs/plugin-react-swc**: Uses SWC for Fast Refresh.

You can choose either based on your preference or performance needs.

---

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules. Here's how you can do it:

### Configure the Parser Options

In your ESLint config, modify the `parserOptions` property to enable type checking across your application and node environments.

```ts
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
