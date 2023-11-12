// jest.config.js
export const moduleFileExtensions = ["js", "jsx", "ts", "tsx"];
export const testEnvironment = "node";
export const transform = {
  "^.+\\.(ts|tsx)$": "ts-jest",
};
export const moduleNameMapper = {
  "\\.(css|less|scss|sss|styl)$": "identity-obj-proxy",
};
export const testRegex = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$";
