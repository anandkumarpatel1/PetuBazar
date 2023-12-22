import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FoodScreen = ({ route }) => {
  const id = route?.params?.id;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true)
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route?.params?.id}`
    );

    setLoading(false)
    setData(data)
  };
  return (
    <View style={{marginTop: 80}}>
      {
        loading ? <Text>loading</Text> : <Text>{data?.strMeal}</Text>
      }
      <Text>loading</Text> 
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({});
