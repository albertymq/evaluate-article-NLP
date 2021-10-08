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

export { getApiKey };
