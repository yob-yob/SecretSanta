export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f0165a84.js","app":"_app/immutable/entry/app.6f5e67d1.js","imports":["_app/immutable/entry/start.f0165a84.js","_app/immutable/chunks/index-client.ec1caaaf.js","_app/immutable/chunks/runtime.0e858ca5.js","_app/immutable/chunks/singletons.d67ec67a.js","_app/immutable/entry/app.6f5e67d1.js","_app/immutable/chunks/preload-helper.62afeabe.js","_app/immutable/chunks/runtime.0e858ca5.js","_app/immutable/chunks/render.ad2d1b00.js","_app/immutable/chunks/disclose-version.918b5af3.js","_app/immutable/chunks/store.d574bad7.js","_app/immutable/chunks/index-client.ec1caaaf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
