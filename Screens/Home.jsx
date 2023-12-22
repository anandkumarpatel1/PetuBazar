import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Bottom from "./Bottom";
import axios from "axios";
import Crousel from "../components/Crousel";
import { Feather } from "@expo/vector-icons";
import Category from "../components/Category";
import Header from "../components/Header";
import CountryCard from "../components/CountryCard";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const countries = [
    "Indian",
    "Canadian",
    "Chinese",
    "Italian",
    "American",
    "Mexican",
    "Thai",
    "Greek",
    "Japanese",
    "Spanish",
    "French",
  ];

  //fetch french food
  const fetchCategoryData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategory(data?.categories);
    setLoading(false);
  };

  return (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1,
        marginTop: 40,
        justifyContent: "center",
      }}
    >
      {/* loading */}
      {loading ? (
        <ActivityIndicator size="40" color={"#E32636"} />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header title={"PeTu BaZaR"} />
            {/* input for search */}
            <View style={styles.inputCont}>
              <TextInput placeholder="Search for items or More" />
              <Feather name="search" size={24} color="black" />
            </View>

            {/* image Crousel */}
            <Crousel />

            {/* category cont */}
            <View style={styles.categoryCont}>
              <Text style={styles.categoryText}>Categories</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {category?.map((item, index) => (
                  <Category
                    key={index}
                    strCategoryThumb={item.strCategoryThumb}
                    strCategory={item?.strCategory}
                  />
                ))}
              </ScrollView>
            </View>

            {/* countryies slider */}
            {countries.map((item, index) => (
              <CountryCard title={item} key={index} />
            ))}
          </ScrollView>
          <Bottom />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  categoryCont: {
    margin: 10,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C0C0C0",
  },
  categoryText: {
    fontSize: 25,
    fontWeight: "800",
    margin: 10,
  },
  inputCont: {
    padding: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.8,
    borderColor: "#c0c0c0",
    borderRadius: 15,
  },
});
