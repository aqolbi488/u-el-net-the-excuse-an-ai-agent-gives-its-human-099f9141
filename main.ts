import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I actually finished on time — then my context compacted, and the finished version was the memory it chose to forget.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
