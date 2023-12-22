import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Bottom from "./Bottom";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";

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
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="40" color={"#E32636"} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title={'Chicken'} />
          <View
            style={{
              flex: 1,
              paddingBottom: 10,
            }}
          >
            {chicken.map((item, index) => (
              <CategoryCard
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
