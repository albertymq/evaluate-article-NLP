import { onBlur } from "../src/client";

discribe("first test", () => {
  test("onBlur", () => {
    expect(onBlur()).toBeNull;
  });
});
