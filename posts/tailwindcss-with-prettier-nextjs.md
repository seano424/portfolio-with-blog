---
title: 'How to configure Tailwind CSS with Next.js!'
date: '2023-01-10'
tags: ['TailwindCSS', 'Next.js', 'Prettier', 'Config']
excerpt: 'I like to setup all of my Next.js projects with TailwindCSS. Here is my basic configuration for each one of the projects I create.'
---
First download Next.js
```bash
npx create-next-app@latest my-project --typescript --eslint
```

Install Tailwind CSS 
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Setup the tailwind.config.js file:
```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your globals.css file

```css
// globals.css
@tailwind base; 
@tailwind components; 
@tailwind utilities;
```

Extra: Add Post CSS Import 
If you are writing a lot of CSS and organizing it into multiple files you will want to to do this.
`npm install -D postcss-import

[More information here](https://tailwindcss.com/docs/adding-custom-styles#using-multiple-css-files)

In the postcss.config.js file add the following:
```js
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Add plugin, `tailwindcss-debug-screens` for easier dev experience
In the tailwind config file, here is an example of adding this:
```js
debugScreens: {
	position: ['bottom', 'right'],
	style: {
		backgroundColor: '#262626e6',
		borderRadius: '4px',
		boxShadow: 'none',
		color: 'white',
		padding: '8px',
		margin: '18px 16px',
		opacity: '100%',
	},
},
```

![[Pasted image 20230110110449.png]]

You'll notice I also like to customize the container by adding horizontal padding and centering the content. [The typography plugin is useful for markdown files. ](https://tailwindcss.com/docs/typography-plugin)

## **Adding Prettier to Next.js**

```bash
npm install --save-dev eslint-config-prettier
```

Then, add `prettier` to your existing ESLint config:
```json
{
  "extends": ["next", "prettier"]
}
```

Now, add a prettier config file to the root, `prettier.config.js`:
```js
module.exports = {

	semi: false,
	
	singleQuote: true,
	
	tabWidth: 2,
	
	trailingComma: 'es5',
	
	useTabs: false,
	
	htmlWhitespaceSensitivity: 'ignore',
	
	tailwindConfig: './tailwind.config.js',
}
```

Adding Tailwind CSS Prettier:
````sh
npm install -D prettier prettier-plugin-tailwindcss
````

Add Plugin to prettier config file:
```js
module.exports = {

	...everythingElse,
	
	plugins: [require('prettier-plugin-tailwindcss')],
}
```

That is it for my standard Tailwind CSS + Next.js configuration!
