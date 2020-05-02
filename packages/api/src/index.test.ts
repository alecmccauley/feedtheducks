import { getMessage } from ".";

test("it says hello world", () => {
  const result = getMessage("world");
  expect(result).toBe("Hello world!");
});
