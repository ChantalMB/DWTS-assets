export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/bus-and-tram.jpg","images/cycling-map.jpg","images/geographia-1913.jpg","images/geographia-1923.jpg","images/manchester-1926.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.b20e59f8.js","app":"_app/immutable/entry/app.f01c0dbd.js","imports":["_app/immutable/entry/start.b20e59f8.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.65f93543.js","_app/immutable/entry/app.f01c0dbd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
				id: "/geographia-1913",
				pattern: /^\/geographia-1913\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/geographia-1923",
				pattern: /^\/geographia-1923\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/manchester-1926",
				pattern: /^\/manchester-1926\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
