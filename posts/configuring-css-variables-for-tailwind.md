---
title: 'Configuring CSS Global Variables with Tailwind'
date: '2023-01-12'
tags: ['CSS Variables', 'Jotai', 'Tailwind', 'Framer Motion']
excerpt: "I was really wanting to use Framer Motion to animate colors. However there was a caveat - I needed Global CSS Variables available to me and I am using Tailwind CSS. Here's my guided solution to that problem..."
---

I really wanted to use Framer Motion to do some easy color transitions on my site, but in order to change colors I need access to global variables. Luckily, there is a way to turn Tailwind's colors into global variables, or to even turn your own system color design into variables!

Let's dive in!

This is going to be a very simple process and we don't need any packages for this.
In the Tailwind config file, we are going to import Tailwind's flattenColorPalette function like so:

```js
const { default: flattenColorPalette, } = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
	...
}
```

Next we are going to use this function/ plugin to add each TW color as a global CSS variable:

```js
module.exports = {
  ...everything_else,

  theme: {
    extend: {
      colors: {
        'primary-black': '#0c0b1d',
      },
    },
  },

  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))

  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
```

And just like that we now have global CSS Variables available to us!!

Extra: In another article I was showing how to use Jotai as my state manager to change the theme of the site.

Here, I am going to show how to extend that to use Framer Motion to change the colors when I change the theme.

First, install framer-motion package and then import it into the Layout file:

```tsx
import { motion } from 'framer-motion'
```

Next, we can wrap our div that we want to change the color for in a motion.div like so:

```tsx
<motion.div>{children}</motion.div>
```

When I change the theme, I am going to animate the motion.div's colors

```tsx
const [theme, setTheme] = useAtom(themeAtom)

return (
	<motion.div
		animate={{ backgroundColor: theme === 'dark' ? 'var(--primary-black)' :
		'#fff' }}
	>
		<button
			className="button my-4 w-max"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			toggle theme
		</button>
	</motion.div>
)
```

So, when I click that toggle theme button, I am not able to set the backgroundColor for the whole page! And, to give myself more control on the animation of that I want to use Framer Motion.

This line:

```tsx
animate={{ backgroundColor: theme === 'dark' ? 'var(--primary-black)' : '#fff' }}
```

It allows us to change the color based on the state, and so easily! The only thing is that we couldn't have replaced `var(--primary-black)` with `bg-black`. That wouldn't have worked - we need to have access to Global CSS Variables to make that change. And that is why we added that plugin / function to our Tailwind Config file earlier!
