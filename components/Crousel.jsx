import { StyleSheet, View, } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Crousel = () => {
  const images = [
    "https://img.freepik.com/free-photo/melted-chocolate-confectioner-with-whisk_1157-47278.jpg?w=996&t=st=1703170623~exp=1703171223~hmac=92647856a8e6a5e07197ea768921be60d0f363ea28051b378e4addfe1cf156e8",
    "https://img.freepik.com/free-photo/woman-chef-cooking-vegetables-pan_1303-22287.jpg?w=996&t=st=1703170230~exp=1703170830~hmac=2b1e4e9d2bb8ef94aad92d1027d62916cca41212994ba7b7e1bc29373c8722b9",
    "https://img.freepik.com/free-photo/delicious-food-stove_23-2150857886.jpg?t=st=1703170116~exp=1703173716~hmac=1c5d250e357509276086a0718294fbadf34527e9cd02e73b8ca2c06611bf879c&w=996",
    "https://img.freepik.com/free-photo/male-chef-kitchen-cooking-dish-frying-pan_23-2149646222.jpg?w=996&t=st=1703170261~exp=1703170861~hmac=3cf7fb7fc0d030a72fd4fa5b2e1a9bc344f36b4d5c5a0ca8590d0cfa53505727",
    "https://img.freepik.com/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20776.jpg?w=996&t=st=1703170379~exp=1703170979~hmac=07213739090e6fb529fc64d0e2ae686c18e40fc9c1d6c09dbcbb8bb8d139e675",

  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay={true}
        circleLoop
        dorColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Crousel;

const styles = StyleSheet.create({});
