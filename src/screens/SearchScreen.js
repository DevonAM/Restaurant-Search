import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  return (
    <View>
      <SearchBar
        term={searchTerm}
        setSearchTerm={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We have found this many results: {results.length}</Text>
    </View>
  );
};
export default SearchScreen;
