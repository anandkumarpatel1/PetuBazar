import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const FoodCard = ({ strMeal, strMealThumb, idMeal }) => {
  const Navigation = useNavigation()
  const Route = useRoute()
  return (
    <TouchableOpacity
      style={{
        width: 180,
        alignItems: "center",
        margin: 10,
        justifyContent: 'space-around',
        backgroundColor: '#DBD7D2',
        paddingVertical: 5,
        borderRadius: 10
      }}

      onPress={() => Navigation.navigate('FoodScreen', {id: idMeal})}
    >
      // add a button herer
      <Image
        style={{ width: 150, height: 150, borderRadius: 10 }}
        source={{
          uri: strMealThumb,
        }}
      />
      <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>
        {strMeal}
      </Text>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
