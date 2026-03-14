import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_D5j8oUmM.mjs';
import 'es-module-lexer';
import { n as decodeKey } from './chunks/astro/server_Cor0hUFc.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BvqaUwzH.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/dianachun/Documents/Personal/Claude%20Code%20projects/Website%20test/","adapterName":"@astrojs/node","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.JBFzkzVt.css"},{"type":"inline","content":"[data-astro-cid-as4kadki]{box-sizing:border-box;margin:0;padding:0}body{font-family:Inter,system-ui,sans-serif;background:#fff;color:#111;height:100dvh;display:flex;align-items:center;justify-content:center}.card[data-astro-cid-as4kadki]{width:100%;max-width:360px;padding:0 24px}.lock-icon[data-astro-cid-as4kadki]{width:40px;height:40px;background:#f4f4f5;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:20px}h1[data-astro-cid-as4kadki]{font-size:1.25rem;font-weight:600;margin-bottom:6px}p[data-astro-cid-as4kadki]{font-size:.875rem;color:#71717a;margin-bottom:24px}input[data-astro-cid-as4kadki][type=password]{width:100%;padding:10px 14px;border:1.5px solid #e4e4e7;border-radius:8px;font-size:.9375rem;font-family:inherit;outline:none;margin-bottom:10px;transition:border-color .15s}input[data-astro-cid-as4kadki][type=password]:focus{border-color:#111}input[data-astro-cid-as4kadki][type=password].error-input{border-color:#ef4444}.error[data-astro-cid-as4kadki]{font-size:.8125rem;color:#ef4444;margin-bottom:10px}button[data-astro-cid-as4kadki]{width:100%;padding:10px;background:#111;color:#fff;border:none;border-radius:8px;font-size:.9375rem;font-weight:500;font-family:inherit;cursor:pointer;transition:background .15s}button[data-astro-cid-as4kadki]:hover{background:#374151}.back[data-astro-cid-as4kadki]{display:block;text-align:center;margin-top:16px;font-size:.8125rem;color:#a1a1aa;text-decoration:none}.back[data-astro-cid-as4kadki]:hover{color:#111}\n"}],"routeData":{"route":"/unlock","isIndex":false,"type":"page","pattern":"^\\/unlock\\/?$","segments":[[{"content":"unlock","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unlock.astro","pathname":"/unlock","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.JBFzkzVt.css"}],"routeData":{"route":"/work/project-1","isIndex":false,"type":"page","pattern":"^\\/work\\/project-1\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"project-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/project-1.astro","pathname":"/work/project-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.JBFzkzVt.css"}],"routeData":{"route":"/work/project-2","isIndex":false,"type":"page","pattern":"^\\/work\\/project-2\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"project-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/project-2.astro","pathname":"/work/project-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.JBFzkzVt.css"}],"routeData":{"route":"/work/project-3","isIndex":false,"type":"page","pattern":"^\\/work\\/project-3\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"project-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/project-3.astro","pathname":"/work/project-3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.JBFzkzVt.css"}],"routeData":{"route":"/work/project-4","isIndex":false,"type":"page","pattern":"^\\/work\\/project-4\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"project-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/project-4.astro","pathname":"/work/project-4","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/unlock.astro",{"propagation":"none","containsHead":true}],["/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/work/project-1.astro",{"propagation":"none","containsHead":true}],["/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/work/project-2.astro",{"propagation":"none","containsHead":true}],["/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/work/project-3.astro",{"propagation":"none","containsHead":true}],["/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/work/project-4.astro",{"propagation":"none","containsHead":true}],["/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/dianachun/Documents/Personal/Claude Code projects/Website test/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/unlock@_@astro":"pages/unlock.astro.mjs","\u0000@astro-page:src/pages/work/project-1@_@astro":"pages/work/project-1.astro.mjs","\u0000@astro-page:src/pages/work/project-2@_@astro":"pages/work/project-2.astro.mjs","\u0000@astro-page:src/pages/work/project-3@_@astro":"pages/work/project-3.astro.mjs","\u0000@astro-page:src/pages/work/project-4@_@astro":"pages/work/project-4.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/Users/dianachun/Documents/Personal/Claude Code projects/Website test/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_BnRR_IS7.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.JBFzkzVt.css","/about/index.html","/contact/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"kw/E8wbrbPvIbOapdnekz1pnyWaY/r/dQ44qjEnldp8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
