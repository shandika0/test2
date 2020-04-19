import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
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
        <View>
          <Image
            style={{ width: 100, height: 100, resizeMode: "stretch" }}
            source={require("../components/assetsImage/pepetaan.jpg")}
          ></Image>
        </View>
        <View style={styles.text}>
          <Text>nama kost</Text>
          <Text>alamat kost</Text>
          <Text>nama pemilik kost</Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
