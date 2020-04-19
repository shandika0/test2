import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import BottomTab from "../components/BottomTab";
import Carousel from "../components/Carousel";
import BottomTab2 from "../components/BottomTab2";
import logo from "../components/assetsImage/logo.png";

export default class HomeScreen extends Component {
  render() {
    const { username, password } = this.props.route.params;
    return (
      <>
        <HeaderIcon
          title="Ternak Kost"
          image={logo}
          // icon="menu"
          // onPress={() => {
          //   this.props.navigation.openDrawer();
          // }}
          // {...this.props}
        />

        <View style={styles.container}>
          <Carousel />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Pilih Kategory</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() =>
              this.props.navigation.navigate("ListKost", this.state)
            }
          >
            <Text style={styles.buttonText}>Kost Putra</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("ListKost", this.state)
            }
            style={styles.button2}
          >
            <Text style={styles.buttonText}>Kost Putri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() =>
              this.props.navigation.navigate("ListKost", this.state)
            }
          >
            <Text style={styles.buttonText}>Kost Campur</Text>
          </TouchableOpacity>
        </View>

        <BottomTab {...this.props} />
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
    marginTop: 60,
    marginBottom: 80,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  category: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 20,
  },
  button2: {
    width: 85,
    height: 35,
    backgroundColor: "transparent",
    borderColor: "#4194fa",
    borderRadius: 7,
    borderWidth: 2,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 12,
  },
});
