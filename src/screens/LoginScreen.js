import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export default class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={({ width: 9000 }, { height: 30 })}
          underlineColorAndroid="blue"
          placeholder="Username.."
          onChangeText={(username) => this.setState({ username: username })}
        />
        <TextInput
          style={({ width: 9000 }, { height: 30 })}
          underlineColorAndroid="blue"
          placeholder="Password.."
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Home", this.state)}
        />
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
    marginBottom: 200,
  },
  logo: {
    width: 200,
    height: 100,
  },
});
