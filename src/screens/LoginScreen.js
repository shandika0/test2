import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../components/assetsImage/logo.png")}
        />
        <TextInput
          style={styles.inputBox1}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Username.."
          placeholderTextColor="grey"
          onChangeText={(username) => this.setState({ username: username })}
        />
        <TextInput
          style={styles.inputBox1}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password.."
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Home", this.state)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signup}>Don't have an account yet?</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp", this.state)}
        >
          <Text style={styles.signUpButton}>Sign Up </Text>
        </TouchableOpacity>
        {/* <Button
          title="Login"
          // onPress={() => this.props.navigation.navigate("Home", this.state)}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    marginVertical: 20,
    color: "#21B68B",
    fontSize: 30,
  },
  inputBox1: {
    width: 200,
    backgroundColor: "rgb(227, 220, 220)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "grey",
    marginVertical: 10,
  },
  button: {
    width: 100,
    backgroundColor: "#4194fa",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  signup: {
    // marginVertical: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 15,
    color: "grey",
  },
  signUpButton: {
    color: "#123e75",
    flexDirection: "row",
  },
  logo: {
    width: 350,
    height: 100,
    resizeMode: "stretch",
  },
});
