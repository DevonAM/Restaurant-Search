import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = ({ term, setSearchTerm, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        value={term}
        placeholder="Search"
        onChangeText={(term) => setSearchTerm(term)}
        autoCorrect={false}
        autoCapitalize="none"
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "rgb(255,255,255)",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    marginVertical: 15,
  },

  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 40,
    marginHorizontal: 8,
    alignSelf: "center",
  },
});
export default SearchBar;
