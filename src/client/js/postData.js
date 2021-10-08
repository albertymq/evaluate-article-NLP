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

export { postData };
