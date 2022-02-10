---
title: Introducing Astro - Ship Less JavaScript
date: 2021-06-08
author: Fred K. Schott
authorTwitter: FredKSchott
category: design
tags:
- astro
- JAMStack
description: There's a simple secret to building a faster website — just ship less.
layout: ../../layouts/post.astro
---

Unfortunately, modern web development has been trending in the opposite direction—towards more. More JavaScript, more features, more moving parts, and ultimately more complexity needed to keep it all running smoothly.

Today I'm excited to publicly share Astro: a new kind of static site builder that delivers lightning-fast performance with a modern developer experience. To design Astro, we borrowed the best parts of our favorite tools and then added a few innovations of our own, including:

- Bring Your Own Framework (BYOF): Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.
- 100% Static HTML, No JS: Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.
- On-Demand Components: Need some JS? Astro can automatically hydrate interactive components when they become visible on the page. If the user never sees it, they never load it.
- Fully-Featured: Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any of your favorite npm packages.
- SEO Enabled: Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication.

## Bring Your Own Framework

### Build your site using React, Svelte, Vue

> Need some JS? Astro can automatically hydrate interactive components...

[SEO Enabled](/some/relative/page/link)

This post marks the first public beta release of Astro. Missing features and bugs are still to be expected at this early stage. There are still some months to go before an official 1.0 release, but there are already several fast sites built with Astro in production today. We would love your early feedback as we move towards a v1.0 release later this year.

> To learn more about Astro and start building your first site, check out the project README.