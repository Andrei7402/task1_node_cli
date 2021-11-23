const chalk = require("chalk");
const { Transform } = require("stream");
const { Sort } = require("./task1");
const {Distance} = require("./task1")

class TaskTransform extends Transform {
    constructor(action) {
        super();
        this.action = action;
    }

    _transform(value, enc, done) {
        let result = undefined;

        switch (this.action) {
            case 'string':
                const val = JSON.parse(value);
                result = Sort(val);
                break;
            case 'array':
              const [pointA, pointB] = value.toString().split(":");
              const arr1 = JSON.parse(pointA)
              const arr2 = JSON.parse(pointB);
                result = Distance(arr1, arr2);
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