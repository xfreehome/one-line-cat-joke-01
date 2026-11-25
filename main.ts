import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My cat isn't knocking things off the table out of spite — he's running gravity tests, and so far every glass has failed the exam.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
