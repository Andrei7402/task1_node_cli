# task1_node_cli
Run app

$ git clone https://github.com/Andrei7402/task1_node_cli.git
$ cd task1_node_cli
$ npm i

Usage example:
CLI tool accept 3 options (short alias and full name):

-i, --input: an input file
-o, --output: an output file
-a, --action: an action complete
string || array input.txt to output.txt:

$ node cli -i "./input.txt" -o "./output.txt" -a string
$ node cli -i "./input.txt" -o "./output.txt" -a array
Uncollapse || MattrixAddition stdin to stdout:

$ node cli -a string
$ node cli -a array
For action array(Distance) need enter text through ":" , for example:

[1,1]:[1,1] -> 0
[5,4]:[3,2] -> 4

Next, string(Sort)
["Hello", "Andrei", "hi","bob"] -> Andrei,bob,Hello,hi
