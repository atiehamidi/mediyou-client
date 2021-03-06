import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }) {
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
        WELCOME
      </Text>
      <Text style={{ marginBottom: 45, color: "#ACACAC" }}>
        sign to continue
      </Text>
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
        <Button
          title="Sign in with Mobile number"
          color="#fff"
          onPress={() => navigation.navigate("MobileLogin")}
        />
      </LinearGradient>
      <Text style={{ margin: 8, color: "#ACACAC" }}>OR</Text>
      <LinearGradient
        // Button Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={{
          width: 300,
          padding: 10,
          alignItems: "center",
          borderRadius: 30,
        }}
      >
        <Button
          title="Sign in with facebook"
          color="#fff"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </LinearGradient>
      <Button style={{ padding: 5 }} title="Trouble signing in?" />
    </View>
  );
}
