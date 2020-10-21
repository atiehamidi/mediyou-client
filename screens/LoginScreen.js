import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
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
        colors={["rgba(255, 255, 255, 0.5)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 400,
        }}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
      >
        <Text
          style={{
            backgroundColor: "transparent",
            fontSize: 15,
            color: "#fff",
          }}
        >
          Sign in with Facebook
        </Text>
      </LinearGradient>
    </View>
  );
}
