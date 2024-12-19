export const isValidInput = (M: any, N: any): boolean => {
  return (
    Array.isArray(M) &&
    M.every((element) => typeof element === "number") &&
    typeof N === "number"
  );
};
