import { writable } from 'svelte/store';

export const isMobileOpen = writable(false);
export const isTogglePath = writable('');