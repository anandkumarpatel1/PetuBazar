import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Bottom from "./Bottom";
import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";

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
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="40" color={"#E32636"} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title={'Vegetarian'} />
          <View
            style={{
              flex: 1,
              paddingBottom: 10,
            }}
          >
            {veg.map((item, index) => (
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

export default Vegetarian;

const styles = StyleSheet.create({});
