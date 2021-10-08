import "babel-polyfill";
import { postData } from "../src/client";
import { getApiKey } from "../src/client";
import { reqToMeaningCloud } from "../src/client";
import { handleSubmit } from "../src/client";

test("reqToMeaningCloud", async () => {
  fetch.mockResponse(JSON.stringify({ rates: 1 }));
  expect(reqToMeaningCloud("111", "abcdtesting")).toBeNull;
});

test("postData", async () => {
  fetch.mockResponse(JSON.stringify({ rates: 1 }));
  expect(postData("/test", { data: 1 })).toBeNull;
});

test("getApiKey", async () => {
  fetch.mockResponse(JSON.stringify({ rates: 1 }));
  expect(getApiKey()).toBeNull;
});
