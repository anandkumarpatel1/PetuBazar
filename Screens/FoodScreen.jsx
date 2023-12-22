import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import FoodDetails from "../components/FoodDetails";
import { WebView } from "react-native-webview";
import Bottom from './Bottom'

const FoodScreen = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route?.params?.id}`
    );

    setProductData(data?.meals);
    setLoading(false);
  };
  return (
    <View style={{ marginTop: 40, flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="40" color={"#E32636"} />
        </View>
      ) : (
        <View style={styles.mainCont}>
          <View
            style={{
              width: "100%",
            }}
          >
            <Header title={productData[0]?.strMeal} />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={styles.productImage}
                source={{
                  uri: productData[0]?.strMealThumb,
                }}
              />
            </View>

            <View
              style={{
                padding: 10,
                marginTop: 15,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "#C0C0C0",
              }}
            >
              <WebView
                source={{ uri: productData[0]?.strYoutube }}
                style={{
                  width: "100%",
                  height: 400,
                }}
              />
            </View>

            <View style={styles.detailsCont}>
              <FoodDetails title={"Food Name"} desc={productData[0]?.strMeal} />
              <FoodDetails
                title={"Category"}
                desc={productData[0]?.strCategory}
              />
              <FoodDetails title={"Area"} desc={productData[0]?.strArea} />
              <FoodDetails title={"Tags"} desc={productData[0]?.strTags} />
              {/* <FoodDetails
                title={"Instructions"}
                desc={productData[0]?.strInstructions}
              /> */}
            </View>
          </ScrollView>
        </View>
      )}
      <Bottom />
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  productImage: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  mainCont: {
    alignItems: "center",
    flex: 1,
  },
  detailsCont: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
  },
});
