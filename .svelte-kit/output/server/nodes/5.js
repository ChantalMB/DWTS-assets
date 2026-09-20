

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game-timeline/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.eb678dd6.js","_app/immutable/chunks/scheduler.92fb626a.js","_app/immutable/chunks/index.337b77e0.js"];
export const stylesheets = ["_app/immutable/assets/5.9da4705a.css"];
export const fonts = [];
