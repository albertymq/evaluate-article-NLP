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

export { reqToMeaningCloud };
