import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";

const CountryCard = ({ title }) => {
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    countryFetchData();
  }, []);

  const countryFetchData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${title}`
    );
    setCountryData(data?.meals);
    setLoading(false)
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator
          size="40"
          color={"#E32636"}
          style={{ marginTop: 40 }}
        />
      ) : (
        <View style={styles.itemCont}>
          <Text style={styles.countryName}>{title}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row" }}
          >
            {countryData.map((item, index) => (
              <FoodCard
                key={index}
                strMeal={item?.strMeal}
                strMealThumb={item?.strMealThumb}
                idMeal={item?.idMeal}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  itemCont: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    margin: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  countryName: {
    fontSize: 20,
    fontWeight: "800",
    paddingLeft: 10,
  },
});
