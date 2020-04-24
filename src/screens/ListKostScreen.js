import React, { Component } from "react";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  View,
  Right,
  Content,
  Button,
  Image,
} from "native-base";
import { Text, StyleSheet } from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import { Title } from "react-native-paper";
import { ScrollView, FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default class ListKostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      isLoading: true,
      mybooking: undefined,
    };
  }

  render() {
    return (
      <>
        <HeaderIcon
          title="List"
          icon="arrow-back"
          onPress={() => this.props.navigation.navigate("Home", this.state)}
        />
            <ScrollView>
            {/* <View style={{ backgroundColor: 'white', height: 190 }}>
                            <View elevation={10} style={{ marginHorizontal: 20, backgroundColor: 'white', height: 150, marginTop: 20, borderRadius: 10, flexDirection: 'row' }}>
                                <Image source={{ uri: `https://mamikos.herokuapp.com/static/` }} style={{ width: "100%", height: '100%', resizeMode: "cover", flex: 1, borderRadius: 10 }} />
                                <View style={{ backgroundColor: 'white', flex: 2.2, borderRadius: 10, flexDirection: 'column' }}>
                                    <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 10 }}>
                                        <Text ellipsizeMode='tail' numberOfLines={1} style={{ marginTop: 20, marginLeft: 10, fontSize: 14 }}>

                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'column' }}>
                                            <Text style={{ marginTop: 7, marginLeft: 10, fontSize: 13 }}>
                                                Booking
                                            </Text>
                                            <Text style={{marginTop: 0, marginLeft: 10, fontSize: 13 }}>

                                            </Text>
                                        </View>
                                        <View style={{ backgroundColor: 'white', flex: 1.3, flexDirection: 'column' }}>
                                            <Text style={{marginTop: 7, marginLeft: 10, fontSize: 13 }}>
                                                Durasi Sewa
                                        </Text>
                                            <Text style={{marginTop: 0, marginLeft: 10, fontSize: 13 }}>
                                                1 bulan
                                        </Text>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 10 }}>
                                        <Button style={{ borderRadius: 10, height: 30, width: 160, marginRight: 5, marginTop: 10, marginLeft: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#0baa56' }}>
                                            <Text style={{ color: '#0baa56', fontSize: 14, justifyContent: 'center', textAlign: 'center', alignItems: 'center' }} uppercase={false}>
                                            </Text>
                                        </Button>
                                    </View>
                          button
                          onPress={() =>
                          this.props.navigation.navigate("DetailKost", this.state)
                          }
                                </View>
                            </View>
                        </View>   

                        <View style={{flexDirection: 'row', marginTop: 5}}>
                                            <Text style={{color: '#4A92E6', marginLeft: 25}}>
                                                {item.gender}
                                            </Text>
                                            <Text style={{color: 'gray', marginLeft: 10}}>
                                            {'\u2022'}
                                            </Text>
                                            <Text style={{color: '#1BAA56', marginLeft: 10}}>
                                                Ada {item.availablerooms} kamar
                                            </Text>
                                            <Text style={{color: 'gray', marginLeft: 10}}>
                                            {'\u2022'}
                                            </Text>
                                            <Text style={{color: '#3B445B', marginLeft: 10}}>
                                                {item.city}
                                            </Text>
                                        </View>
                        
                        */}
            <Text style={{
              fontSize: 20,
              fontWeight: '700',
              paddingHorizontal: 15,
              marginTop: 10,
              marginBottom: 10,
            }}>
              Select your most desirable room
          </Text>
          <View style={{ backgroundColor: '#A1F8F2', height: 410 }}>
                <TouchableOpacity
                button
                onPress={() =>
                this.props.navigation.navigate("DetailKost", this.state)
                }
                >
                <View 
                elevation={20} style={{ marginHorizontal: 20, backgroundColor: 'white', height: 370, marginTop: 20, borderRadius: 10, flexDirection: 'row', }}>                  
                  <Left>
                    <Thumbnail
                      source={require("../components/assetsImage/kos4.jpg")}
                      style={{ width: 353, 
                              height: 500, 
                              resizeMode: "cover", 
                              flex: 1, 
                              borderTopLeftRadius: 10, 
                              borderTopRightRadius: 10,  
                              borderBottomRightRadius: 0,
                              borderBottomLeftRadius: 0,  
                            }}
                    />
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                                            <Text style={{color: '#4A92E6', marginLeft: 25}}>
                                                Perempuan
                                            </Text>
                                            <Text style={{color: 'gray', marginLeft: 10}}>
                                            {'\u2022'}
                                            </Text>
                                            <Text style={{color: '#1BAA56', marginLeft: 10}}>
                                                Ada 20 kamar
                                            </Text>
                                            <Text style={{color: 'gray', marginLeft: 10}}>
                                            {'\u2022'}
                                            </Text>
                                            <Text style={{color: '#3B445B', marginLeft: 10}}>
                                                Jakarta
                                            </Text>
                                        </View>
                    
                    <View style={{ alignItems: "flex-start",marginLeft: 10, top: -4 }}>
                      <Title>Kos Kakek </Title>
                    </View>
                  </Left>
                  <Right>
                    <View style={{ alignItems: "flex-end", top: 165, marginRight: 10, }}>
                      <Text>Rp. 850.000</Text>
                    </View>
                  </Right>
              </View>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#A1F8F2', height: 410 }}>
                <TouchableOpacity
                button
                onPress={() =>
                this.props.navigation.navigate("DetailKost", this.state)
                }
                >
                <View 
                elevation={20} style={{ marginHorizontal: 20, backgroundColor: 'white', height: 370, marginTop: 20, borderRadius: 10, flexDirection: 'row', }}>                  
                  <Left>
                    <Thumbnail
                      source={require("../components/assetsImage/kos4.jpg")}
                      style={{ width: 353, 
                              height: 500, 
                              resizeMode: "cover", 
                              flex: 1, 
                              borderTopLeftRadius: 10, 
                              borderTopRightRadius: 10,  
                              borderBottomRightRadius: 0,
                              borderBottomLeftRadius: 0,  
                            }}
                    />
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                                            <Text style={{color: '#4A92E6', marginLeft: 25}}>
                                                Perempuan
                                            </Text>
                                            <Text style={{color: 'gray', marginLeft: 10}}>
                                            {'\u2022'}
                                            </Text>
                                            <Text style={{color: '#1BAA56', marginLeft: 10}}>
                                                Ada 20 kamar
                                            </Text>
                                            <Text style={{color: 'gray', marginLeft: 10}}>
                                            {'\u2022'}
                                            </Text>
                                            <Text style={{color: '#3B445B', marginLeft: 10}}>
                                                Jakarta
                                            </Text>
                                        </View>
                    
                    <View style={{ alignItems: "flex-start",marginLeft: 10, top: -4 }}>
                      <Title>Kos Kakek Legend</Title>
                    </View>
                  </Left>
                  <Right>
                    <View style={{ alignItems: "flex-end", top: 165, marginRight: 10, }}>
                      <Text>Rp. 850.000</Text>
                    </View>
                  </Right>
              </View>
              </TouchableOpacity>
            </View>
        </ScrollView>
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
    marginBottom: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textsemibold: {
    fontFamily: 'Lato-Semibold'
  },

  textbold: {
    fontFamily: 'Lato-Bold'
  },

  textabu: {
    fontFamily: 'Lato-Regular',
    color: '#727272'
  },

  textcheckboxijo: {
    fontFamily: 'Lato-Regular',
    color: '#0baa56',
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline'
  },

  textcheckbox: {
    fontFamily: 'Lato-Regular',
    justifyContent: 'center',
    alignItems: 'center'
  },
})