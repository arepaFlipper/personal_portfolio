## Initialize the vite React TypeScript project 

`npm init vite@latest .`

### install dependencies

`npm install framer-motion react-anchor-link-smooth-scroll`

### useMediaQuery
This hook will allow us to pass in a query and it'll tell us when it particularly matches,
this particular breakpoint for a screen size.

### Tailwind installation
`npm install tailwindcss -D`

Add the `tailwind.config.js` file and add to index.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

To hot reload the tailwind changes, run:
`npx tailwindcss -i ./src/index.css -o ./public/output.css --watch`

The `useEffect` block:
```
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })
```
we're checking the window which gives us the scroll of `Y`, the 
position of `Y` on the web page and if it's equal to zero we're 
going to set this to be `true` otherwise it's going to be `false`
and then  we need to add that event listener to the window otherwise
this event listener does not happen and we're going to have to pass in 
an empty array so that this `useEffect` runs when the component is loaded.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

`rel="noreferrer"` This attribute is better for security reasons

The `noreferrer` keyword for the rel attribute of the <a>, <area>, and <form> elements instructs the browser, when navigating to the target resource, to omit the "Referer" header and otherwise leak no referrer information — and additionally to behave as if the noopener keyword were also specified.
