

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bus-and-tram/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f67acf79.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"];
export const stylesheets = ["_app/immutable/assets/3.80f28890.css","_app/immutable/assets/annotorious.e10838d7.css"];
export const fonts = [];
