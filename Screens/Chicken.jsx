import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import Bottom from "./Bottom";
import Loader from "../components/Loader";
import axios from 'axios'

const Chicken = () => {
  const [loading, setLoading] = useState(false);
  const [chicken, setChicken] = useState([]);

  useEffect(() => {
    fetchChickenData();
  }, []);

  const fetchChickenData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
    );

    setChicken(data?.meals);
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
                Chicken
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
            {chicken.map((item, index) => (
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

export default Chicken;

const styles = StyleSheet.create({});
