import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function MapScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B7F4FF",
      }}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["#00AEEF", "#0080B0"]}
        style={{
          width: 300,
          padding: 10,
          alignItems: "center",
          borderRadius: 30,
        }}
      >
        <Button title="Confirm" color="#fff" />
      </LinearGradient>
    </View>
  );
}
