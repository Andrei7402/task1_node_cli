const stream = require("stream");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const program = require("commander");
const pckg = require("./package.json");

const pipeline = util.promisify(stream.pipeline);


const actionHandler = async () => {}

process.stdin.setEncoding("utf8");
process.on("exit", (code) => log(`${codeMessage} ${code}`));
process.on("SIGINT", () => {
  process.exit(0);
});

program.storeOptionsAsProperties(false).version(pckg.version);

program
  .requiredOption("-a --action <action>", "An action string/array")
  .option("-i, --input <filename>", "An input file")
  .option("-o --output <filename>", "An output file")
  .action(actionHandler);

program.parse(process.argv);