import "babel-polyfill";
import { onBlur } from "../src/client";


test("onBlur", () => {
  document.body.innerHTML='<input id="content">'
  document.getElementById("content").value = "TESTING"
  expect(onBlur()).toBeNull;
});


