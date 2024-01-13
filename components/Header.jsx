import { StyleSheet, Text, View } from "react-native";
import React from "react";

// maine edit kar diye 

const Header = ({title}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#C0C0C0",
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        marginHorizontal: 10,
        backgroundColor: "#DBD7D2",
      }}
    >
      {/* title */}
      <Text
        style={{
          fontSize: 25,
          fontWeight: "800",
          textAlign: "center",
          color: "#E32636",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
