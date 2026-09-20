

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7fbc3292.js","_app/immutable/chunks/scheduler.92fb626a.js","_app/immutable/chunks/index.337b77e0.js","_app/immutable/chunks/singletons.523654eb.js"];
export const stylesheets = [];
export const fonts = [];
