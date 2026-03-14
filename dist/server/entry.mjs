import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BY2PBXq-.mjs';
import { manifest } from './manifest_BnRR_IS7.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/unlock.astro.mjs');
const _page4 = () => import('./pages/work/project-1.astro.mjs');
const _page5 = () => import('./pages/work/project-2.astro.mjs');
const _page6 = () => import('./pages/work/project-3.astro.mjs');
const _page7 = () => import('./pages/work/project-4.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/unlock.astro", _page3],
    ["src/pages/work/project-1.astro", _page4],
    ["src/pages/work/project-2.astro", _page5],
    ["src/pages/work/project-3.astro", _page6],
    ["src/pages/work/project-4.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/dianachun/Documents/Personal/Claude%20Code%20projects/Website%20test/dist/client/",
    "server": "file:///Users/dianachun/Documents/Personal/Claude%20Code%20projects/Website%20test/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
