import { handleSubmit } from "./js/formHandler";
import { onBlur } from "./js/onBlur";
import { postData } from "./js/postData";
import { getApiKey } from "./js/getApiKey";
import { reqToMeaningCloud } from "./js/reqToMeaningCloud";
import { updateUI } from "./js/updateUI";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

//testing reqToMeaningCloud
/* reqToMeaningCloud("5efe222f21cc3dcd006e7e2a919077d0","Although I'm very happy to learn Udacity, I don't like that hard homeworks.") */

export {
  handleSubmit,
  onBlur,
  postData,
  getApiKey,
  reqToMeaningCloud,
  updateUI,
};
