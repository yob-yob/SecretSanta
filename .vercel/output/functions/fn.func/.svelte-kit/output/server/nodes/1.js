

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6549f758.js","_app/immutable/chunks/disclose-version.918b5af3.js","_app/immutable/chunks/runtime.0e858ca5.js","_app/immutable/chunks/legacy.1d95c044.js","_app/immutable/chunks/render.ad2d1b00.js","_app/immutable/chunks/lifecycle.68d1b92c.js","_app/immutable/chunks/store.d574bad7.js","_app/immutable/chunks/singletons.d67ec67a.js"];
export const stylesheets = [];
export const fonts = [];
