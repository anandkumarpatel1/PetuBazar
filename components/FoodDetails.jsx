import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FoodDetails = ({ title, desc }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: 350,
        flexWrap: "wrap",
      }}
    >
      <Text style={styles.dataTitle}>{title} :</Text>
      <Text style={styles.dataTxt}>{desc}</Text>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  dataTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: '#E32636'
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: "500",
  }
});
