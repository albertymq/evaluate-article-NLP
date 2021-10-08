function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const formText = document.getElementById("content").value;
  const regex = /^[\s\S]{10,}$/;
  if (regex.test(formText)) {
    console.log("::: Form Submitted :::");

    //getApiKey from Server
    Client.getApiKey().then(function (data) {
      console.log("::: getting analysis from Meaning Cloud :::");
      let apiKey = data.ApiKey;
      Client.reqToMeaningCloud(apiKey, formText).then(function (data) {
        Client.postData("http://localhost:8081/addAnalysis", {
          agreement: data.agreement,
          confid: data.confidence,
          irony: data.irony,
          subjectivity: data.subjectivity,
          content: formText,
          remainCredits: data.status.remaining_credits,
        }).then(function (newdata) {
          Client.updateUI(newdata);
        });
      });
    });
  } else {
    alert("Please input a sentence more than 10 characters");
  }
  /*fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    });*/
}

export { handleSubmit };
