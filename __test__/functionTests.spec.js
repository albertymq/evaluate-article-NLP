import { exportAllDeclaration } from "@babel/types";
import {
  handleSubmit,
  onBlur,
  postData,
  getApiKey,
  reqToMeaningCloud,
  updateUI,
} from "../src/client";

test("getApiKey", async () => {
  const data = await getApiKey();
  expect(data).toEqual({ ApiKey: process.env.API_KEY });
});
