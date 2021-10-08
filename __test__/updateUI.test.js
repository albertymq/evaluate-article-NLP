import { exportAllDeclaration } from "@babel/types";
import "babel-polyfill";
import { updateUI } from "../src/client";

test("updateUI", () => {
  document.body.innerHTML =
    '<div id="contentText"></div>' +
    '<div id="agreement"></div>' +
    '<div id="confidence"></div>' +
    '<div id="irony"></div>' +
    '<div id="subjectivity"></div>' +
    '<div id="remainCredits"></div>';
  expect(
    updateUI({
      agreement: "DISAGREEMENT",
      confid: "86",
      irony: "NONIRONIC",
      content:
        "AAAAATESTING",
      subjectivity: "SUBJECTIVE",
      remainCredits: "19949",
    })
  ).toBeNull;
});
