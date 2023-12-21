import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Bottom = () => {
  const Navigation = useNavigation();
  const Route = useRoute();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        alignItems: "center",
        height: 50,
      }}
    >
      <TouchableOpacity
        style={styles.wrapCont}
        onPress={() => Navigation.navigate("Home")}
      >
        {Route.name == "Home" ? (
          <Entypo name="home" size={30} color="gray" />
        ) : (
          <AntDesign name="home" size={30} color="black" />
        )}
        <Text style={styles.txtIcon}> Home </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapCont}
        onPress={() => Navigation.navigate("Veg")}
      >
        {Route.name == "Veg" ? (
          <MaterialCommunityIcons name="food-apple" size={30} color="gray" />
        ) : (
          <MaterialCommunityIcons
            name="food-apple-outline"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.txtIcon}> Veg </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wrapCont}
        onPress={() => Navigation.navigate("Chicken")}
      >
        {Route.name == "Chicken" ? (
          <MaterialCommunityIcons
            name="food-drumstick"
            size={30}
            color="gray"
          />
        ) : (
          <MaterialCommunityIcons
            name="food-drumstick-outline"
            size={30}
            color="black"
          />
        )}
        <Text style={styles.txtIcon}> Chicken </Text>
      </TouchableOpacity>

      <View style={styles.wrapCont}>
        {Route.name == "About" ? (
          <Ionicons name="information-circle-sharp" size={30} color="gray" />
        ) : (
          <Ionicons name="information-circle-outline" size={30} color="black" />
        )}
        <Text style={styles.txtIcon}> Info </Text>
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  wrapCont: {
    alignItems: "center",
  },
  txtIcon: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
