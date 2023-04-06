const base_url = "https://api.ipify.org/?format=json";

export const getIPAddress = async () => {
  const result = fetch(base_url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("error in fetch" + error));
  return result;
};
