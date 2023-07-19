export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/about.jpg","images/card.jpg","images/card2.jpg","images/Frame.svg","images/Frame1.svg","images/Frame2.svg","images/heroimg.jpg","images/heroimgsmall.jpg","images/image.jpg","images/kringel.svg","images/logo.svg","images/logowhite.svg","images/tabimg.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.f9d0e414.js","app":"_app/immutable/entry/app.70c0c2d6.js","imports":["_app/immutable/entry/start.f9d0e414.js","_app/immutable/chunks/index.35a1748c.js","_app/immutable/chunks/singletons.c6e8e790.js","_app/immutable/chunks/index.531451b4.js","_app/immutable/entry/app.70c0c2d6.js","_app/immutable/chunks/index.35a1748c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
