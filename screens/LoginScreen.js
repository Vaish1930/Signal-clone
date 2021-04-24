import React, { useState } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { useEffect } from "react";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "data:image/png;base64,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",
        }}
        style={{ width: 200, height: 200, margin: 20 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title="login" />
      <Button
        onPress={() => navigation.navigate("RegisterScreen")}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
    overflow: "hidden",
  },
});
