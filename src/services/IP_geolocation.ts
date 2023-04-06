import { getIPAddress } from "./IP_address";

const apiKey = process.env.REACT_APP_API_KEY;
const base_url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

export const getIPGeolocation = async (query: string) => {
  const ownIPAddress = await getIPAddress().then(({ ip }) => ip);
  let IP = ownIPAddress;
  if (query !== "") IP = query;
  const result = fetch(`${base_url}&ipAddress=${IP}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("error in fetch" + error));
  return result;
};
