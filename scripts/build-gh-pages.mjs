import { mkdir, rm, cp, writeFile } from "node:fs/promises";

const outputRoot = new URL("../gh-pages-dist/", import.meta.url);
const publicRoot = new URL("../public/", import.meta.url);
const clientRoot = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);

workerUrl.searchParams.set("static", `${process.pid}-${Date.now()}`);

const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("http://localhost/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Unable to render static page: ${response.status}`);
}

let html = await response.text();

html = html
  .replace(/<link[^>]+rel="modulepreload"[^>]*>\n?/g, "")
  .replace(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/g, "")
  .replace(/\sdata-rsc-css-href="[^"]*"/g, "")
  .replace(/\sdata-precedence="[^"]*"/g, "")
  .replace(/url\(C:\/Projects\/Portfolio\/\.vinext\/fonts\/([^)]+)\)/g, "url(./assets/_vinext_fonts/$1)")
  .replace(/\b(href|src)="\/(?!\/)([^"#?]+)"/g, '$1="./$2"');

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(publicRoot, outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });
await writeFile(new URL("index.html", outputRoot), html);
await writeFile(new URL(".nojekyll", outputRoot), "");

console.log(`GitHub Pages files written to ${outputRoot.pathname}`);
