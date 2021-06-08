import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={searchTerm}
        setSearchTerm={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice("$")}
          title="Budget"
        />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice("$$")}
          title="Pricier"
        />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice("$$$")}
          title="Slightly Expensive"
        />
      </ScrollView>
      {/* <ResultsList results={"$$$$"} title="Expensive" /> */}
    </View>
  );
};
export default SearchScreen;
