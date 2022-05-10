import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = (props) => {
  return <Text style={styles.Text}>{props.Children}</Text>;
};

const styles = StyleSheet.create({
  Text: {
    fontFamily: "open-sans-bold",
  },
});

export default DefaultText;
