import { SubsetInput, SubsetResult } from "../interfaces/subset.interface";

export class SubsetService {
  public static findSubset(input: SubsetInput): SubsetResult {
    const { M, N } = input;
    const seen = new Set<number>();
    for (const number of M) {
      const complement = N - number;
      if (seen.has(complement)) {
        return {
          pair: [number, complement],
          message: "Subset found that sums to N",
        };
      }
      seen.add(number);
    }

    return { pair: null, message: "No subset found that sums to N" };
  }
}
