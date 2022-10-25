import { program } from 'commander';
import { findOdd, revrot } from './solution';

program
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .option('-fo, --find_odd <numbers...>', 'param for "FindThe odd int" task')
  .option('-rrs, --string <string>', 'Reverse Or Rotate" task')
  .option('-rrn, --number <number>', 'Reverse Or Rotate" task')
  .parse(process.argv);

const options = program.opts();

console.log(findOdd(options.find_odd));
console.log(revrot(options.string, options.number));
