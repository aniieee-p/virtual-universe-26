import { readFile } from "node:fs/promises";

const notesUrl = new URL("./notes/keynote-highlights.json", import.meta.url);
const { highlights } = JSON.parse(await readFile(notesUrl, "utf8"));
const highlightsByTopic = new Map();

for (const { topic, title } of highlights) {
  const titles = highlightsByTopic.get(topic) ?? [];
  titles.push(title);
  highlightsByTopic.set(topic, titles);
}

for (const [topic, titles] of highlightsByTopic) {
  console.log(topic);
  for (const title of titles) {
    console.log(`  - ${title}`);
  }
}
