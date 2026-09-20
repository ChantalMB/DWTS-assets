

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sound-buttons/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.c6b40ddb.js","_app/immutable/chunks/scheduler.92fb626a.js","_app/immutable/chunks/index.337b77e0.js"];
export const stylesheets = ["_app/immutable/assets/9.b0db657b.css"];
export const fonts = [];
