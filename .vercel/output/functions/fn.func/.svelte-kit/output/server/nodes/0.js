

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.de0b323b.js","_app/immutable/chunks/disclose-version.918b5af3.js","_app/immutable/chunks/runtime.0e858ca5.js","_app/immutable/chunks/legacy.1d95c044.js"];
export const stylesheets = ["_app/immutable/assets/0.5149c21c.css"];
export const fonts = [];
