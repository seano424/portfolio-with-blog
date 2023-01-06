---
title: 'How to add the Prettier Tailwind CSS Plugin with Next.js'
date: '2023-01-06'
tags: ['TailwindCSS', 'Next.js', 'Prettier']
excerpt: 'Adding the prettier plugin for Tailwind CSS seems simple enough. However, there are a couple of things you will need to do with Next.js to get it working properly.'
---

![alt text](https://images.unsplash.com/photo-1672696049977-5ef343a91556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60)

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
