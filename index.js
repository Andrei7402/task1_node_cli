const stream = require("stream");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const program = require("commander");
const pckg = require("./package.json");

const TaskTransform = require("./helpers/TaskTransform.class");

const pipeline = util.promisify(stream.pipeline);
const errorMessage = chalk.red.bold("✘ Erorr");
const successMessage = chalk.green.bold("✔ Successful");
const codeMessage = chalk.yellow.bold("Code");

const actionHandler = async () => {
    let { input, output, action } = program.opts();

    try {
        await pipeline(
          input ? fs.createReadStream(input) : process.stdin,
          new TaskTransform(action),
          output ? fs.createWriteStream(output, { flags: "a" })
            : process.stdout
        );
    
        console.log('Task completed!');
      } catch (e) {
        process.stderr.write(`${errorMessage} ${e.message}\n`);
        process.exit(1);
      }
}

process.stdin.setEncoding("utf8");
process.on("exit", (code) => console.log(`${codeMessage} ${code}`));
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