import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the portfolio with public metadata and navigable sections", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Paul M\. Christian/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.has(anchor), `Missing navigation target: ${anchor}`);
  }
  assert.match(html, /aria-label="Professional software experience"/);
  assert.match(html, /href="mailto:paulmchristian@gmail\.com"/);
  assert.match(html, /href="\/paul-christian-resume\.pdf"/);
});

test("portfolio image and resume assets exist and video frames are named", async () => {
  const html = await (await render()).text();
  for (const [, source] of html.matchAll(/<img\b[^>]*\bsrc="(\/[^\"]+)"/g)) {
    await access(new URL(`../public${source}`, import.meta.url));
  }
  await access(new URL("../public/paul-christian-resume.pdf", import.meta.url));
  for (const [frame] of html.matchAll(/<iframe\b[^>]*>/g)) {
    assert.match(frame, /\btitle="[^"]+"/, "Video frame needs an accessible title");
  }
});
