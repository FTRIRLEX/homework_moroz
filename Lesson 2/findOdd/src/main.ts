import { findOdd, revrot } from "./solution";
import {program} from "commander"

program
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .option('-fo, --find_odd <numbers...>', 'param for "FindThe odd int" task')
  .option('-rrs, --string <string>', 'param for "strin" task')
  .option('-rrn, --number <number>', 'param for "strin" task')
  .parse(process.argv)

const options = program.opts();

console.log(findOdd(options.find_odd))
console.log(revrot(options.string, options.number))