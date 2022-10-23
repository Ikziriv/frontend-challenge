import { writable } from 'svelte/store';

export const isMobileOpen = writable(false);
export const isTogglePath = writable('');

// Navigation Route
export const pages = [
    { name: 'Home', path: '/' },
    { name: 'New', path: '/' },
    { name: 'Popular', path: '/' },
    { name: 'Trending', path: '/' },
    { name: 'Categories', path: '/' },
];