import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../components/FoodCard";
import Bottom from "./Bottom";
import Loader from "../components/Loader";

const Vegetarian = () => {
  const [loading, setLoading] = useState(false);
  const [veg, setVeg] = useState([]);

  useEffect(() => {
    fetchVegData();
  }, []);

  const fetchVegData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
    );

    setVeg(data?.meals);
    setLoading(false);
  };
  return (
    <View style={{ flex: 1, justifyContent: "space-between", marginTop: 40 }}>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "800",
                  textAlign: "center",
                  color: "#E32636",
                }}
              >
                Vegetarian
              </Text>
            </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              paddingBottom: 50,
            }}
          >
            {veg.map((item, index) => (
              <FoodCard
                key={index}
                strMeal={item?.strMeal}
                strMealThumb={item?.strMealThumb}
                idMeal={item?.idMeal}
              />
            ))}
          </View>
        </ScrollView>
      )}

      <Bottom />
    </View>
  );
};

export default Vegetarian;

const styles = StyleSheet.create({});
