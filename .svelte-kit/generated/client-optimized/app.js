export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/bus-and-tram": [3],
		"/cycling-map": [4],
		"/geographia-1913": [5],
		"/geographia-1923": [6],
		"/manchester-1926": [7]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';