import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B7F4FF",
      }}
    >
      <MaterialCommunityIcons name="menu" size={24} color="black" />{" "}
    </View>
  );
}

export default HomeScreen;
