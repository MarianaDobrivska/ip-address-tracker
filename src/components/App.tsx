import React, { useState, useEffect } from "react";
import { Map } from "./Map";
import { SearchBar } from "./SearchBar";
import { IPInfo } from "./IPInfo";
import { Loader } from "./Loader";
import { getIPGeolocation } from "../services/IP_geolocation";

function App() {
  const [IPData, setIPData] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (IPData !== null) return;
    const fetchLocation = async () => {
      const data = await getIPGeolocation(query);
      setIPData(data);
    };
    fetchLocation();
    // eslint-disable-next-line
  }, [IPData]);

  return (
    <>
      {IPData ? (
        <>
          <SearchBar setQuery={setQuery} setIPData={setIPData} />
          <IPInfo IPData={IPData} />
          <Map IPData={IPData} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
