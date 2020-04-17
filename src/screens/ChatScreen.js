import React, { Component, Fragment } from "react";
import { View, StyleSheet, Text } from "react-native";
import HeaderIcon from "../components/HeaderIcon";

export default class ChatScreen extends Component {
  render() {
    return (
      <Fragment>
        <HeaderIcon
          title="Chat"
          icon="menu"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
          {...this.props}
        />
        <View style={styles.container}>
          <Text>##### This Page Still Under Construction #####</Text>
        </View>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
