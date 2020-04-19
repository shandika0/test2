import React, { Component } from "react";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  View,
  Right,
  Subtitle,
} from "native-base";
import { Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import { Title } from "react-native-paper";

export default class ListKostScreen extends Component {
  render() {
    return (
      <>
        <HeaderIcon
          title="List"
          icon="arrow-back"
          onPress={() => this.props.navigation.navigate("Home", this.state)}
        />
        <Card>
          <CardItem
            button
            onPress={() =>
              this.props.navigation.navigate("DetailKost", this.state)
            }
          >
            <Left>
              <Thumbnail
                source={require("../components/assetsImage/kos4.jpg")}
                style={{
                  width: 100,
                  height: 70,
                  borderRadius: 15,
                  marginRight: 5,
                }}
              />
              <View style={{ alignItems: "flex-start", top: -10 }}>
                <Title>nama</Title>
                <Text>alamat</Text>
              </View>
            </Left>
            <Right>
              <View style={{ alignItems: "flex-end", top: -10 }}>
                <Text>Harga</Text>
              </View>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem button>
            <Left>
              <Thumbnail
                source={require("../components/assetsImage/kos4.jpg")}
                style={{
                  width: 100,
                  height: 70,
                  borderRadius: 15,
                  marginRight: 5,
                }}
              />
              <View style={{ alignItems: "flex-start", top: -10 }}>
                <Title>nama</Title>
                <Text>alamat</Text>
              </View>
            </Left>
            <Right>
              <View style={{ alignItems: "flex-end", top: -10 }}>
                <Text>Harga</Text>
              </View>
            </Right>
          </CardItem>
        </Card>
      </>
    );
  }
}
