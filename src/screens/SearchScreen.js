import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={searchTerm}
        setSearchTerm={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We have found this many results: {results.length}</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Budget" />
      <ResultsList results={filterResultsByPrice("$$")} title="Pricier" />
      <ResultsList
        results={filterResultsByPrice("$$$")}
        title="Slightly Expensive"
      />
      {/* <ResultsList results={"$$$$"} title="Expensive" /> */}
    </View>
  );
};
export default SearchScreen;
