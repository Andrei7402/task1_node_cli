const chalk = require("chalk");
const { Transform } = require("stream");

class TaskTransform extends Transform {
    constructor(action) {
        super();
        this.action = action;
    }

    _transform(value, enc, done) {
        let result = undefined;

        switch (this.action) {
            case 'string':
                result = 'string';
                break;
            case 'array':
                result = 'array';
                break;
            default:
                process.stderr.write(chalk.red("✘ Erorr") + ' "Action not found :("\n');
                process.exit(1);
        }

        this.push(result + '\n');
        done();
    }
}

module.exports = TaskTransform;