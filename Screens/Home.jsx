import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Bottom from "./Bottom";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import Loader from "../components/Loader";
import Crousel from "../components/Crousel";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [indian, setIndian] = useState([]);
  const [Canadian, setCanadian] = useState([]);
  const [chinese, setChinese] = useState([]);
  const [italy, setItaly] = useState([]);
  const [america, setAmerica] = useState([]);
  const [mexican, setMexican] = useState([]);
  const [thailand, setThailand] = useState([]);
  const [greek, setGreek] = useState([]);
  const [japan, setJapan] = useState([]);
  const [spain, setSpain] = useState([]);
  const [french, setFrench] = useState([]);

  useEffect(() => {
    fetchIndianData();
  }, []);

  //fetch indian food
  const fetchIndianData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
    );
    setIndian(data?.meals);

    fetchCanadianData();
  };

  //fetch canadian food
  const fetchCanadianData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
    );
    setCanadian(data?.meals);
    fetchchineseData();
  };

  //fetch chinese food
  const fetchchineseData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese"
    );
    setChinese(data?.meals);
    fetchItalyData();
  };

  //fetch chinese food
  const fetchItalyData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=italian"
    );
    setItaly(data?.meals);
    fetchAmericaData();
  };

  //fetch american food
  const fetchAmericaData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=american"
    );
    setAmerica(data?.meals);
    fetchMexicanData();
  };

  //fetch mexican food
  const fetchMexicanData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=mexican"
    );
    setMexican(data?.meals);
    fetchThaiData();
  };

  //fetch thai food
  const fetchThaiData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=thai"
    );
    setThailand(data?.meals);
    fetchGreekData();
  };

  //fetch greek food
  const fetchGreekData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=greek"
    );
    setGreek(data?.meals);
    fetchJapanData();
  };

  //fetch japna food
  const fetchJapanData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=japanese"
    );
    setJapan(data?.meals);
    fetchSpanishData();
  };

  //fetch spanish food
  const fetchSpanishData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=spanish"
    );
    setSpain(data?.meals);
    fetchFrenchData();
  };

  //fetch french food
  const fetchFrenchData = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=french"
    );
    setFrench(data?.meals);
    setLoading(false);
  };

  return (
    <View style={{ justifyContent: "space-between", flex: 1, marginTop: 40 }}>
      {loading ? (
        <Loader />
      ) : (
        <>
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
                PeTu BaZaR
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                margin: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 0.8,
                borderColor: "#c0c0c0",
                borderRadius: 15,
              }}
            >
              <TextInput placeholder="Search for items or More" />
              <Feather name="search" size={24} color="black" />
            </View>
            <Crousel />
            {/* Indian */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Indian</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {indian.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Canadian */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Canadian</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {Canadian.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Chinese */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Chinese</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {chinese.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Italy */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Italian</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {italy.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* American */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>American</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {america.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Mexican */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Mexican</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {mexican.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Thai */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Thai</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {thailand.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Greek */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Greek</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {greek.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Japan */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Japanese</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {japan.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* Spanish */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>Spanish</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {spain.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>

            {/* French */}
            <View style={styles.itemCont}>
              <Text style={styles.countryName}>French</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row" }}
              >
                {french.map((item, index) => (
                  <FoodCard
                    key={index}
                    strMeal={item?.strMeal}
                    strMealThumb={item?.strMealThumb}
                    idMeal={item?.idMeal}
                  />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
          <Bottom />
        </>
      )}
    </View>
  );
};

export default Home;

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
