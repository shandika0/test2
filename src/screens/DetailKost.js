import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import HeaderIcon from "../components/HeaderIcon";

export default class DetailKost extends Component {
  render() {
    return (
      <>
        <HeaderIcon
          title="Detail Kost"
          icon="arrow-back"
          onPress={() => this.props.navigation.navigate("ListKost", this.state)}
        />
        <Image
          style={{ width: "100%", height: 250, resizeMode: "stretch" }}
          source={require("../components/assetsImage/kos4.jpg")}
        ></Image>
        <View style={styles.text}>
          <Text>nama kost</Text>
          <Text>alamat kost</Text>
          <Text>nama pemilik kost</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../components/assetsImage/pepetaan.jpg")}
          ></Image>
          <View style={styles.button}>
            <Button title="book"></Button>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  image: {
    flexDirection: "column",
    width: 200,
    height: 200,
    marginTop: 20,
    alignItems: "center",
    alignContent: "center",
    resizeMode: "stretch",
  },
  button: {
    marginTop: 20,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
