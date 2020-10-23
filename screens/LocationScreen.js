import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function MobileLoginScreen({ navigation }) {
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
        // Background Linear Gradient
        colors={["rgba(255, 255, 255, 0.8)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 400,
        }}
      />
      <Image
        style={{ width: 110, height: 110, marginBottom: 50 }}
        source={require("../assets/logo-mediyou.png")}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#005270" }}>
        LOCATION
      </Text>
      <Text style={{ marginBottom: 45, color: "#ACACAC" }}>
        Kindly enter your location
      </Text>
      <TextInput
        style={{
          backgroundColor: "#FFF",
          width: 300,
          padding: 15,
          alignItems: "center",
          marginBottom: 10,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 30,
        }}
        placeholder="Type Your location"
      />
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
