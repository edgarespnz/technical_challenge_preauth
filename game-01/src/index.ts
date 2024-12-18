import { SubsetService } from "./services/subset.service";
import { isValidInput } from "./tests/validations";

const M: number[] = [2,5,8,14,0];
const N: number = 10;

if (!isValidInput(M, N)) {
  console.error(
    "Invalid input: M must be an array of numbers and N must be a number"
  );
  process.exit(1);
}

const result = SubsetService.findSubset({ M, N });

if (result.pair) {
  console.log(`Pair found: ${result.pair[0]} + ${result.pair[1]} = ${N}`);
} else {
  console.log(result.message);
}
