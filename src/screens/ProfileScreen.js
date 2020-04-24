import React, { Component, Fragment } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import BottomTab from "../components/BottomTab";

export default class ProfileScreen extends Component {
  render() {
    return (
      <Fragment>
        <HeaderIcon
          title="Profile"
          // icon="menu"
          // rightElement={{
          //   menu: {
          //     icon: "more-vert",
          //     labels: ["item 1", "item 2"],
          //   },
          // }}
          // onPress={() => {
          //   this.props.navigation.openDrawer();
          // }}
          // {...this.props}
        />
        <View style={styles.container}>
          <Image
            source={require("../components/assetsImage/logo.jpg")}
            style={{
              marginTop: 30,
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
            }}
          />

          <Text style={{ marginTop: 20 }}>Your Username</Text>
          <Text style={{ marginTop: 20 }}>Email</Text>
          <Text style={{ marginTop: 20 }}>Phone Number</Text>
          <Text style={{ marginTop: 20 }}>History Booking</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Log Out"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
        <BottomTab {...this.props} />
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 200,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
  },
  icon1: {
    flexDirection: "column-reverse",
    backgroundColor: "transparent",
    color: "black",
    fontSize: 24,
    opacity: 0.8,
    width: 24,
    height: 24,
  },
});
