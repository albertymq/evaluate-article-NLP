//update the UI to show the Text and the analysis
const updateUI = (newdata = {}) => {
  console.log("::: get Analysis from Server :::");
  document.getElementById(
    "contentText"
  ).innerHTML = `Text input: "${newdata.content}"`;
  document.getElementById(
    "agreement"
  ).innerHTML = `Agreement: ${newdata.agreement}`;
  document.getElementById(
    "confidence"
  ).innerHTML = `Confidence: ${newdata.confid}`;
  document.getElementById("irony").innerHTML = `Irony: ${newdata.irony}`;
  document.getElementById(
    "subjectivity"
  ).innerHTML = `Subjectivity: ${newdata.subjectivity}`;
  document.getElementById(
    "remainCredits"
  ).innerHTML = `Opps, only ${newdata.remainCredits} chances left!`;
  console.log("::: analysis result updated in webpage :::");
};

export { updateUI };
