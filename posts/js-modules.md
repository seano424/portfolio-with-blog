---
title: 'Learning about ES6 Modules and JS Bundlers'
date: '2023-01-10'
tags: ['JS Module Bundlers', 'ES6', 'Webpack']
excerpt: 'Here is some info on ES6 modules, what JS Bundlers are and why we have them, with some examples.'
---

## Why are ES6 modules useful? 
* One of the reasons ES6 modules were introduced to JS was so that it ==**makes it easy to work with multiple imports**== that are dependent on each other. Before ES6 modules, each time we needed to change something, we had to do it x times depending on how many copies we have.
* Also, before ES6 modules, because the system of ==imports and exports could get deeply entangled==, it could be difficult for developers to learn how an app works, or how things are connected.
* Also beforehand, it was a lot more likely to have ==unexpected behaviors.== No separation of concerns.

**TLDR (FreeCodeCamp)**
We need ES6 modules to ==effectively reuse, maintain, separate and encapsulate internal behavior from external behavio==r. It’s not about making the system complex, but having the ability to easily scale and delete stuff without breaking the system.


**Before ES6**

Dependency conflicts could happen because scripts are not loaded in the right order.
The old fashioned way of solving such issue was to load the scripts right before the `</body>` element.

But in the long run, the number of scripts adds up and we may end up with 10+ scripts while trying to maintain version and dependency conflicts.

```html
<!DOCTYPE html>
<head>
</head>
<body>
  
  <!--HTML content goes here-->
  
  <script src="js/jquery.js"></script>
  <script src="js/script2.js"></script>
  <script src="js/script3.js"></script>
  <script src="js/script4.js"></script>
</body>
</html>
```
``
In general, loading scripts as shown above ==is not a good idea in terms of performance, dependencies and maintainability.==

We don’t want the `index.html` file to have the responsibility of loading all the scripts — we need some sort of structure and separation of logic.

==**The solution is to utilize ES6’s syntax, `import` and `export` statements, an elegant and maintainable approach that allows us to keep things separated, and only available when we need it.**==


To simplify the example as shown above, we can wrap all scripts one file.
```js
import { jquery } from './js/jquery.js';
import { script2 } from './js/script2.js';
import { script3 } from './js/script3.js';
import { script4 } from './js/script4.js';
```

And then just load `app.js` script in our `index.html`. But first, in order to make it work, we need to use `type="module"` ([source](https://caniuse.com/#search=modules)) so that we can use the `import` and `export` for working with modules.

```html
<!DOCTYPE html>
<head>
</head>
<body>
  
  <!--HTML content goes here-->
  
  <script type="module" src="js/app.js"></script>
</body>
</html>
```



# How ES6 Modules Work

What is the difference between a module and a component? 
* ==A module is a collection of small independent units (components) that we can reuse in our application.==

What's the purpose
-   ==Encapsulate behaviour==
-   ==Easy to work with==
-   ==Easy to maintain==
-   ==Easy to scale==
What is a dynamic interface?
* It allows us to create a collection of the components we need, and easily acces one or more at a time.
* So if we have a module with twenty components, we don’t want to `import` each component one line after the other.

## **The takeaways:**
-   With ES6 modules we can easily reuse, maintain, separate and encapsulate components from being changed by external behavior
-   A module is a collection of components
-   A component is an individual block
-   Don’t try to make every everything reusable as it requires time and resources, and most often we don’t reuse it
-   Create an architectural diagram before diving into the code
-   In order to make components available in other files, we must first `export` and then `import`
-   By using `index.js` (same concept for TypeScript `index.ts`) we can create dynamic interfaces (barrels) to quickly access the things we need with less code and fewer hierarchical paths
-   You can `export` a new instance at runtime by using `export let objectName = new ClassName()`

## JS Module Bundlers
* The JavaScript world has changed a lot in the last few years. Gone are the days of manually including jQuery, Bootstrap, and React on every page of your site. ==Nowadays, it's all about bundling everything up into one [static file](https://snipcart.com/blog/choose-best-static-site-generator) that you can load with just a single line of code==.
* Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

What is a JS Module Bundler?
* A bundler is a development tool that combines many JS code files into a ==single one that is prod-ready loadable in the browser==.
* A fantastic feature of a bundler is that ==it generates a dependency graph as it traverses your first code files==.
* 

Why is a dependency graph useful?
* For one, it keep tracks of both your source files' dependencies and third-party dependencies 
* And, especially important, it guarantees that all source code files are kept up to date and error-free

Was life complicated before bundlers
* Yes
* Keeping all files and dependencies up to date and ready was a crazy difficult task before this


## **Webpack**
Currently, the most popular JS module bundler.
**How does it work?**
* Assembles a dependency graph
* There are now 6 Core Concepts to understand:
1. **Entry**: Specifies where Webpack should initiate its dependency graph
2. **Output**: specifies the desired destination for the final output after webpack completes the packing process (In Next.js this is inside the folder: `.next/static/chunks/pages`) (In the Craft Starter, we are using we are using ESBuild, but it also outputs a file and that is located at `'web/bundle/main.bundle.js'`)
3. **Loaders**: allow Webpack to transform and bundle non-JS files
4. **Plugins**- allow Webpack to perform more advanced actions like custom resource optimization and management
5. **Mode** - allows Webpack to configure its operations to production or dev mode dynamically
6. **Browser Compatibility**:  allow Webpack to build bundles that support modern and old browsers with features like promises and polyfills.

**Alternatives**:
* **Vite.js** (Pro: Lean and fast bc it leverages the native ES6 module system)(Con: because it heavily relies on the browser's native ESM system to produce the mindblowing speed it's known for, it might have issues when dealing with older browsers that don't support these upgrades)
* **Rollup** (Pro: Rich asset management features and the Tree-shaking feature that helps developers get rid of unnecessary variables or functions)(Con: Lack of plugins and developer ecosystem)
* **Parcel**: `Plug and play` (Pro: zero config and fast)(Con: lack of advanced customizations)
* **Bun**: a JS & CSS bundler, a JS transpiler, a JS runtime environment, task runner and much more. (Pro: it is fast bc it is written in Zig, a low-level language) (Con: Bun does not yet minify your code)
	* More on Bun:
	* Bun’s built-in bundler replaces the need for Webpack or esbuild, and supports a variety of file-types including Javascript, Typescript, `tsx`, `jsx`, `css`, and `svg`. Bun also includes a built-in web server for use in local development, which eliminates the need for a plugin like webpack-dev-server. Additionally, common web APIs like `fetch` and WebSockets are included in its standard library. Bun also implements the Node module resolution algorithm, which makes migrating applications from Node easier when compared to another alternative runtime like Deno.

More information on JS Module Bundlers:
https://snipcart.com/blog/javascript-module-bundler
