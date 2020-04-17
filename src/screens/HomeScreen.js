import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import BottomTab from "../components/BottomTab";
import Carousel from "../components/Carousel";
import ButtonPeople from "../components/ButtonPeople";

export default class HomeScreen extends Component {
  render() {
    const { username, password } = this.props.route.params;
    return (
      <>
        <HeaderIcon
          title="Ternak Kost"
          icon="menu"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
          {...this.props}
        />

        <View style={styles.container}>
          <Carousel />
          {/* <ButtonPeople /> */}
        </View>
        <View style={styles.button}>
          <Text>Kategori</Text>
          <Button style={styles.button} title="Kost Pria"></Button>
        </View>

        <BottomTab />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
