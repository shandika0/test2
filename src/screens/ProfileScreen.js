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
          icon="menu"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
          {...this.props}
        />
        <View style={styles.container}>
          <Image
            source={require("../components/assetsImage/logo.jpg")}
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
          />
          <Button title="LogOut">Log Out</Button>
        </View>
        <BottomTab {...this.props} />
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
  },
});
