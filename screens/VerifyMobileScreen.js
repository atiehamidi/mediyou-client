import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const styles = StyleSheet.create({
  root: { padding: 20, minHeight: 300 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 50,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginBottom: 10,
  },
});
const CELL_COUNT = 4;

export default function VerifyMobileScreen() {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
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
        VERYFICATION
      </Text>
      <Text style={{ marginBottom: 45, color: "#ACACAC" }}>
        Enter yout OTP code here
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
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
        <Button
          title="Verify Now"
          color="#fff"
          marginTop="30"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </LinearGradient>
      <Button style={{ padding: 5 }} title="Change number" />
      <Button style={{ padding: 5 }} title="Resend OTP" />
    </View>
  );
}
