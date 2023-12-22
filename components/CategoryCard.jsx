import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const CategoryCard = ({ strMeal, strMealThumb, idMeal }) => {
  const Navigation = useNavigation();
  const Route = useRoute();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        margin: 10,
        backgroundColor: "#DBD7D2",
        borderRadius: 10,
      }}
      onPress={() => Navigation.navigate('FoodScreen', {id: idMeal})}
    >
      <Image
        style={{ width: 150, height: 150, borderRadius: 10 }}
        source={{
          uri: strMealThumb,
        }}
      />
      <View style={{ justifyContent: "center", width: "150" }}>
        <Text style={{ fontSize: 18, marginLeft: 10 }}>{strMeal}</Text>
        <Text style={{ fontSize: 18, marginLeft: 10 }}>Visit {">>"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
