const fs = require("fs");
const selectedEnvironment = process.argv[2];
const envFileContent = require(`../../env/${selectedEnvironment}.json`);
fs.writeFileSync(
  "./env/env.json",
  JSON.stringify(envFileContent, undefined, 2)
);
