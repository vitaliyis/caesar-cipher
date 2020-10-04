const { Command } = require('commander');
const program = new Command();
const transform = require('./transform');

program
  .storeOptionsAsProperties(true)

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <string>', 'an input file')
  .option('-o, --output <string>', 'an output file')
  .option('-a, --action <string>', 'an action encode/decode');

program.parse(process.argv);

if (program.shift) {
  if (program.shift < 0 || isNaN(program.shift)) {
    process.stderr.write(`Error: option -s or --shift must have a pozitive number! You entered: ${program.shift}`);
    process.exit(1);
  }
} else {
  process.stderr.write("Error: You didn't enter option -s or --shift");
  process.exit(1);
}

if (typeof program.action === 'string') {
  if (program.action.toString() !== 'encode' && program.action.toString() !== 'decode') {
    process.stderr.write("Error: not the right action in option -a or --action!");
    process.exit(1);
  }
} else {
  process.stderr.write("Error: You didn't enter option -a or --action");
  process.exit(1);
}

transform(Number(program.shift), program.action, program.input, program.output);


