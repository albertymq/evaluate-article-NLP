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
    console.log("::: Analysis post to Server :::");
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
    console.log("::: ApiKey fetched from Server :::");
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

//display the key to monitor the changes
/*getApiKey();*/

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
/* reqToMeaningCloud("5efe222f21cc3dcd006e7e2a919077d0","Although I'm very happy to learn Udacity, I don't like that hard homeworks.") */

//update the UI to show the Text and the analysis
const updateUI = (newdata={}) => {
  console.log("::: get Analysis from Server :::");
  document.getElementById("contentText").innerHTML=`Text input: "${newdata.content}"`;
  document.getElementById("agreement").innerHTML=`Agreement: ${newdata.agreement}`;
  document.getElementById("confidence").innerHTML=`Confidence: ${newdata.confid}`;
  document.getElementById("irony").innerHTML=`Irony: ${newdata.irony}`;
  document.getElementById("subjectivity").innerHTML=`Subjectivity: ${newdata.subjectivity}`;
  document.getElementById("remainCredits").innerHTML=`Opps, only ${newdata.remainCredits} chances left!`;
  console.log("::: analysis result updated in webpage :::")
};

export {
  checkForName,
  handleSubmit,
  onBlur,
  postData,
  getApiKey,
  reqToMeaningCloud,
  updateUI,
};
