import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: { // *new entry for the dedicated blog section
        path: '/blog',
        title: 'blog'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

// Site config
export const SITE = {
    // Your site's detail?
    name: 'Ink',
    title: 'Astro - Ink',
    description: 'Crisp, minimal, personal blog theme for Astro',
    url: 'https://astro-ink.vercel.app',
    githubUrl: 'https://github.com/one-aalam/astro-ink'
    // description ?
}