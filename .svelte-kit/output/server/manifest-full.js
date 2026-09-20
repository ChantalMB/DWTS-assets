export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Siren_Multiple.mp3","Siren_Single.mp3","favicon.png","images/bus-and-tram.jpg","images/cycling-map.jpg","images/geographia-1913.jpg","images/geographia-1923.jpg","images/manchester-1926.jpg","westminster.mp3"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.d5994597.js","app":"_app/immutable/entry/app.cd425d5a.js","imports":["_app/immutable/entry/start.d5994597.js","_app/immutable/chunks/scheduler.92fb626a.js","_app/immutable/chunks/singletons.523654eb.js","_app/immutable/entry/app.cd425d5a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.92fb626a.js","_app/immutable/chunks/index.337b77e0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/bus-and-tram",
				pattern: /^\/bus-and-tram\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cycling-map",
				pattern: /^\/cycling-map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/game-timeline",
				pattern: /^\/game-timeline\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/geographia-1913",
				pattern: /^\/geographia-1913\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/geographia-1923",
				pattern: /^\/geographia-1923\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/manchester-1926",
				pattern: /^\/manchester-1926\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/sound-buttons",
				pattern: /^\/sound-buttons\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
