

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.009eccc1.js","_app/immutable/chunks/2.d9f13e51.js","_app/immutable/chunks/disclose-version.918b5af3.js","_app/immutable/chunks/runtime.0e858ca5.js","_app/immutable/chunks/legacy.1d95c044.js","_app/immutable/chunks/render.ad2d1b00.js","_app/immutable/chunks/preload-helper.62afeabe.js","_app/immutable/chunks/lifecycle.68d1b92c.js"];
export const stylesheets = [];
export const fonts = [];
