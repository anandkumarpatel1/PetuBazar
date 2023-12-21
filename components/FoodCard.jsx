import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const FoodCard = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <View
      style={{
        width: 180,
        alignItems: "center",
        margin: 10,
        justifyContent: 'space-around',
        backgroundColor: '#DBD7D2',
        paddingVertical: 5,
        borderRadius: 10
      }}
    >
      <Image
        style={{ width: 150, height: 150, borderRadius: 10 }}
        source={{
          uri: strMealThumb,
        }}
      />
      <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>
        {strMeal}
      </Text>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
