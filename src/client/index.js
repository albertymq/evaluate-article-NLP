import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";
import { onBlur } from "./js/onBlur";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

//PostData Function
const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    console.log("post", newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

//GetApiKey Function
const getApiKey = async () => {
  const res = await fetch("http://localhost:8081/getApiKey");
  try {
    const data = await res.json();
    console.log("ApiKey fetched from server:", data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

//display the key to monitor the changes
getApiKey();

//Request to MeaningCloud
const reqToMeaningCloud = async (apiKey, content) => {
  const formdata = new FormData();
  formdata.append("key", apiKey);
  formdata.append("txt", content);
  formdata.append("lang", "en");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  );
  try {
    const data = await res.json();
    console.log("Data fetched from MeaningCloud API:", data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

//testing reqToMeaningCloud
reqToMeaningCloud("5efe222f21cc3dcd006e7e2a919077d0","Although I'm very happy to learn Udacity, I don't like that hard homeworks.")

//postData back to Server

//update the UI to show the Text and the analysis

export { checkForName, handleSubmit, onBlur, postData, getApiKey };
