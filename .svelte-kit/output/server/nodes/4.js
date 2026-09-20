

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cycling-map/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.af78d694.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.92fb626a.js","_app/immutable/chunks/index.337b77e0.js"];
export const stylesheets = ["_app/immutable/assets/3.80f28890.css","_app/immutable/assets/annotorious.e10838d7.css"];
export const fonts = [];
