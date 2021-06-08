import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (termArg) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: termArg,
          location: "santa rosa",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg("Something went wrong");
    }
  };

  //inital search only once
  useEffect(() => {
    searchApi("Mexican");
  }, []);

  return [searchApi, results, errorMsg];
};
